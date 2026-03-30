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
│   ├─ (app)/
│   │   ├─ explore/
│   │   │   └─ index.tsx
│   │   ├─ home/
│   │   │   └─ index.tsx
│   │   ├─ notifications/
│   │   │   └─ index.tsx
│   │   ├─ profile/
│   │   │   └─ index.tsx
│   │   └─ _layout.tsx
│   ├─ _layout.tsx
│   └─ index.tsx     # App Entry
├─ assets/
├─ components/
│   ├─ dropdown/
│   │  └─ BaseDropdown.tsx
│   └─ modal/
│      ├─ auth/
│      │  ├─ LoginModal.tsx
│      │  └─ RegisterModal.tsx
│      └─ BaseModal.tsx
├─ context/
│   └─ AuthContext.tsx
├─ lib/
│   └─ api.ts         # imports { createApiClient } from packages
├─ ui/
│   ├─ Body.tsx
│   └─ Navigation.tsx
└─ .env               # Base URL of backend API
 ```