// Inicializa um array vazio para armazenar os nomes inseridos
const listaDeAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    // Obtém o valor do campo de texto
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco extras

    // Valida se o campo de texto não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return; // Sai da função se o nome for inválido
    }

    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(nomeAmigo);

    // Atualiza a lista visível na tela
    atualizarLista();

    // Limpa o campo de texto para nova entrada
    inputAmigo.value = '';
    inputAmigo.focus(); // Foca no campo de texto novamente
}

// Função para atualizar a lista exibida na página
function atualizarLista() {
    // Obtém o elemento da lista HTML
    const listaHTML = document.getElementById('listaAmigos');

    // Limpa a lista atual para evitar duplicação
    listaHTML.innerHTML = '';

    // Adiciona cada nome do array como um item de lista
    listaDeAmigos.forEach((amigo) => {
        const item = document.createElement('li'); // Cria um elemento <li>
        item.textContent = amigo; // Define o texto do item como o nome do amigo
        listaHTML.appendChild(item); // Adiciona o item à lista
    });
}

// Função para realizar o sorteio de um amigo
function sortearAmigo() {
    // Verifica se a lista está vazia
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
        return; // Sai da função se não houver amigos
    }

    // Gera um índice aleatório baseado no tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtém o nome correspondente ao índice sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Exibe o resultado na página
    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigo) {
    // Obtém o elemento onde o resultado será exibido
    const resultadoHTML = document.getElementById('resultado');

    // Limpa qualquer resultado anterior
    resultadoHTML.innerHTML = '';

    // Cria um novo item para exibir o nome sorteado
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo sorteado é: ${amigo}`;

    // Adiciona o item ao elemento de resultado
    resultadoHTML.appendChild(itemResultado);
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
