import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class TiendaDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly nombres: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly ciudad: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  readonly telefono: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly categoria: string;
 
}
