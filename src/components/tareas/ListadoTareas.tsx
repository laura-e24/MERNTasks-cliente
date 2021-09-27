import Tarea from "./Tarea"

const ListadoTareas = () => {

    const tareas = [
        {name: "React", status: true},
        {name: "Redux", status: false},
        {name: "MERN", status: true},
        {name: "Gatsby", status: false},
    ]

    return (
        <>
        <h2>Proyecto: React</h2>
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
        >
            Eliminar proyecto &times;
        </button>
        </>
    )
}

export default ListadoTareas