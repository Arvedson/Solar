// src/components/ProtectedComponent.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && (!user || user.publicMetadata?.isAdmin !== true)) {
      router.replace("/custom-sign-in");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedComponent;
