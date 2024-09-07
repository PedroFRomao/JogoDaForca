class Boneco {
    constructor(ctx) {
        this.ctx = ctx;
        this.erros = 0;
    }

    desenharForca() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Desenhar a forca base
        this.ctx.fillStyle="bla";
        this.ctx.beginPath(); 
        this.ctx.moveTo(70, 380);
        this.ctx.lineTo(120, 380);
        this.ctx.lineTo(120, 60);/*altura*/
        this.ctx.lineTo(300, 60);
        this.ctx.lineTo(300, 90);
        this.ctx.lineTo(150, 90);/*base cima*/
        this.ctx.lineTo(150, 380);
        this.ctx.lineTo(300, 380);/*base*/
        this.ctx.lineTo(400, 380);
        this.ctx.lineTo(400, 410);
        this.ctx.lineTo(70, 410);
        this.ctx.closePath();
        this.ctx.fill();

        if (this.erros >= 1) {
            // Desenhar a cabeça
            this.ctx.beginPath();
            this.ctx.arc(270, 130, 25, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        if (this.erros >= 2) {
            // Desenhar o corpo
            this.ctx.beginPath();
            this.ctx.moveTo(270, 155);
            this.ctx.lineTo(270, 280);
            this.ctx.stroke();
        }

        if (this.erros >= 3) {
            // Desenhar o braço esquerdo
            this.ctx.beginPath();
            this.ctx.moveTo(270, 170);
            this.ctx.lineTo(220, 230);
            this.ctx.stroke();
        }

        if (this.erros >= 4) {
            // Desenhar o braço direito
            this.ctx.beginPath();
            this.ctx.moveTo(270, 170);
            this.ctx.lineTo(320, 230);
            this.ctx.stroke();
        }

        if (this.erros >= 5) {
            // Desenhar a perna esquerda
            this.ctx.beginPath();
            this.ctx.moveTo(270, 280);
            this.ctx.lineTo(220, 340);
            this.ctx.stroke();
        }

        if (this.erros >= 6) {
            // Desenhar a perna direita
            this.ctx.beginPath();
            this.ctx.moveTo(270, 280);
            this.ctx.lineTo(320, 340);
            this.ctx.stroke();
        }

        if (this.erros >= 7) {
            // Desenhar os olhos 
            this.ctx.strokeStyle = "red";
            this.ctx.beginPath();
            this.ctx.moveTo(255, 120);
            this.ctx.lineTo(265, 130);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(265, 120);
            this.ctx.lineTo(255, 130);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(275, 120);
            this.ctx.lineTo(285, 130);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(285, 120);
            this.ctx.lineTo(275, 130);
            this.ctx.stroke();

            // Desenhar a corda
            this.ctx.strokeStyle = "black";
            this.ctx.beginPath();
            this.ctx.moveTo(266, 105);//corda esqueda
            this.ctx.lineTo(266, 90);
            this.ctx.lineTo(266, 105);// base
            this.ctx.lineTo(273, 105);
            this.ctx.lineTo(273, 105);//corda direita
            this.ctx.lineTo(273, 90);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(256, 155);//corda esqueda
            this.ctx.lineTo(283, 155);
            this.ctx.lineTo(283, 163);//altura
            this.ctx.lineTo(256, 163);
            this.ctx.lineTo(256, 155);//finalizacao
            this.ctx.stroke();
        }
    }
}

class Palavra {
    constructor(palavras) {
        this.palavras = palavras;
        this.palavraEscolhida = this.obterPalavraAleatoria();
        this.letrasAdivinhadas = [];
    }

    obterPalavraAleatoria() {
        return this.palavras[Math.floor(Math.random() * this.palavras.length)];
    }

    mostrarPalavraOculta() {
        let palavraExibida = '';

        for (const letra of this.palavraEscolhida) {
            if (this.letrasAdivinhadas.includes(letra)) {
                palavraExibida += letra;
            } else {
                palavraExibida += '_ ';
            }
        }

        document.getElementById('palavra').textContent = palavraExibida;
    }
}

class Jogo {
    constructor(canvas, boneco, palavra) {
        this.canvas = canvas;
        this.boneco = boneco;
        this.palavra = palavra;

        document.getElementById('botoes').addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                this.processarPalpite(event.target.textContent.toLowerCase());
            }
        });
    }

    inicializar() {
        this.palavra.mostrarPalavraOculta();
        this.boneco.desenharForca();
    }

    processarPalpite(letra) {
        if (!this.letraFoiAdivinhada(letra)) {
            this.palavra.letrasAdivinhadas.push(letra);

            if (!this.palavra.palavraEscolhida.includes(letra)) {
                this.boneco.erros++;
                document.getElementById('letras-erradas').textContent += letra + ' ';
            }

            this.palavra.mostrarPalavraOculta();
            this.boneco.desenharForca();

            // Verificar se o jogador ganhou ou perdeu
            if (!document.getElementById('palavra').textContent.includes('_')) {
                alert('Parabéns! Você ganhou!');
            } else if (this.boneco.erros >= 7) {
                alert('Você perdeu. A palavra era: ' + this.palavra.palavraEscolhida);
            }
        }
    }

    letraFoiAdivinhada(letra) {
        return this.palavra.letrasAdivinhadas.includes(letra);
    }
}

// Utilize o código a seguir para criar as instâncias e inicializar o jogo
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 2;

const boneco = new Boneco(ctx);
const palavra = new Palavra(["javascript", "html", "css", "jquery", "nodejs", "typescript", "python"]);
const jogo = new Jogo(canvas, boneco, palavra);

jogo.inicializar();
