import Tarea from "./Tarea"
import proyectoContext from "../../context/proyectos/proyectoContext"
import { useContext } from "react"

const ListadoTareas = () => {

    const { proyecto, deleteProyecto, proyectos } = useContext(proyectoContext)

    const tareas = [
        {name: "React", status: true},
        {name: "Redux", status: false},
        {name: "MERN", status: true},
        {name: "Gatsby", status: false},
    ]

    if (!proyecto) return <h2>Seleccione un proyecto</h2>  
    const [proyectoActual] = proyecto

    return (
        <>
        <h2>Proyecto: {proyectoActual.name}</h2>
        <ul className="listado-tareas">
            {tareas.length === 0 ? (
                <li className="tarea">
                    <p>No hay tareas.</p>
                </li>
            ) : (
                tareas.map(tarea => (
                    <Tarea tarea={tarea} />
                ))
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