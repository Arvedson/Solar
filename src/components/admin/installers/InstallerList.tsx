import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const InstallerList: React.FC = props => (
    <List {...props}>
        <Datagrid>
          
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="company" />
            <TextField source="serviceAreas" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default InstallerList;
