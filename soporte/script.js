document.addEventListener('DOMContentLoaded', function () {
    var soporteLink = document.getElementById('soporte-link');
    var soporteItem = soporteLink.parentElement;

    soporteLink.addEventListener('click', function (e) {
        e.preventDefault();
        soporteItem.classList.toggle('open');
    });

    var cambioJefeLink = document.getElementById('cambio-jefe-link');
    var iframeContent = document.getElementById('iframe-content');
    var defaultContent = document.getElementById('default-content');

    cambioJefeLink.addEventListener('click', function (e) {
        e.preventDefault();
        defaultContent.style.display = 'none';  
        iframeContent.src = 'cambio_jefe/cambio_jefe.html';  
        iframeContent.style.display = 'block';  
    });
});
