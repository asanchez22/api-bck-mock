export interface ResponseData {
  id?: number;
  FechaVenta: string;
  Canal: string;
  RazonProveedor: string;
  PlanNombre: string;
  PrecioPlan: number;
  TitularApellidoNombre: string;
  TitularDocumento: string;
  BeneficiarioApellidoNombre: string;
  BeneficiarioCedula: string;
  IdVenta: string;
  IdSuscripcion: string;
  idProveedor: number;
  idStatus: number;
  fechaDisplay?: string;
  errors?: error[];
}

interface error {
  code: string;
  field: string;
  description: string;
}
