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
│   ├─ create/
│   │   ├─ _layout.tsx
│   │   └─ index.tsx
│   ├─ explore/
│   │   ├─ _layout.tsx
│   │   └─ index.tsx
│   ├─ feed/
│   │   ├─ _layout.tsx
│   │   └─ index.tsx
│   ├─ notifications/
│   │   ├─ _layout.tsx
│   │   └─ index.tsx
│   ├─ profile/
│   │   ├─ _layout.tsx
│   │   └─ index.tsx
│   ├─ _layout.tsx
│   └─ index.tsx     # App Entry
├─ assets/
├─ components/
│   ├─ Modal.tsx
│   └─ auth/
│       ├─ LoginModal.tsx
│       └─ RegisterModal.tsx
├─ lib/
│   └─ api.ts         # imports { createApiClient } from packages
├─ ui/
│   ├─ BodyFrame.tsx
│   └─ Navigation.tsx
└─ .env               # Base URL of backend API
 ```