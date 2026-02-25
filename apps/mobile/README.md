# Mobile App

> React Native + Expo frontend for the Social Media Project.

> This app is part of a monorepo. Shared components and hooks are in the `packages/` folder.

---

## Development

From the **root of the monorepo**:

```bash
cd <root>
pnpm install          # install all dependencies
pnpm run dev:mobile   # start the mobile app (Expo) and get the QR code
```

---

## 🏗 Project Structure

```text
apps/mobile/
├─ app/
│   ├─ App.tsx
│   ├─ global.css
│   └─ index.tsx     # App Entry
├─ assets/
└─ gui/
    ├─ BodyFrame.tsx
    ├─ FooterBar.tsx
    └─ Navigation.tsx
 ```