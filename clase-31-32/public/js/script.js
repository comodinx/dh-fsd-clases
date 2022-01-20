function destroyMovie (id) {
    if (confirm('Are you sure? This is permanent!')) {
        document.getElementById('movies-delete-form').submit();
    }
}