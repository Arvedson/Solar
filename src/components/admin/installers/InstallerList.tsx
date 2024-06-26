// src/components/admin/installers/InstallerList.tsx
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const InstallerList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="costPerKw" label="Cost per KW" />
    </Datagrid>
  </List>
);

export default InstallerList;
