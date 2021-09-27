import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {

    const [usuario, setUsuario] = useState({
        email: "",
        password: "",
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
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleSubmit}>
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
                        <input 
                            type="submit"
                            value="Iniciar sesión"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Crear cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login
