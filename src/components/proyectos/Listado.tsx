import Proyecto from "./Proyecto"
import proyectoContext from "../../context/proyectos/proyectoContext"
import { useContext, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"


const ListadoProyectos = () => {

    // const proyectosContext =  useContext(proyectoContext)
    // const { proyectos } = proyectosContext


    // Si esto no funciona o lanza errores, borrarlo y usar lo de arriba,
    // pero parece funcionar eh
    const { proyectos, getProyectos } = useContext(proyectoContext)
    
    useEffect(() => {
        getProyectos()

        // eslint-disable-next-line
    }, [])

    if (proyectos?.length === 0) return <p>No hay proyectos, comience creando uno</p>

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos?.map((p, i) => (
                    <CSSTransition key={i} timeout={200} classNames="proyecto">
                        <Proyecto proyecto={p} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyectos