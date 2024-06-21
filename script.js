var numbertofind = null;
var attempts = 0;


function refresh() {
    numbertofind = Math.floor(Math.random() * 100);
    console.log(numbertofind);
    document.getElementById('bet').disabled = false; 
    document.getElementById('submit-button').disabled = false; 
    attempts = 0; 
    document.getElementById('log').value = ''; 
}


function verifyNumber() {
    var bet = document.getElementById('bet').value; 
    var log = document.getElementById('log'); 

    if (numbertofind === null) {
        log.value += `O jogo ainda não foi iniciado. Clique em "Sortear Número" para começar.\n`;
        return;
    }

   
    var betNumber = parseInt(bet);
    if (isNaN(betNumber) || betNumber < 0 || betNumber >= 100) {
        log.value += `Aposta inválida! Insira um número entre 0 e 99.\n`;
        return;
    }

    attempts++;

    
    if (betNumber > numbertofind) {
        log.value += `Tentativa ${attempts}: ${betNumber} é maior\n`;
    } else if (betNumber < numbertofind) {
        log.value += `Tentativa ${attempts}: ${betNumber} é menor\n`;
    } else {
        log.value += `Tentativa ${attempts}: ${betNumber} acertou\n`;
        log.value += `Você acertou em ${attempts} tentativa(s)!\n`;
        document.getElementById('bet').disabled = true; 
        document.getElementById('submit-button').disabled = true; 
        numbertofind = null; 
    }

    document.getElementById('bet').value = ''; 
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        verifyNumber(); 
    }
}
