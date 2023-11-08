// exercicio 1

const nome = document.getElementById('nome') as HTMLInputElement;
const res = document.getElementById('res') as HTMLParagraphElement;
const botao = document.getElementById('botao') as HTMLButtonElement;

botao.addEventListener('click', () => {
    var nomeValue: string = nome.value;
    HandleValidName(nomeValue);
});

let HandleValidName = (nomeValue) => {
    if (nomeValue != '') {
        let message = `Olá ${nomeValue}, Bom Dia baiano`;
        res.innerHTML = message;
    } else {
        res.innerHTML = `Digite algum nome`;
    }
};

// exercicio 2

const nota1 = document.getElementById('nota1') as HTMLInputElement;
const nota2 = document.getElementById('nota2') as HTMLInputElement;
const nota3 = document.getElementById('nota3') as HTMLInputElement;
const nota4 = document.getElementById('nota4') as HTMLInputElement;
const mediaNota = document.getElementById('media') as HTMLInputElement;

const buttoncalc = document.getElementById('calculo') as HTMLButtonElement;

buttoncalc.addEventListener('click', () => {
    let nota1value: number = parseFloat(nota1.value);
    let nota2value: number = parseFloat(nota2.value);
    let nota3value: number = parseFloat(nota3.value);
    let nota4value: number = parseFloat(nota4.value);
    CalcMedia(nota1value, nota2value, nota3value, nota4value);
});

let CalcMedia = (nota1value: number, nota2value: number, nota3value: number, nota4value: number) => {
    let media: number = (nota1value + nota2value + nota3value + nota4value) / 4;

    HandleValidAvarage(mediaNota, media);
};

let HandleValidAvarage = (mediaNota, media) => {
    if (media < 5) {
        mediaNota.textContent = `Você foi reprovado nota menor que 5, sua media foi ${media}`;
    }
    else if (media > 5) {
        mediaNota.textContent = `Você foi aprovado nota maior que 5, sua media foi ${media}`;
    } else {
        mediaNota.textContent = `Digite algum valor`;
    }
};

// questão 3

const numerotab = document.getElementById('numero') as HTMLInputElement;
const numerobtn = document.getElementById('numerobtn') as HTMLButtonElement;
const resnumero = document.getElementById('resnumero') as HTMLParagraphElement;

numerobtn.addEventListener('click', () => {
    let numerotabValue: number = parseFloat(numerotab.value);
    resnumero.innerHTML = '';
    
    for (let i: number = 1; i <= 10; i++) {
        resnumero.innerHTML += `${i} * ${numerotabValue} = ${i * numerotabValue}<br>`;
    }
});
