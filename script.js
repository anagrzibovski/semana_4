const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Assim que saiu de casa você se depara com uma nova tecnologia",
        alternativas: [
            {
                 texto: "Isso é assustador",
                 afirmacao: "A tecnlogia é um problema nos dias de hoje,"
            },
          {
             texto: "Isso é interresante",
             afirmacao:  "A tecnologia veio para auxiliar nosso dia a dia."
          }
        ]
    },
    {
        enunciado: "Identifique como a nova tecnologia pode ser aplicada no campo ou carreira",
        alternativas: [
            {
                texto: "Aplicar uma nova tecnologia de maneira eficaz requer uma abordagem de estratégica",
                afirmacao: "nos auxiliando em tudo que precisamos como nos estudos,"
            },
            {
                texto:  "É uma capacidade que não trás benefício nenhum para nós",
                afirmacao: "ela prejudica o desemprenho de atividades,"
            }
        ]
    },
    {
        enunciado: "Quais são os tres tipos de inteligencia artificial",
        alternativas: [
            {
                texto:  "Inteligência artificial limita(ANI), Inteligência artificial geral(AGI)",
                afirmacao:"alem de ser uma forma mais facil de se mexer e interagir."
            },
            {
                texto: "Equívoco acreditar que a IA possui consciência e emoção como os seres humanos",
                afirmacao: "nos prejudica, tras nnehum tipo de beneficios entre outros."
            }
        ]
    },
    {
        enunciado:  "Quais são os desafios comuns no processamento de inteligência artificial",
        alternativas: [
            {
                texto:  "Muitos algaritimos de IA são considerados devido á dificuldade de interpretar como tomam decisões.",
                afirmacao:"Bem essa tecnologia chegou para melhorar nossas vidas!"
            },
            {
                texto:"Pensar que ferramentas e tecnologia de IA são inacessíveis ou extremamente caras",
                afirmacao: "A tecnologia veio para trazer mais dificuldade!"
            }
        ]
    },
    {
        enunciado:"Resuma tecnologia",
        alternativas: [
            {
                texto: "Ela não interfere em nada para nossos afazeres.",
                afirmacao:"Não vai ajudar as pessoas em momento algum."
            },
            {
                texto: "É uma ferramenta de ótimo uso que ira trazer uma nossa maneira de resolver as coisas!",
                afirmacao:"Ira ser muito utíl as pessoas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
