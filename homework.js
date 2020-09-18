// fazer uma função utilizando CALLBACK e uma com PROMISE

// funcao IMC, recebe peso e altura. 
//https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/
// IMC = Peso ÷ (Altura × Altura) ou IMC = Peso ÷ (Altura²)


//CALLBACK
function imc(altura, peso, callback) {
    const imc = peso / (altura * altura)

    if(altura || altura <= 0) {
        return callback(newError('Valor informado deve ser maior que zero'))
    }

    return callback(null, imc);
}




function calculaImc() {
    imc(1.58, 55, (err, result) => {
        if (err) {
            console.error(err.message);
            return;
        }

        console.log(result);
    })    
}
calculaImc();

