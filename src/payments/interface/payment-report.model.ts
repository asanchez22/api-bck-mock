export interface PaymentReport {
  id: number;
  fechaReporte: string;
  fechaDisplay?: string;
  nombrePersona: string;
  nroCedula: number;
  IDestado: number;
  importe: number;
}
