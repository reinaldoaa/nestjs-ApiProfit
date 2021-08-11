import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { ProductosModule } from './modules/productos/productos.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env',
                  isGlobal : true}),
                TypeOrmModule.forRootAsync({ 
                imports:[ConfigModule],
                useFactory(configService:ConfigService )    {
                return{
                type: 'mssql',
                host: configService.get<string>('DB_HOST'),
                port:Number(configService.get('DB_PORT')), 
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'), 
                entities : [__dirname+"/**/*.entity{.ts,.js}","./dist/**/*.entity{.ts,.js}"],
                synchronize : configService.get<string>('ENV')==='DEV',
                extra: { trustServerCertificate: true},
                options: {
                cryptoCredentialsDetails: { 
                minVersion: 'TLSv1'}
                },
                ssl:false,                          
                logging: false}
                }, 
                inject: [ConfigService] },),
                //Incluir las entidades o tablas en esta region:
                CategoriasModule,
                ProductosModule,
                ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  static port: number | string;
  static usuario: string;
  static basedatos: string;
  static clave: string;

  constructor( private readonly _configService : ConfigService){
    AppModule.port = Number( this._configService.get('PORT'));
    AppModule.usuario = this._configService.get('DB_USERNAME');
    AppModule.basedatos = this._configService.get('DB_DATABASE');
    AppModule.clave = this._configService.get('DB_PASSWORD');
  }

}
