document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cambioJefeForm');
    const dependenciaSelect = document.getElementById('dependencia');

    // Datos de supervisores actuales por dependencia (mockup)
    const supervisores = {
        dep1: "Supervisor 1",
        dep2: "Supervisor 2",
        // Puedes añadir más dependencias y supervisores aquí según sea necesario
    };

    let formData = {}; // Objeto para almacenar datos del formulario

    dependenciaSelect.addEventListener('change', function() {
        const selectedDependencia = dependenciaSelect.value;
        if (selectedDependencia) {
            const supervisorActual = supervisores[selectedDependencia] || 'Desconocido';
            mostrarVentanaAviso(supervisorActual, selectedDependencia);
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');

        // Simulación de envío de formulario
        // Aquí iría tu lógica real para enviar los datos al servidor

        // Resetear el formulario después de enviarlo
        form.reset();
    });

    function mostrarVentanaAviso(supervisorActual, selectedDependencia) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <p>El supervisor actual de esta dependencia es ${supervisorActual}.</p>
            <p>¿Desea continuar?</p>
            <button id="btnAceptar">Continuar</button>
            <button id="btnCancelar">Cancelar</button>
        `;

        const btnAceptar = popup.querySelector('#btnAceptar');
        btnAceptar.addEventListener('click', function() {
            overlay.remove();
            form.removeEventListener('submit', onSubmitHandler); // Eliminar el listener para evitar duplicados
            form.submit(); // Envía el formulario después de aceptar el aviso
        });

        const btnCancelar = popup.querySelector('#btnCancelar');
        btnCancelar.addEventListener('click', function() {
            overlay.remove();
            // No es necesario restablecer la selección de dependencia aquí
        });

        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    // Evento para almacenar datos del formulario a medida que se ingresan
    const camposFormulario = ['codigoSupervisor', 'nombre', 'primerApellido', 'segundoApellido', 'numeroDocumento', 'fechaInicio', 'fechaFin'];
    camposFormulario.forEach(campo => {
        form[campo].addEventListener('input', function() {
            formData[campo] = form[campo].value;
        });
    });

});
