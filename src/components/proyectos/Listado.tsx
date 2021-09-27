import Proyecto from "./Proyecto"

const ListadoProyectos = () => {

    const proyectos = [
        {name: "React"},
        {name: "Java"},
        {name: "Python"},
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map(p => (
                <Proyecto proyecto={p} />
            ))}
        </ul>
    )
}

export default ListadoProyectos