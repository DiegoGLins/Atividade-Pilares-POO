import { Imovel } from "./Imovel";

export class VelhoImovel extends Imovel {
    constructor(endereco: string, preco: number, private _descontoImovel: number){
        super(endereco, preco);
    }

    public get precoDesconto(){
        return this._descontoImovel
    }

    imprimePrecoDesconto() {
        console.log(`O valor do desconto do imóvel é ${this.precoDesconto.toFixed(4)}`);
    }
}