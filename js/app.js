let dni = prompt('Ingresa tu dni')
if ((dni!=0000000 && dni <= 99999999 && dni.length == 7) ||
(dni!=00000000 && dni <= 99999999 && dni.length == 8)){
    console.log(dni);
} else{
    alert('Ingrese un dni valido');
}
