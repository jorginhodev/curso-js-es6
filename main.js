/*
ERROR - não podemos reatribuir valor a uma const

const a = 3;
a = 5;
*/

// mutação
const usuario = { nome: 'Jorge '};
usuario.nome = 'José';
console.log(usuario);

// escopo
function teste(x) {
  let y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);

// console.log(y); erro de escopo