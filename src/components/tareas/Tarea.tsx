import { useContext } from "react"
import tareaContext from "../../context/tareas/tareasContext"
import proyectoContext from "../../context/proyectos/proyectoContext"



const Tarea = ({ tarea }) => {

    const proyectosContext =  useContext(proyectoContext)
    const { proyecto } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const { deleteTarea, getTareas, updateStatus, saveTareaActual } = tareasContext

    const [proyectoActual] = proyecto

    const eliminarTarea = id => {
        deleteTarea(id)
        getTareas(proyectoActual.id)
    }

    const updateTareaStatus = tarea => {
        if (tarea.status) {
            tarea.status = false
        } else tarea.status = true

        updateStatus(tarea)
    }

    const selectTarea = tarea => {
        saveTareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.name}</p>
            <div className="estado">
                {tarea.status ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={() => updateTareaStatus(tarea)}
                    >
                        Completo
                    </button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => updateTareaStatus(tarea)}
                    >
                        Incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

export default Tarea