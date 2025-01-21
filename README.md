# OracleONE 
## Desafio: Amigo secreto
Repositório criado para controle das versões do aplicativo Amigo Secreto, desenvolvido como parte da formação em Lógica de Programação da ALURA no programa OracleONE.
O app permite aos usuários inserir nomes de amigos em uma lista e realizar um sorteio aleatório para determinar quem será o "amigo secreto". 
Para testar o funcionamento, acesse: https://ebenezercarvalho.github.io/OracleONE-desafio-amigo-secreto/

![image](https://github.com/user-attachments/assets/41b957b7-0155-4ec7-a18a-ffede4a334ff)


## Funcionalidades

- **Adicionar nomes**: Os usuários podem escrever o nome de um amigo em um campo de texto e adicioná-lo à lista clicando no botão "Adicionar".
  
- **Validar entrada**: Caso o campo de texto esteja vazio, a aplicação exibe um alerta solicitando um nome válido.

- **Visualizar a lista**: Os nomes inseridos são exibidos em uma lista abaixo do campo de entrada.

- **Sorteio aleatório**: Ao clicar no botão "Sortear Amigo", um nome da lista é selecionado aleatoriamente e exibido na tela.

## Estrutura do Código

O código é estruturado em JavaScript, HTML e CSS, com as seguintes partes principais:

### Variáveis

- `let amigos = []`: Um array que armazena os nomes dos amigos inseridos.

### Funções

1. **Adicionar Nome**:
   - Obtém o texto inserido pelo usuário usando `document.getElementById`.
   - Valida a entrada para garantir que não esteja vazia. Se estiver, exibe um alerta: "Por favor, insira um nome válido."
   - Se válido, adiciona o nome ao array `amigos` utilizando o método `.push()`.
   - Limpa o campo de entrada após adicionar o nome.

2. **Atualizar Lista de Amigos**:
   - Percorre o array `amigos` e adiciona cada nome como um elemento `<li>` dentro de uma lista HTML.
   - Usa `innerHTML` para limpar a lista antes de adicionar novos elementos.
   - Seleciona a lista onde os amigos serão exibidos com `document.getElementById()` ou `document.querySelector()`.
   - Limpa a lista existente definindo `lista.innerHTML = ""`.
   - Utiliza um loop `for` para criar elementos de lista para cada amigo.

3. **Sortear Amigos**:
   - Verifica se há amigos disponíveis no array antes de sortear.
   - Gera um índice aleatório usando `Math.random()` e `Math.floor()`.
   - Acessa o nome correspondente no array usando o índice aleatório.
   - Atualiza o conteúdo do elemento de resultado usando `document.getElementById()` e `innerHTML` para exibir o amigo sorteado.


## Como Executar

1. Clone este repositório em sua máquina local.
2. Abra o arquivo HTML em seu navegador.
3. Insira os nomes dos amigos no campo de texto e clique em "Adicionar".
4. Clique em "Sortear Amigo" para ver quem será seu amigo secreto!

## Contribuições
O design em HTML e os estilos CSS foram fornecidos pela ALURA.
