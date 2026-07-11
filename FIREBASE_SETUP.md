# 🔥 Firebase Setup Guide – Richit Computer

This guide will walk you through creating a **free Firebase Firestore database**
so that all your product and category changes are saved permanently in the cloud
and visible on every device.

**Estimated time: 10–15 minutes**

---

## Step 1 – Create a Firebase Account

1. Open **https://console.firebase.google.com/** in your browser.
2. Sign in with any Google account (Gmail etc.).

---

## Step 2 – Create a New Project

1. Click **"Add project"** (or **"Create a project"**).
2. Enter a project name, e.g. **`richit-computer`**.
3. **Disable Google Analytics** (not needed) → click **Continue**.
4. Click **"Create project"** → wait a few seconds → click **Continue**.

---

## Step 3 – Create the Firestore Database

1. In the left sidebar, click **Build → Firestore Database**.
2. Click **"Create database"**.
3. Select **"Start in test mode"** (allows all reads and writes — fine for now).
4. Choose a server location closest to you, e.g. **`asia-south1 (Mumbai)`**.
5. Click **"Enable"** → wait for the database to be created.

> **Note:** "Test mode" allows all reads and writes for 30 days.  
> After 30 days, follow Step 7 below to set permanent security rules.

---

## Step 4 – Get Your Web App Credentials

1. In the left sidebar, click the **⚙️ gear icon** → **"Project settings"**.
2. Scroll down to **"Your apps"** section.
3. Click the **`</>`** (Web) icon to register a web app.
4. Enter any nickname, e.g. **`Richit Computer Web`**.
5. **Do NOT check** "Firebase Hosting" → click **"Register app"**.
6. You will see a block of code like this:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "richit-computer.firebaseapp.com",
  projectId: "richit-computer",
  storageBucket: "richit-computer.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Step 5 – Paste Credentials into firebase-config.js

1. Open the file **`firebase-config.js`** in this folder.
2. Replace each `"YOUR_..."` placeholder with the real values from Step 4.

**Example before:**
```js
apiKey: "YOUR_API_KEY",
projectId: "YOUR_PROJECT_ID",
```

**Example after:**
```js
apiKey: "AIzaSy...",
projectId: "richit-computer",
```

3. Save the file.

---

## Step 6 – Test It

1. Open `index.html` in your browser.
2. Open the browser's DevTools (press **F12**) → Console tab.
3. You should see the message:
   > 🔥 Firebase Firestore connected! All product/category changes will sync to the cloud.
4. Log in to the **Owner Portal** and add or edit a product.
5. Open the Firebase Console → **Firestore Database** → you will see your data appear!

---

## Step 7 – Set Permanent Security Rules (After 30 Days)

Once the 30-day test mode expires, set these rules in  
**Firebase Console → Firestore → Rules tab**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /richit_store/{document} {
      // Anyone can read (visitors see products)
      allow read: if true;
      // Anyone can write (owner password is handled on the frontend)
      allow write: if true;
    }
  }
}
```

Click **"Publish"** to save the rules.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Console shows "Firebase not configured" | Check that you replaced ALL `YOUR_...` placeholders in `firebase-config.js` |
| Console shows "Firebase SDK not loaded" | Check your internet connection; the SDK loads from Google's CDN |
| Firestore rules error in console | Follow Step 7 to set the correct security rules |
| Products don't appear on another device | Make sure the other device is loading the same `index.html` with `firebase-config.js` |

---

## How the Sync Works

```
Owner edits product/category
        ↓
Saved to browser localStorage  (instant, works offline)
        +
Saved to Firebase Firestore   (cloud, permanent)
        ↓
All other devices with the site open
automatically receive the update in real-time
```

---

*Need help? Contact the developer.*
