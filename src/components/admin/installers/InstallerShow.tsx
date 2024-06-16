import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, ArrayField, SingleFieldList, ChipField } from 'react-admin';

const InstallerShow: React.FC = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" label="Name" />
            <EmailField source="email" label="Email" />
            <TextField source="phone" label="Phone" />
            <TextField source="address" label="Address" />
            <TextField source="company" label="Company" />
            <ArrayField source="serviceAreas" label="Service Areas">
                <SingleFieldList>
                    <ChipField source="" />
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="projects" label="Projects">
                <SingleFieldList>
                    <ChipField source="projectName" />
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="skillsAndCertifications" label="Skills and Certifications">
                <SingleFieldList>
                    <ChipField source="" />
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="reviews" label="Reviews">
                <SingleFieldList>
                    <ChipField source="clientName" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default InstallerShow;
