import { Ingresso } from "./Ingresso";

export class Camarote extends Ingresso {
    valor: number;
  
    constructor(valor: number, valorAdicionalIngresso: number) {
      super(valor);
      this.valor = valor + valorAdicionalIngresso;
    }
  
    imprimirValorVip(){
      console.log(this.valor)
    }
  }