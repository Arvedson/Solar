import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const InstallerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="cost_per_kw" />
           
            <TextInput source="phone" />
            <TextInput source="serviceAreas" />
        </SimpleForm>
    </Edit>
);

export default InstallerEdit;
