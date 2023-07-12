// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional

import { Camarote } from "./model/Camarote";
import { Normal } from "./model/Normal";
import { Vip } from "./model/VIP";

function exerc1() {
    const ingressoNormal = new Normal(20);
    ingressoNormal.imprimirValor();
  
    const ingressoVip = new Vip(35, 50);
    ingressoVip.imprimirValor();
  
    const ingressoCamarote = new Camarote(35, 80);
    ingressoCamarote.imprimirValor();
  }

  exerc1()