// console.log('olá, mundo!')
// var x = function(x,y) {
//     return x * y;
// }
// console.log(x(2,5))

// function x(a, b) {
//     return a * b;
// }
// console.log(x(2,5))

// const x = (x, y) => x * y;
// console.log(x(2,5))

// function myFunction(x, y = 10) {
//     // y é por default
//     return x + y;
// }
// myFunction(5);
// console.log(myFunction(2))

// const hello = "hello, world";
// console.log(hello);

// console.log(hello.replace("hello", "goodbye")); // goodbye, world

// console.log("hello".toUpperCase());

// const pessoa = {
//     nome: 'Jorge',
//     idade: 28,
//     cargo: 'Desenvolvedor'
//   };

//   console.log(pessoa.nome);

// function checaIdade(age){
//     if (age < 18) {
//         return "jovem";
//     } else {
//         return "Adulto";
//     }    
// }
// const age = checaIdade(25);
// console.log(age);

// const age = 5;
// const pessoa = (age >= 18) ? "Adulto": "Criança";
// console.log(pessoa);

// function teste(a, b, ...args) {
//      console.log(a); 
//      console.log(b);
//      console.log(args);
//   }
// (teste(1,2,3,4));

// const pessoa = {
//     nome: 'Jorge',
//     idade: 28,
//     cargo: 'Desenvolvedor'
//   };

// // const { nome, idade, cargo } = pessoa;
// // console.log(nome); // Jorge
// // console.log(idade); // 28
// // console.log(cargo); // Desenvolvedor

// const { nome, ...rest } = pessoa;
// console.log(nome); // Jorge
// console.log(rest.idade); // 28
// console.log(rest.cargo); // Desenvolvedor



// function x(a, b) {
//     return a * b;
// }
// console.log(x(2,5))

//criar uma constante que vai se chamar cor, mvai ter como valor AZUL
//criar um objeto chamado carro, vai ter como modelo FUSCA, marcar VOLKS
//E Portas

// CONSTRUCT - inclui atributos de um outro objeto
// const carroVelho = {
//     cor: 'vermelho',
//     status: 'quebrado'
// } 
// const cor = 'azul';
// const carro = {
//     modelo: 'fusca',
//     marca: 'volkswagen',
//     portas: 2,
//     ...carroVelho
// };
// console.log(carro);


//criar uma função 
// banana
// maça
// pera
//uva

// function escolheFruta(fruta) {
//     // if (fruta === 1) {
//     //     return 'banana';
//     // }
//     // if (fruta === 2) {
//     //     return 'maçã';
//     // }
//     // if (fruta === 3) {
//     //     return 'pêra';
//     // }
//     // if (fruta === 4) {
//     //     return 'uva'
//     // }
//     // throw Error('fruta não encontrada');
//     switch (fruta) {
//         case 1:
//             return 'banana';
//         case 2:
//             return 'maça';
//         case 3:
//             return 'pêra';
//         case 4:
//             return 'uva';
//         default:
//             throw Error('Fruta não encontrada');
//     }
// }

// function chamaFruta() {

//     try {
//         const fruta = escolheFruta(5);
//         console.log(fruta);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// chamaFruta()


//## CALLBACK

// (() => {
//     console.log('exemplo de callback');

//     getLista(10, (err, result) => {
//         if (err) {
//             console.error('excedeu a lista');
//             return;
//         }

//         console.log(result);
//     })

// })();

// function getLista(qtd, callback) {
//     const lista = [];

//     for (let i = 0; i < qtd; i++) {
//         lista.push(i);
//     }

//     if (lista.length > 5) {
//         return callback(new Error('limite excedido de lista'), null);
//     }

//     return callback(null, lista);
// }

// funcao vai chamar soma 
// 3 paramentros - a-b-callback . se a soma de a + b > 5 tem que estourar erro. retornar erro para o callback. 
// funcao que vai chamar soma vai chamar invoca soma. 

// function soma(a, b, callback) {
//     const soma = a + b;

//     if (soma > 5) {
//         return callback(new Error('Valor excedido'), null); 
//     }

//     return callback(null, soma);
// }

// function invocaSoma() {
//     soma(1, 300, (err, result) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }

//         console.log(result);
//     })

// }
// invocaSoma();

// converter dolar em real
// 5,32 dolar. 

//função com 2 parametros que vai se chamar cambio.
//variavel que vai alterar é real
//1º real, 2º dolar
// 2º parametro vai vir preenchido = 5,32
//formula: real/dolar
// regra: valor do real tem que ser maior que zero. 
// // se for <=0 tem que dar erro
// // criar outra função (invocaCambio)

// function cambio(real, callback, dolar = 5.32) {
//     if(real <= 0) {
//         return callback(newError('Valor do real menor que zero'), null);
//     }

//     const conversao = real / dolar;
//     const formatacao = conversao.toFixed(2);
//     const resultado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(formatacao);
//     return callback(null, resultado);
// }

// function invocaCambio() {
//     cambio(10, (err, result) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }

//         console.log(result);
//     })
// }
// invocaCambio();

// HOMEWORK:
// funcao IMC, recebe peso e altura. 
//https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/
// IMC = Peso ÷ (Altura × Altura)
// IMC = Peso ÷ (Altura²)
// FAZER EM PROMISE TAMBÉM

//## Promise

// (() => {
//     console.log('exemplo de promise');

