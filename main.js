const compras = document.getElementById('compras');
const btn2 = document.getElementById('btn2');
const total = document.getElementById('total');
const resumen = document.createElement('p');
const opciones = document.getElementById('opciones');
const cantidad = document.getElementById('cantidad');
const ticket = 200;

btn2.addEventListener('click', () => {
    // console.log(opciones.value);
    console.log(cantidad.value);

    total.appendChild(resumen);

    if (opciones.value == 'Estudiante') {
        console.log(ticket);
        console.log('Sos Estudiante');
        resumen.innerText = 'Iria el resultado de estudiante';
    } 
    else if (opciones.value == 'Trainee'){
        console.log('Sos Trainee');
        resumen.innerText = 'Iria el resultado de Trainee';
    }    
    else if (opciones.value == 'Junior'){
        console.log('Sos Junior');
        resumen.innerText = 'Iria el resultado de Junior';
    }    
    

});





