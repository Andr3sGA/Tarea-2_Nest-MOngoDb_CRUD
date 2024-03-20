import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TIENDA } from 'src/models/models';
import { ITienda } from './tienda.interface';
import { TiendaDTO } from './dto/tienda.dto';

@Injectable()
export class TiendasService {
  constructor(@InjectModel(TIENDA.name) private readonly modelo: Model<ITienda>) {}

  async insertar(tiendaDTO: TiendaDTO): Promise<ITienda> {
    const newTienda = new this.modelo(tiendaDTO);
    return await newTienda.save();
  }

  async todos(): Promise<ITienda[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<ITienda> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, tiendaDTO: TiendaDTO): Promise<ITienda> {
    return await this.modelo.findByIdAndUpdate(id, tiendaDTO, { new: true });
  }

  async eliminar(id: string): Promise<void> {
    await this.modelo.findByIdAndDelete(id);
  }
}

