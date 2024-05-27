function validarCredenciales() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMensaje = document.getElementById('errorMensaje');

    if (!username || !password) {
        errorMensaje.innerText = 'Por favor, complete todos los campos';
        return;
    }

    if (username === 'sebastian' && password === '12345') {
        alert(`Bienvenido ${username}`);
        errorMensaje.innerText = '';
    } else {
        errorMensaje.innerText = 'Error de usuario y/o contraseña';
    }
}
