import { Imovel } from "./Imovel";

export class NovoImovel extends Imovel {
    constructor(endereco: string, preco: number, private _precoAdicional: number) {
      super(endereco, preco);
    }


    public get precoAdicional(){
        return this._precoAdicional
      }
    
      imprimePrecoAdicional(){
        console.log(`O valor adicional do imóvel é ${this.precoAdicional.toFixed(4)}`);
      }

}