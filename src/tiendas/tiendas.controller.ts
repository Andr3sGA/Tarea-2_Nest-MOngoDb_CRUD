import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { TiendasService } from './tiendas.service';
import { TiendaDTO } from './dto/tienda.dto';

@Controller('tiendas')
export class TiendasController {
  constructor(private tiendaService: TiendasService) {}

  @Post()
  insertar(@Body() TiendaDTO: TiendaDTO) {
    return this.tiendaService.insertar(TiendaDTO);
  }
  @Get()
  todos () {
    return this.tiendaService.todos();
    
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.tiendaService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() tiendaDTO: TiendaDTO) {
    return this.tiendaService.actualizar(id, tiendaDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.tiendaService.eliminar(id);
  }


}
