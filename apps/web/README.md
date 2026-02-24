# Web App

Next.js + TypeScript frontend for the Social Media Project.

This app is part of a monorepo. Shared components and hooks are in the `packages/` folder.

## Development

From the **root of the monorepo**:

```bash
cd <root>
pnpm install       # install all dependencies
pnpm run dev:web   # start the web app
```

## 🏗 Project Structure

```text
apps/web/
├─ public/
└─ src/
   ├─ app/
   │  ├─ App.tsx
   │  ├─ global.css
   │  ├─ layout.tsx
   │  └─ page.tsx     # Entry point
   └─ gui/
      ├─ BodyFrame.tsx
      ├─ FooterBar.tsx
      └─ Navigation.tsx
 ```