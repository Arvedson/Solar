import React from 'react';
import { Edit, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, NumberInput, EditProps } from 'react-admin';

const InstallerEdit: React.FC<EditProps> = (props) => (
    <Edit {...props}>
        <SimpleForm>
           
            <TextInput source="name" label="Name" />
            <TextInput source="email" label="Email" />
            <TextInput source="phone" label="Phone" />
            <TextInput source="address" label="Address" />
            <TextInput source="company" label="Company" />
            <ArrayInput source="serviceAreas" label="Service Areas">
                <SimpleFormIterator>
                    <TextInput source="serviceArea" label="Service Area" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="projects" label="Projects">
                <SimpleFormIterator>
                    <TextInput source="projectName" label="Project Name" />
                    <TextInput source="description" label="Description" />
                    <TextInput source="clientName" label="Client Name" />
                    <NumberInput source="date" label="Date" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="skillsAndCertifications" label="Skills and Certifications">
                <SimpleFormIterator>
                    <TextInput source="skillCertification" label="Skill/Certification" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="reviews" label="Reviews">
                <SimpleFormIterator>
                    <TextInput source="clientName" label="Client Name" />
                    <NumberInput source="rating" label="Rating" />
                    <TextInput source="comment" label="Comment" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default InstallerEdit;
