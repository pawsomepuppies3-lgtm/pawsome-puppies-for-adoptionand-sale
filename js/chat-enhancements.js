// Chat Enhancements - Message Deletion & Additional Features
// Extends chat functionality for admins

document.addEventListener('DOMContentLoaded', () => {
    // Only run on contact page
    if (!window.location.pathname.includes('contact.html')) {
        return;
    }

    // ===== MESSAGE DELETION FOR ADMINS =====
    const enableMessageDeletion = () => {
        if (localStorage.getItem('isAdmin') !== 'true') {
            return;
        }

        // Add delete buttons to messages
        const addDeleteButtons = () => {
            const messagesContainer = document.getElementById('chat-messages');
            if (!messagesContainer) return;

            const messages = messagesContainer.querySelectorAll('.message-bubble, .msg-sent, .msg-received');
            messages.forEach((msg, index) => {
                // Skip if already has delete button
                if (msg.querySelector('.delete-msg-btn')) return;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-msg-btn';
                deleteBtn.innerHTML = '🗑️';
                deleteBtn.style.cssText = `
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: rgba(220, 53, 69, 0.9);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 28px;
                    height: 28px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.2s;
                    z-index: 10;
                `;
                deleteBtn.title = 'Delete message';
                deleteBtn.setAttribute('data-index', index);

                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    deleteMessage(index);
                };

                msg.style.position = 'relative';
                msg.appendChild(deleteBtn);

                // Show delete button on hover
                msg.onmouseenter = () => {
                    const btn = msg.querySelector('.delete-msg-btn');
                    if (btn) btn.style.opacity = '1';
                };
                msg.onmouseleave = () => {
                    const btn = msg.querySelector('.delete-msg-btn');
                    if (btn) btn.style.opacity = '0';
                };
            });
        };

        const deleteMessage = (index) => {
            if (!confirm('Are you sure you want to delete this message?')) {
                return;
            }

            const chatLogs = JSON.parse(localStorage.getItem('chatLogs')) || [];
            chatLogs.splice(index, 1);
            localStorage.setItem('chatLogs', JSON.stringify(chatLogs));

            // Reload chat
            if (typeof loadChatMessages === 'function') {
                loadChatMessages();
            } else {
                location.reload();
            }

            alert('Message deleted successfully');
        };

        // Run initially and watch for new messages
        addDeleteButtons();

        // Re-run when messages change
        const observer = new MutationObserver(() => {
            setTimeout(addDeleteButtons, 100);
        });

        const messagesContainer = document.getElementById('chat-messages');
        if (messagesContainer) {
            observer.observe(messagesContainer, { childList: true, subtree: true });
        }

        // Also add bulk delete option
        const chatHeader = document.querySelector('.chat-header');
        if (chatHeader && !document.getElementById('bulk-delete-btn')) {
            const bulkDeleteBtn = document.createElement('button');
            bulkDeleteBtn.id = 'bulk-delete-btn';
            bulkDeleteBtn.className = 'btn';
            bulkDeleteBtn.style.cssText = 'padding: 8px 15px; background: #dc3545; color: white; font-size: 0.85rem; border: none; border-radius: 20px; margin-left: auto;';
            bulkDeleteBtn.innerHTML = '🗑️ Clear All Messages';
            bulkDeleteBtn.onclick = () => {
                if (confirm('Delete ALL chat messages? This cannot be undone!')) {
                    localStorage.setItem('chatLogs', JSON.stringify([]));
                    if (typeof loadChatMessages === 'function') {
                        loadChatMessages();
                    } else {
                        location.reload();
                    }
                    alert('All messages cleared');
                }
            };
            chatHeader.appendChild(bulkDeleteBtn);
        }
    };

    // Initialize after a short delay to ensure chat is loaded
    setTimeout(enableMessageDeletion, 500);

    // ===== ENHANCED CHAT INPUT =====
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        // Auto-resize textarea
        // Auto-resize textarea to fit text (prevent scrolling)
        chatInput.addEventListener('input', function () {
            this.style.height = 'auto'; // Reset to calculate
            const newHeight = Math.min(Math.max(this.scrollHeight, 50), 200); // Min 50, Max 200
            this.style.height = newHeight + 'px';

            // Adjust overflow if max height reached
            this.style.overflowY = this.scrollHeight > 200 ? 'auto' : 'hidden';
        });

        // Enter to send (Shift+Enter for new line)
        chatInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const sendBtn = document.getElementById('chat-send-btn');
                if (sendBtn) sendBtn.click();
            }
        });
    }
});
