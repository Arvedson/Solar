import React from 'react';
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, CreateProps, useRedirect, useNotify } from 'react-admin';

const InstallerCreate: React.FC<CreateProps> = (props) => {
    const redirect = useRedirect();
    const notify = useNotify();

    const handleSave = async (data: any) => {
        notify('Installer saved successfully', { type: 'info' });
        redirect('/admin/installers');
        return data;
    };

    return (
        <Create {...props} transform={handleSave}>
            <SimpleForm>
                <TextInput source="name" label="Name" />
                <TextInput source="email" label="Email" />
                <TextInput source="phone" label="Phone" />
                <TextInput source="address" label="Address" />
                <TextInput source="company" label="Company" />
                <ArrayInput source="serviceAreas" label="Service Areas">
                    <SimpleFormIterator>
                        <TextInput source="" label="Service Area" />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="projects">
                    <SimpleFormIterator>
                        <TextInput source="projectName" label="Project Name" />
                        <TextInput source="description" label="Description" />
                        <TextInput source="date" label="Date" />
                        <TextInput source="clientName" label="Client Name" />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="skillsAndCertifications">
                    <SimpleFormIterator>
                        <TextInput source="" label="Skill/Certification" />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="reviews">
                    <SimpleFormIterator>
                        <TextInput source="clientName" label="Client Name" />
                        <TextInput source="rating" label="Rating" />
                        <TextInput source="comment" label="Comment" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
};

export default InstallerCreate;
