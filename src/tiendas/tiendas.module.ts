import { Module } from '@nestjs/common';
import { TiendasController } from './tiendas.controller';
import { TiendasService } from './tiendas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TIENDA } from 'src/models/models';
import { TiendaSchema } from './schema/tienda.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TIENDA.name,
        useFactory: () => {
          return TiendaSchema;
        },
      },
    ]),
  ],
  controllers: [TiendasController],
  providers: [TiendasService],
})
export class TiendasModule {}
