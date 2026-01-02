// Admin Management System for Pawsome Puppies
// Backend Logic: Session Management, Authentication, and Data Persistence

// ===== AUTHENTICATION BACKEND =====

// Initialize admin data structure
const initializeAdminSystem = () => {
    try {
        const existingAdmins = JSON.parse(localStorage.getItem('adminAccounts')) || {};

        // Self-Healing: Ensure main admin always exists without wiping others
        if (!existingAdmins['original'] || existingAdmins['original'].role !== 'main') {
            console.log('Backend: Repairing default admin account');
            existingAdmins['original'] = {
                username: 'original',
                password: 'admin123', // Default credentials
                role: 'main',
                createdAt: new Date().toISOString()
            };
            // Only update if we had to fix something
            localStorage.setItem('adminAccounts', JSON.stringify(existingAdmins));
        }
        return existingAdmins;
    } catch (e) {
        console.error('Backend Error: Corrupt admin data', e);
        // Recover from corruption
        const recoveryData = {
            'original': {
                username: 'original',
                password: 'admin123',
                role: 'main',
                createdAt: new Date().toISOString()
            }
        };
        localStorage.setItem('adminAccounts', JSON.stringify(recoveryData));
        return recoveryData;
    }
};

// Simple Token Generator (Mock Backend)
const generateToken = () => {
    return 'tk_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
};

// Admin Login Processing
window.adminLogin = (username, password) => {
    const admins = JSON.parse(localStorage.getItem('adminAccounts')) || {};
    const admin = admins[username];

    if (admin && admin.password === password) {
        // Create active session
        const sessionToken = generateToken();
        const sessionData = {
            token: sessionToken,
            username: username,
            role: admin.role,
            expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hour session
        };

        localStorage.setItem('adminSession', JSON.stringify(sessionData));

        // Legacy support (to ensure compatibility with older checks)
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('isCustomer', 'false');
        localStorage.setItem('currentAdminUsername', username);
        localStorage.setItem('adminRole', admin.role);

        return {
            success: true,
            role: admin.role,
            token: sessionToken,
            message: 'Login successful'
        };
    }

    return { success: false, message: 'Invalid username or password' };
};

// Session Validation (Middleware-like check)
window.validateAdminSession = () => {
    try {
        const sessionStr = localStorage.getItem('adminSession');
        if (!sessionStr) return false;

        const session = JSON.parse(sessionStr);

        if (!session || !session.expiry || session.expiry < Date.now()) {
            // Session expired or invalid
            window.adminLogout();
            return false;
        }
        return true;
    } catch (e) {
        console.error("Session Validation Error:", e);
        window.adminLogout();
        return false;
    }
};

// Logout
window.adminLogout = () => {
    localStorage.removeItem('adminSession');
    // Clear legacy flags
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('currentAdminUsername');
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminSelectedCustomer');
    return true;
};

// ===== DATA MANAGEMENT BACKEND =====

// Social Media Configuration
const initializeSocialMedia = () => {
    const defaultSocialMedia = {
        facebook: { enabled: false, link: '', label: 'Facebook' },
        whatsapp: { enabled: false, number: '', label: 'WhatsApp' },
        instagram: { enabled: false, username: '', label: 'Instagram' },
        tiktok: { enabled: false, username: '', label: 'TikTok' }
    };

    const existing = localStorage.getItem('socialMediaConfig');
    if (!existing) {
        localStorage.setItem('socialMediaConfig', JSON.stringify(defaultSocialMedia));
        return defaultSocialMedia;
    }
    return JSON.parse(existing);
};

// Discount System
const initializeDiscounts = () => {
    const existingDiscounts = localStorage.getItem('breedDiscounts');
    if (!existingDiscounts) {
        localStorage.setItem('breedDiscounts', JSON.stringify({}));
        return {};
    }
    return JSON.parse(existingDiscounts);
};

// Add new admin (main admin only)
window.addAdmin = (username, password) => {
    if (!window.validateAdminSession()) return { success: false, message: 'Session expired' };

    const currentRole = localStorage.getItem('adminRole');
    if (currentRole !== 'main') {
        return { success: false, message: 'Only the main admin can add admins' };
    }

    const admins = JSON.parse(localStorage.getItem('adminAccounts')) || {};
    const adminCount = Object.keys(admins).filter(k => admins[k].role === 'lesser').length;

    if (adminCount >= 6) {
        return { success: false, message: 'Maximum of 6 lesser admins reached' };
    }

    if (admins[username]) {
        return { success: false, message: 'Admin username already exists' };
    }

    admins[username] = {
        username: username,
        password: password,
        role: 'lesser',
        createdAt: new Date().toISOString(),
        createdBy: 'original'
    };

    localStorage.setItem('adminAccounts', JSON.stringify(admins));
    return { success: true, message: 'Admin added successfully' };
};

