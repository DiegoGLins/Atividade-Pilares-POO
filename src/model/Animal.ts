export abstract class Animal {
    constructor(
      public nome: string,
      public numeroDepatas: number,
      public especie: string
    ){
    }
   abstract emitirSom():void

  }