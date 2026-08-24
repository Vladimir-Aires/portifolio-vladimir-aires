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

function getProjects() {
  const urlGitHub = "https://api.github.com/users/Vladimir-Aires/repos";
  // var loadingElement = document.getElementById('loading')

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      // loadingElement.style.display = 'none'
      //   showProjects(response);
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

// function showProjects(data){
//     var listElement = document.getElementById('my-projects-list')

//     for(let i = 0; i < data.length; i++){
//         let a = document.createElement('a')
//         a.href = data[i]['clone_url']
//         a.target = '_blank'
//         a.title = data[i]['description']
//         let linkText = document.createTextNode(data[i]['name'])
//         a.appendChild(linkText)
//         listElement.appendChild(a)
//     }
// }

getProjects();
