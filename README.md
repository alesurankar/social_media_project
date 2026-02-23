# Social Media Project Monorepo

> Multi-platform social media platform (Web, Mobile, Desktop)  
> Built with **React**, **Next.js**, **Expo**, **Electron**, and managed with **pnpm** + **Turborepo**.

---

## 🏗 Project Structure

```text
social_media_project/
├─ apps/
│  ├─ web/        # Next.js web app
│  ├─ mobile/     # Expo / React Native mobile app
│  └─ desktop/    # Electron + Vite desktop app
├─ packages/      # shared components, hooks, utils
├─ server/        # backend server
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
└─ turbo.json
```

---

🚀 Getting Started

From the root of the monorepo install all dependencies for all apps
```bash
pnpm install
```

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

Desktop App (Electron + Vite)
```bash
pnpm run dev:desktop
```

Server
```bash
pnpm run dev:server
```

Run Everything at Once
```bash
pnpm run dev:all
```