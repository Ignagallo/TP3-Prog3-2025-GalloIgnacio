const operacion = document.getElementById('operacion');
const boton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// Deshabilitar el botón de calcular si es división
operacion.addEventListener('change', () => {
    if (operacion.value === 'division') {
        boton.disabled = true;
        resultado.textContent = "La operacion de division no está habilitada";
    } else {
        boton.disabled = false;
        resultado.textContent = " ";
    }
});

// Resolver la operacion y mostrar
boton.addEventListener('click', () => {
    // Tomar los valores ingresados
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    // Inicializar variable
    let res = 0;

    switch (operacion.value) {
        case 'suma':
          res = num1 + num2;
          break;
        case 'resta':
          res = num1 - num2;
          break;
        case 'multiplicacion':
          res = num1 * num2;
          break;
    }
    console.log("Resultado: ", res)
    resultado.textContent = "Resultado: " + res;
});