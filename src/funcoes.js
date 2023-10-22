// incluir()
// exibir
// buscar

// alterar
// deletar 
const tarefas = ["concluir codigo", "blablabla","socorroooo"];

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
  const frasesComPalavraChave = array.filter(frase => frase.includes(palavraChave));
  readlinelnterface.close();
  tarefasFiltradas.push(frasesComPalavraChave);
  return tarefasFiltradas;
});

}

function selecionar(){
    
}
