import { useState } from "react"

const NuevoProyecto = () => {

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
    }

    return (
        <>
        <button
            type="button"
            className="btn btn-block btn-primario"
        >
            Nuevo proyecto
        </button>
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
        </>
    )
}

export default NuevoProyecto