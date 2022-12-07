export interface PaymentRefund {
  FechaVenta: string;
  Canal: string;
  RazonProveedor: string;
  PlanNombre: string;
  PrecioPlan: number;
  TitularApellidoNombre: string;
  TitularCedula: string;
  BeneficiarioApellidoNombre: string;
  BeneficiarioCedula: string;
  IdVenta: string;
  IdSuscripcion: string;
  idStatus?: number;
  Descripcion: string;
  idLender: number;
  fechaDisplay?: string;
}
