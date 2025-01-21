//array para armazenar os nomes dos amigos
let listaDeAmigos = [];

//função que adiciona o nome de um amigo na lista
function adicionarAmigo() {
    //obtém o valor do input
    let inputAmigo = document.getElementById('amigo'); //'amigo' é o id lá no HTML
    let = nomeAmigo = inputAmigo.value.trim(); //o trim remove espaços antes e depois do nome

    //verifica se o campo de texto não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido');
        return; //sai da função e interrompe o código caso o campo esteja vazio
    }

    //adiciona o nome de um amigo à lista
    listaDeAmigos.push(nomeAmigo);

    //atualiza a lista de amigos na tela
    atualizarLista();

    //limpa o campo de texto para uma nova entrada
    inputAmigo.value = '';
    inputAmigo.focus(); //insere o cursor no campo de texto novamente
}

//função que atualiza a lista de amigos
function atualizarLista() {
    //primeiro temos que pegar o elemento lista de amigos lá no HTML 
    let listaHTML = document.getElementById('listaAmigos');

    //temos que limpar a lista atual par anão duplicar
    listaHTML.innerHTML = '';

    //adiciona cada amigo na lista
    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement('li'); //cria o elemento <li> lá no HTML para representar cada nome da lista
        item.textContent = amigo; //agora, cada item da lista é o nome de um amigo
        listaHTML.appendChild(item); //adiciona esse item na lista
    });
}

//função que realiza o sorteio 
function sortearAmigo() {
    //verifica se a lista está vazia
    if (listaDeAmigos.length === 0) {
        alert('Por favor, adicione ao menos um amigo para realizar o sorteio');
        return; //sai da função e interrompe o código caso a lista esteja vazia
    }

    //cria um índice aleatório com base no tamanho da lista
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); //o math.random seleciona um valor aleatório entre 0 e .999, multiplica esse valor pelo número de itens da lista e retorna um valor inteiro que vai ser sempre menor ou igual ao número máximo de itens na lista. É assim que o nome aleatório é selecionado.

    //obtém o nome correspondente ao índice sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    //exibe o resultado na tela
    exibirResultado(amigoSorteado);
}

//função que exibe o resultado do sorteio
function exibirResultado(amigo) {
    //obtém o elemento onde o resultado deve ser exibido
    let resultadoHTML = document.getElementById('resultado');

    //limpa o resultado anterior
    resultadoHTML.innerHTML = '';

    //cria um novo item para mostrar o reultado do sorteio
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo sorteado é: ${amigo}`;

    //mostra o resultado na tela
    resultadoHTML.appendChild(itemResultado);
}