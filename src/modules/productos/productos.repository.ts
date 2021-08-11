import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageDto } from "src/shared/message.dto";
import { EntityRepository, Repository } from "typeorm";
import { ProductosDto } from "./productos.dto";
import { ProductosEntity } from "./productos.entity";

@EntityRepository(ProductosEntity)
export class ProductosRepository {

    constructor(@InjectRepository(ProductosEntity)
                private _repository: Repository<ProductosEntity>){}

    async getAll(): Promise<ProductosEntity[]>{
        return this._repository.find({order:{artDes:"ASC"}});
    }

    async getBycode(code:string): Promise<ProductosEntity>{
        const CodeFound = await this._repository.findOne({where:[{coArt:code}]});
        if (!CodeFound) {throw new NotFoundException(new MessageDto(`Código de producto ${CodeFound.coArt} No existe`));}
        return this._repository.findOne({where: [{coArt:code}]});
    }

    async findcode(code : string): Promise<ProductosEntity>{ 
        return this._repository.findOne({where : [{coArt:code}]});
    }

    async create(body:ProductosDto):Promise<any>{ 
        return this._repository.save(body);
    }

    async update(code:string, body:ProductosEntity):Promise<ProductosEntity>{
        await this._repository.update(code,body);
        return this._repository.findOne(code);
    }

    async delete(code:string):Promise<any>{
        const CodeFound = await this._repository.findOne(code);
        if (!CodeFound){throw new NotFoundException(new MessageDto('El Producto !No existe! '));}
        if (CodeFound){throw new NotFoundException(new MessageDto(`Producto ${CodeFound.artDes} Delete`));}
        return  await this._repository.delete(code);
    }

    async getAllpaginated(page:number, records:number): Promise<ProductosEntity[]>{
        const initpage = page -1; 
        const offset = initpage * records;
        return this._repository.find({
            order:{
                artDes:"ASC"
            },
            skip:offset,
            take:records
        });
     }

} //Fin del codigo

