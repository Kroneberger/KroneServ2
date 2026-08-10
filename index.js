
/*  --------------  */ 


const ig = document.getElementById("ig");

const ig_color = getComputedStyle(ig).color;

const wp = document.getElementById("wp");

const wp_color = getComputedStyle(wp).color;

const gm = document.getElementById("gm");

const gm_color = getComputedStyle(gm).color;



const link_gm = "https://mail.google.com/mail/?view=cm&fs=1&to=hernankroneberger@gmail.com";

const link_wp = "https://wa.me/+542916485917";

const link_ig = "https://instagram.com/hernan_krone21";





function hover(elemento){
    elemento.style.cursor = "pointer";
    elemento.style.color = "#ddd";
}


function abrirLink(url){
    window.open(url, "_blank");
}







gm.addEventListener("click", function(){
    abrirLink(link_gm);   
});

wp.addEventListener("click", function(){
    abrirLink(link_wp);   
});

ig.addEventListener("click", function(){
    abrirLink(link_ig);   
});

