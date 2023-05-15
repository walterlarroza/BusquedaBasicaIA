function esPosicionValida(posicion) {
    const margenHorizontal = 0.5; 
    const posicionVerticalCorrecta = true; 
    const noHayObstrucciones = true; 
  
    if (posicion.h >= -margenHorizontal && posicion.h <= margenHorizontal) {
      if (posicionVerticalCorrecta) {
        if (noHayObstrucciones) {
          return true;
        }
      }
    }
    return false;
  }

// búsqueda exhaustiva
function busquedaExhaustiva(posicionInicial, incremento) {
  let posicionActual = posicionInicial;
  let desplazamiento = 0;

  while (true) {
    let nuevaPosicionIzquierda = posicionActual - incremento;
    if (esPosicionValida(nuevaPosicionIzquierda)) {
      posicionActual = nuevaPosicionIzquierda;
      desplazamiento -= incremento;
    } else {
      break;
    }
  }

  posicionActual = posicionInicial;

  while (true) {
    let nuevaPosicionDerecha = posicionActual + incremento;
    if (esPosicionValida(nuevaPosicionDerecha)) {
      posicionActual = nuevaPosicionDerecha;
      desplazamiento += incremento;
    } else {
      break;
    }
  }

  console.log("La nueva posición de montaje es:", posicionInicial + desplazamiento);
}


const posicionInicial = 5; 
const incremento = 1; 

console.log(busquedaExhaustiva(posicionInicial, incremento))

