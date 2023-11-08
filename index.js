// exercicio 1
const nome = document.getElementById('nome');
const res = document.getElementById('res');
const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    var nomeValue = nome.value;
    HandleValidName(nomeValue);
});
let HandleValidName = (nomeValue) => {
    if (nomeValue != '') {
        let message = `Olá ${nomeValue}, Bom Dia baiano`;
        res.innerHTML = message;
    }
    else {
        res.innerHTML = `Digite algum nome`;
    }
};
// exercicio 2
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const mediaNota = document.getElementById('media');
const buttoncalc = document.getElementById('calculo');
buttoncalc.addEventListener('click', () => {
    let nota1value = parseFloat(nota1.value);
    let nota2value = parseFloat(nota2.value);
    let nota3value = parseFloat(nota3.value);
    let nota4value = parseFloat(nota4.value);
    CalcMedia(nota1value, nota2value, nota3value, nota4value);
});
let CalcMedia = (nota1value, nota2value, nota3value, nota4value) => {
    let media = (nota1value + nota2value + nota3value + nota4value) / 4;
    HandleValidAvarage(mediaNota, media);
};
let HandleValidAvarage = (mediaNota, media) => {
    if (media < 5) {
        mediaNota.textContent = `Você foi reprovado nota menor que 5, sua media foi ${media}`;
    }
    else if (media > 5) {
        mediaNota.textContent = `Você foi aprovado nota maior que 5, sua media foi ${media}`;
    }
    else {
        mediaNota.textContent = `Digite algum valor`;
    }
};
// questão 3
const numerotab = document.getElementById('numero');
const numerobtn = document.getElementById('numerobtn');
const resnumero = document.getElementById('resnumero');
numerobtn.addEventListener('click', () => {
    let numerotabValue = parseFloat(numerotab.value);
    resnumero.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        resnumero.innerHTML += `${i} * ${numerotabValue} = ${i * numerotabValue}<br>`;
    }
});
