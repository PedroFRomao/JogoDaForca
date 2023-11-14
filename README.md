# JogoDaForca

## Trabalho de: Pedro e Nikcolas 2 Jogos<br> 
![282653484-d191265a-d770-414b-9a61-19ed5e834b11](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/0047f25f-df26-473d-9ca7-c6c3cc0e8af6)


## **Video do jogo**



## Estrutura do Projeto

`index.html`: Página principal do jogo.<br>
`style.css`: Estilos para a apresentação visual do jogo.<br>
`script.js`: Lógica principal do jogo implementada em JavaScript.<br>
`README.md`: Este arquivo, fornecendo informações sobre o projeto.<br>

## Classes e Funcionalidades

### Boneco
![282650964-1459384c-38a7-44ff-bdee-60aff5b614b4](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/010e1eaa-44f3-431b-9ab8-80e4bf305e9a)


A classe Boneco é responsável por desenhar a forca e o enforcado à medida que o jogador comete erros. Ela possui os seguintes métodos:

`constructor(ctx)`: Inicializa a instância do Boneco e conta os erros cometidos.<br>
`desenharForca()`: Desenha a forca e o boneco com base no número de erros cometidos.<br>

### Palavra
![282651655-5379167c-b496-4ca7-8ec1-c5763ed5cca7](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/8171439a-a9d8-433e-ac7c-7815e833c370)


A classe Palavra gerencia a palavra oculta a ser adivinhada. Ela possui os seguintes métodos:

`constructor(palavras)`: Inicializa a instância da Palavra com uma lista de palavras possíveis e escolhe aleatoriamente uma palavra.<br>
`obterPalavraAleatoria()`: Escolhe aleatoriamente uma palavra da lista.<br>
`mostrarPalavraOculta()`: Exibe a palavra oculta, substituindo as letras não adivinhadas por underscores.<br>

### Jogo
![282638170-758e36e0-cb03-4858-9129-fcd44ff38275](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/ffd92928-3929-4129-b3ef-235fd7bdf161)

A classe Jogo coordena a interação entre o jogador, a palavra e o boneco. Ela possui os seguintes métodos:

`constructor(canvas, boneco, palavra)`: Inicializa a instância do Jogo com o canvas.<br>
`inicializar()`: Inicializa o jogo, exibindo a palavra oculta e desenhando a forca.<br>
`processarPalpite(letra)`: Processa o palpite do jogador, atualizando a palavra e o boneco.<br>
`letraFoiAdivinhada(letra)`: Verifica se uma letra já foi adivinhada.<br>

# Diagrama de Classes
![image](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/56b8b871-eab7-47d9-9849-54b34f406aa8)


# Diagrama de Casos de Uso
![282660303-17b73230-e6a4-457b-8c64-49a77211be86](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/044d27e8-f932-42a1-a524-e5e2c3e6b6a4)


## Documentação Casos de Uso
**Nome do caso de uso:** Jogo da Forca<br>
**Caso de uso geral:** Jogar e Adivinhar Palavras<br>
**Ator principal:** Jogador<br>
**Resumo:** O jogador tenta adivinhar uma palavra oculta, palpitar letras e descobrir a palavra para evitar que um boneco seja enforcado.<br>
**Pré-condições:** O jogo precisa ser iniciado<br>
**Pós condições:** Mostra mensagem de vitória ou derrota e a palavra oculta<br>

## Ações do jogo
![282661768-d83418f3-bf9a-4bd5-9d39-468d7429d605](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/ae72e10e-fb6c-4dac-bdd9-c6f463e8e8e4)


# Diagrama de Atividades
![282662481-7965fa89-b7b4-4cc2-af7f-a9ef31700f38](https://github.com/PedroFRomao/JogoDaForca/assets/120103357/791d0ee6-7123-4c71-a465-c94660b28b32)

