$(function(){
    $("header").load("components/header.html");
    $("footer").load("components/footer.html");
    

    
    // LOGICA FOOTER RESPONSIVE

    function aplicarFooterResponsive() {
        const alturaPantalla = window.innerHeight;
        const info = document.getElementById('info-footer');

        if (alturaPantalla <= 700) {
            info.classList = "contact-info row row-cols-2"
        }else{
            info.classList = "contact-info row row-cols-1"
        }
    }

    setTimeout(()=>{
        // Llamamos a la función al cargar la página
        window.onload = aplicarFooterResponsive;
        // También aplicamos la clase al redimensionar la ventana
        window.onresize = aplicarFooterResponsive;
    }, 500);



});


