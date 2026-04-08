## 🏗 Packages Structure

```text
packages/ 
├─ icons/
│   ├─ svg/              # all the icons for visual
│   ├─ Icon.native.tsx   # wrapper for mobile icon names
│   ├─ Icon.tsx          # wrapper for web and desktop icon names
│   ├─ IconPaths.ts      # path registry for SVG icons
│   ├─ index.nativets    # re-exports
│   └─ index.ts          # re-exports
├─ images/
│   ├─ png/   
│   └─ index.ts        # re-exports
├─ navigation/ 
│   ├─ index.ts        # re-exports
│   └─ navigationConfig.ts    # data for Navigation component
└─ utils/
    ├─ auth/  
    │  ├─ useGetUserDetails.ts 
    │  ├─ useLogin.ts 
    │  ├─ useLogout.ts 
    │  ├─ useRegister.ts 
    │  └─ useUpdateUser.ts
    ├─ context/
    │  └─ AuthContext.tsx
    ├─ createApiClient.ts   # shared typed axios client    
    └─ index.ts        # re-exports
```