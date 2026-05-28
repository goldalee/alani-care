# Alani's Care — PWA Appointment Tracker

A Progressive Web App to track your daughter's medical appointments with push notification reminders. Free to host, installs on Android like a native app.

---

## What's included

| File | Purpose |
|------|---------|
| `index.html` | The full app (HTML + CSS + JS in one file) |
| `manifest.json` | Makes it installable on Android/iOS |
| `sw.js` | Service worker — offline support & push notifications |
| `icons/` | Add your app icons here (see below) |

---

## Quick deploy (free, 5 minutes)

### Option 1 — Netlify (easiest, drag & drop)
1. Go to https://netlify.com and sign up free
2. Drag the entire `alani-pwa` folder onto the Netlify dashboard
3. You get a live URL like `https://alani-care-abc123.netlify.app`
4. Open that URL in Chrome on your Android phone
5. Tap the banner or **⋮ → Add to Home Screen**
6. Done — it's installed like an app, completely free

### Option 2 — GitHub Pages (also free)
1. Create a free GitHub account at https://github.com
2. Create a new repository called `alani-care`
3. Upload all files in this folder
4. Go to Settings → Pages → Deploy from main branch
5. Your URL will be `https://yourusername.github.io/alani-care`

### Option 3 — Install directly on your phone (no hosting needed)
If you just want it on your own phone without hosting:
1. Put the files on a local web server (e.g. run `npx serve .` in this folder)
2. Or use VS Code Live Server extension
3. Access via your phone on the same WiFi network

---

## Adding app icons

The app needs icons to look proper when installed. Create two PNG files:
- `icons/icon-192.png` — 192×192 pixels
- `icons/icon-512.png` — 512×512 pixels

You can make a simple icon at https://favicon.io or use any image editor.
Use a green background (#0d4f3c) with a white heart or baby symbol.

---

## Customising for your baby

In `index.html`, find this line near the bottom of the `<script>` section:

```js
const SOFIA_DOB = localStorage.getItem('alani_dob') || '2024-09-01';
```

Change `'2024-09-01'` to your daughter's actual date of birth (YYYY-MM-DD format).

To change the baby's name, search for `Alani` in the HTML and replace with your daughter's name.

---

## Features

- ✅ Add unlimited appointments (specialist, doctor, date, time, clinic, address, notes)
- ✅ Upcoming & history tabs — past appointments move automatically
- ✅ Per-appointment reminder toggles
- ✅ Global reminder settings (1 week / 1 day / morning of / 2 hours before)
- ✅ Push notifications (when installed and permission granted)
- ✅ "Open in Maps" link for each appointment address
- ✅ Works offline — all data saved on your phone
- ✅ Installable on Android home screen (no Play Store, no fees)
- ✅ Auto-updates when you change the hosted files

---

## Push notifications (advanced)

The in-browser notifications work while the app is open. For true background push notifications (even when the app is closed), you'd need a small backend server to send push messages. This is a future enhancement — for now, the app reminds you via browser notifications when you have it open.

A simple free option for this is **Firebase Cloud Messaging (FCM)** — free tier is very generous for personal use.

---

## Cost summary

| Item | Cost |
|------|------|
| Netlify / GitHub Pages hosting | **Free** |
| Google Play Store | **Not needed** |
| Apple App Store | **Not needed** |
| The app itself | **Free** |
| **Total** | **$0** |
