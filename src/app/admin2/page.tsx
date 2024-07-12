"use client";
import dynamic from 'next/dynamic';
import dataProvider from '../../dataProvider';
import PanelSolarList from '../../components/admin/materiales/PanelSolarList';
import PanelSolarEdit from '../../components/admin/materiales/PanelSolarEdit';
import PanelSolarCreate from '../../components/admin/materiales/PanelSolarCreate';
import MicroinversorList from '../../components/admin/materiales/MicroinversorList';
import MicroinversorEdit from '../../components/admin/materiales/MicroinversorEdit';
import MicroinversorCreate from '../../components/admin/materiales/MicroinversorCreate';

const Admin = dynamic(() => import('react-admin').then(mod => mod.Admin), { ssr: false });
const Resource = dynamic(() => import('react-admin').then(mod => mod.Resource), { ssr: false });

const AdminApp: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="paneles"
      list={PanelSolarList}
      edit={PanelSolarEdit}
      create={PanelSolarCreate}
    />
    <Resource
      name="microinversores"
      list={MicroinversorList}
      edit={MicroinversorEdit}
      create={MicroinversorCreate}
    />
  </Admin>
);

export default AdminApp;
