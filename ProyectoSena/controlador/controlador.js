let vista = new Vista()

function agregarInventario() {
    vista.mostrarPlantilla('emergenteCrearAlmacen','contenido')
}

function crearAlmacen() {
    vista.limpiarArea('contenido')
    vista.mostrarPlantilla('panel-3-botones','lateral')
}