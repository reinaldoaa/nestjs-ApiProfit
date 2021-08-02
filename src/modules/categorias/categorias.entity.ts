import {  Column, Entity,PrimaryColumn,BaseEntity} from 'typeorm';
//Modelo de Datos Categorias
@Entity({name:'cat_art'})  
export class CategoriasEntity extends BaseEntity   {
    @PrimaryColumn( { type:'char',unique:true,length:6,nullable:false}) //primary key name profit:'cat_art_co_cat'  name: 'co_cat',
    co_cat: string;
    @Column({name: 'cat_des',type:'varchar',length:60,nullable:false}) // icat_des
    cat_des: string;
    @Column({type:'char',unique:false,length:6,nullable:false})
    co_us_in: string;
}

