import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { ADD_PROYECTO, FORMULARIO_PROYECTO, GET_PROYECTOS, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, DELETE_PROYECTO } from "../../types"
import { v4 } from "uuid"

const ProyectoState = props => {

    const proyectos = [
        {id: 1, name: "React"},
        {id: 2, name: "Java"},
        {id: 3, name: "Python"},
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState)
    const displayForm = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    
    const getProyectos = () => { 
        dispatch({
            type: GET_PROYECTOS,
            payload: proyectos
        })
    }

    const addProyectos = (proyecto) => { 
        proyecto.id = v4()

        dispatch({
            type: ADD_PROYECTO,
            payload: proyecto
        })
    }

    const displayError = () => { 
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const proyectoActual = (proyectoId) => { 
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    const deleteProyecto = (proyectoId) => { 
        dispatch({
            type: DELETE_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider 
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                displayForm,
                getProyectos,
                addProyectos,
                displayError,
                proyectoActual,
                deleteProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState