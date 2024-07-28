// src/types/clerk.d.ts
import '@clerk/nextjs';

declare module '@clerk/nextjs' {
  interface User {
    publicMetadata?: {
      isAdmin?: boolean;
    };
  }
}