// Remove admin (main admin only)
window.removeAdmin = (username) => {
    if (!window.validateAdminSession()) return { success: false, message: 'Session expired' };

    const currentRole = localStorage.getItem('adminRole');
    if (currentRole !== 'main') {
        return { success: false, message: 'Only the main admin can remove admins' };
    }

    if (username === 'original') {
        return { success: false, message: 'Cannot remove the main admin' };
    }

    const admins = JSON.parse(localStorage.getItem('adminAccounts')) || {};

    if (!admins[username]) {
        return { success: false, message: 'Admin not found' };
    }

    delete admins[username];
    localStorage.setItem('adminAccounts', JSON.stringify(admins));

    return { success: true, message: 'Admin removed successfully' };
};

// Change admin password
window.changeAdminPassword = (username, newPassword) => {
    if (!window.validateAdminSession()) return { success: false, message: 'Session expired' };

    const currentRole = localStorage.getItem('adminRole');
    const currentUser = localStorage.getItem('currentAdminUsername');

    // Main admin can change any password, other admins can only change their own
    if (currentRole !== 'main' && currentUser !== username) {
        return { success: false, message: 'You can only change your own password' };
    }

    const admins = JSON.parse(localStorage.getItem('adminAccounts')) || {};

    if (!admins[username]) {
        return { success: false, message: 'Admin not found' };
    }

    admins[username].password = newPassword;
    localStorage.setItem('adminAccounts', JSON.stringify(admins));

    return { success: true, message: 'Password changed successfully' };
};

// Get all admins (for UI display)
window.getAllAdmins = () => {
    if (!window.validateAdminSession()) return [];

    const admins = JSON.parse(localStorage.getItem('adminAccounts')) || {};
    return Object.values(admins).map(admin => ({
        username: admin.username,
        role: admin.role,
        createdAt: admin.createdAt
    }));
};

// Social Media Functions
window.updateSocialMedia = (platform, data) => {
    if (!window.validateAdminSession()) return { success: false };

    const socialMedia = JSON.parse(localStorage.getItem('socialMediaConfig')) || {};
    socialMedia[platform] = { ...socialMedia[platform], ...data };
    localStorage.setItem('socialMediaConfig', JSON.stringify(socialMedia));
    return { success: true };
};

window.getSocialMedia = () => {
    // Public read access is okay, but sensitive config might need checks
    // For now, allow public read for frontend display
    return JSON.parse(localStorage.getItem('socialMediaConfig')) || {};
};

// Social Media Login Simulation
window.adminSocialLogin = (platform, username, password) => {
    if (!window.validateAdminSession()) return { success: false, message: 'Session required' };

    const config = window.getSocialMedia();
    if (!config[platform]) return { success: false, message: 'Platform not supported' };

    config[platform].enabled = true;
    config[platform].username = username;
    config[platform].connectedAt = new Date().toISOString();

    localStorage.setItem('socialMediaConfig', JSON.stringify(config));
    return { success: true, message: `Successfully connected to ${config[platform].label}` };
};

window.disconnectSocial = (platform) => {
    if (!window.validateAdminSession()) return { success: false };

    const config = window.getSocialMedia();
    if (config[platform]) {
        config[platform].enabled = false;
        config[platform].username = '';
        delete config[platform].connectedAt;
        localStorage.setItem('socialMediaConfig', JSON.stringify(config));
    }
    return { success: true };
};

// Discount Functions
window.setDiscount = (breedId, discountPercent, reason) => {
    if (!window.validateAdminSession()) return { success: false };

    const discounts = JSON.parse(localStorage.getItem('breedDiscounts')) || {};
    discounts[breedId] = {
        discount: discountPercent,
        reason: reason || 'Limited Time Offer',
        active: true,
        setAt: new Date().toISOString()
    };
    localStorage.setItem('breedDiscounts', JSON.stringify(discounts));
    return { success: true };
};

window.removeDiscount = (breedId) => {
    if (!window.validateAdminSession()) return { success: false };

    const discounts = JSON.parse(localStorage.getItem('breedDiscounts')) || {};
    delete discounts[breedId];
    localStorage.setItem('breedDiscounts', JSON.stringify(discounts));
    return { success: true };
};

window.getDiscount = (breedId) => {
    const discounts = JSON.parse(localStorage.getItem('breedDiscounts')) || {};
    return discounts[breedId] || null;
};

// Calculate discounted price
window.calculateDiscountedPrice = (originalPrice, breedId) => {
    const discount = window.getDiscount(breedId);
    if (!discount || !discount.active) {
        return { discounted: false, original: originalPrice };
    }

    // Extract numeric value from price string like "$1,200"
    const numericPrice = parseInt(originalPrice.replace(/[$,]/g, ''));
    if (isNaN(numericPrice)) return { discounted: false, original: originalPrice };

    const discountAmount = (numericPrice * discount.discount) / 100;
    const newPrice = numericPrice - discountAmount;

    return {
        discounted: true,
        original: originalPrice,
        new: `$${newPrice.toLocaleString()}`,
        discount: discount.discount,
        reason: discount.reason
    };
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Admin Backend System...");
    initializeAdminSystem();
    initializeSocialMedia();
    initializeDiscounts();
});
