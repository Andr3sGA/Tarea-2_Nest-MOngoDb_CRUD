import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TiendasModule } from './tiendas/tiendas.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    TiendasModule,
    ProductosModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
