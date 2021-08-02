import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/shared/message.dto';
import { CategoriasDto } from './categorias.dto';
import { CategoriasEntity } from './categorias.entity';
import { CategoriasRepository } from './categorias.repository';

/*
    constructor(
        @InjectRepository(Categoria) 
        private readonly _categoriaRepository : CategoriaRepository,
    ){}

*/
@Injectable()
export class CategoriasService { 
    constructor(private _categoriasRepository:CategoriasRepository ){
    }

    async findAll(): Promise<CategoriasEntity[]>{
        const list=await this._categoriasRepository.getAll();
        if(!list.length){
            throw new NotFoundException( new MessageDto(`No hay Categoria en la Base de Datos`) );
        }
        return list;
    }

    async findById(code:string): Promise<CategoriasEntity>{
        const list=await this._categoriasRepository.getById(code); 
        if(!list){
            throw new NotFoundException(new MessageDto(` No existe el Código para esta Categoría`) );
        }
        //return list
        return this._categoriasRepository.getById(code);
    }

    async create(body:CategoriasDto): Promise<any>{
        const cod_cat=body.coCat;
        const exists = await this._categoriasRepository.findBycode(cod_cat);
        if (exists) throw new BadRequestException('Código de Categoría ya existe');
        await this._categoriasRepository.create(body);
        return new MessageDto(`Registro ${body.catDes}  Insertado`); //
    }

    async update(code: string, body: CategoriasEntity): Promise<CategoriasEntity> {
        return this._categoriasRepository.update(code, body);
    }

    async delete(code: string): Promise<void> {
        await this._categoriasRepository.delete(code);
    }

     async getAllpaginated(page:number, records:number): Promise<CategoriasEntity[]>{
        return this._categoriasRepository.getAllpaginated(page,records);
     }


}

