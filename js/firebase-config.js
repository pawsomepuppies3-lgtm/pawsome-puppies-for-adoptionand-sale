// Firebase Configuration
// ========================================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or select existing)
// 3. Click "Web" icon to add a web app
// 4. Copy your config values and replace the placeholders below
// 5. Enable Authentication: Go to "Authentication" → "Sign-in method" → Enable "Email/Password"
// 6. Enable Firestore: Go to "Firestore Database" → "Create database" → Start in "test mode"
// ========================================================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app, auth, db;

try {
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();

    console.log("✅ Firebase initialized successfully!");

    // Enable offline persistence
    db.enablePersistence()
        .then(() => console.log("✅ Offline persistence enabled"))
        .catch((err) => {
            if (err.code === 'failed-precondition') {
                console.warn("⚠️ Multiple tabs open, persistence enabled in first tab only");
            } else if (err.code === 'unimplemented') {
                console.warn("⚠️ Browser doesn't support persistence");
            }
        });
} catch (error) {
    console.error("❌ Firebase initialization error:", error);
    console.warn("⚠️ Running in localStorage-only mode. Firebase features will be limited.");
    console.info("ℹ️ To enable Firebase, please update credentials in firebase-config.js");
    // Gracefully continue without Firebase - localStorage will handle all data
}

// Helper function to check if Firebase is configured
function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "YOUR_API_KEY_HERE";
}
