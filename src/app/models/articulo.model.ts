export interface Articulo {
  _id: string;
  cantidad: any;
  costoVenta: any;
  costoCompra: any;
  descripcion: string;
  nombre: string;
  perecero: any;
  usuario: string;
  tienda: string;
}
export interface ArticuloDTO extends Omit<Articulo, '_id'>{

}
