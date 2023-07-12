// Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto

import { NovoImovel } from "./model/NovoImovel";
import { VelhoImovel } from "./model/VelhoImovel";

function exerc2() {
    const novoImovel = new NovoImovel(
      "Av. Paulista, n. 1130 - São Paulo -SP",
      1500.0,
      900.0
    );
    novoImovel.imprimePrecoAdicional();
  
    const velhoImovel = new VelhoImovel(
      "Rua Olavo Bilac, 62 - Jardins - SP",
      600.0,
      90.0
    );
    velhoImovel.imprimePrecoDesconto();
  }

  exerc2()