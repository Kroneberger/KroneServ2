/*  BOTONES DEL NAV   */

const btn_contacto = document.getElementById("link_contacto");

const btn_servicios = document.getElementById("link_servicios");

const btn_informacion = document.getElementById("link_informacion");


/* SECCIONES SERVICIOS E INFORMACION */
const servicios_section = document.getElementById("servicios")

const informacion_section = document.getElementById("informacion")

/* HREF DE SERVICIOS E INFORMACION   */

const href_servicios = "Servicios/index.html"

const href_informacion = "Informacion/index.html"



const footer = document.querySelector("footer");

function clickContacto(){
    footer.classList.remove("footer__contacto-animation");

    void footer.offsetWidth;
    
    footer.classList.add("footer__contacto-animation");
}

function shadowBox(element) {
    element.classList.remove("boxShadowClick");

    void footer.offsetWidth;

    element.classList.add("boxShadowClick");

    setTimeout(() => {
    element.classList.remove("boxShadowClick");
    }, 3500);
}

function href(ruta) {
    window.location.href = ruta;
}

/* ----- FUNCIONES DEL NAV ------*/

btn_servicios.addEventListener("click", function(){
    shadowBox(servicios_section);
},{once: false});

btn_informacion.addEventListener("click", function(){
    shadowBox(informacion_section);
},{once: false});

btn_contacto.addEventListener("click", function(){
    clickContacto();
}, {once: false});

/*-------- HREF DE SECCIONES ------- */

servicios_section.addEventListener("click", function(){
    href(href_servicios);
})

informacion_section.addEventListener("click", function(){
    href(href_informacion);
})

