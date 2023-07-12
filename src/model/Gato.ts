import { Animal } from "./Animal";

export class Gato extends Animal {
    emitirSom(): void {
        console.log('Miau Miau Miau');
    }
}
