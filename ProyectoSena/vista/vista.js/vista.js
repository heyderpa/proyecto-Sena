class Vista {
    constructor(){

    }

    mostrarModal(titulo, msj){
        document.getElementById("modal-titulo").innerHTML = titulo;
        document.getElementById("modal-cuerpo").innerHTML = msj;
    }

    mostrarPlantilla(form, destino) {
        let dest = document.getElementById(destino)
        dest.innerHTML = "";
        let template = document.getElementById(form);
        if (template){
            let clon = template.content.cloneNode(true);
            dest.appendChild(clon);
        }
    }

    limpiarArea(idArea){
        document.getElementById(idArea).innerHTML
    }
}
