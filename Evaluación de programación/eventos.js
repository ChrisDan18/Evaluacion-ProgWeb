const idcontenido =document.getElementById('contenido');
const classcajita =document.getElementsByClassName('cajita');

let cajitas = [];
cajitas.push('500');

let elementoscajitas = document.getElementsByClassName('cajita');
let arraycajitas = Array.from(cajitas);

for (let i = 0; i < 500; i++) {

    const nuevacaja = document.createElement('div');
    nuevacaja.classList.add('cajita');
    
    const contenido =document.getElementById('contenido');
    contenido.appendChild(nuevacaja);

}








