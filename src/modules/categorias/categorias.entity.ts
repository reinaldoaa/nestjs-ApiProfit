import {  Column, Entity,PrimaryColumn,BaseEntity, Index} from 'typeorm';
//Modelo de Datos Categorias
@Entity({name:'cat_art',synchronize:false})  
export class CategoriasEntity extends BaseEntity   {
    @PrimaryColumn( {name:'co_cat', type:'char',unique:true,length:6,nullable:false}) coCat: string; //primary key name constraint profit:cat_art_co_cat 
    @Index('icat_des' ) //name constraint PROFIT: icat_des      
    @Column({name: 'cat_des',type:'varchar',length:60,nullable:false}) catDes: string;
    @Column({name:'co_us_in',type:'char',unique:false,length:6,nullable:false}) coUsIn: string;
}

