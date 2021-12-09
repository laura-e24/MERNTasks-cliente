import { useContext, useState, useEffect } from "react"
import proyectoContext from "../../context/proyectos/proyectoContext"
import tareaContext from "../../context/tareas/tareasContext"



const FormTarea = () => {

    const { proyecto } = useContext(proyectoContext)

    const tareasContext = useContext(tareaContext)
    const { addTarea, validarTarea, errorTarea, getTareas, tareaSeleccionada, updateTarea, cleanTarea } = tareasContext
        
    useEffect(() => {
        if (tareaSeleccionada) {
            setTarea(tareaSeleccionada)
        } else setTarea({
            ...tarea,
            name: ''
        })
    }, [tareaSeleccionada])

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

        if (!tareaSeleccionada) {
            tarea.proyectoId = proyectoActual.id
            tarea.status = false
            addTarea(tarea)
        } else {
            updateTarea(tarea)
            cleanTarea()
        }

       
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
                        value={tareaSeleccionada ? "Editar tarea" : "Agregar tarea"}
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