import './Saludo.css'

function Saludo(){

    const comidasFavorito = [
        "Comida1", "Comida2", "Comida3" 
    ]
    return(
        <>
        <h1 className='SaludoComponente'>Soy Johan Jairo  Cruz Huaman </h1>
        <p>Bienvenido a la creaciòn de aplicaciones con  React</p>
        <h2>Lista de mis comidas favoritas</h2>
        <ol>
            <li>{comidasFavorito[0]}</li>
            <li>{comidasFavorito[1]}</li>
            <li>{comidasFavorito[2]}</li>
        </ol>
        </>
        
    );
}

export default Saludo