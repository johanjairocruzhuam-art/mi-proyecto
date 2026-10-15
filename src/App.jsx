import Saludo from "./components/Saludo";

function App() {
  const amigo = "Daniel";

  return (
    <>
      <h1>Mi primera aplicación React</h1>
      <p>Estoy aprendiendo React.</p>
      <p>Tengo una buena amistad con mi amigo {amigo}.</p>
      <Saludo />
    </>
  );
}

export default App;