//     getLista(5)
//         .then((result) => {
//             return console.log(result);
//         })
//         .catch((err) => {
//             return console.error(err);
//         })

// })();

// function getLista(qtd) {
//     return new Promise((resolve, reject) => {
//         const lista = [];

//         for (let i = 0; i < qtd; i++) {
//             lista.push(i);
//         }

//         if (lista.length > 5) {
//             return reject(new Error('limite excedido de lista'));
//         }

//         return resolve(lista);
//     })
// }

// 
////////////////////////////////////////////////////////////////////////
// fazer uma função utilizando CALLBACK e uma com PROMISE

// funcao IMC, recebe peso e altura. 
//https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/
// IMC = Peso ÷ (Altura × Altura) ou IMC = Peso ÷ (Altura²)

//criar 3 constantes. peso, nome e altura.
// cada constante deve ser o nome de uma pessoa
// vai passar essas pessoas como parÂmetros
// ex: aline.altura
//const carroVelho = {
//     cor: 'vermelho',
//     status: 'quebrado'
// } 
const aline = {
    peso: 55,
    altura: 1.58
}

const antonio = {
    peso: 75,
    altura: 1.75
}

const maria = {
    peso: 40,
    altura: 1.30
}

//CALLBACK
// function imc(altura, peso, callback) {
//     if (altura <= 0 || peso <= 0) {
//         return callback(new Error('Valor informado deve ser maior que zero'))
//     }

//     const calculoImc = peso / (altura * altura);
//     const formatacao = calculoImc.toFixed(2);
//     const resultado = new Intl.NumberFormat('pt-BR', { style: 'decimal', decimal: 'BRL' }).format(formatacao);
//     return callback(null, resultado);
// }


// function calculaImc() {
//     imc(aline.altura, aline.peso, (errAline, resultAline) => {
//         if (errAline) {
//             console.error(errAline.message);
//             return;
//         }
//         imc(antonio.altura, antonio.peso, (errAntonio, resultAntonio) => {
//             if (errAntonio) {
//                 console.error(errAntonio.message);
//                 return;
//             }
//             imc(maria.altura, maria.peso, (errMaria, resultMaria) => {
//                 if (errMaria) {
//                     console.error(errMaria.message);
//                     return;
//                 }
//                 console.log('aline:', resultAline);
//                 console.log('antonio:', resultAntonio);
//                 console.log('maria', resultMaria);
//             })
//         })

//     })
// }
// calculaImc();



//## Promise //função imediata //Immediately-invoked Function Expression

// function calculaImc(altura, peso) {
//     return new Promise((resolve, reject) => {
//         if (altura <= 0 || peso <= 0) {
//             return reject(new Error('Valor informado deve ser maior que zero'));
//         }

//         const imc = peso / (altura * altura);

//         return resolve(imc);

//     })
// }

// (() => { 
//     calculaImc(aline.altura, aline.peso)
//         .then((resultAline) => {
//             console.log('aline:',resultAline);
//             return calculaImc(antonio.altura, antonio.peso);
//         })
//         .then((resultAntonio) => {
//             console.log('antonio:',resultAntonio)
//             return calculaImc(maria.altura, maria.peso);
//         })
//         .then((resultMaria) => {
//             console.log('maria',resultMaria)
//         })
//         .catch((err) => {
//             return console.error(err);
//         })
// })();





// // ASYNC
// (async () => {
//     try {
//         const resultAline = await calculaImc(aline.altura, aline.peso);
//         console.log('aline:', resultAline);
//         const resultAntonio = await calculaImc(antonio.altura, antonio.peso);
//         console.log('antonio', resultAntonio);
//         const resultMaria = await calculaImc(maria.altura, maria.peso);
//         console.log('maria:', resultMaria);

//     } catch (error) {
//         console.error(error.message);
//     }

// })();

// // async function calculaImc(altura, peso) {

// //     if (altura <= 0 || peso <= 0) {
// //         throw (new Error('Valor informado deve ser maior que zero'));
// //     }

// //     const imc = peso / (altura * altura);

// //     return (imc);


// // }
// criar uma constante numeros, 
//dentro da constante por 3 numeros aleatório de 1 a 9
// printar numetos maiores que 3
// printar se existe o 5
// criar outra constante: 1º constante: maiores
// na outra constante colocar cinco.

// navegar por listas
// const numeros = [1,5,9];
// const maiores = numeros.filter((numero) =>numero >= 3);
// console.log(maiores);

// const cinco = numeros.find((numero) => numero === 9);
// console.log(cinco);


// HOMEWORK: 
// criar um array chamado pessoas. esse array vai ser de objetos
// com atributos: nome, idade.
// criar 2 funções: buscaNome e buscaAdultos.
// nelas vai passar de parÂmetro pessoas. No buscaNome 2º parâmetro vai ser o 
// nome que quero procurar.
// para procurar nome pode usar o find (exemplo: pessoa.nome)
// para buscar idade usa o filter.
// procurar exemplos find e filter javaScript.
// criar 3 pessoas; 1 criança e 2 adultos. 



const pessoas = [
    {nome:"Maria", idade: 30 }, 
    {nome:"Joao", idade: 42 },
    {nome: "Cecília", idade: 5}
];


function buscaAdultos(pessoas) {
    return pessoas.idade >= 18;
}



// const adultos = pessoas.filter(buscaAdultos);
// console.log(adultos);

