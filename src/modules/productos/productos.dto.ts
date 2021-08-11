import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ProductosDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(30, {message:'Longitud maxima de 30 caracteres en el Código...'} )
    coArt:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(120, {message:'Longitud maxima de 120 caracteres...'} )
    artDes:string;

    @IsNumber()
    precVta1:number;
    @IsNumber()
    cosProUn:number;
    @IsNumber()
    ultCosOm:number;
    @IsNumber()
    cosProOm:number;
    @IsNumber()
    stockAct:number;
    @IsNumber()
    precOm:number;
}
