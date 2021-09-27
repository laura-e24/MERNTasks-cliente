import SideBar from "../layout/Sidebar"
import Bar from "../layout/Bar"
import FormTarea from "../tareas/FormTarea"
import ListadoTareas from "../tareas/ListadoTareas"

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <SideBar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos