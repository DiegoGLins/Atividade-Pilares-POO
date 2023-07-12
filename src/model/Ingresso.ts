

export abstract class Ingresso {
  
  constructor(protected valor: number) {
  }

  public imprimirValor() {
    this.valor = this.valor
    console.log(this.valor)
  }
}
