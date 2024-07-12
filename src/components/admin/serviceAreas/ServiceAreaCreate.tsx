import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, CreateProps } from 'react-admin';

const ServiceAreaCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="installerId" reference="installers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="cityId" reference="cities">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default ServiceAreaCreate;
