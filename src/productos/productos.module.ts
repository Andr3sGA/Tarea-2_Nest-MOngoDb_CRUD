import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PRODUCTO } from 'src/models/models';
import { ProductoSchema } from './schema/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([ 
      {
        name: PRODUCTO.name,
        useFactory: () => {
          return ProductoSchema;
        },
      },
    ]),  
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
