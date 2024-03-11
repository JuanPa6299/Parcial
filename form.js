//Reloj
function updateTime() {
    var now = new Date();

    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateString = day + ', ' + date + ' de ' + month + ' de ' + year;
    document.getElementById('f').innerHTML = timeString + ' - ' + dateString;
    setTimeout(updateTime, 1000);
}

window.onload = function() {
    updateTime(); // Iniciar el reloj al cargar la página

    var formulario = document.getElementById('formulario');
    var nombre = formulario.nombre;
    var correo = formulario.correo;
    var genero = formulario.genero;
    var terminos = formulario.terminos;
    var error = document.getElementById('error');

    function validarName(e) {
        if (nombre.value.trim() === '') {
            error.style.display = 'block';
            error.innerHTML = '<li>Complete name</li>';
            console.log('Please add a name');
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarEmail(e) {
        if (correo.value.trim() === '') {
            error.style.display = 'block';
            error.innerHTML = '<li>Complete email</li>';
            console.log('Please add an email');
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarGender(e) {
        if (!genero.value) {
            error.style.display = 'block';
            error.innerHTML = '<li>Select gender</li>';
            console.log('Please select gender');
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTerms(e) {
        if (!terminos.checked) {
            error.style.display = 'block';
            error.innerHTML = '<li>Agree terms & conditions</li>';
            console.log('Please agree terms & conditions');
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    // Función encargada de validar todos los campos
    function validarForm(e) {
        // Reiniciamos el error para que inicie sin mensaje
        error.innerHTML = '';
        validarName(e);
        validarEmail(e);
        validarGender(e);
        validarTerms(e);
    }

    formulario.addEventListener('submit', validarForm);
};