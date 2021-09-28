import Proyecto from "./Proyecto"
import proyectoContext from "../../context/proyectos/proyectoContext"
import { useContext, useEffect } from "react"


const ListadoProyectos = () => {

    // const proyectosContext =  useContext(proyectoContext)
    // const { proyectos } = proyectosContext


    // Si esto no funciona o lanza errores, borrarlo y usar lo de arriba,
    // pero parece funcionar eh
    const { proyectos, getProyectos } = useContext(proyectoContext)
    
    useEffect(() => {
        getProyectos()
    }, [])

    if (proyectos?.length === 0) return <p>No hay proyectos, comience creando uno</p>

    return (
        <ul className="listado-proyectos">
            {proyectos?.map((p, i) => (
                <Proyecto key={i} proyecto={p} />
            ))}
        </ul>
    )
}

export default ListadoProyectos