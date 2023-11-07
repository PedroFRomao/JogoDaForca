// Lista de palavras
const palavras = ["javascript", "html", "css", "jquery", "nodejs", "typescript", "python"];

// Escolher uma palavra aleatória
let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

// Array para rastrear as letras adivinhadas
let letrasAdivinhadas = [];

// Variável para contar erros
let erros = 0;


// canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 2;

// Função para desenhar a forca
function desenharForca(erros) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar a forca base
    ctx.fillStyle="#";
    ctx.beginPath();
    ctx.moveTo(70, 380);
    ctx.lineTo(120, 380);
    ctx.lineTo(120, 60);/*altura*/
    ctx.lineTo(300, 60);
    ctx.lineTo(300, 90);
    ctx.lineTo(150, 90);/*base cima*/
    ctx.lineTo(150, 380);
    ctx.lineTo(300, 380);/*base*/
    ctx.lineTo(400, 380);
    ctx.lineTo(400, 410);
    ctx.lineTo(70, 410);
    ctx.closePath();
    ctx.fill();

    if (erros >= 1) {
        // Desenhar a cabeça
        ctx.beginPath();
        ctx.arc(270, 130, 25, 0, Math.PI * 2);
        ctx.stroke();
    }

    if (erros >= 2) {
        // Desenhar o corpo
        ctx.beginPath();
        ctx.moveTo(270, 155);
        ctx.lineTo(270, 280);
        ctx.stroke();
    }

    if (erros >= 3) {
        // Desenhar o braço esquerdo
        ctx.beginPath();
        ctx.moveTo(270, 170);
        ctx.lineTo(220, 230);
        ctx.stroke();
    }

    if (erros >= 4) {
        // Desenhar o braço direito
        ctx.beginPath();
        ctx.moveTo(270, 170);
        ctx.lineTo(320, 230);
        ctx.stroke();
    }

    if (erros >= 5) {
        // Desenhar a perna esquerda
        ctx.beginPath();
        ctx.moveTo(270, 280);
        ctx.lineTo(220, 340);
        ctx.stroke();
    }

    if (erros >= 6) {
        // Desenhar a perna direita
        ctx.beginPath();
        ctx.moveTo(270, 280);
        ctx.lineTo(320, 340);
        ctx.stroke();
    }

    if (erros >= 7) {
        // Desenhar os olhos 
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(255, 120);
        ctx.lineTo(265, 130);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(265, 120);
        ctx.lineTo(255, 130);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(275, 120);
        ctx.lineTo(285, 130);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(285, 120);
        ctx.lineTo(275, 130);
        ctx.stroke();

        // Desenhar a corda
        ctx.beginPath();
        ctx.moveTo(266, 105);//corda esqueda
        ctx.lineTo(266, 90);
        ctx.lineTo(266, 105);// base
        ctx.lineTo(273, 105);
        ctx.lineTo(273, 105);//corda direita
        ctx.lineTo(273, 90);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(256, 155);//corda esqueda
        ctx.lineTo(283, 155);
        ctx.lineTo(283, 163);//altura
        ctx.lineTo(256, 163);
        ctx.lineTo(256, 155);//finalizacao
        ctx.stroke();
    }
}

// Função para mostrar a palavra oculta
function mostrarPalavraOculta() {
    let palavraExibida = '';

    for (const letra of palavraEscolhida) {
        if (letrasAdivinhadas.includes(letra)) {
            palavraExibida += letra;
        } else {
            palavraExibida += '_ ';
        }
    }

    document.getElementById('palavra').textContent = palavraExibida;
}

// Inicialização
mostrarPalavraOculta();
desenharForca(0);

// Event listener para os botões
document.getElementById('botoes').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const botao = event.target;

        if (!botao.classList.contains('usado')) {
            const letraAdivinhada = botao.textContent.toLowerCase();
            botao.classList.add('usado');

            if (!letrasAdivinhadas.includes(letraAdivinhada)) {
                letrasAdivinhadas.push(letraAdivinhada);

                if (!palavraEscolhida.includes(letraAdivinhada)) {
                    erros++;
                    desenharForca(erros);
                    document.getElementById('letras-erradas').textContent += letraAdivinhada + ' ';
                }

                mostrarPalavraOculta();

                // Verificar se o jogador ganhou ou perdeu
                if (!document.getElementById('palavra').textContent.includes('_')) {
                    alert('Parabéns! Você ganhou!');
                } else if (erros >= 7) {
                    alert('Você perdeu. A palavra era: ' + palavraEscolhida);
                }
            }
        }
    }
});