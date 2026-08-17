const convertButton = document.querySelector("convert-button")
const currencySelect = document.querySelector("#moedaDestino")
const currencySelect1 = document.ge("#moedaOrigem")

// Adiciona ouvinte de evento de mudaça no
currencySelect.addEventListener("change", changeCurrency)
currencySelect1.addEventListener("change", changeCurrency)

// Adicionar ouvinte de eventos Click do botão de ouvintes
convertButton.addEventListener("click", convertValues)
    alert('');
    const moedas = {
            BRL: {
            nome:"Real",
            imagem:"./assets/real.png",
            taxa: 1,
        },
            USD: {
            nome:"Dólar",
            imagem:"./assets/dollar.png",
            taxa: 5.40,
        },
            EUR: {
            nome:"Euro",
            imagem:"./assets/euro.png",
            taxa: 6.30,
        },

    }
    
changeCurrency()
function changeCurrency(){
    alert('check');
    //Busca o back-and
    const origem = document.querySelector("#moedaOrigem").value;
    const destino = document.querySelector("#moedaDestino").value;

    //Busca o font-and
    const currencyName1 = document.getElementById('valor-para-converter')
    const currencyName2 = document.getElementById('valor-convertido')

    const currencyImage1 = document.querySelector('.currency-img1')
    const currencyImage2 = document.querySelector('.currency-img2')  
  
    console.log(moedas[origem].nome);

    currencyName1.innerHTML = moedas[origem].nome;
    currencyImage1.src = moedas[origem].imagem;

    currencyName2.innerHTML = moedas[destino].nome;
    currencyImage2.src = moedas[destino].imagem;

    converter();

}

function converter(){

    const origem = document.querySelector("#moedaOrigem").value;
    const destino = document.querySelector("#moedaDestino").value;
    const valor = Number(document.querySelector("#valor").value);
    const currencyValueConverted = document.querySelector(".ValorParaConverte"); 
    const ValorParaConverte = document.querySelector(".currency-value-to-convert");
       

    //elemento que vai receber o valor convertido
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    //elemento que vai receber o valor  

      console.log(currencyValueConverted);
      console.log(inputCurrencyValue);


        const resultado = valor * moedas[origem].taxa / moedas[destino].taxa;

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(resultado);

        ValorParaConverte.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(resultado);

        
  
}

function convertValues(){
    //busca os valores do input e dos elementos conversao
    const inputCurrencyValue = document.querySelector(".input-currency").value

    //elemento que vai receber o valor convertido
    const currencyValueConverted = document.querySelector(".currency-value")    

    //Valores moedas
    const dolarToday = 5.2
    const euroToday = 6.2

}



