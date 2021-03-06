let uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, numeroPiso, numeroDepartamento;

uno = document.getElementById('uno');
dos = document.getElementById('dos');
tres = document.getElementById('tres');
cuatro = document.getElementById('cuatro');
cinco = document.getElementById('cinco');
seis = document.getElementById('seis');
siete = document.getElementById('siete');
ocho = document.getElementById('ocho');
nueve = document.getElementById('nueve');
cero = document.getElementById('cero');
borrar = document.getElementById('borrar');
tocar = document.getElementById('tocar');
numeroPiso = document.getElementById('nro-piso');
numeroDepartamento = document.getElementById('nro-dpto');
visor = document.getElementById('visor');
ayuda = document.getElementById('ayuda');
visorAyuda = document.getElementById('visor-ayuda');
portero = document.getElementById('portero');
luz = document.getElementById('luz');


uno.onclick = function (e) {
    marcarNumero(1);
}

dos.onclick = function (e) {
    marcarNumero(2);
}

tres.onclick = function (e) {
    marcarNumero(3);
}

cuatro.onclick = function (e) {
    marcarNumero(4);
}

cinco.onclick = function (e) {
    marcarNumero(5);
}

seis.onclick = function (e) {
    marcarNumero(6);
}

siete.onclick = function (e) {
    marcarNumero(7);
}

ocho.onclick = function (e) {
    marcarNumero(8);
}

nueve.onclick = function (e) {
    marcarNumero(9);
}

cero.onclick = function (e) {
    marcarNumero(0);
}

borrar.onclick = function (e) {
    numeroPiso.textContent = null;
    numeroDepartamento.textContent = null;
    visorAyuda.textContent = null;
    visor.innerHTML = "<span>Bienvenido!</span>"
    uno.classList.remove('btn-luz');
    dos.classList.remove('btn-luz');
    tres.classList.remove('btn-luz');
    cuatro.classList.remove('btn-luz');
    cinco.classList.remove('btn-luz');
    seis.classList.remove('btn-luz');
    siete.classList.remove('btn-luz');
    ocho.classList.remove('btn-luz');
    nueve.classList.remove('btn-luz');
    cero.classList.remove('btn-luz');
    ayuda.classList.remove('btn-luz');
    portero.classList.remove('btn-luz');
    borrar.classList.remove('btn-luz');
    tocar.classList.remove('btn-luz')
}

tocar.onclick = function (e) {
    let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarPiso(piso) && validarDepartamento(departamento)) {
        visor.innerHTML = `<marquee scrollamount=10> Llamando al piso ${numeroPiso.textContent} departamento ${numeroDepartamento.textContent}</marquee>`;
    } else {
        visor.innerHTML = `<marquee scrollamount=15> Error! Número de piso entre 0 y 48. Número de departamento entre 1 y 6.</marquee>`;
    }
}

ayuda.onclick = function (e) {
    visorAyuda.textContent = "Para usar el portero digital debera introducir el número de piso (0 - 48) y el número de departamento (1 - 6)";
}

portero.onclick = function (e) {
    visor.innerHTML = `<marquee scrollamount=15>Llamando al encargado del edificio.</marquee>`;
}

luz.onclick = function (e) {
    uno.classList.add('btn-luz');
    dos.classList.add('btn-luz');
    tres.classList.add('btn-luz');
    cuatro.classList.add('btn-luz');
    cinco.classList.add('btn-luz');
    seis.classList.add('btn-luz');
    siete.classList.add('btn-luz');
    ocho.classList.add('btn-luz');
    nueve.classList.add('btn-luz');
    cero.classList.add('btn-luz');
    ayuda.classList.add('btn-luz');
    portero.classList.add('btn-luz');
    borrar.classList.add('btn-luz');
    tocar.classList.add('btn-luz');
}

function validarDigitos(numero) {
    if (numero.length < 2) return true;
}

function validarPiso(numero) {
    if (numero >= 0 && numero <= 48) return true;
}

function validarDepartamento(numero) {
    if (numero >= 1 && numero <= 6) return true;
}

function marcarNumero(numero) {
    let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += numero;
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += numero;
}

