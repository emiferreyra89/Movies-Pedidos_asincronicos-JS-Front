window.onload = () => {
  console.log("estamos en Home");

  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

    fetch(`http://localhost:3031/api/movies/`)
    .then((result) => result.json())
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
        linkEdit.setAttribute("href",`/update/${movie.id}`)
        linkEdit.textContent = 'Edit Movie'

        // const textEdit = document.createElement("p");
        // textEdit.innerText = "Edit Movie"

        container.appendChild(card)
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
        card.appendChild(linkEdit);
        //linkEdit.appendChild(textEdit)
      });
  });
  
};
