"use client"
import React from 'react';
import { Admin, Resource } from 'react-admin';
import createDataProvider from '../../dataProviders';
import InstallerList from '../../components/admin/installers/InstallerList';
import InstallerEdit from '../../components/admin/installers/InstallerEdit';
import InstallerCreate from '../../components/admin/installers/InstallerCreate';
import InstallerShow from '../../components/admin/installers/InstallerShow';
import { apiUrl } from '../../../config'; 

const dataProvider = createDataProvider(apiUrl);

const AdminApp: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="installer"
        list={InstallerList}
        edit={InstallerEdit}
        create={InstallerCreate}
        show={InstallerShow}
      />
    </Admin>
  );
};

export default AdminApp;
