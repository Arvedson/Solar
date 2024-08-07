import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import pdfStyles from '../styles/pdfStyles';
import Card from './../common/Card';
import Title from './../common/Title';


interface ClientInfoProps {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
  contacto: string;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ nombre, direccion, fechaPropuesta, representanteVentas, contacto }) => (
  <Card title="">
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Title text="Información del Cliente" />
        <Text style={pdfStyles.text}>Nombre del Cliente: {nombre}</Text>
        <Text style={pdfStyles.text}>Dirección del Inmueble: {direccion}</Text>
        <Text style={pdfStyles.text}>Fecha de la Propuesta: {fechaPropuesta}</Text>
        <Text style={pdfStyles.text}>Representante de Ventas: {representanteVentas}</Text>
        <Text style={pdfStyles.text}>Contacto: {contacto}</Text>
      </View>
      <Image src="/images/contacto.png" style={{ width: 100, height: 100 }} /> {/* Ajusta el tamaño según sea necesario */}
    </View>
  </Card>
);

export default ClientInfo;
