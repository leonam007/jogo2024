// script.js
let numeroSorteado;
let jogoIniciado = false;

document.getElementById('sortear').addEventListener('click', function() {
  numeroSorteado = Math.floor(Math.random() * 100) + 1;
  jogoIniciado = true;
  document.getElementById('log').value = '';
  document.getElementById('mensagem').textContent = 'Jogo iniciado! Faça seu palpite.';
  document.getElementById('instrucao').textContent = 'Tente adivinhar o número entre 1 e 100!';
});

document.getElementById('tentar').addEventListener('click', verificarPalpite);
document.getElementById('palpite').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    verificarPalpite();
  }
});

function verificarPalpite() {
  if (!jogoIniciado) {
    document.getElementById('mensagem').textContent = 'O jogo ainda não foi iniciado. Por favor, clique em "Sortear" para começar.';
    return;
  }

  const palpite = parseInt(document.getElementById('palpite').value);
  const log = document.getElementById('log');

  if (isNaN(palpite)) {
    document.getElementById('mensagem').textContent = 'Por favor, insira um número válido.';
    return;
  }

  if (palpite < numeroSorteado) {
    log.value += `Seu palpite (${palpite}) é menor que o número sorteado. Tente novamente!\n`;
  } else if (palpite > numeroSorteado) {
    log.value += `Seu palpite (${palpite}) é maior que o número sorteado. Tente novamente!\n`;
  } else {
    log.value += `Parabéns! Você acertou o número (${palpite})! Que tal jogar novamente?\n`;
    jogoIniciado = false;
    document.getElementById('instrucao').textContent = 'Clique em "Sortear" para iniciar um novo jogo.';
  }

  document.getElementById('palpite').value = '';
  document.getElementById('palpite').focus();
}
