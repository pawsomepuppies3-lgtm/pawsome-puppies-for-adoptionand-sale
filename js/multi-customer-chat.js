// Multi-Customer Chat System Fix
// Separates chat logs per customer so multiple customers can use the system

document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.pathname.includes('contact.html')) {
        return;
    }

    // ===== MULTI-CUSTOMER CHAT SYSTEM =====

    // Override chat message loading to use customer-specific logs
    const originalLoadMessages = window.loadChatMessages;

    window.loadChatMessages = function () {
        // Use new backend session validation if available, otherwise fall back to legacy flag
        const isAdmin = (window.validateAdminSession && window.validateAdminSession()) || localStorage.getItem('isAdmin') === 'true';
        const currentUserEmail = localStorage.getItem('currentUserEmail');

        if (isAdmin) {
            loadAdminMessages();
        } else if (currentUserEmail) {
            loadCustomerMessages(currentUserEmail);
        } else {
            // Guest view - Restricted
            const container = document.getElementById('chat-messages');
            if (container) {
                container.innerHTML = `
                <div class="date-divider">Today</div>
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🔒</div>
                    <h3 style="color: var(--primary-dark); margin-bottom: 10px;">Login Required</h3>
                    <p style="color: var(--text-muted); margin-bottom: 20px;">Please <a href="#" id="login-trigger-link" style="color:var(--primary); text-decoration:underline;">login as customer</a> or admin to view messages.</p>
                </div>
                `;

                // Bind login trigger for user convenience
                setTimeout(() => {
                    document.getElementById('login-trigger-link')?.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.getElementById('login-open')?.click();
                    });
                }, 100);
            }
        }
    };

    // Load messages for a specific customer
    function loadCustomerMessages(email) {
        const chatKey = `chatLogs_${email}`;
        const messages = JSON.parse(localStorage.getItem(chatKey)) || [];

        const container = document.getElementById('chat-messages');
        if (!container) return;

        container.innerHTML = '<div class="date-divider">Today</div>';

        messages.forEach(msg => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message-bubble ${msg.role === 'customer' ? 'msg-sent' : 'msg-received'}`;

            msgDiv.innerHTML = `
                <p style="white-space: pre-wrap;">${msg.text}</p>
                <span class="msg-time">${msg.time}</span>
            `;

            container.appendChild(msgDiv);
        });

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    // Load all customer messages for admin view
    function loadAdminMessages() {
        // Get current selected customer or show all
        const selectedCustomer = localStorage.getItem('adminSelectedCustomer');

        if (selectedCustomer) {
            loadCustomerMessages(selectedCustomer);
        } else {
            // Show combined view or first customer
            const allCustomers = getAllCustomerChats();
            if (allCustomers.length > 0) {
                loadCustomerMessages(allCustomers[0].email);
                localStorage.setItem('adminSelectedCustomer', allCustomers[0].email);
            }
        }

        // Update customer list in sidebar
        updateCustomerList();
    }

    // Get all customers who have chat histories
    function getAllCustomerChats() {
        const customers = [];
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || {};

        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('chatLogs_')) {
                const email = key.replace('chatLogs_', '');
                const messages = JSON.parse(localStorage.getItem(key)) || [];
                const userData = users[email] || {};

                customers.push({
                    email: email,
                    name: userData.name || email,
                    messageCount: messages.length,
                    lastMessage: messages.length > 0 ? messages[messages.length - 1].time : 'No messages'
                });
            }
        });

        return customers;
    }

    // Update customer list for admin
    function updateCustomerList() {
        const listContainer = document.getElementById('chat-user-list');
        if (!listContainer) return;

        const customers = getAllCustomerChats();
        const selectedCustomer = localStorage.getItem('adminSelectedCustomer');

        if (customers.length === 0) {
            listContainer.innerHTML = '<div class="empty-list-msg">No customer chats yet</div>';
            return;
        }

        listContainer.innerHTML = '';
        customers.forEach(customer => {
            const item = document.createElement('div');
            item.className = 'chat-user-item' + (customer.email === selectedCustomer ? ' active' : '');
            item.onclick = () => switchToCustomer(customer.email);

            const initials = customer.name.substring(0, 2).toUpperCase();

            item.innerHTML = `
                <div class="avatar">${initials}</div>
                <div class="user-info">
                    <h4>${customer.name}</h4>
                    <p>${customer.messageCount} messages</p>
                </div>
            `;

            listContainer.appendChild(item);
        });
    }

    // Switch admin view to different customer
    function switchToCustomer(email) {
        localStorage.setItem('adminSelectedCustomer', email);
        loadAdminMessages();

        // Update header to show customer name
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || {};
        const userData = users[email] || {};
        const nameEl = document.getElementById('chat-with-name');

        if (nameEl) {
            nameEl.innerHTML = `
                ${userData.name || email} 
                <button id="admin-delete-chat-btn" class="btn btn-sm" style="margin-left:10px; padding: 4px 10px; font-size: 0.75rem; background:#ff4757; color:white; border:none; border-radius:12px; cursor:pointer;">
                    🗑️ Clear Chat
                </button>
            `;

            // Bind delete action
            document.getElementById('admin-delete-chat-btn').onclick = (e) => {
                e.stopPropagation();
                if (confirm(`Are you sure you want to delete ALL chat history for ${userData.name || email}? This cannot be undone.`)) {
                    localStorage.removeItem(`chatLogs_${email}`);
                    loadAdminMessages(); // Reloads empty
                    alert('Chat history deleted.');
                }
            };
        }
    }

    // Override send message function
    const sendBtn = document.getElementById('chat-send-btn');
    const chatInput = document.getElementById('chat-input');

    if (sendBtn && chatInput) {
        // Remove old event listeners by cloning
        const newSendBtn = sendBtn.cloneNode(true);
        sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);

        newSendBtn.onclick = function () {
            const message = chatInput.value.trim();
            if (!message) return;

            const isAdmin = (window.validateAdminSession && window.validateAdminSession()) || localStorage.getItem('isAdmin') === 'true';
            const currentUserEmail = localStorage.getItem('currentUserEmail');

            if (!isAdmin && !currentUserEmail) {
                alert('Please login to send messages');
                return;
            }

            let chatKey;
            if (isAdmin) {
                // Admin sends to selected customer
                const selectedCustomer = localStorage.getItem('adminSelectedCustomer');
                if (!selectedCustomer) {
                    alert('Please select a customer from the sidebar');
                    return;
                }
                chatKey = `chatLogs_${selectedCustomer}`;
            } else {
                // Customer sends to their own chat
                chatKey = `chatLogs_${currentUserEmail}`;
            }

            const messages = JSON.parse(localStorage.getItem(chatKey)) || [];
            messages.push({
                role: isAdmin ? 'admin' : 'customer',
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                timestamp: Date.now()
            });

            localStorage.setItem(chatKey, JSON.stringify(messages));
            chatInput.value = '';
            chatInput.style.height = 'auto';

            // Reload messages
            if (typeof window.loadChatMessages === 'function') {
                window.loadChatMessages();
            }
        };
    }

    // UI SEPARATION LOGIC
    const contactSidebar = document.getElementById('contact-sidebar');
    const adminSidebar = document.getElementById('admin-sidebar');
    const isAdmin = (window.validateAdminSession && window.validateAdminSession()) || localStorage.getItem('isAdmin') === 'true';
    const isCustomer = localStorage.getItem('currentUserEmail') && !isAdmin;

    if (isAdmin) {
        // ADMIN MODE: Show Admin Sidebar, Hide Customer Sidebar
        if (adminSidebar) adminSidebar.style.display = 'flex';
        if (contactSidebar) contactSidebar.style.display = 'none';

        // Also hide other customer-specific specific elements if they exist outside the sidebar
        document.querySelectorAll('.customer-only').forEach(el => el.style.display = 'none');

    } else {
        // CUSTOMER/GUEST MODE
        if (adminSidebar) adminSidebar.style.display = 'none';
        if (contactSidebar) contactSidebar.style.display = 'block'; // Or 'flex' depending on CSS

        // Show customer elements
        document.querySelectorAll('.customer-only').forEach(el => el.style.display = 'block');

        // Sidebar Login Widget Logic
        const loginForm = document.getElementById('sidebar-login-form');
        const profileView = document.getElementById('sidebar-user-profile');
        const negotiateBtn = document.getElementById('negotiate-payment-btn');
        const userNameDisplay = document.getElementById('side-user-name');

        if (isCustomer) {
            // Logged In Customer
            if (loginForm) loginForm.style.display = 'none';
            if (profileView) profileView.style.display = 'block';
            if (negotiateBtn) negotiateBtn.style.display = 'block'; // Show negotiate button

            // Get Name
            const users = JSON.parse(localStorage.getItem('registeredUsers')) || {};
            const email = localStorage.getItem('currentUserEmail');
            if (userNameDisplay && users[email]) {
                userNameDisplay.innerText = `Hi, ${users[email].name || 'Friend'}!`;
            }

        } else {
            // Guest
            if (loginForm) loginForm.style.display = 'flex';
            if (profileView) profileView.style.display = 'none';
            if (negotiateBtn) negotiateBtn.style.display = 'none'; // Hide negotiate button

            // Pre-fill if "Remember Me" was used
            const savedEmail = localStorage.getItem('rememberedEmail');
            const savedPass = localStorage.getItem('rememberedPass');
            if (savedEmail && savedPass) {
                document.getElementById('side-login-email').value = savedEmail;
                document.getElementById('side-login-pass').value = savedPass;
                const rememberCheckbox = document.getElementById('side-remember-me');
                if (rememberCheckbox) rememberCheckbox.checked = true;
            }
        }

        // Bind Sidebar Login Submission
        if (loginForm && !loginForm.dataset.bound) {
            loginForm.dataset.bound = "true";
            loginForm.onsubmit = (e) => {
                e.preventDefault();
                const email = document.getElementById('side-login-email').value.trim().toLowerCase();
                const pass = document.getElementById('side-login-pass').value;
                const rememberMe = document.getElementById('side-remember-me')?.checked;

                let users = JSON.parse(localStorage.getItem('registeredUsers')) || {};

                if (users[email] && users[email].password === pass) {
                    localStorage.setItem('currentUserEmail', email);
                    localStorage.setItem('isCustomer', true);
                    localStorage.setItem('isAdmin', false);

                    // Handle Remember Me
                    if (rememberMe) {
                        localStorage.setItem('rememberedEmail', email);
                        localStorage.setItem('rememberedPass', pass);
                    } else {
                        localStorage.removeItem('rememberedEmail');
                        localStorage.removeItem('rememberedPass');
                    }

                    alert(`Welcome back!`);
                    location.reload();
                } else {
                    alert('Invalid login credentials.');
                }
            };
        }
    }

    // Initialize on load
    setTimeout(() => {
        if (typeof window.loadChatMessages === 'function') {
            window.loadChatMessages();
        }
    }, 300);

    // Migrate old chat logs if they exist
    const oldChatLogs = localStorage.getItem('chatLogs');
    if (oldChatLogs) {
        try {
            const messages = JSON.parse(oldChatLogs);
            if (messages.length > 0) {
                // Try to determine which customer these belong to
                const currentUserEmail = localStorage.getItem('currentUserEmail');
                if (currentUserEmail) {
                    const newKey = `chatLogs_${currentUserEmail}`;
                    if (!localStorage.getItem(newKey)) {
                        localStorage.setItem(newKey, oldChatLogs);
                        console.log('Migrated old chat logs to customer-specific storage');
                    }
                }
            }
        } catch (e) {
            console.error('Error migrating chat logs:', e);
        }
    }
});
