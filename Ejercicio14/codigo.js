function clickC() {
    operacion_entera.value = "";
    numero_actual.value = "";
}

function clickCE() {
  operacion_entera.value = "";
}

function clickDel() {
  numero_actual.value = numero_actual.value.substring(0, numero_actual.value.length - 1);
}

function clickNumero(numero) {
  if(numero_actual.value == "0" || numero_actual.value == "") {
    numero_actual.value = numero;
  } else {
    numero_actual.value += numero;
  }
}

function clickPunto() {
  if(!(numero_actual.value[numero_actual.value.length - 1] == ".")) {
    numero_actual.value += ".";
  }
}

function clickOperacion(operador) {
  if(numero_actual.value[numero_actual.value.length - 1] == ".") {
    numero_actual.value = numero_actual.value.substring(0, numero_actual.value.length - 1);
  }
  operacion_entera.value = operacion_entera.value + numero_actual.value + operador;
  numero_actual.value = "0";
}

function clickIgual() {
  if(numero_actual.value[numero_actual.value.length - 1] == ".") {
    numero_actual.value = numero_actual.value.substring(0, numero_actual.value.length - 1);
  }

  if(operacion_entera.value[operacion_entera.value.length - 1].match(/\s/)) {
    operacion_entera.value += numero_actual.value;
    let resultado = eval(operacion_entera.value);
    numero_actual.value = resultado;
  }
}

function clickPositivoNegativo() {
  if(numero_actual.value[0] == "-") {
    numero_actual.value = numero_actual.value.substring(1,);
  } else if(numero_actual.value !== "0" && numero_actual.value[0] !== "-" ){
    numero_actual.value = "-" + numero_actual.value;
  }
}
