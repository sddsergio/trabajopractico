// const compras = document.getElementById('compras');
// const btn2 = document.getElementById('btn2');
// const total = document.getElementById('total');
const resumen = document.createElement('p');
const opciones = document.getElementById('opciones');
const cantidad = document.getElementById('cantidad');
const ticket = 200;

btn2.addEventListener('click', () => {
    total.appendChild(resumen);

    if (opciones.value == 'Estudiante'){
        resumen.innerText = cantidad.value * (ticket - (ticket * 0.80));
    } 
    else if (opciones.value == 'Trainee'){
        resumen.innerText = cantidad.value * (ticket - (ticket * 0.50));
    }    
    else if (opciones.value == 'Junior'){
        resumen.innerText = cantidad.value * (ticket - (ticket * 0.15));
    }    
});





