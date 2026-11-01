# HomeBite — browser + mobile PWA starter

## What this package gives you
- Responsive website pages: customer storefront (`index.html`), cook page (`cook.html`), owner page (`owner.html`).
- PWA manifest, service worker and app icon.
- On supported phones/browsers, users can optionally use the browser's **Add to Home Screen / Install** feature.
- A small offline cache for the main pages and static files after the first successful visit.

## Important: no installation is required to use HomeBite
People can visit the hosted website in Chrome, Edge or Safari. Adding it to a phone home screen is optional. This is a Progressive Web App, not a native Android/iPhone app package.

## Run a quick local preview
1. Extract this ZIP.
2. Double-click `index.html` to preview the customer page in a browser.
3. The linked cook and owner pages work as local demo pages too.

The PWA install prompt and offline service worker do **not** work from a `file://` address. They require the project to be hosted on HTTPS (or served from `localhost`).

## Publish it so it works across devices
Upload the contents of this folder to an HTTPS static host such as Firebase Hosting. Once published, share the HTTPS address. Visitors can use it in their browser without installing anything. On compatible mobile browsers, they may optionally add it to their home screen.

## Firebase / production status
This is still a front-end prototype. The Firebase configuration and Firestore rules are starter files only; this package does not yet connect the screens to a live Firebase project. Browser local storage is not shared between devices. The cook application demo is not yet delivered to the owner by email, and owner approval is not yet protected by server-side authentication. Real payments, refunds, cook payouts, delivery assignment, maps/live tracking and notifications are not enabled.

Before accepting real orders or personal information, connect Firebase Authentication and Firestore, enforce owner/cook/customer permissions in server-side security rules, and integrate a payment provider and delivery workflow. Do not treat a client-side email check as secure owner authentication.

## Main files
- `index.html` — customer storefront
- `cook.html` — cook application/listing demo
- `owner.html` — owner dashboard demo
- `manifest.webmanifest` — PWA identity and display settings
- `sw.js` — offline asset cache
- `pwa.js` — service worker registration and optional install prompt
- `firebase/` — starter Firebase configuration and rules
