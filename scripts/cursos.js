const cursos = [
    {
        subject: "CSE",
        number: 110,
        title: "Introdução à Programação",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Este curso apresentará aos alunos a programação. Ele apresentará os elementos básicos das linguagens de programação (variáveis, decisões, cálculos, loops, arrays e entrada/saída) e como usá-los para resolver problemas.",
        technology: [
            "Python"
        ],
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Fundamentos da Web",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Este curso apresenta aos alunos a World Wide Web e as carreiras em design e desenvolvimento de websites. O curso é prático, com os alunos participando ativamente de projetos simples de design e programação web. Espera-se que os alunos que concluírem este curso compreendam as áreas de design e desenvolvimento web e tenham uma boa ideia se desejam seguir essa área como graduação.",
        technology: [
            "HTML",
            "CSS"
        ],
        completed: false
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programação com Funções",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Os alunos de CSE 111 tornam-se programadores de computador mais organizados, eficientes e poderosos ao aprenderem a pesquisar e chamar funções escritas por outros; a escrever, chamar, depurar e testar suas próprias funções; e a lidar com erros dentro das funções.",
        technology: [
            "Python"
        ],
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programação com Classes",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Este curso apresentará a noção de classes e objetos. Ele apresentará o encapsulamento em um nível conceitual. Também abordará herança e polimorfismo.",
        technology: [
            "C#"
        ],
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Fundamentos da Web Dinâmica",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Este curso se baseia em experiências anteriores em fundamentos da Web e programação. Os alunos aprenderão a criar sites dinâmicos que usam JavaScript para responder a eventos, atualizar conteúdo e criar experiências de usuário responsivas.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Desenvolvimento Web Frontend I",
        credits: 2,
        certificate: "Programação Web e de Computadores",
        description: "Este curso se baseia na experiência prévia com Fundamentos da Web Dinâmica e programação. Os alunos se concentrarão em experiência do usuário, acessibilidade, conformidade, otimização de desempenho e uso básico de APIs.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: false
    }
];

const listaCursos = document.querySelector("#lista-cursos");
const totalCreditos = document.querySelector("#total-creditos");

const botaoTodos = document.querySelector("#todos");
const botaoCse = document.querySelector("#cse");
const botaoWdd = document.querySelector("#wdd");

function exibirCursos(cursosExibidos) {
    listaCursos.innerHTML = "";

    cursosExibidos.forEach((curso) => {
        const cartao = document.createElement("div");

        cartao.classList.add("curso");

        if (curso.completed) {
            cartao.classList.add("concluido");
        }

        cartao.textContent = `${curso.subject} ${curso.number}`;

        listaCursos.appendChild(cartao);
    });

    const creditos = cursosExibidos.reduce(
        (total, curso) => total + curso.credits,
        0
    );

    totalCreditos.textContent = creditos;
}

function ativarBotao(botao) {
    botaoTodos.classList.remove("ativo");
    botaoCse.classList.remove("ativo");
    botaoWdd.classList.remove("ativo");

    botao.classList.add("ativo");
}

botaoTodos.addEventListener("click", () => {
    exibirCursos(cursos);
    ativarBotao(botaoTodos);
});

botaoCse.addEventListener("click", () => {
    const cursosCse = cursos.filter(
        (curso) => curso.subject === "CSE"
    );

    exibirCursos(cursosCse);
    ativarBotao(botaoCse);
});

botaoWdd.addEventListener("click", () => {
    const cursosWdd = cursos.filter(
        (curso) => curso.subject === "WDD"
    );

    exibirCursos(cursosWdd);
    ativarBotao(botaoWdd);
});

exibirCursos(cursos);
ativarBotao(botaoTodos);