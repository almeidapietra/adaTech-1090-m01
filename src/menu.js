import { buscar } from './funcoes.js';

const readline = require('readline');

const rI = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolha uma opção:");
console.log("1. Adicionar tarefa");
console.log("2. Marcar tarefa como concluída");
console.log("3. Ver tarefas ativas");
console.log("4. Mudar tarefa");
console.log("5. Buscar tarefa por palavra");

rI.question("O que você quer fazer? ", (numeroOpcao) => {
  // Converte a entrada do usuário para um número inteiro
  const opcao = parseInt(numeroOpcao);

  switch (opcao) {
    case 1:
      // incluir()
      break;
    case 2:
      // deletar()
      break;
    case 3:
      // exibir()
      break;
    case 4:
      // alterar
      break;
    case 5:
      // filtrar
      buscar()
      break;
    default:
      console.log("Não entendi te entendi. Digita um número de 1 a 6 para dizer o que você quer fazer.");
  }

  rI.close();
});
