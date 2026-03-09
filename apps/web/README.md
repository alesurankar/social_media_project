# Web App

> Next.js + TypeScript frontend for the Social Media Project.

> This app is part of a monorepo. Shared components and hooks are in the `packages/` folder.

---

## Development

From the **root of the monorepo**:

```bash
cd <root>
pnpm install       # install all dependencies
pnpm run dev:web   # start the web app
```

---

## 🏗 Project Structure

```text
apps/web/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ (app)/
│  │  │   ├─ create/
│  │  │   │   └─ page.tsx
│  │  │   ├─ explore/
│  │  │   │   └─ page.tsx
│  │  │   ├─ feed/
│  │  │   │   └─ page.tsx
│  │  │   ├─ notifications/
│  │  │   │   └─ page.tsx
│  │  │   ├─ profile/
│  │  │   │   └─ page.tsx
│  │  │   └─ layout.tsx
│  │  ├─ global.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx       # App entry
│  ├─ components/
│  ├─ Modal.tsx
│  │  └─ auth/
│  │     ├─ LoginModal.tsx
│  │     └─ RegisterModal.tsx
│  └─ ui/
│     ├─ BodyFrame.tsx
│     └─ Navigation.tsx
└─ .env.local          # Base URL of backend API
 ```