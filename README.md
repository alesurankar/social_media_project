# Social Media Project Monorepo

> Multi-platform social media platform (Web, Mobile, Desktop)  
> Built with **React**, **Next.js**, **Expo**, **Cef**, and managed with **pnpm**.

---

## Apps

- [Web](./apps/web/README.md) – Next.js web application
- [Mobile](./apps/mobile/README.md) – Expo / React Native mobile app
- [Desktop](./apps/desktop/README.md) – Cef + React + Vite desktop app

## Server

- [Server](./server/README.md) – Backend server with Express, MongoDB, and seeding scripts

---

## 🏗 Project Structure

```text
social_media_project/
├─ apps/
│   ├─ web/        # Next.js web app
│   ├─ mobile/     # Expo / React Native mobile app
│   └─ desktop/    # Cef + React + Vite desktop app
├─ packages/       # shared components, hooks, utils
│   └─ icons/
│       ├─ svg/             # all the icons for visual
│       ├─ Icon.native.tsx  # wrapper for mobile icon names
│       ├─ Icon.tsx         # wrapper for web and desktop icon names
│       └─ IconPaths.tsx    # path registry for SVG icons
└─ server/        # backend server
```

---

## Requirements

- Node.js 18+
- pnpm 8+

---

🚀 Getting Started

From the root of the monorepo install all dependencies for all apps
```bash
pnpm install
```

---

🧪 Development

From the root of the monorepo Run Apps Individually:

Web App (Next.js)
```bash
pnpm run dev:web
```
> Open http://localhost:3000

Mobile App (Expo / React Native)
```bash
pnpm run dev:mobile
```
> Scan the QR code in Expo Go (Android/iOS)

Seed the database
Server
```bash
pnpm run seed:server
```

Server
```bash
pnpm run dev:server
```

Run Everything at Once
```bash
pnpm run dev
```