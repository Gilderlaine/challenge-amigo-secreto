let amigos = []; // Array para armazenar os nomes dos amigos

// Função para agregar amigos
function adicionarAmigo() {
    const capturandoInput = document.querySelector('input').value; // Captura o valor digitado no campo de entrada
    
    if(capturandoInput == '') { // Verifica se o campo está vazio
        alert('Não é possível adicionar o campo vazio! Por favor, insira os nomes.'); // Exibe um alerta caso esteja vazio
        return; // Interrompe a execução da função
    }

    amigos.push(capturandoInput); // Adiciona o nome ao array 'amigos'
    console.log(amigos); // Exibe o array no console para verificar se os nomes estão sendo adicionados

    document.querySelector('input').value = ''; // Limpa o campo de entrada após adicionar um nome
    atualizarLista(); // Chama a função para atualizar a lista exibida na tela
}

// Função para atualizar a lista de amigos
function atualizarLista() { 
    const lista = document.getElementById('listaAmigos'); // Obtém a referência do elemento <ul> onde a lista será exibida
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la

    for (let item of amigos) { // Percorre o array "amigos"
        const criandoLi = document.createElement("li"); // Cria um novo elemento <li>
        criandoLi.textContent = item; // Define o texto do <li> como o nome do amigo
        lista.appendChild(criandoLi); // Adiciona o <li> à lista <ul>
    }
}

// Função para sortear um amigo de forma aleatória
function sortearAmigo(){
    if (amigos.length == 0) { // Verifica se a lista de amigos está vazia
        alert("Adicione pelo menos o nome de um amigo antes de sortear."); // Exibe um alerta caso não haja amigos na lista
        return; // Interrompe a execução da função
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um número aleatório dentro do intervalo do array
    const amigoSorteado = amigos[indiceSorteado]; // Seleciona o amigo sorteado com base no índice aleatório gerado
    
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é  <strong>${amigoSorteado}</strong>`; // Exibe o nome do amigo sorteado na página
}