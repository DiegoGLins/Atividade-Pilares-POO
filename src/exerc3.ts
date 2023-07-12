// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

import { Cachorro } from "./model/Cachorro";
import { Cavalo } from "./model/Cavalo";
import { Gato } from "./model/Gato";


function exerc3() {
    const cachorro = new Cachorro("Rex", 4, "mamifero");
    cachorro.emitirSom()
  
    const cavalo = new Cavalo("Alazão", 4, "mamifero");
    cavalo.emitirSom()
  
    const gato = new Gato("Lion", 4, "mamifero");
    gato.emitirSom()
  }

  exerc3()
  