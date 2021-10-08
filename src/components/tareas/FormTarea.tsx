import { useContext, useState } from "react"
import proyectoContext from "../../context/proyectos/proyectoContext"
import tareaContext from "../../context/tareas/tareasContext"



const FormTarea = () => {

    const { proyecto } = useContext(proyectoContext)

    const tareasContext = useContext(tareaContext)
    const { addTarea, validarTarea, errorTarea, getTareas } = tareasContext
        
    const [tarea, setTarea] = useState({
        name: "",
        proyectoId: "",
        status: false
    })

    if (!proyecto) return null
    const [proyectoActual] = proyecto


    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (tarea.name.trim() === "") {
            validarTarea()
            return
        }

        tarea.proyectoId = proyectoActual.id
        tarea.status = false
        addTarea(tarea)
        getTareas(proyectoActual.id)
        setTarea({
            ...tarea,
            name: ""
        })
    }

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        name="name"
                        placeholder="Nombre de la tarea"
                        value={tarea.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value="Agregar tarea"
                    />
                </div>
            </form>
            {errorTarea ? (
                <p className="mensaje error">El nombre de la tarea es obligatorio</p>
            ) : null}
        </div>
    )
}

export default FormTarea