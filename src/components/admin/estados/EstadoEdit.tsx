// src/components/admin/territorios/TerritoryEdit.tsx
import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const TerritoryEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="estado" label="Estado" />
            <NumberInput source="costoPorKw" label="Costo por KW" />
            <NumberInput source="indiceRadiacion" label="Índice de Radiación" />
            <DateInput source="createdAt" label="Fecha de Creación" disabled />
            <DateInput source="updatedAt" label="Última Actualización" disabled />
        </SimpleForm>
    </Edit>
);

export default TerritoryEdit;
