function App() {
  // Iniciar el estado en el boton
  const [botonActivo, setBotonActivo] = React.useState("izquierdo");

  // Funcion para el click del boton
  const manejarClick = (lado) => {
    if (lado === "izquierdo") {
      setBotonActivo("derecho"); 
    } else {
      setBotonActivo("izquierdo"); 
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Botones alternados</h2>

      <button
        onClick={() => manejarClick("izquierdo")} // cuando se clickea
        disabled={botonActivo !== "izquierdo"}     // solo se habilita si es el activo
        style={{ marginRight: "20px", padding: "10px 20px" }}
      >Izquierdo</button>

      <button
        onClick={() => manejarClick("derecho")}
        disabled={botonActivo !== "derecho"}
        style={{ padding: "10px 20px" }}
      >Derecho</button>
    </div>
  );
}
// Renderizar
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
