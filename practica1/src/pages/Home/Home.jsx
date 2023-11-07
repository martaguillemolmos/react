import "./Home.css"

export const Home = () => {
    //Ejemplo 1.
    let nombre = "Toni";
    //Ejemplo 2. INTERPOLACIÓN CONDICIONAL
    let interruptor = true;

    return (
        <div className="homeDesign">
        { interruptor &&
            <>
        {/* Ejemplo 1. */}
        hola mundo {nombre}
        </>
        }
        </div>
    )
}