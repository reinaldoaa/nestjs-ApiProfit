import { BaseEntity, Column, CreateDateColumn, Entity, Index, PrimaryColumn } from "typeorm";

@Entity({name:'art',synchronize:false})
export class ProductosEntity extends BaseEntity {    
    @PrimaryColumn({name:'co_art',type:'char' ,nullable:false,length:30})
    coArt: string;

    @Index('iart_des' ) 
    @Column({name:'art_des',type:'varchar' ,nullable:false,length:120})
    artDes:string;

    @CreateDateColumn({name:'fecha_reg',type:'timestamp',default:()=>'CURRENT_TIMESTAMP',nullable:false})
    fechaReg:Date;

    @Column({name:'co_lin',type:'char' ,nullable:false,length:6})
    coLin:string;

    @Column({name:'co_cat',type:'char' ,nullable:false,length:6})
    coCat:string;

    @Column({name:'co_subl',type:'char' ,nullable:false,length:6})
    coSubl:string;

    @Column({name:'co_color',type:'char' ,nullable:false,length:6})
    coColor:string;

    @Column({name:'prec_vta1',type:'float',nullable:true,default:0}) 
    precVta1:number;

    @Column({name:'cos_pro_un',type:'float',nullable:true,default:0}) 
    cosProUn:number;

    @Column({name:'ult_cos_om',type:'float',nullable:true,default:0}) 
    ultCosOm:number;

    @Column({name:'cos_pro_om',type:'float',nullable:true,default:0}) 
    cosProOm:number;

    @Column({name:'stock_act',type:'float',nullable:true,default:0}) 
    stockAct:number;
    
    @Column({name:'prec_om',type:'float',nullable:true,default:0}) 
    precOm:number;

}
/*

@UpdateDateColumn({type:'timestamp',name:'updated_ad',nullable:true})
    updatedAt:Date;
SELECT TOP 1000 
      , item 
      , ref 
      , modelo 
      , procedenci 
      , comentario 
      , prec_vta1 
      , prec_vta2 
      , prec_vta3 
      , prec_vta4 
      , prec_vta5 
      , ult_cos_un 
      , cos_pro_un 
      , ult_cos_om 
      , cos_pro_om 
      , tipo 
      , anulado 
      , tipo_imp 
      , co_us_mo 
      , fe_us_mo 
      , co_sucu 
FROM  DEVELOP . dbo . art 
*/