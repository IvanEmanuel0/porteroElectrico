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


uno.onclick = function (e) {
    let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '1';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '1';
}

dos.onclick = function (e) {
    let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '2';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '2';
}

tres.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '3';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '3';
}

cuatro.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '4';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '4';
}

cinco.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '5';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '5';
}

seis.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '6';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '6';
}

siete.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '7';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '7';
}

ocho.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '8';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '8';
}

nueve.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '9';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '9';
}

cero.onclick = function (e) {
        let piso, departamento;
    piso = numeroPiso.textContent;
    departamento = numeroDepartamento.textContent;
    if (validarDigitos(piso)) numeroPiso.textContent += '0';
    else if (validarDigitos(departamento)) numeroDepartamento.textContent += '0';
}

borrar.onclick = function (e) {
    numeroPiso.textContent = null;
    numeroDepartamento.textContent = null;
    visorAyuda.textContent = null;
    visor.innerHTML = "<span>Bienvenido!</span>"
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
    visorAyuda.textContent = "Para usar el portero digital debera introducir el número de piso (0 - 48) y el número de departamento (1 - 6)"
}

portero.onclick = function (e) {
    visor.innerHTML = `<marquee scrollamount=15>Llamando al encargado del edificio.</marquee>`;
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

