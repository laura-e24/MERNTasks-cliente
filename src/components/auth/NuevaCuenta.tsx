import { useState } from "react"
import { Link } from "react-router-dom"


const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({
        name: "",
        email: "",
        password: "",
        password_2: ""
    })

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">
                            Nombre
                        </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            value={usuario.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">
                            Correo electrónico
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={usuario.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">
                           Contraseña
                        </label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={usuario.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">
                           Confirmar contraseña
                        </label>
                        <input 
                            type="password"
                            id="password_2"
                            name="password_2"
                            placeholder="Confirmar contraseña"
                            value={usuario.password_2}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            value="Registrarme"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Volver al login
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
