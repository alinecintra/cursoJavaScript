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

(() => {
    console.log('exemplo de callback');

    getLista(10, (err, result) => {
        if (err) {
            console.error('excedeu a lista');
            return;
        }

        console.log(result);
    })

})();

function getLista(qtd, callback) {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        lista.push(i);
    }

    if (lista.length > 5) {
        return callback(new Error('limite excedido de lista'), null);
    }

    return callback(null, lista);
}



