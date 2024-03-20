import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class ProductoDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly nombre_producto: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly precio: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  readonly stock: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly proveedor: string;
  
}
