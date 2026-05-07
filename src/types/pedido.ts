export type EstadoPedido =
  | 'pendiente'
  | 'aceptado'
  | 'rechazado';

export interface Pedido {
  id: number;
  fecha: string;
  horario: string;
  alumnos: number;
  estado: EstadoPedido;
  laboratorioId: number;
  laboratorioNombre: string;
}