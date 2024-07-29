// src/lib/withAuth.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAdminAuth = (Component: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const { isLoaded, user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && (!user || user.publicMetadata?.isAdmin !== true)) {
        router.replace("/");
      }
    }, [isLoaded, user, router]);

    if (!isLoaded || !user) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAdminAuth;
