const ejemplo_render = document.getElementById("ejemplo_render");

const link_panorama = "https://cloud.chaos.com/collaboration/n/W1x2a5UWUVZhnbmba4JMbG?t=pan";


function panorama() {
    window.open(link_panorama, "_blank")
}

ejemplo_render.addEventListener("click", function(){
    panorama();
})