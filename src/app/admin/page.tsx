"use client";
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../dataProvider';
import InstallerList from '../../components/admin/installers/InstallerList';
import InstallerCreate from '../../components/admin/installers/InstallerCreate';
import CityList from '../../components/admin/cities/CityList';
import CityCreate from '../../components/admin/cities/CityCreate';
import EstadoList from '../../components/admin/estados/EstadoList';
import EstadoCreate from '../../components/admin/estados/EstadoCreate';
import ServiceAreaList from '../../components/admin/serviceAreas/ServiceAreaList';
import ServiceAreaCreate from '../../components/admin/serviceAreas/ServiceAreaCreate';
import CustomLayout from '../../components/admin/CustomLayout';

const AdminPage = () => (
  <Admin dataProvider={dataProvider} layout={CustomLayout}>
    <Resource name="installers" list={InstallerList} create={InstallerCreate} />
    <Resource name="cities" list={CityList} create={CityCreate} />
    <Resource name="estados" list={EstadoList} create={EstadoCreate} />
    <Resource name="serviceAreas" list={ServiceAreaList} create={ServiceAreaCreate} />
  </Admin>
);

export default AdminPage;
