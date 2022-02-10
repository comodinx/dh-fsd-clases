window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    microdesafio1();
    microdesafio2();
}

function microdesafio1 () {
    //
    // ● En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
    //   'AGREGAR PELÍCULA', este cambie su color.
    document.querySelector('.moviesAddTitulo').addEventListener('mouseover', function () {
        this.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
}

function microdesafio2 () {
    //
    // ● Tenemos que crear una máquina de estados.
    //   Nuestro objetivo será detectar cuando el usuario tipee de corrido la
    //   palabra “secreto”, en el input para ingresar el título de la película. El problema es que
    //   solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando
    //   escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una
    //   variable estadoSecreto que empiece con el número 0. A partir de ahí, vamos a
    //   implementar un código interno que solo nosotros sabemos:
    //     ● 0 significa que todavía no escribió nada.
    //     ● 1 significa que escribió “s”.
    //     ● 2 significa que escribió “se”.
    //     ● 3 significa que escribió “sec”.
    //     ● 4 significa que escribió “secr”.
    //     ● 5 significa que escribió “secre”.
    //     ● 6 significa que escribió “secret”.

    let estadoSecreto = 0;

    document.querySelector('#titulo').addEventListener('keypress', e => {
        const key = e.key.toLowerCase();

        // 1. Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
        if (estadoSecreto === 0 && key === 's') {
            estadoSecreto++;
        }
        // 2. Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
        else if (estadoSecreto === 1 && key === 'e') {
            estadoSecreto++;
        }
        // 3. Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
        else if (estadoSecreto === 2 && key === 'c') {
            estadoSecreto++;
        }
        // 4. Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
        else if (estadoSecreto === 3 && key === 'r') {
            estadoSecreto++;
        }
        // 5. Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
        else if (estadoSecreto === 4 && key === 'e') {
            estadoSecreto++;
        }
        // 6. Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
        else if (estadoSecreto === 5 && key === 't') {
            estadoSecreto++;
        }
        // 7. Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se dispara una alerta que diga “SECRETO MAGICO”.
        else if (estadoSecreto === 6 && key === 'o') {
            estadoSecreto = 0;
            alert('SECRETO MAGICO');
        }
        // 8. Si no se cumple ninguna de las condiciones, el estado vuelve a 0.
        else {
            estadoSecreto = 0;
        }
    });
}