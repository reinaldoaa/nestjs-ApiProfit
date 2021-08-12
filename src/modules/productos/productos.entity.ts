import { BaseEntity, Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from "typeorm";

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
    @Column({name:'prec_vta2',type:'float',nullable:true,default:0}) 
    precVta2:number;
    @Column({name:'prec_vta3',type:'float',nullable:true,default:0}) 
    precVta3:number;
    @Column({name:'prec_vta4',type:'float',nullable:true,default:0}) 
    precVta4:number;
    @Column({name:'prec_vta5',type:'float',nullable:true,default:0}) 
    precVta5:number;

    @Column({name:'ult_cos_un',type:'float',nullable:true,default:0}) 
    ultCosUn:number;
    @Column({name:'cos_pro_un',type:'float',nullable:true,default:0}) 
    cosProUn:number;

    @Column({name:'ult_cos_om',type:'float',nullable:true,default:0}) 
    ultCosOm:number;

    @Column({name:'cos_pro_om',type:'float',nullable:true,default:0}) 
    cosProOm:number;

    @Column({name:'stock_act',type:'float',nullable:true,default:0}) 
    stockAct:number;
    @Column({name:'tipo',type:'char',nullable:true,length:1}) 
    tipo:string;
    @Column({name:'anulado',type:'bigint',nullable:false}) //,default:false 
    anulado:bigint;
    @Column({name:'tipo_imp',type:'char',nullable:false,length:1}) 
    tipoImp:string;
    
    @Column({name:'co_us_in',type:'char',nullable:false,length:6}) 
    coUsIn:string;
    @CreateDateColumn({name:'fe_us_in',type:'timestamp',default:()=>'CURRENT_TIMESTAMP',nullable:false})
    feUsIn:Date;

    @Column({name:'co_us_mo',type:'char',nullable:false,length:6,default:'   '}) 
    coUsMo:string;
    @UpdateDateColumn({name:'fe_us_mo',type:'timestamp',default:()=>'CURRENT_TIMESTAMP',nullable:true})
    feUsMo:Date;

    @Column({name:'co_sucu',type:'char',nullable:false,length:6,default:'   '}) 
    coSucu:string;
  
}

