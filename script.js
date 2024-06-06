const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-reultado");
const textoResultado = document.querySelector(".texto-reultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "pergunta1",
        alternativa: ["alternativa1", "alternativa2"]
    },
    {// segundo objeto da lita de perguntas
        enunciado: "pergunta2" ,
        alternativas: ["alternativa1", "alternativa2"]
    }
];