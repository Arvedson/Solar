// src/app/admin/page.tsx
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Admin = dynamic(() => import('../../components/admin/Adminapp'), { ssr: false });

const AdminPage: NextPage = () => {
    return <Admin />;
};

export default AdminPage;
