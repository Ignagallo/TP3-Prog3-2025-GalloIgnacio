function App() {
    // inicializar variables y estados
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [resultado, setResultado] = React.useState("");
    const [color, setColor] = React.useState("");

    const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      setResultado("Ingresar datos validos");
      setColor("gray");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let mensaje = "";
    let colorResultado = "";

    if (imc < 18.5) {
      mensaje = `IMC: ${imc.toFixed(2)} - Nivel bajo de peso`;
      colorResultado = "gold";
    } else if (imc >= 18.5 && imc <= 24.9) {
      mensaje = `IMC: ${imc.toFixed(2)} - Nivel normal`;
      colorResultado = "green";
    } else if (imc >= 25 && imc <= 29.9) {
      mensaje = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
      colorResultado = "orange";
    } else {
      mensaje = `IMC: ${imc.toFixed(2)} - Obesidad`;
      colorResultado = "red";
    }

    setResultado(mensaje);
    setColor(colorResultado);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Calculadora de IMC</h2>

      <input
        type="number"
        placeholder="Peso en kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="number"
        placeholder="Altura en metros (ej. 1.75)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <button
        onClick={calcularIMC}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Calcular IMC
      </button>

      {resultado && (
        <p style={{ marginTop: "15px", fontSize: "18px", color: color }}>
          {resultado}
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
