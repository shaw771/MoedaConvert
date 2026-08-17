//Busquei o elemento pela classe
const botaoConverter = document.querySelector(".botao-de-converter")
//Busca elemento na area da selecão de Moeda #01
const MoedaSelecionada1 = document.querySelector("#moeda-de-entrada")
//Busca elemento na area da selecão de Moeda #02
const MoedaSelecionada2 = document.querySelector("#moeda-de-saida")

const TipoDaMoeda = {
    BRL: { nome: "Real", imagem: "../assets/real.png", taxa: 1, simbulo: "R$", },
    USD: { nome: "Dólar Americano", imagem: "../assets/dollar.png", taxa: 5.40, simbulo: "US$", },
    EUR: { nome: "Euro", imagem: "../assets/euro.png", taxa: 6.30, simbulo: "€", },
    GBP: { nome: "Libra Esterlina", imagem: "../assets/libra.png", taxa: 7.10, simbulo: "£", },
    ARS: { nome: "Peso Argentino", imagem: "../assets/peso-argentino.png", taxa: 0.006, simbulo: "$", },
    CAD: { nome: "Dólar Canadense", imagem: "../assets/dollar-canadense.png", taxa: 4.10, simbulo: "CA$", },
    AUD: { nome: "Dólar Australiano", imagem: "../assets/dollar-australiano.png", taxa: 3.70, simbulo: "A$", },
    JPY: { nome: "Iene Japonês", imagem: "../assets/iene.png", taxa: 0.038, simbulo: "¥", },
    CHF: { nome: "Franco Suíço", imagem: "../assets/franco-suico.png", taxa: 6.25, simbulo: "CHF", },
    CNY: { nome: "Yuán Chinês", imagem: "../assets/yuan.png", taxa: 0.78, simbulo: "¥", },
    BTC: { nome: "Bitcoin", imagem: "../assets/bitcoin.png", taxa: 350000.00, simbulo: "₿", } // Valor simbólico de exemplo
};

//função converter moeda
function funcaoConverterMoeda(){
    //Busca o valor dos elementos por class ou or id e tbm valores selecionados nas moedas de entrada e saida
    const inputValorInserido = document.querySelector(".input-valor-inserido").value
    const MoedaDeEntrada = document.querySelector("#moeda-de-entrada").value
    const MoedaDeSaida = document.querySelector("#moeda-de-saida").value
    const valorParaConverte2 = document.querySelector(".valor-convertido")
    const ValorParaMudas1 = document.querySelector(".valor-para-converter")
    //vareavel muedas calculadas
    const ValorConvertido = inputValorInserido * TipoDaMoeda[MoedaDeEntrada].taxa / TipoDaMoeda[MoedaDeSaida].taxa       
    const ValoraConverter = inputValorInserido * 1
    //Muda o simbulo conforme a busca
    ValorParaMudas1.innerHTML = TipoDaMoeda[MoedaDeEntrada].simbulo
    valorParaConverte2.innerHTML = TipoDaMoeda[MoedaDeSaida].simbulo
    //Mudas os elementos HTML, os numeros ja calculados 
    
    ValorParaMudas1.innerHTML = new Intl.NumberFormat(MoedaDeSaida,{
        style: "currency",
        currency: MoedaDeSaida
    }).format(ValoraConverter);
    
    valorParaConverte2.innerHTML = new Intl.NumberFormat(MoedaDeEntrada,{
        style: "currency",
        currency: MoedaDeEntrada
    }).format(ValorConvertido);
   
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
