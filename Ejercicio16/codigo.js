function recargarCadaSegundo() {
    function recargarHora() {
        let hora = new Date();
        let horas = hora.getHours();
        let minutos = hora.getMinutes();
        let segundos = hora.getSeconds();
            
        document.getElementById("reloj").innerText = "" + horas + " : " + minutos + " : " + segundos;
    }

    setInterval(recargarHora, 1000);
}

window.onload = function() {
    recargarCadaSegundo();
}