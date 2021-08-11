import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosController } from './productos.controller';
import { ProductosEntity } from './productos.entity';
import { ProductosRepository } from './productos.repository';
import { ProductosService } from './productos.service';

@Module({
  imports:[TypeOrmModule.forFeature([ProductosEntity])],
  controllers: [ProductosController],
  providers: [ProductosService,ProductosRepository]
})
export class ProductosModule {}
