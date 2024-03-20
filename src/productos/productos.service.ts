import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PRODUCTO } from 'src/models/models';
import { IProducto } from './producto.interface';
import { ProductoDTO } from './dto/producto.dto';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(PRODUCTO.name) private readonly modelo: Model<IProducto>) {}

  async insertar(productoDTO: ProductoDTO): Promise<IProducto> {
    const newProducto = new this.modelo(productoDTO);
    return await newProducto.save(); 
  } 

  async todos(): Promise<IProducto[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IProducto> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, productoDTO: ProductoDTO): Promise<IProducto> {
    return await this.modelo.findByIdAndUpdate(id, productoDTO, { new: true });
  }

  async eliminar(id: string): Promise<void> {
    await this.modelo.findByIdAndDelete(id);
  }
}

