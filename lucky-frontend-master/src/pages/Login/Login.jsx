
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/reducer/user.slice";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Logo from "../../assets/logo@3x.png";


const INITIAL_STATE = {
    email: "",
    password: ""
};

const Login =(props)=>{
    const dispatch = useDispatch();
    const [form, setForm] = useState(INITIAL_STATE);
    const {user} = useSelector((state) => state.user);
   
    const redirect = () => props.history.push('/home');
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("enviar el formulario");
        // console.log(form);
        await dispatch(loginAsync({
            form,
            cb:redirect,
        }));
        // redirect()
        // setForm(INITIAL_STATE);
        
    };


    return (
        <div className="container-fluid">
            {/* la linea siguiente redirige el usuario al home si ya esta logeado */}
            {user?<Redirect to='/home'/>:null}
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="text-center">
                            ¡Hola! para continuar, inicia sesión <br />o
                            crea una cuenta
                        </h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control "
                                    id="Password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="col-12">
                                <div className="form-group m-3 text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                                <div className="text-center m-3">
                                    <Link
                                        to="/register"
                                        className="btn btn-primary"
                                    >
                                        Crear cuenta
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}



export default Login;
