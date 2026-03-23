## 🏗 Packages Structure

```text
packages/ 
├─ icons/
│   ├─ svg/              # all the icons for visual
│   ├─ Icon.native.tsx   # wrapper for mobile icon names
│   ├─ Icon.tsx          # wrapper for web and desktop icon names
│   ├─ IconPaths.ts      # path registry for SVG icons
│   └─ navigationIcons.ts   # data for Navigation component
├─ images/
│   ├─ png/   
│   └─ index.ts   
└─ utils/
    ├─ createApiClient.ts   # shared typed axios client    
    ├─ index.ts             # re-exports createApiClient   
    ├─ useLogin.ts 
    ├─ useLogout.ts 
    └─ useRegister.ts
```