export interface IProducto extends Document {
  id: string;
  nombre_producto: string;
  precio: number;
  stock: number;
  proveedor: string;
}
