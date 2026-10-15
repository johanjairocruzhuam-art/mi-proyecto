import Saludo from "./components/Saludo";

function App() {
  const profesor = "Edwind";

  return (
    <>
      <h1>Johan Jairo Cruz Huaman</h1>
      <p>Soy estudiante de Programación Web y estoy aprendiendo React.</p>
      <p>Gracias  a mi profesor {profesor}.</p>
      <section>
        Estoy aprendiendo React para desarrollar mis habilidades en programación web.
      </section>
      <Saludo />
    </>
  );
}

export default App;
