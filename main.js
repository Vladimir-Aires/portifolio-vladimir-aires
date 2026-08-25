//reestruturação de código conforme a seguinte lógica:
// vou salvar num array os objetos json dos principais repositórios que quero que apareçam no meu portifólio. Esses objetos vão aparecer como cards no html do meu repositório e vão ser gerados por doom

const repositorios = [
  {
    url,
    nomeProjeto,
    descricao,
    miniatura,
  },
  {},
  {},
];

const secaoProjetos = document.querySelector(".my-projects-list");


function estruturador(){
  repositorios.forEach((repositorio) => {
    const card = document.createElement("div");
    card.classList.add("card-project");

    const cardButton = document.createElement("button");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const cardNav = document.createElement("button")
  })
}
