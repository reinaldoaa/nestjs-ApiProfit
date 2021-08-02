import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasController } from './categorias.controller';
import { CategoriasEntity } from './categorias.entity';
import { CategoriasRepository } from './categorias.repository';
import { CategoriasService } from './categorias.service';


@Module({ imports: [TypeOrmModule.forFeature([CategoriasEntity])],
  controllers: [CategoriasController],
  providers: [CategoriasService,CategoriasRepository]
})

@Module({})
export class CategoriasModule {}
