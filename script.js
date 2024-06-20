var numbertofind = 0;
var attempts = 0;


function refresh() {
    numbertofind = Math.floor(Math.random() * 100) + 1; 
    console.log(numbertofind); 
}


function verifyNumber() {
    var bet = parseInt(document.getElementById('bet').value); 

   
    if (isNaN(bet) || bet < 0 || bet >= 100) {
        alert('Aposta inválida! Insira um número entre 0 e 99.');
        return;
    }

    attempts++; 

  
    if (bet > numbertofind) {
        alert('O número é menor.');
    } else if (bet < numbertofind) {
        alert('O número é maior.');
    } else {
        alert('Você acertou em ' + attempts + ' tentativa(s)!'); 
        attempts = 0; 
        refresh(); 
    }

    document.getElementById('bet').value = ''; 
}


refresh();
