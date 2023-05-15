# BusquedaBasicaIA
búsquedas Heurística y Exhaustiva en concreto para resolver el problema del motor de combustion.

El algoritmo realiza una búsqueda exhaustiva explorando las posiciones en ambos sentidos, actualizando la posición actual según las condiciones de validez. Finalmente, muestra la nueva posición de montaje calculada.
Para determinar si una posición de montaje es válida en el problema del motor, hay que tener en cuenta: la posición horizontal debe estar dentro de los márgenes tolerados. La posición vertical debe ser correcta.se supone que no debe haber obstaculos en el camino del brazo al realizar el montaje.

El algoritmo realiza una búsqueda heurística utilizando el enfoque "primero el mejor". Comienza con la posición inicial y, en cada iteración, selecciona la posición con la mejor heurística de la cola de prioridad. Luego, genera los sucesores posibles, los inserta en la cola de prioridad y los ordena por heurística. Este proceso continúa hasta que se encuentra una posición válida y hay se muestra el resultado.
Una posible solucion sería evaluar la distancia entre la posición actual del bloque de fundición y la posición objetivo donde se debe realizar el montaje. En este caso,calcula la distancia horizontal entre la posición actual y la posición objetivo, y devuelve ese valor como medida de la calidad de la posición.
