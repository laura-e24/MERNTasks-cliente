import { useContext } from "react"
import proyectoContext from "../../context/proyectos/proyectoContext"



const FormTarea = () => {

    const { proyecto } = useContext(proyectoContext)

    if (!proyecto) return null
    const [proyectoActual] = proyecto
    
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        name="name"
                        placeholder="Nombre de la tarea"
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
        </div>
    )
}

export default FormTarea