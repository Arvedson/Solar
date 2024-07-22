import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('../../components/admin/AdminApp'), { ssr: false });

const AdminPage: React.FC = () => {
  return (
    <div>
      <AdminApp />
    </div>
  );
};

export default AdminPage;
