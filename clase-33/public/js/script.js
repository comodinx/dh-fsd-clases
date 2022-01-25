function destroyMovie (id) {
    if (confirm('¿Estás segur@? Esto es permanente!')) {
        document.getElementById('movies-delete-form').submit();
    }
}