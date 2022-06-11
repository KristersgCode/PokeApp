async function start() {
  let rand = Math.floor(Math.random() * 151);
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + rand + "/"
  );
  const data = await response.json();
  console.log(data);
  renderPokemon();

  function renderPokemon() {
    document.getElementById("pokemon").innerHTML = `
    <div class="flex">
    <div class="card">
    <div class="img-container">
    <img src="${data.sprites.other["official-artwork"].front_default}" alt=""> </img>
    </div>
    <div class="text">
        <p>Name: ${data.name}</p>
        <p>Weight: ${data.weight} kg</p>
        <p>Type: ${data.types[0].type.name}</p>
        </div>
       </div>
       <button onclick="start()">NEXT</button>
       </div>

        `;
  }
}

start();
