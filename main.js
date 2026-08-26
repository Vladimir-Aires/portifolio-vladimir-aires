//reestruturação de código conforme a seguinte lógica:
// vou salvar num array os objetos json dos principais repositórios que quero que apareçam no meu portifólio. Esses objetos vão aparecer como cards no html do meu repositório e vão ser gerados por doom

const repositorios = [
  {
    url: "#testeURL",
    nomeProjeto: "Teste nome do projeto",
    descricao: "Teste descrição cweujvrjnvenjovenvenoevnjuevfvef",
    miniatura:
      "https://img.magnific.com/vetores-gratis/design-plano-design-de-logotipo-ac_23-2149482027.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {},
  {},
  {},
  {},
  {}
];

const secaoProjetos = document.querySelector(".my-projects-list");

function estruturador() {
  repositorios.forEach((repositorio) => {
    const cardProject = document.createElement("div");
    cardProject.classList.add("card-project");

    
    const img = document.createElement("img");
    img.classList.add("img-project")
    img.src = repositorio.miniatura

    const acordeom = document.createElement("button");
    acordeom.classList.add("acordeom")

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title")
    cardTitle.textContent = repositorio.nomeProjeto

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description")
    cardDescription.textContent = repositorio.descricao

    const cardNav = document.createElement("button");
    cardNav.classList.add("card-button")
    cardNav.textContent = "Acessar"


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardNav);
    cardProject.appendChild(img)
    cardProject.appendChild(acordeom)
    cardProject.appendChild(cardBody);

    secaoProjetos.appendChild(cardProject)
  });
}

estruturador()
