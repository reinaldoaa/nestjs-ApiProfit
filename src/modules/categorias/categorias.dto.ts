import { IsNotEmpty,IsString, MaxLength   } from "class-validator"; 

export class CategoriasDto {
    @MaxLength(6,{message:'Longitud maxima de 6 caracteres en el Código...'} )
    coCat: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(60,{message:'Longitud maxima de 60 caracteres en la descripcion'} )
    catDes: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(6,{message:'Longitud maxima de 6 caracteres en la codigo de usuario de registro'} )
    coUsIn:string;

}
