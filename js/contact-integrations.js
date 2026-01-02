// Contact Page Integrations - Social Media, Forms, Payment, Chat
// This file extends app.js functionality for contact.html

document.addEventListener('DOMContentLoaded', () => {
    // Only run on contact page
    if (!window.location.pathname.includes('contact.html')) {
        return;
    }

    // ===== SOCIAL MEDIA LINKS DISPLAY =====
    const renderSocialMedia = () => {
        const container = document.getElementById('social-media-links');
        if (!container) return;

        const socialMedia = window.getSocialMedia ? window.getSocialMedia() : {};
        container.innerHTML = '';

        const icons = {
            facebook: '📘',
            whatsapp: '💬',
            instagram: '📷',
            tiktok: '🎵'
        };

        let hasAny = false;
        Object.keys(socialMedia).forEach(platform => {
            const config = socialMedia[platform];
            if (config && config.enabled) {
                hasAny = true;
                const link = document.createElement('a');
                link.href = '#';
                link.onclick = (e) => {
                    e.preventDefault();
                    let url = '';
                    if (platform === 'facebook') {
                        url = config.link || `https://facebook.com/${config.username || ''}`;
                    } else if (platform === 'whatsapp') {
                        url = `https://wa.me/${config.number.replace(/[^0-9]/g, '')}`;
                    } else if (platform === 'instagram') {
                        url = `https://instagram.com/${config.username}`;
                    } else if (platform === 'tiktok') {
                        url = `https://tiktok.com/@${config.username}`;
                    }
                    if (url) window.open(url, '_blank');
                };

                let contactInfo = '';
                if (platform === 'whatsapp') contactInfo = config.number;
                else if (platform === 'facebook') contactInfo = 'Visit Page';
                else contactInfo = `@${config.username || ''}`;

                link.innerHTML = `
                    <div class="icon">${icons[platform]}</div>
                    <div class="label">${config.label}</div>
                    <div class="contact-info">${contactInfo}</div>
                `;

                container.appendChild(link);
            }
        });

        if (!hasAny) {
            container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">No social media configured yet</p>';

            // If admin, show setup button
            if (localStorage.getItem('isAdmin') === 'true') {
                const setupBtn = document.createElement('button');
                setupBtn.className = 'btn btn-secondary';
                setupBtn.style.cssText = 'width: 100%; margin-top: 10px; padding: 10px;';
                setupBtn.textContent = '⚙️ Configure Social Media';
                setupBtn.onclick = () => showSocialMediaConfig();
                container.appendChild(setupBtn);
            }
        }
    };

    // ===== SOCIAL MEDIA CONFIGURATION (Admin only) =====
    window.showSocialMediaConfig = () => {
        const socialMedia = window.getSocialMedia();

        const fields = [
            { type: 'checkbox', id: 'fb-enabled', label: 'Enable Facebook', value: socialMedia.facebook.enabled ? 'checked' : '' },
            { type: 'text', id: 'fb-link', label: 'Facebook Page URL', value: socialMedia.facebook.link || '' },
            { type: 'checkbox', id: 'wa-enabled', label: 'Enable WhatsApp', value: socialMedia.whatsapp.enabled ? 'checked' : '' },
            { type: 'text', id: 'wa-number', label: 'WhatsApp Number (with country code)', value: socialMedia.whatsapp.number || '' },
            { type: 'checkbox', id: 'ig-enabled', label: 'Enable Instagram', value: socialMedia.instagram.enabled ? 'checked' : '' },
            { type: 'text', id: 'ig-username', label: 'Instagram Username', value: socialMedia.instagram.username || '' },
            { type: 'checkbox', id: 'tt-enabled', label: 'Enable TikTok', value: socialMedia.tiktok.enabled ? 'checked' : '' },
            { type: 'text', id: 'tt-username', label: 'TikTok Username', value: socialMedia.tiktok.username || '' }
        ];

        // Use existing modal if available, create custom otherwise
        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content glass" style="max-width: 500px;">
                <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                <h2 style="color: var(--primary-dark); margin-bottom: 1.5rem;">Configure Social Media</h2>
                <div id="social-config-form">
                    ${fields.map(f => {
            if (f.type === 'checkbox') {
                return `<div style="margin: 15px 0;">
                                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                    <input type="checkbox" id="${f.id}" ${f.value} style="width: 20px; height: 20px;">
                                    <span style="font-weight: 600;">${f.label}</span>
                                </label>
                            </div>`;
            } else {
                return `<div style="margin: 15px 0;">
                                <label style="display: block; font-weight: 600; margin-bottom: 5px;">${f.label}</label>
                                <input type="text" id="${f.id}" value="${f.value}" class="form-input" style="margin: 0;">
                            </div>`;
            }
        }).join('')}
                </div>
                <button class="btn btn-primary" id="save-social-config" style="width: 100%; margin-top: 1rem;">Save Configuration</button>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('save-social-config').onclick = () => {
            window.updateSocialMedia('facebook', {
                enabled: document.getElementById('fb-enabled').checked,
                link: document.getElementById('fb-link').value,
                label: 'Facebook'
            });
            window.updateSocialMedia('whatsapp', {
                enabled: document.getElementById('wa-enabled').checked,
                number: document.getElementById('wa-number').value,
                label: 'WhatsApp'
            });
            window.updateSocialMedia('instagram', {
                enabled: document.getElementById('ig-enabled').checked,
                username: document.getElementById('ig-username').value,
                label: 'Instagram'
            });
            window.updateSocialMedia('tiktok', {
                enabled: document.getElementById('tt-enabled').checked,
                username: document.getElementById('tt-username').value,
                label: 'TikTok'
            });

            alert('Social media configuration saved!');
            modal.remove();
            renderSocialMedia();
        };
    };

    // ===== CUSTOMER CONTACT FORM =====
    const contactForm = document.getElementById('customer-contact-form');
    if (contactForm) {
        // Pre-fill for logged-in customers
        if (localStorage.getItem('isCustomer') === 'true') {
            const email = localStorage.getItem('currentUserEmail');
            const users = JSON.parse(localStorage.getItem('registeredUsers')) || {};
            if (email && users[email]) {
                document.getElementById('contact-name').value = users[email].name || '';
                document.getElementById('contact-email').value = email;
            }
        }

        contactForm.onsubmit = (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value || localStorage.getItem('currentUserEmail');
            const gender = document.getElementById('contact-gender').value;
            const age = document.getElementById('contact-age').value;
            const message = document.getElementById('contact-message').value;

            if (!email) {
                alert("Please provide an email or login first.");
                return;
            }

            // Send message to admin via chat system (USER SPECIFIC KEY)
            const chatKey = `chatLogs_${email}`;
            const chatLogs = JSON.parse(localStorage.getItem(chatKey)) || [];

            chatLogs.push({
                role: 'customer',
                text: `📝 CONTACT FORM SUBMISSION
Name: ${name}
Email: ${email}
Gender: ${gender}
Age: ${age}

Message:
${message}`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text',
                timestamp: Date.now()
            });
            localStorage.setItem(chatKey, JSON.stringify(chatLogs));

            alert('Thank you! Your message has been sent to our team. We\'ll respond shortly via the chat.');
            contactForm.reset();

            // Reload chat if visible
            if (typeof loadChatMessages === 'function') {
                window.loadChatMessages();
            }
        };
    }

    // ===== PAYMENT NEGOTIATION BUTTON =====
    const negotiateBtn = document.getElementById('negotiate-payment-btn');
    if (negotiateBtn) {
        negotiateBtn.onclick = () => {
            const email = localStorage.getItem('currentUserEmail');
            if (!email) {
                alert("Please log in to negotiate payments.");
                document.getElementById('sidebar-login-form')?.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            // Send automated message to chat (USER SPECIFIC KEY)
            const chatKey = `chatLogs_${email}`;
            const chatLogs = JSON.parse(localStorage.getItem(chatKey)) || [];

            chatLogs.push({
                role: 'customer',
                text: '🔔 NEGOTIATION REQUEST\n\n💳 I would like to discuss payment options for a puppy adoption. What methods do you accept?',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text',
                timestamp: Date.now(),
                isUrgent: true // Flag for potential future highlighting
            });
            localStorage.setItem(chatKey, JSON.stringify(chatLogs));

            // Auto-scroll to chat and reload messages
            const chatContainer = document.querySelector('.messages-container') || document.getElementById('chat-messages');
            if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;

            if (typeof window.loadChatMessages === 'function') {
                window.loadChatMessages();
            }

            alert('Your payment inquiry has been sent! Check the chat window.');
        };
    }

    // Initialize on load
    renderSocialMedia();
});
