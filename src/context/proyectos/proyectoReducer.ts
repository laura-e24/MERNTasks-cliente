import { ADD_PROYECTO, FORMULARIO_PROYECTO, GET_PROYECTOS, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, DELETE_PROYECTO } from "../../types"

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }

        case GET_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }

        case ADD_PROYECTO:
            return {
                ...state,
                // proyectos: [...state.proyectos, action.payload]
                proyectos: state.proyectos.concat(action.payload),
                formulario: false,
                errorFormulario: false
            }

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }

        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(p => p.id === action.payload)
            }

        case DELETE_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(p => p.id !== action.payload),
                proyecto: null
            }


        default: 
            return state

    }
}