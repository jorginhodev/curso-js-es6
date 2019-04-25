"use strict";

/*
ERROR - não podemos reatribuir valor a uma const

const a = 3;
a = 5;
*/
// mutação
var usuario = {
  nome: 'Jorge '
};
usuario.nome = 'José';
console.log(usuario); // escopo

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10); // console.log(y); erro de escopo
