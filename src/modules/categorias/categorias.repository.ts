import { DeleteResult, EntityRepository, Repository  } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriasEntity } from "./categorias.entity";
import { CategoriasDto } from "./categorias.dto";
import { NotFoundException } from "@nestjs/common";
import { MessageDto } from "src/shared/message.dto";

/*
@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria>{   
}
*/
@EntityRepository(CategoriasEntity)
export class CategoriasRepository  {

    constructor(
        @InjectRepository(CategoriasEntity) 
        private _categoriasRepository: Repository<CategoriasEntity>){}

    async getAll(): Promise<CategoriasEntity[]>{
       return this._categoriasRepository.find({
           order:{
            co_cat:"ASC"
           }
        });
    }

    async getById(code : string): Promise<any>{ //Promise<CategoriasEntity>
        const CodeFound = await this._categoriasRepository.findOne({where : [{co_cat:code}]});
        if (!CodeFound){throw new NotFoundException(new MessageDto('No existe Categoría')); }
        //return CodeFound;
        return this._categoriasRepository.findOne({where : [{co_cat:code}]});
    }

    async findBycode(code : string): Promise<CategoriasEntity>{ //Promise<>
        return this._categoriasRepository.findOne({where : [{co_cat:code}]});
    }

    /*
            const exists = await this._categoriaRepository.findOne({where:[{desc_categ:desc_categ}]}); //{cod_cat:cod_cat},
        const Categoria = await this._categoriaRepository.findOne(id);
        if(!Categoria){
            throw new NotFoundException({message:'No existe Categoria'});
        }
        return Categoria;
    */

    async create(body:CategoriasDto):Promise<any>{ //CategoriasEntity
        return this._categoriasRepository.save(body);
        //return this._categoriasRepository.create(body);
    }
   
    async update(code:string, body:CategoriasEntity):Promise<CategoriasEntity>{
        await this._categoriasRepository.update(code,body);
        return this._categoriasRepository.findOne(code);
    }

    async delete(code:string):Promise<DeleteResult>{
        return this._categoriasRepository.delete(code);
    }

    async getAllpaginated(page:number, records:number): Promise<CategoriasEntity[]>{
        const initpage = page -1; 
        const offset = initpage * records;
        return this._categoriasRepository.find({
            order:{
                co_cat:"ASC"
            },
            skip:offset,
            take:records
        });
     }


}//Fin de la class CategoriasRepository


/*
import {EntityRepository, Repository} from 'typeorm';
import { CategoriasEntity } from "./categorias.entity";

@EntityRepository(CategoriasEntity)
export class CategoriasRepository extends Repository<CategoriasEntity>{   
}
*/