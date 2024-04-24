window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const divAdd =  document.createElement("div")
  divAdd.style.display = 'flex'
  divAdd.style.justifyContent = 'center'

  const pAdd = document.createElement('p')
  pAdd.style.fontSize = '18px'
  pAdd.style.fontWeight = "600"
  const linkAdd = document.createElement("a")
  linkAdd.setAttribute("href",`formulario.html`)
  pAdd.innerText = '+Add Movie'
  linkAdd.appendChild(pAdd)

  const pFav = document.createElement('p')
  pFav.style.fontSize = '18px'
  pFav.style.fontWeight = "600"
  const linkFavorites = document.createElement("a")
  linkFavorites.setAttribute("href",`favoritas.html`)
  pFav.innerText = 'Favorites'
  linkFavorites.appendChild(pFav)
  
  app.appendChild(divAdd)
  divAdd.appendChild(linkAdd)
  divAdd.appendChild(linkFavorites)

  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
    fetch("http://localhost:3031/api/movies")
    .then((response) => response.json())
    .then((peliculas) => {

    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const linkEdit = document.createElement("a")
      linkEdit.setAttribute("href",`formulario.html?id=${movie.id}`)
      linkEdit.textContent = 'Edit Movie'

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      card.appendChild(linkEdit);
    })
  });

};
