"use client"
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../dataProvider';
import PanelSolarList from '../../components/admin/materiales/PanelSolarList';
import PanelSolarEdit from '../../components/admin/materiales/PanelSolarEdit';
import PanelSolarCreate from '../../components/admin/materiales/PanelSolarCreate';
import MicroinversorList from '../../components/admin/materiales/MicroinversorList';
import MicroinversorEdit from '../../components/admin/materiales/MicroinversorEdit';
import MicroinversorCreate from '../../components/admin/materiales/MicroinversorCreate';

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
