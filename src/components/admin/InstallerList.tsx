import React from 'react';
import { List, Datagrid, TextField, NumberField, EmailField, EditButton, DeleteButton } from 'react-admin';

const InstallerList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="cost_per_kw" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="serviceAreas" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default InstallerList;
