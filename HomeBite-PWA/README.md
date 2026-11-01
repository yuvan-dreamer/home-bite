# HomeBite — browser-first marketplace starter

## Run the preview without installing software
1. Extract `HomeBite-New-Project.zip`.
2. Open `index.html` in Chrome, Edge or another modern browser.
3. Apply as a cook at `cook.html`.
4. Open `owner.html` and enter `dyuvan2013@gmail.com` to approve a cook in the local demo.
5. In `cook.html`, add a listing using the approved cook email.
6. Browse the customer page, add food to cart and place a demo order. Choose delivery or pickup.

## What is included
Customer storefront, cook application and menu screen, owner demo dashboard, sample menu, cart and demo checkout, configurable demo commission, Firebase starter config and Firestore rules.

## Critical production limitations
This package is a **working browser prototype**, not a live marketplace. Initial dishes are sample entries. Browser data is stored only in localStorage on that device. No real customer/cook accounts, cloud sync, real order dispatch, payment, refund, payout, photo upload, delivery partner or live GPS tracking is active. The owner email gate in `owner.html` is only a demo and is not secure.

Before public launch: configure Firebase Authentication and Firestore; deploy and test rules; establish owner authority through trusted Admin SDK/custom claims; implement Storage uploads and server-side order/commission logic in Cloud Functions; integrate a payment provider and verified webhooks; add refund/payout ledger, delivery operations, pickup verification, privacy/terms and food-safety compliance. Do not accept real orders or money until this is completed and security-reviewed.

## Firebase setup outline
1. Create a project at https://console.firebase.google.com and register a web app.
2. Enable Email/Password Authentication and verify `dyuvan2013@gmail.com`.
3. Create Firestore and deploy `firebase/firestore.rules`.
4. Fill `firebase/firebase-config.example.js` with your Firebase web config and wire Firebase SDK/Auth/Firestore into the app.
5. Set owner privileges only from a trusted Admin SDK environment. Never allow users to set their own owner role.
6. Add server-side payment and commission processing. Keep payment secret keys on the server.

## Commission example
At a 10% proposed rate on a ₹200 food subtotal, HomeBite commission is ₹20 and cook share is ₹180 before delivery fees, payment fees, taxes, refunds or other deductions. Production totals must be calculated on trusted server code.

## Files
`index.html` customer site · `cook.html` cook portal · `owner.html` owner portal · `css/style.css` styles · `js/` browser demo · `firebase/` starter rules/config.
