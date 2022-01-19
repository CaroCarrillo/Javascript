
fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(respuesta => respuesta.json())
    .then(pokemon1 => {
        let element1 = document.getElementById('elemento1')
        element1.innerHTML = 
        `
        <img src='${pokemon1.sprites.front_shiny}' width="300px">
        <h1> El pokemon #1 es : ${pokemon1.name}<h1>
        <p> ${pokemon1.abilities[0].ability.name} es una de sus habilidades<p>
        <h3> Algunos de sus movimientos son: <h3>
        <ul>
        <li>${pokemon1.moves[7].move.name}
        <li>${pokemon1.moves[38].move.name}
        <li>${pokemon1.moves[5].move.name}
        <li>${pokemon1.moves[2].move.name}
        <li>${pokemon1.moves[9].move.name}
        <li>${pokemon1.moves[10].move.name}
        <li>${pokemon1.moves[12].move.name}
        <ul>
        <p> visita el siguiente link si quieres saber más de este:  ${pokemon1.species.url}<p>
        `;
        console.log(pokemon1) 
    })
    .catch(err => console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/4/')
    .then(response => response.json())
    .then(pokemon2 => {
        let element2 = document.getElementById('elemento2')
        element2.innerHTML = 
        `
        <p> Name: ${pokemon2.name}<p>
        <img src='${pokemon2.sprites.back_default}'>
        <p> Game indices ${pokemon2.game_indices[19].version.name}<p>`;
        console.log(pokemon2)
    })
    .catch(err => console.log(err))


    fetch('https://pokeapi.co/api/v2/pokemon/14/')
    .then(response => response.json())
    .then(pokemon3 => {
        let element3 = document.getElementById('elemento3')
        element3.innerHTML = `<p>${pokemon3.name}<p>
        <img src='${pokemon3.sprites.front_default}'><p>${pokemon3.height}<p>`;
        console.log(pokemon3)
    })
    .catch(err => console.log(err))