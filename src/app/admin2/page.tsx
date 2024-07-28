// src/app/admin2/page.tsx
"use client";
import withAdminAuth from "@/lib/withAuth";
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('../../components/admin/AdminApp'), { ssr: false });

const Admin2Page: React.FC = () => {
  return (
    <div>
      <AdminApp />
    </div>
  );
};

export default withAdminAuth(Admin2Page);
