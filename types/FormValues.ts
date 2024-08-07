export interface FormValues {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
  contacto: string;
  consumoAnual: number;
  costoMensualElectricidad: number[];
  costoAnualElectricidad: number;
  tamanoSistema: number;
  panelesSolares: string;
  inversor: string;
  orientacionPaneles: string;
  produccionAnual: number;
  ahorroAnualEstimado: number;
  costoTotalSistema: number;
  subvenciones: number;
  costoNeto: number;
  financiamiento: string;
  periodoRetornoInversion: number;
  reduccionCO2Anual: number;
  equivalentesArbolesPlantados: number;
  garantiaPaneles: string;
  garantiaInversor: string;
  garantiaInstalacion: string;
  mantenimiento: string;
  tiempoEstimadoInstalacion: string;
  requerimientosPermisos: string;
  procedimientoInstalacion: string;
  programaReferidos: string;
  bateriaAlmacenamiento: string;
  posibilidadExpansion: string;
  renderizado3D: string;
  simulacionProduccion: string;
  chartImage?: string | null; // Permitir null
}
