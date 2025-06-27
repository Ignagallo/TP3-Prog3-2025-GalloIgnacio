function App() {
  // Estados iniciales para numeros y operacion 
  const [numero1, setNumero1] = React.useState("");
  const [numero2, setNumero2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState("");

  // Funcion para cuando se hace clic en Calcular
  const calcular = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let res = "";

    // Verificar el ingreso de ambos numeros
    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Ingresar numeros validos");
      return;
    }

    switch (operacion) {
      case "suma":
        res = n1 + n2;
        break;
      case "resta":
        res = n1 - n2;
        break;
      case "multiplicacion":
        res = n1 * n2;
        break;
      case "division":
        res = n1 / n2;
        break;
      default:
        res = "Operacion no valida.";
    }
    setResultado("Resultado: " + res);
  };
  // funcion para inhabilitar la division cuando algun numero sea cero
  let esDivisionPorCero = false;
  
  if (operacion === "division") {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (n1 === 0 || n2 === 0) {
      esDivisionPorCero = true;
    }
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>Calculadora Flat 3.0</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <select
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <button
        onClick={calcular}
        disabled={esDivisionPorCero} 
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: esDivisionPorCero ? "#ccc" : "#28a745",
          color: "white",
          border: "none",
          fontWeight: "bold",
          cursor: esDivisionPorCero  ? "not-allowed" : "pointer"
        }}
      >
        Calcular
      </button>

      <p style={{ marginTop: "15px", fontSize: "18px" }}>{resultado}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
