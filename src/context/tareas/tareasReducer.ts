import { ADD_TAREA, DELETE_TAREA, TAREAS_PROYECTO, TAREA_STATUS, VALIDAR_TAREA, TAREA_ACTUAL, UPDATE_TAREA, CLEAN_TAREA } from "../../types"

export default (state, action) => {
    switch(action.type) {

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(t => t.proyectoId === action.payload)
            }

        case ADD_TAREA:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],    
                errorTarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }

        case DELETE_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(t => t.id !== action.payload)
            }

        case UPDATE_TAREA: 
        case TAREA_STATUS:
            return {
                ...state,
                tareas: state.tareas.map(t => t.id === action.payload.id ? action.payload : t)
            }

        case TAREA_ACTUAL:
            return {
                ...state,
                tareaSeleccionada: action.payload
            }

        case CLEAN_TAREA:
            return {
                ...state,
                tareaSeleccionada: null
            }

        default:
            return state
    }
}