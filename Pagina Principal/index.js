const btn_contacto = document.getElementById("link_contacto");

const btn_servicios = document.getElementById("link_servicios");

const btn_informacion = document.getElementById("link_informacion");



const servicios_section = document.getElementById("servicios")

const informacion_section = document.getElementById("informacion")




const footer = document.querySelector("footer");

function clickContacto(){
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


btn_servicios.addEventListener("click", function(){
    shadowBox(servicios_section);
},{once: false});

btn_informacion.addEventListener("click", function(){
    shadowBox(informacion_section);
},{once: false});


btn_contacto.addEventListener("click", function(){
    clickContacto();
});