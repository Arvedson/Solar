"use client"
import React from 'react';
import { Admin, Resource } from 'react-admin';
import  dataProvider  from '../../dataProvider/index';
import InstallerList from '@/components/admin/InstallerList';
import InstallerCreate from '@/components/admin/InstallerCreate';
import InstallerEdit from '@/components/admin/InstallerEdit';
import InstallerShow from '@/components/admin/InstallerShow';

const AdminPage = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="installers"
            list={InstallerList}
            create={InstallerCreate}
            edit={InstallerEdit}
            show={InstallerShow} // opcional
        />
    </Admin>
);

export default AdminPage;
