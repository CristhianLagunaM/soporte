document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cambioJefeForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
        // Aquí puedes añadir lógica adicional para manejar el formulario
    });
});
