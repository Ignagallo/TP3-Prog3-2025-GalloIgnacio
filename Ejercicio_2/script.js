const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const entrada = document.getElementById("entrada");
const boton = document.getElementById("filtrar");
const lista = document.getElementById("lista-palabras");
const mensaje = document.getElementById("mensaje");

// Mostrar palabras de la lista
function mostrarPalabras(array) {
    lista.innerHTML = "";
    array.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra;
        lista.appendChild(li);
    });
}

// Mostrar las palabras
mostrarPalabras(palabras);

// Filtrado
boton.addEventListener("click", () => {
    const texto = entrada.value.trim().toLowerCase();
    if (texto === "") {
        mensaje.textContent = "Ingresá un texto para filtrar.";
        lista.innerHTML = "";
        // Volvemos a mostrar las palabras dispobibles
        mostrarPalabras(palabras);
        return;
    }

    const filtradas = palabras.filter(p => p.toLowerCase().includes(texto));
    if (filtradas.length === 0){
        mensaje.textContent = "No se encontraron coincidencias."
    } else {
        mensaje.textContent = "";
    }
    mostrarPalabras(filtradas);
});