// Admin Login & Management Extension
// Adds admin login modal and management UI with Premium Design

document.addEventListener('DOMContentLoaded', () => {
    // ===== ADMIN LOGIN MODAL =====
    // Enhanced with Premium UI
    const createAdminLoginModal = () => {
        if (document.getElementById('admin-login-modal')) return;

        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.id = 'admin-login-modal';
        modal.style.zIndex = '9999'; // Ensure it's on top of everything

        modal.innerHTML = `
            <div class="modal-content glass" style="width: 90%; max-width: 420px; text-align: center; border: 1px solid rgba(255,255,255,0.4);">
                <span class="close-modal" onclick="this.closest('.modal').remove()" style="top: 20px; right: 20px;">&times;</span>
                
                <div style="font-size: 3rem; margin-bottom: 5px;">🛡️</div>
                <h2 style="color: var(--primary-dark); margin-bottom: 0.5rem; font-family: 'Playfair Display', serif;">Admin Portal</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">Secure access for staff members only</p>
                
                <form id="admin-login-form" style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="input-group">
                        <input type="text" id="admin-username" placeholder="Username" class="form-input" 
                            style="margin: 0; background: rgba(255,255,255,0.9); border-radius: 12px;" required autofocus>
                    </div>
                    <div class="input-group">
                        <input type="password" id="admin-password" placeholder="Password" class="form-input" 
                            style="margin: 0; background: rgba(255,255,255,0.9); border-radius: 12px;" required>
                    </div>
                    
                    <div id="login-feedback" style="font-size: 0.85rem; height: 20px; color: #dc3545;"></div>

                    <button type="submit" class="btn btn-premium" style="width: 100%; margin-top: 0.5rem; box-shadow: 0 10px 20px rgba(188, 108, 37, 0.2);">
                        Authenticate
                    </button>
                </form>

                <div style="margin-top: 25px; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 15px;">
                    <p style="font-size: 0.75rem; color: #aaa;">
                        System Protected • <span id="auto-fill-demo" style="cursor: pointer; text-decoration: underline dotted; color: var(--primary);">Trouble logging in?</span>
                    </p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        requestAnimationFrame(() => { modal.style.display = 'flex'; });

        // Auto-fill feature for demo user friendliness
        document.getElementById('auto-fill-demo').onclick = () => {
            document.getElementById('admin-username').value = 'original';
            document.getElementById('admin-password').value = 'admin123';
            const feedback = document.getElementById('login-feedback');
            feedback.style.color = 'var(--primary)';
            feedback.innerText = "Credentials applied. Ready to login.";
        };

        const form = document.getElementById('admin-login-form');
        form.onsubmit = (e) => {
            e.preventDefault();
            const username = document.getElementById('admin-username').value.trim();
            const password = document.getElementById('admin-password').value;
            const btn = form.querySelector('button[type="submit"]');
            const feedback = document.getElementById('login-feedback');

            // Reset feedback
            feedback.innerText = '';

            // Loading state
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = 'Verifying...';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                try {
                    const result = window.adminLogin(username, password);

                    if (result.success) {
                        btn.innerHTML = '✅ Success';
                        btn.style.background = '#28a745';
                        setTimeout(() => {
                            modal.remove();
                            location.reload();
                        }, 800);
                    } else {
                        throw new Error(result.message);
                    }
                } catch (err) {
                    btn.innerHTML = originalBtnText;
                    btn.style.opacity = '1';
                    feedback.style.color = '#dc3545';
                    feedback.innerText = '⛔ ' + err.message;
                    document.getElementById('admin-password').value = '';
                }
            }, 600);
        };

        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    };

    // Use Event Delegation for robust button handling
    document.body.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'admin-login-header' || e.target.id === 'admin-login-footer')) {
            e.preventDefault();
            createAdminLoginModal();
        }
    });

    // ===== ADMIN MANAGEMENT UI =====
    // Updated to use new Session Validation check
    const checkAdminAccess = () => {
        if (window.validateAdminSession && window.validateAdminSession()) {
            // Add Admin Management button to header if exists
            const headerActions = document.querySelector('.header-actions');

            // Only add if not already present
            if (headerActions && !document.getElementById('admin-mgmt-btn')) {
                // If main admin, show management button
                const role = localStorage.getItem('adminRole');

                // Add Logout Button (if not exists)
                if (!document.getElementById('logout-btn')) {
                    const logoutBtn = document.createElement('button');
                    logoutBtn.id = 'logout-btn';
                    logoutBtn.className = 'btn';
                    logoutBtn.style.cssText = 'padding: 0.6rem 1.2rem; background: #dc3545; color: white; border: none; font-size: 0.9rem; margin-left: 5px;';
                    logoutBtn.innerHTML = 'Logout';
                    logoutBtn.onclick = () => {
                        window.adminLogout();
                        location.reload();
                    };
                    headerActions.appendChild(logoutBtn);
                }

                // Remove the "Admin" Login button if logged in
                const loginBtn = document.getElementById('admin-login-header');
                if (loginBtn) loginBtn.style.display = 'none';

                if (role === 'main') {
                    const mgmtBtn = document.createElement('button');
                    mgmtBtn.id = 'admin-mgmt-btn';
                    mgmtBtn.className = 'btn';
                    mgmtBtn.style.cssText = 'padding: 0.6rem 1.2rem; margin-right: 5px; background: var(--accent); color: white; border: none; font-size: 0.9rem;';
                    mgmtBtn.innerHTML = '👥 Admins';
                    mgmtBtn.onclick = showAdminManagement;

                    const logoutBtn = document.getElementById('logout-btn');
                    headerActions.insertBefore(mgmtBtn, logoutBtn);
                }
            }
        }
    };

    // Run check slightly after load to ensure backend is ready
    setTimeout(checkAdminAccess, 500);

    // Admin Management Modal (Visual Update)
    window.showAdminManagement = () => {
        if (!window.validateAdminSession()) {
            alert("Session expired. Please login again.");
            location.reload();
            return;
        }

        const admins = window.getAllAdmins();

        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content glass" style="max-width: 750px; max-height: 85vh; overflow-y: auto; text-align: left;">
                <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                <h2 style="color: var(--primary-dark); margin-bottom: 1.5rem; font-family: 'Playfair Display'; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                    👥 Admin Management
                </h2>
                
                <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px; color: var(--primary-dark); font-size: 1.1rem;">📱 Social Media Hub</h3>
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:10px;">
                        ${['facebook', 'instagram', 'tiktok', 'whatsapp'].map(platform => {
            const social = window.getSocialMedia()[platform] || { label: platform, enabled: false };
            return `
                                <div style="background: white; padding: 12px; border-radius: 12px; border: 1px solid ${social.enabled ? '#28a745' : '#eee'}; transition: 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 5px;">
                                        <strong>${social.label || platform}</strong>
                                        <span style="font-size:1.2rem;">${social.enabled ? '✅' : '⚪'}</span>
                                    </div>
                                    ${social.enabled ? `
                                        <p style="font-size:0.75rem; color: #666; margin-bottom:8px; overflow:hidden; text-overflow:ellipsis;">${social.username || 'Linked'}</p>
                                        <button onclick="disconnectSocialPlatform('${platform}')" class="btn" style="width:100%; padding:4px; background:#fff; color:#dc3545; border: 1px solid #dc3545; font-size:0.75rem;">Disconnect</button>
                                    ` : `
                                        <button onclick="connectSocialPlatform('${platform}')" class="btn" style="width:100%; padding:4px; background:var(--primary); color:white; font-size:0.75rem;">Connect</button>
                                    `}
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.6); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px; color: var(--primary-dark); font-size: 1.1rem;">Current Admins</h3>
                    <div id="admin-list">
                        ${admins.map(admin => `
                            <div style="background: white; padding: 12px 18px; border-radius: 12px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                                <div>
                                    <strong style="font-size: 1rem; color: var(--text-main);">${admin.username}</strong>
                                    <span style="background: ${admin.role === 'main' ? 'var(--primary)' : '#eee'}; color: ${admin.role === 'main' ? 'white' : '#666'}; padding: 2px 8px; border-radius: 10px; font-size: 0.7rem; margin-left: 8px; font-weight: 600;">
                                        ${admin.role === 'main' ? 'OWNER' : 'STAFF'}
                                    </span>
                                    <p style="font-size: 0.75rem; color: var(--text-muted); margin: 3px 0 0;">Joined: ${new Date(admin.createdAt).toLocaleDateString()}</p>
                                </div>
                                ${admin.role !== 'main' ? `
                                    <div style="display: flex; gap: 8px;">
                                        <button onclick="changeAdminPass('${admin.username}')" class="btn" style="padding: 6px 12px; font-size: 0.8rem; background: var(--accent); color: white;">🔑</button>
                                        <button onclick="confirmRemoveAdmin('${admin.username}')" class="btn" style="padding: 6px 12px; font-size: 0.8rem; background: #dc3545; color: white;">🗑️</button>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${admins.filter(a => a.role === 'lesser').length < 6 ? `
                    <div style="background: linear-gradient(to right, #e8f5e9, #fff); padding: 20px; border-radius: 15px; border: 1px dashed #2e7d32;">
                        <h3 style="margin-bottom: 10px; color: #2e7d32; font-size: 1rem;">➕ Register New Staff</h3>
                        <form id="add-admin-form" style="display: flex; gap: 10px; align-items: center;">
                            <input type="text" id="new-admin-username" placeholder="Username" class="form-input" style="margin: 0; flex: 1; padding: 10px;" required>
                            <input type="password" id="new-admin-password" placeholder="Password" class="form-input" style="margin: 0; flex: 1; padding: 10px;" required>
                            <button type="submit" class="btn btn-primary" style="padding: 10px 20px;">Add</button>
                        </form>
                    </div>
                ` : '<p style="color: var(--text-muted); text-align: center;">Maximum of 6 staff members reached</p>'}
            </div>
        `;

        document.body.appendChild(modal);

        const addForm = document.getElementById('add-admin-form');
        if (addForm) {
            addForm.onsubmit = (e) => {
                e.preventDefault();
                const username = document.getElementById('new-admin-username').value.trim();
                const password = document.getElementById('new-admin-password').value;
                const result = window.addAdmin(username, password);
                if (result.success) {
                    modal.remove();
                    showAdminManagement();
                } else {
                    alert(result.message);
                }
            };
        }
    };

    window.confirmRemoveAdmin = (username) => {
        if (confirm(`Remove staff member "${username}"?`)) {
            const result = window.removeAdmin(username);
            if (result.success) {
                document.querySelector('.modal').remove();
                showAdminManagement();
            } else {
                alert(result.message);
            }
        }
    };

    window.changeAdminPass = (username) => {
        const newPass = prompt(`Enter new password for ${username}:`);
        if (newPass && newPass.length >= 6) {
            const result = window.changeAdminPassword(username, newPass);
            alert(result.message);
        } else if (newPass) {
            alert('Password must be at least 6 characters');
        }
    };

    window.connectSocialPlatform = (platform) => {
        const username = prompt(`Enter ${platform} handle/link:`);
        if (username) {
            window.adminSocialLogin(platform, username, 'dummy');
            document.querySelector('.modal').remove();
            showAdminManagement();
        }
    };

    window.disconnectSocialPlatform = (platform) => {
        if (confirm(`Disconnect ${platform}?`)) {
            window.disconnectSocial(platform);
            document.querySelector('.modal').remove();
            showAdminManagement();
        }
    };
});
