const idcontenido =document.getElementById('contenido');
const classcajita =document.getElementsByClassName('cajita');

for (let i = 0; i < 500; i++) {

    const nuevacaja = document.createElement('div');
    nuevacaja.classList.add('cajita');
    
    const contenido =document.getElementById('contenido');
    contenido.appendChild(nuevacaja);

}








