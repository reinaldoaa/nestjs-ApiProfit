import {  Column, Entity,PrimaryColumn,BaseEntity, PrimaryGeneratedColumn, Index} from 'typeorm';
//Modelo de Datos Categorias
@Entity({name:'cat_art',synchronize:false})  
export class CategoriasEntity extends BaseEntity   {
    //primary key name constraint profit:cat_art_co_cat 
    @PrimaryColumn( {name:'co_cat', type:'char',unique:true,length:6,nullable:false}) coCat: string;
    //name constraint PROFIT: icat_des 
    @Index('icat_des' )     
    @Column({name: 'cat_des',type:'varchar',length:60,nullable:false}) catDes: string;
    @Column({name:'co_us_in',type:'char',unique:false,length:6,nullable:false}) coUsIn: string;
}

