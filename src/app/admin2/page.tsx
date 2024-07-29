// src/app/admin2/page.tsx
import dynamic from 'next/dynamic';
import ProtectedComponent from '../../components/app/ProtectedComponent';

const AdminApp = dynamic(() => import('@/components/admin/AdminApp'), { ssr: false });

const Admin2Page = () => {
  return (
    <ProtectedComponent>
      <div>
        <AdminApp />
      </div>
    </ProtectedComponent>
  );
};

export default Admin2Page;
