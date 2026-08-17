//Busquei o elemento pela classe
const botaoConverter = document.querySelector(".botao-de-converter")
//Busca elemento na area da selecão de Moeda #01
const MoedaSelecionada1 = document.querySelector("#moeda-de-entrada")
//Busca elemento na area da selecão de Moeda #02
const MoedaSelecionada2 = document.querySelector("#moeda-de-saida")

const TipoDaMoeda = {

    BRL: {
        nome: "Real Brasileiro",
        imagem: "./assets/real.png",
        taxa: 1,
        simbulo: "R$"
    },

    USD: {
        nome: "Dólar Americano",
        imagem: "./assets/dollar.png",
        taxa: 5.1191,
        simbulo: "US$"
    },

    EUR: {
        nome: "Euro",
        imagem: "./assets/euro.png",
        taxa: 5.82861,
        simbulo: "€"
    },

    GBP: {
        nome: "Libra Esterlina",
        imagem: "./assets/libra.png",
        taxa: 6.802,
        simbulo: "£"
    },

    ARS: {
        nome: "Peso Argentino",
        imagem: "./assets/peso-argentino.png",
        taxa: 0.004033,
        simbulo: "$"
    },

    CAD: {
        nome: "Dólar Canadense",
        imagem: "./assets/dollar-canadense.png",
        taxa: 3.65,
        simbulo: "CA$"
    },

    AUD: {
        nome: "Dólar Australiano",
        imagem: "./assets/dollar-australiano.png",
        taxa: 3.57032,
        simbulo: "A$"
    },

    JPY: {
        nome: "Iene Japonês",
        imagem: "./assets/iene.png",
        taxa: 0.032, 
        simbulo: "¥"
    },

    CHF: {
        nome: "Franco Suíço",
        imagem: "./assets/franco-suico.png",
        taxa: 6.20891,
        simbulo: "CHF"
    },

    CNY: {
        nome: "Yuan Chinês",
        imagem: "./assets/yuan.png",
        taxa: 0.7571,
        simbulo: "¥"
    },

    BTC: {
        nome: "Bitcoin",
        imagem: "./assets/bitcoin.png",
        taxa: 329000,
        simbulo: "₿"
    }
};

//função converter moeda
function funcaoConverterMoeda(){
    //Busca o valor dos elementos por class ou or id e tbm valores selecionados nas moedas de entrada e saida
    const inputValorInserido = document.querySelector(".input-valor-inserido").value
    const MoedaDeEntrada = document.querySelector("#moeda-de-entrada").value
    const MoedaDeSaida = document.querySelector("#moeda-de-saida").value
    const valorParaConverte2 = document.querySelector(".valor-convertido")
    const ValorParaMudas1 = document.querySelector(".valor-para-converter")

        // VERSÃO CORRIGIDA: Multiplica pela taxa da moeda de entrada e divide pela de saída ao contrário
    const ValorConvertido = (inputValorInserido * TipoDaMoeda[MoedaDeEntrada].taxa) / TipoDaMoeda[MoedaDeSaida].taxa;

 
    const ValoraConverter = inputValorInserido

    // 3. Define dinamicamente as casas decimais usando Intl.NumberFormat
    // Criamos uma lista de moedas que NÃO usam centavos (Zero Decimal Currencies)
    const moedasSemDecimais = ["JPY"]; // Se adicionar moedas como CLP ou KRW no futuro, coloque-as aqui

    // 4. Formata e exibe a Moeda de Entrada (Esquerda)
    if (MoedaDeEntrada === "BTC") {
        // Correção para o Bitcoin não sumir com o texto do elemento
        ValorParaMudas1.innerHTML = `₿ ${parseFloat(inputValorInserido).toFixed(8)}`;
    } else {
        // Verifica se a moeda de entrada está na lista das sem centavos
        const decimaisEntrada = moedasSemDecimais.includes(MoedaDeEntrada) ? 0 : 2;
        
        ValorParaMudas1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: MoedaDeEntrada,
            minimumFractionDigits: decimaisEntrada,
            maximumFractionDigits: decimaisEntrada
        }).format(inputValorInserido);
    }

    // 5. Formata e exibe a Moeda de Saída / Convertida (Direita)
    if (MoedaDeSaida === "BTC") {
        valorParaConverte2.innerHTML = `₿ ${ValorConvertido.toFixed(8)}`;
    } else {
        // Verifica se a moeda de saída está na lista das sem centavos
        const decimaisSaida = moedasSemDecimais.includes(MoedaDeSaida) ? 0 : 2;

        valorParaConverte2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: MoedaDeSaida,
            minimumFractionDigits: decimaisSaida,
            maximumFractionDigits: decimaisSaida
        }).format(ValorConvertido);
    }
}
//Função para mudar os nomes e imagens das moedas quando forem mudadas
function funcaoBuscaTipoMoeda(){
    const MoedaDeEntrada = document.querySelector("#moeda-de-entrada").value
    const MoedaDeSaida = document.querySelector("#moeda-de-saida").value

    //Busca o font-and ementos da labem e imagem pelos id e ela class
    const currencyName1 = document.getElementById('nome-moeda-entrada')
    const currencyName2 = document.getElementById('nome-moeda-saida')
    const currencyImage1 = document.querySelector('.currency-img1')
    const currencyImage2 = document.querySelector('.currency-img2')
    const valorParaConverte2 = document.querySelector(".valor-convertido")
    const ValorParaMudas1 = document.querySelector(".valor-para-converter")

    ValorParaMudas1.innerHTML = TipoDaMoeda[MoedaDeEntrada].simbulo
    valorParaConverte2.innerHTML = TipoDaMoeda[MoedaDeSaida].simbulo

    currencyName1.innerHTML = TipoDaMoeda[MoedaDeEntrada].nome;
    currencyImage1.src = TipoDaMoeda[MoedaDeEntrada].imagem;

    currencyName2.innerHTML = TipoDaMoeda[MoedaDeSaida].nome;
    currencyImage2.src = TipoDaMoeda[MoedaDeSaida].imagem;

    //console.log(TipoDaMoeda[MoedaDeEntrada].taxa);
    //console.log(TipoDaMoeda[MoedaDeSaida].taxa);
    
}
//Criando evento ouvinte, de um "click", e chamando a função
botaoConverter.addEventListener("click", funcaoConverterMoeda)
MoedaSelecionada1.addEventListener("change", funcaoBuscaTipoMoeda)
MoedaSelecionada2.addEventListener("change", funcaoBuscaTipoMoeda)
