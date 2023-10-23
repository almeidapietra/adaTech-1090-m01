// incluir()
// exibir
// buscar
// alterar
export function alterar(tarefas) {
  const tarefaAlterar = prompt("Informe o índice da tarefa que deseja alterar:");
  const indexAlterar = parseInt(tarefaAlterar);

  if ( indexAlterar < 0 || indexAlterar >= tarefas.length) {
    console.log("Índice inválido.");
    return;
  }

  const novaDescricao = prompt("Informe a nova descrição da tarefa:");
  tarefas[indexAlterar] = novaDescricao;
  console.log("Tarefa alterada.");
}

// deletar 
export function deletar(tarefas) {
  const tarefaDeletar = prompt("Informe o índice da tarefa que deseja deletar:");
  const indexDeletar = parseInt(tarefaDeletar);

  if ( indexDeletar < 0 || indexDeletar >= tarefas.length) {
    console.log("Índice inválido. Tarefa não encontrada.");
    return;
  }

  const tarefaDeletada = tarefas.splice(indexDeletar, 1);
  console.log("Tarefa deletada com sucesso:", tarefaDeletada[0]);
}



// filtrar 
export function buscar(){
    const tarefasFiltradas = [];
    const readline = require('readline');
    const readline = require('readline');
    // 'declara' o modulo readline e usa ele 

const readlinelnterface = readline.createInterface({
    // cria a interface pra interacao do usuario, pegar input e devolver saida pelo terminal
  input: process.stdin,
  output: process.stdout
});

readlinelnterface.question("Digite a palavra aqui: ", (palavraChave) => {
  const frasesComPalavraChave = tarefas.filter(frase => frase.includes(palavraChave));
  readlinelnterface.close();
  tarefasFiltradas.push(frasesComPalavraChave);
  return tarefasFiltradas;
});

}

function selecionar(){
    
}
