// Firebase Database Helper Module
// ========================================================================
// This module provides helper functions for interacting with Firebase
// It replaces localStorage calls with Firestore cloud database operations
// ========================================================================

const FirebaseDB = {
    // Check if Firebase is properly configured
    isConfigured() {
        return typeof firebase !== 'undefined' && isFirebaseConfigured && isFirebaseConfigured();
    },

    // ========== USER PROFILE OPERATIONS ==========
    async saveUserProfile(userId, profileData) {
        if (!this.isConfigured()) return this._fallbackToLocalStorage('profile_' + userId, profileData);
        try {
            await db.collection('users').doc(userId).set({
                profile: profileData,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    },

    async getUserProfile(userId) {
        if (!this.isConfigured()) return this._fallbackFromLocalStorage('profile_' + userId);
        try {
            const doc = await db.collection('users').doc(userId).get();
            return doc.exists ? doc.data().profile : null;
        } catch (error) {
            console.error("Error getting profile:", error);
            return null;
        }
    },

    // ========== CHAT LOG OPERATIONS ==========
    async saveChatMessage(userId, message) {
        if (!this.isConfigured()) {
            const key = `chatLogs_${userId}`;
            const logs = JSON.parse(localStorage.getItem(key) || '[]');
            logs.push(message);
            localStorage.setItem(key, JSON.stringify(logs));
            return;
        }
        try {
            await db.collection('chatLogs').doc(userId).collection('messages').add({
                ...message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error("Error saving chat message:", error);
        }
    },

    async getChatLogs(userId) {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem(`chatLogs_${userId}`) || '[]');
        try {
            const snapshot = await db.collection('chatLogs').doc(userId).collection('messages')
                .orderBy('timestamp', 'asc').get();
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error getting chat logs:", error);
            return [];
        }
    },

    // Real-time chat listener
    listenToChatUpdates(userId, callback) {
        if (!this.isConfigured()) return () => { }; // Return empty unsubscribe function
        try {
            return db.collection('chatLogs').doc(userId).collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    callback(messages);
                });
        } catch (error) {
            console.error("Error listening to chat:", error);
            return () => { };
        }
    },

    // ========== ACTIVE CHAT USERS (for admin) ==========
    async getActiveChatUsers() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('activeChatUsers') || '{}');
        try {
            const snapshot = await db.collection('activeChatUsers').get();
            const users = {};
            snapshot.docs.forEach(doc => {
                users[doc.id] = doc.data();
            });
            return users;
        } catch (error) {
            console.error("Error getting active users:", error);
            return {};
        }
    },

    async updateActiveChatUser(email, userData) {
        if (!this.isConfigured()) {
            const users = JSON.parse(localStorage.getItem('activeChatUsers') || '{}');
            users[email] = userData;
            localStorage.setItem('activeChatUsers', JSON.stringify(users));
            return;
        }
        try {
            await db.collection('activeChatUsers').doc(email).set(userData, { merge: true });
        } catch (error) {
            console.error("Error updating active user:", error);
        }
    },

    // ========== GLOBAL SETTINGS ==========
    async getGlobalSettings() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('globalSettings') || 'null');
        try {
            const doc = await db.collection('globalSettings').doc('config').get();
            return doc.exists ? doc.data() : null;
        } catch (error) {
            console.error("Error getting settings:", error);
            return null;
        }
    },

    async saveGlobalSettings(settings) {
        if (!this.isConfigured()) {
            localStorage.setItem('globalSettings', JSON.stringify(settings));
            return;
        }
        try {
            await db.collection('globalSettings').doc('config').set(settings);
        } catch (error) {
            console.error("Error saving settings:", error);
        }
    },

    // ========== BREEDS DATA ==========
    async getBreedsData() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('breedsData') || 'null');
        try {
            const snapshot = await db.collection('breeds').get();
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error getting breeds:", error);
            return null;
        }
    },

    async saveBreedsData(breeds) {
        if (!this.isConfigured()) {
            localStorage.setItem('breedsData', JSON.stringify(breeds));
            return;
        }
        try {
            const batch = db.batch();
            breeds.forEach(breed => {
                const ref = db.collection('breeds').doc(breed.id);
                batch.set(ref, breed);
            });
            await batch.commit();
        } catch (error) {
            console.error("Error saving breeds:", error);
        }
    },

    // ========== STORIES DATA ==========
    async getStoriesData() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('storiesData') || 'null');
        try {
            const snapshot = await db.collection('stories').get();
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error getting stories:", error);
            return null;
        }
    },

    async saveStoriesData(stories) {
        if (!this.isConfigured()) {
            localStorage.setItem('storiesData', JSON.stringify(stories));
            return;
        }
        try {
            const batch = db.batch();
            stories.forEach(story => {
                const ref = db.collection('stories').doc(story.id);
                batch.set(ref, story);
            });
            await batch.commit();
        } catch (error) {
            console.error("Error saving stories:", error);
        }
    },

    // ========== FAQ & POLICIES ==========
    async getFaqData() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('faqData') || 'null');
        try {
            const doc = await db.collection('content').doc('faq').get();
            return doc.exists ? doc.data().items : null;
        } catch (error) {
            console.error("Error getting FAQ:", error);
            return null;
        }
    },

    async saveFaqData(faq) {
        if (!this.isConfigured()) {
            localStorage.setItem('faqData', JSON.stringify(faq));
            return;
        }
        try {
            await db.collection('content').doc('faq').set({ items: faq });
        } catch (error) {
            console.error("Error saving FAQ:", error);
        }
    },

    async getPoliciesData() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('policiesData') || 'null');
        try {
            const doc = await db.collection('content').doc('policies').get();
            return doc.exists ? doc.data().items : null;
        } catch (error) {
            console.error("Error getting policies:", error);
            return null;
        }
    },

    async savePoliciesData(policies) {
        if (!this.isConfigured()) {
            localStorage.setItem('policiesData', JSON.stringify(policies));
            return;
        }
        try {
            await db.collection('content').doc('policies').set({ items: policies });
        } catch (error) {
            console.error("Error saving policies:", error);
        }
    },

    async getAboutData() {
        if (!this.isConfigured()) return JSON.parse(localStorage.getItem('aboutData') || 'null');
        try {
            const doc = await db.collection('content').doc('about').get();
            return doc.exists ? doc.data() : null;
        } catch (error) {
            console.error("Error getting about:", error);
            return null;
        }
    },

    async saveAboutData(about) {
        if (!this.isConfigured()) {
            localStorage.setItem('aboutData', JSON.stringify(about));
            return;
        }
        try {
            await db.collection('content').doc('about').set(about);
        } catch (error) {
            console.error("Error saving about:", error);
        }
    },

    // ========== FALLBACK METHODS ==========
    _fallbackToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    _fallbackFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key) || 'null');
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FirebaseDB;
}
