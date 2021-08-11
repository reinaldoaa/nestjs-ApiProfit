import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import {ApiOperation } from '@nestjs/swagger';
import { ProductosDto } from './productos.dto';
import { ProductosEntity } from './productos.entity';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {

    constructor(private _productosService: ProductosService ){}

    @Get()
    @ApiOperation({summary: 'Obtener lista de Productos'})
    async findAll(): Promise<ProductosEntity[]>{
        return this._productosService.findAll();
    }

    @Get(':code')
    @ApiOperation({ summary: 'Obtener producto por código' })
    async findBycode(@Param('code') code:string):Promise<ProductosEntity>{
        return this._productosService.findByCode(code);
    }

    @Post()
    @ApiOperation({summary: 'Crear un Nuevo Producto'})
    @UsePipes(new ValidationPipe({whitelist:true}))
    async create(@Body() body: ProductosDto):Promise<any>  { 
            return this._productosService.create(body);        
    }

    @Put(':code')
    @ApiOperation({summary:'Actualizar un producto'})
    async updateUser(@Param('code') code:string, @Body() body:ProductosEntity ): Promise<ProductosEntity>{
        return this._productosService.update(code,body);
    }

    @Delete(':code')
    @ApiOperation({summary:'Eliminar un producto'})
    async deleteUser(@Param('code') code:string):Promise<void>{
        return this._productosService.delete(code);
    }

    @Get('/page/:page/records/:records')
    @ApiOperation({ summary: 'Obtener lista de los productos, paginada' })
    async findAllPaginated(@Param('page') page:number,@Param('records') records : number): Promise<ProductosEntity[]>{
        return this._productosService.getAllpaginated(page,records);
    }

} //Fin del codigo
