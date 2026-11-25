// Troca entre o tema escuro e o claro
function trocarTema() {
    document.body.classList.toggle("claro");
}

// Mostra bom dia, boa tarde ou boa noite na página inicial
function mostrarSaudacao() {
    let saudacao = document.getElementById("saudacao");

    if (saudacao == null) {
        return;
    }

    let hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = "Bom dia! 👋";
    } else if (hora < 18) {
        saudacao.textContent = "Boa tarde! 👋";
    } else {
        saudacao.textContent = "Boa noite! 👋";
    }
}

// Lista de projetos usada na página de projetos
let projetos = [
    {
        titulo: "Projeto Santander",
        descricao: "Atuo como engenheiro de dados na Extractta em um projeto do Santander, trabalhando com dados no Databricks e relatórios no Power BI.",
        tecnologias: "Databricks, DevOps, Power BI",
        link: ""
    },
    {
        titulo: "LicitaAI",
        descricao: "Sistema web para organizar editais de licitação, com cadastro de usuários, cadastro de editais e um painel com os editais que abrem nos próximos 30 dias. É o meu projeto de estágio.",
        tecnologias: "Java, Spring Boot, PostgreSQL",
        link: ""
    },
    {
        titulo: "Super Trunfo de JoJo",
        descricao: "Jogo de Super Trunfo com os Stands de JoJo's Bizarre Adventure, feito em C nas aulas de Fundamentos de Programação 2 na UTFPR.",
        tecnologias: "C",
        link: "https://github.com/lobrug/super-trunfo-insano"
    }
];

// Cria um card para cada projeto da lista
function mostrarProjetos() {
    let lista = document.getElementById("lista-projetos");

    if (lista == null) {
        return;
    }

    for (let i = 0; i < projetos.length; i++) {
        let card = "<article class='card'>";
        card += "<h3>" + projetos[i].titulo + "</h3>";
        card += "<p>" + projetos[i].descricao + "</p>";
        card += "<p class='tecnologias'>" + projetos[i].tecnologias + "</p>";

        if (projetos[i].link != "") {
            card += "<a href='" + projetos[i].link + "' target='_blank'>Ver no GitHub</a>";
        }

        card += "</article>";
        lista.innerHTML += card;
    }
}

// Mostra uma mensagem depois de enviar o formulário
function enviarMensagem(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada.";
    document.getElementById("formulario").reset();
}

mostrarSaudacao();
mostrarProjetos();
