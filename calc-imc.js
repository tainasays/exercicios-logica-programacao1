// const peso = parseFloat(document.getElementById('peso').value) ;
// const altura = parseFloat(document.getElementById('altura').value) ;

function calcular() {

    const peso = parseFloat(document.getElementById('peso').value) ;
    const altura = parseFloat(document.getElementById('altura').value) ;
    

    const resultado = peso / (altura * altura);
    console.log(resultado);

    
    let ajeitado = resultado.toFixed(1);
    document.getElementById('imc').value = ajeitado;

    if(ajeitado < 18.5) {
        document.getElementById('status').innerText = " => Abaixo do peso";
    } else if (ajeitado >= 18.5 && ajeitado <= 24.9) {
        document.getElementById('status').innerText = " => Peso ideal";
    } else if (ajeitado >= 25 && ajeitado <= 29.9) {
        document.getElementById('status').innerText = " => Acima do peso (sobrepeso)";
    } else {
        document.getElementById('status').innerText = " => Obesidade";
    }
    }



// <!-- Classificação do IMC:

// Menor que 18,5 - Abaixo do peso

// Entre 18,5 e 24,9 - Peso normal

// Entre 25 e 29,9 - Sobrepeso (acima do peso desejado)

// Igual ou acima de 30 - Obesidade -->