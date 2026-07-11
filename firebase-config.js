/* ============================================================
   FIREBASE CONFIGURATION – Richit Computer
   ============================================================
   INSTRUCTIONS:
   1. Go to https://console.firebase.google.com/
   2. Create a new project (or open existing one)
   3. Click ⚙️ Project Settings → "Your apps" → Add Web App
   4. Copy the firebaseConfig values shown and paste them below
   5. Replace EACH "YOUR_..." placeholder with the real value
   6. See FIREBASE_SETUP.md for a complete step-by-step guide
   ============================================================ */

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   ============================================================ */

// Expose globals so script.js can use them
window.db = null;
window.firebaseReady = false;

(function initFirebaseApp() {
  try {
    // Guard: skip if placeholder values haven't been replaced
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'YOUR_API_KEY') {
      console.warn(
        '%c⚠️ Firebase not configured.' +
        ' Open firebase-config.js and replace the YOUR_... placeholders with your real credentials.' +
        ' The site will continue to work using localStorage until Firebase is set up.',
        'color: #F7C948; font-weight: bold; font-size: 13px;'
      );
      return;
    }

    // Guard: skip if Firebase SDK wasn't loaded (script blocked / offline)
    if (typeof firebase === 'undefined') {
      console.warn('⚠️ Firebase SDK not loaded. Using localStorage fallback.');
      return;
    }

    // Prevent duplicate initialization on HMR / dev reloads
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    window.db = firebase.firestore();
    window.firebaseReady = true;

    console.log(
      '%c🔥 Firebase Firestore connected! All product/category changes will sync to the cloud.',
      'color: #3ECFCF; font-weight: bold; font-size: 13px;'
    );
  } catch (err) {
    console.warn('⚠️ Firebase initialization error:', err.message, '— falling back to localStorage.');
    window.db = null;
    window.firebaseReady = false;
  }
})();
