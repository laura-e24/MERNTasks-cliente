import Tarea from "./Tarea"
import proyectoContext from "../../context/proyectos/proyectoContext"
import { useContext } from "react"
import tareaContext from "../../context/tareas/tareasContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"


const ListadoTareas = () => {

    const { proyecto, deleteProyecto } = useContext(proyectoContext)
    const { tareasProyecto } = useContext(tareaContext)

    if (!proyecto) return <h2>Seleccione un proyecto</h2>  
    const [proyectoActual] = proyecto

    return (
        <>
        <h2>Proyecto: {proyectoActual.name}</h2>
        <ul className="listado-tareas">
            {tareasProyecto?.length === 0 ? (
                <li className="tarea">
                    <p>No hay tareas.</p>
                </li>
            ) : (
               <TransitionGroup>
                    {tareasProyecto?.map(tarea => (
                        <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                            <Tarea tarea={tarea} />
                        </CSSTransition>
                    ))}
               </TransitionGroup>
            )}
        </ul>
        <button
            type="button"
            className="btn btn-eliminar"
            onClick={() => deleteProyecto(proyectoActual.id)}
        >
            Eliminar proyecto &times;
        </button>
        </>
    )
}

export default ListadoTareas