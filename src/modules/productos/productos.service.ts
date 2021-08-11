import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MessageDto } from 'src/shared/message.dto';
import { ProductosDto } from './productos.dto';
import { ProductosEntity } from './productos.entity';
import { ProductosRepository } from './productos.repository';

@Injectable()
export class ProductosService {
    constructor( private  _productosRepository:ProductosRepository ){}

    async findAll(): Promise<ProductosEntity[]>{
        const list = await this._productosRepository.getAll();
        if (!list.length) {throw new NotFoundException (new MessageDto(`No hay productos en la Base de Datos`))  }
        return list;
    }

    async findByCode(code:string):Promise<any>{
        const list = await this._productosRepository.getBycode(code);
        if(!list){throw new NotFoundException(new MessageDto(` No existe el Código`));}
        return this._productosRepository.getBycode(code);
    }

    async create(body:ProductosDto): Promise<any>{
        const code=body.coArt;
        const exists = await this._productosRepository.findcode(code);
        if (exists) throw new BadRequestException('Código de Producto ya existe');
        await this._productosRepository.create(body);
        return new MessageDto(`Registro ${body.artDes}  Insertado`); //
    }

    async update(code: string, body: ProductosEntity): Promise<ProductosEntity> {
        return this._productosRepository.update(code, body);
    }

    async delete(code: string): Promise<void> {
        await this._productosRepository.delete(code);
    }

    async getAllpaginated(page:number, records:number): Promise<ProductosEntity[]>{
        return this._productosRepository.getAllpaginated(page,records);
     }

}
