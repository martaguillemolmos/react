import "./Login.css"

export const Login = () => {
    // Array de objectos
    let alumnos = [
        {
            id: 1,
            nombre: "Marta",
        },
        {
            id: 2,
            nombre: "Pablo",
        },
        {
            id: 3,
            nombre: "Gaston",
        }
    ]
    // Función OnClick
    const elegir = (elemento) =>
    console.log(elemento)

    return (
     <div className= "loginDesign">
        {
            alumnos.map(
                (alumno) => {
                    return (
                        <div key={alumno.id} onClick={() =>elegir(alumno)}>
                            {alumno.nombre}
                        </div>
                    )
                }
            )
        }
     </div>
    )
}