const lista = document.getElementById("lista-tareas");

async function cargarTareas() {
  try {
    // Conectar la API
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    // Guardar tareas
    const datos = await respuesta.json();
    // Filtrar tareas completadas
    const completadas = datos.filter(t => t.completed === true);
    // Mostrar en HTML
    completadas.forEach(tarea => {
      const li = document.createElement("li");
      li.textContent = tarea.title;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error("Error al obtener tareas:", error);
  }
}
// Ejecutar funcion
cargarTareas(); 
