import { useContext } from "react"
import proyectoContext from "../../context/proyectos/proyectoContext"
import tareaContext from "../../context/tareas/tareasContext"

const Proyecto = ({ proyecto }) => {

    const proyectosContext =  useContext(proyectoContext)
    const { proyectoActual } = proyectosContext


    const tareasContext =  useContext(tareaContext)
    const { getTareas } = tareasContext

    const seleccionarProyecto = id => {
        proyectoActual(id)

        getTareas(id)        
    }

    return (
        <li>
            <button type="button" className="btn btn-blank" onClick={() => seleccionarProyecto(proyecto.id)}>
                {proyecto.name}
            </button>
        </li>
    )
}

export default Proyecto