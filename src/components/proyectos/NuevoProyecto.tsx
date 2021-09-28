import { useContext, useState } from "react"
import proyectoContext from "../../context/proyectos/proyectoContext"

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext)
    const { formulario, errorFormulario, displayForm, addProyectos, displayError } = proyectosContext

    const [proyecto, setProyecto] = useState({
        name: "",
    })
    
    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (proyecto.name === "") {
            displayError()
            return;
        }

        addProyectos(proyecto)

        setProyecto({
            name: ""
        })
    }

    return (
        <>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => displayForm()}
        >
            Nuevo proyecto
        </button>
        {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre del proyecto"
                name="name"
                onChange={handleChange}
                value={proyecto.name}
            />
            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar proyecto"
            />
        </form>
        ) : null}
        {errorFormulario ? (
            <p className="mensaje error">El nombre del proyecto es obligatorio</p>
        ) : null}
        </>
    )
}

export default NuevoProyecto