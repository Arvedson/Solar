"use client";
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../dataProvider';
import PanelSolarList from './materiales/PanelSolarList';
import PanelSolarEdit from './materiales/PanelSolarEdit';
import PanelSolarCreate from './materiales/PanelSolarCreate';
import MicroinversorList from './materiales/MicroinversorList';
import MicroinversorEdit from './materiales/MicroinversorEdit';
import MicroinversorCreate from './materiales/MicroinversorCreate';

const AdminApp: React.FC = () => (
  <div>
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
  </div>
);

export default AdminApp;


