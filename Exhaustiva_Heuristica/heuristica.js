function calcularHeuristica(posicionActual, posicionObjetivo) {
    const distanciaHorizontal = Math.abs(posicionActual.h - posicionObjetivo.h);
    return distanciaHorizontal;
  }
  
  
  // busqueda heuristica
  function busquedaHeuristica(posicionInicial) {
    const colaPrioridad = [];
    colaPrioridad.push({ posicion: posicionInicial, heuristica: calcularHeuristica(posicionInicial) });
  
    while (colaPrioridad.length > 0) {
      const posicionActual = colaPrioridad.shift().posicion;
      if (esPosicionValida(posicionActual)) {
        console.log("La nueva posición de montaje es:", posicionActual);
        break;
      }
  
      const sucesores = [
        { posicion: posicionActual - 1, heuristica: calcularHeuristica(posicionActual - 1) },
        { posicion: posicionActual + 1, heuristica: calcularHeuristica(posicionActual + 1) }
      ];
      
      colaPrioridad.push(...sucesores);
      colaPrioridad.sort((a, b) => a.heuristica - b.heuristica);
    }
  }
  
  const posicionInicial = 5; 
  console.log(busquedaHeuristica(posicionInicial));
  