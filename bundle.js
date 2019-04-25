"use strict";

var usuario = {
  nome: 'Jorge',
  idade: 34,
  endereco: {
    cidade: 'Camaquã',
    estado: 'RS'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraDados(usuario);
