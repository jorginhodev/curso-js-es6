const usuario = {
  nome: 'Jorge',
  idade: 34,
  endereco: {
    cidade: 'Camaquã',
    estado: 'RS',
  },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados({ nome, idade }) {
  console.log(nome, idade);
}
mostraDados(usuario);