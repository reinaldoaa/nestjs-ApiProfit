import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import {ApiOperation } from '@nestjs/swagger';
import { CategoriasDto } from './categorias.dto';
import { CategoriasEntity } from './categorias.entity';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
    constructor(private _categoriasService: CategoriasService ){}

    @Get()
    @ApiOperation({summary: 'Obtener lista de Categorías'})
    async findAll(): Promise<CategoriasEntity[]>{
        return this._categoriasService.findAll();
    }

    @Get(':code')
    @ApiOperation({ summary: 'Obtener Categoría por código' })
    async  findById(@Param('code') code: string): Promise<CategoriasEntity>{
        return this._categoriasService.findById(code);
    }
    @Post()
    @ApiOperation({summary: 'Crear una Categoría'})
    @UsePipes(new ValidationPipe({whitelist:true}))
    async create(@Body() body: CategoriasDto):Promise<any>  { 
        // Promise<any>  o Promise<CategoriasEntity>
    return this._categoriasService.create(body);        
    }

    @Put(':code')
    @ApiOperation({summary:'Actualizar una Categoría'})
    async updateUser(@Param('code') code:string, @Body() body:CategoriasEntity ): Promise<CategoriasEntity>{
        return this._categoriasService.update(code,body);
    }

    @Delete(':code')
    @ApiOperation({summary:'>Eliminar una Categoría'})
    async deleteUser(@Param('code') code:string):Promise<void>{
        return this._categoriasService.delete(code);
    }

    @Get('/page/:page/records/:records')
    @ApiOperation({ summary: 'Obtener lista de Categorias, paginada' })
    async findAllPaginated(@Param('page') page:number,@Param('records') records : number): Promise<CategoriasEntity[]>{
        return this._categoriasService.getAllpaginated(page,records);
    }

}
