import { useReducer } from "react";
import tareaContext from "./tareasContext";
import tareaReducer from "./tareasReducer";
import { v4 } from "uuid"
import { TAREAS_PROYECTO, ADD_TAREA, VALIDAR_TAREA, DELETE_TAREA, TAREA_STATUS, TAREA_ACTUAL, UPDATE_TAREA, CLEAN_TAREA } from "../../types";

const TareaState = props => {

    const initialState = {
        tareas: [
            {id: 1, name: "React", status: true, proyectoId: 1},
            {id: 2, name: "Redux", status: false, proyectoId: 2},
            {id: 3, name: "MERN", status: true, proyectoId: 3},
            {id: 4, name: "Gatsby", status: false, proyectoId: 1},
            {id: 5, name: "React", status: true, proyectoId: 1},
            {id: 6, name: "Redux", status: false, proyectoId: 2},
            {id: 7, name: "MERN", status: true, proyectoId: 3},
            {id: 8, name: "MERN", status: true, proyectoId: 3},
        ],
        tareasProyecto: null,
        errorTarea: null,
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const getTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const addTarea = tarea => {
        tarea.id = v4()
        dispatch({
            type: ADD_TAREA,
            payload: tarea
        })
    }

    const deleteTarea = id => {
        dispatch({
            type: DELETE_TAREA,
            payload: id
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const updateStatus = tarea => {
        dispatch({
            type: TAREA_STATUS,
            payload: tarea
        })
    }

    const saveTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const updateTarea = tarea => {
        dispatch({
            type: UPDATE_TAREA,
            payload: tarea
        })
    }

    const cleanTarea = () => {
        dispatch({
            type: CLEAN_TAREA
        })
    }

    return (
        <tareaContext.Provider 
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                getTareas,
                addTarea,
                deleteTarea,
                validarTarea,
                updateStatus,
                saveTareaActual, 
                updateTarea, 
                cleanTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState