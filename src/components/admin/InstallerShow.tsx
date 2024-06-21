import React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField, EmailField } from 'react-admin';

const InstallerShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <NumberField source="cost_per_kw" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="serviceAreas" />
        </SimpleShowLayout>
    </Show>
);

export default InstallerShow;
