const compras = document.getElementById('compras');
const btn2 = document.getElementById('btn2');
const total = document.getElementById('total');
const resumen = document.createElement('p');
const opciones = document.getElementById('opciones');
const cantidad = document.getElementById('cantidad');
const ticket = 200;

btn2.addEventListener('click', () => {
    // console.log(opciones.value);
    // console.log(cantidad.value);

    total.appendChild(resumen);

    if (opciones.value == 'Estudiante') {
        console.log('cantidad ' + cantidad.value)
        console.log('precio * ticket' + ticket);
        console.log('Sos Estudiante');
        resumen.innerText = Number(ticket * 0.80 / 1) * cantidad.value ;
    } 
    else if (opciones.value == 'Trainee'){
        console.log('cantidad ' + cantidad.value)
        console.log('precio ' + ticket);
        console.log('Sos Trainee');
        resumen.innerText = Number(ticket * 0.50 / 100) * cantidad.value ;
    }    
    else if (opciones.value == 'Junior'){
        console.log('cantidad ' + cantidad.value)
        console.log('precio ' + ticket);
        console.log('Sos Trainee');
        resumen.innerText = Number(ticket * 0.15 / 100) * cantidad.value ;
    }    
    

});





