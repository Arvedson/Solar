// src/hoc/withAdminProtection.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

interface PublicMetadata {
  isAdmin: boolean;
}

interface CustomUser {
  publicMetadata: PublicMetadata;
}

const withAdminProtection = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAdminProtection = (props: P) => {
    const { user, isLoaded } = useUser() as { user: CustomUser | null, isLoaded: boolean };
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && (!user || !user.publicMetadata.isAdmin)) {
        router.push("/"); // Redirige a la página de inicio si no está autenticado o no es admin
      }
    }, [isLoaded, user, router]); // Agrega `router` a las dependencias

    if (!isLoaded || !user || !user.publicMetadata.isAdmin) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAdminProtection;
};

export default withAdminProtection;
