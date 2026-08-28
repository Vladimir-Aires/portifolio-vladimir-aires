
const repositorios = [
  {
    url: "#testeURL",
    nomeProjeto: "Teste nome do projeto",
    descricao: "Teste descrição cweujvrjnvenjovenvenoevnjuevfvef",
    miniatura: "images/emBreve_template.png",
  },
  {
    miniatura: "images/emBreve_template.png",
  },
  {
    miniatura: "images/emBreve_template.png",
  },
  {
    miniatura: "images/emBreve_template.png",
  },
  {
    miniatura: "images/emBreve_template.png",
  },
  {
    miniatura: "images/emBreve_template.png",
  },
];

const secaoProjetos = document.querySelector(".my-projects-list");

function estruturador() {
  repositorios.forEach((repositorio) => {
    const cardProject = document.createElement("div");
    cardProject.classList.add("card-project");

    const img = document.createElement("img");
    img.classList.add("img-project");
    img.src = repositorio.miniatura;

    const acordeom = document.createElement("button");
    acordeom.classList.add("acordeom");
    acordeom.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

    const icone = acordeom.querySelector("i");

    acordeom.addEventListener("click", () => {
      icone.classList.remove("icone-animando");
      void icone.offsetWidth; // Força o reflow para reiniciar a animação
      icone.classList.add("icone-animando");
    });

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = repositorio.nomeProjeto;

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = repositorio.descricao;

    const cardNav = document.createElement("button");
    cardNav.classList.add("card-button");
    cardNav.textContent = "Acessar";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardNav);
    cardProject.appendChild(img);
    cardProject.appendChild(acordeom);
    cardProject.appendChild(cardBody);

    secaoProjetos.appendChild(cardProject);
  });
}

secaoProjetos.addEventListener("click", (event) => {
  const botaoClicado = event.target.closest(".acordeom");

  if (!botaoClicado) return;

  const cardAtual = botaoClicado.closest(".card-project");

  const cardAberto = cardAtual.classList.contains("ativo");

  document.querySelectorAll(".card-project.ativo").forEach((card) => {
    card.classList.remove("ativo");
  });

  if (!cardAberto) {
    cardAtual.classList.add("ativo");
  }
});
estruturador();
