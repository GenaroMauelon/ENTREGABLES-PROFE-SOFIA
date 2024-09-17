let contenedor = document.getElementById("contenedor");

fetch("https://freetestapi.com/api/v1/movies")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(prod => {
            contenedor.innerHTML += `<h1> Titulo: ${prod.title} </h1>
                                     <h3> Año: ${prod.year} </h3>
                                     <h3> Genero: ${prod.genre} </h3>
                                     <h3> Rating: ${prod.rating} </h3>
                                     <h3> Director: ${prod.director} </h3>`
        })
    })
    .catch(err => console.log(err))
