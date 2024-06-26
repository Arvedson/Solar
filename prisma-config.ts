import { config } from 'dotenv';

// Cargar variables de entorno desde el archivo .env
config();

const databaseUrl = process.env.NODE_ENV === 'production'

console.log('Database URL:', databaseUrl);

export default databaseUrl;
