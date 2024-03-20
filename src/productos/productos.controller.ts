import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductoDTO } from './dto/producto.dto'; 

@Controller('productos')
export class ProductosController {
  constructor(private productosService: ProductosService) {} 

  @Post()
  insertar(@Body() ProductoDTO: ProductoDTO) { 
    return this.productosService.insertar(ProductoDTO);
  }
  @Get()
  todos () {
    return this.productosService.todos();
    
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.productosService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() productoDTO: ProductoDTO) {
    return this.productosService.actualizar(id, productoDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.productosService.eliminar(id);
  }

  
}
