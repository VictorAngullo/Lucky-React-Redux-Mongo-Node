
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAsync} from "../../redux/reducer/user.slice";
import Logo from "../../assets/logo@3x.png";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: ""
};


const Register = (props) => {
    const dispatch = useDispatch();
    
    
    const [form, setForm] = useState(INITIAL_STATE);
    const {user} = useSelector((state) => state.user);


    const redirect = () => props.history.push('/home');
    
    const handleInput = (event) => {
        // const { name, value } = event.target;
        // setForm({ ...form, [name]: value });

        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("enviar el formulario");
        console.log(form);
        
        dispatch(registerAsync({
          form,
          cb: redirect,
      }));
      setForm(INITIAL_STATE);
    };
    
    
    
    return (
        
        <div className="container-fluid">
            {/* la linea siguiente redirige el usuario al home si ya esta logeado */}
            {user?<Redirect to='/home'/>:null}
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
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
                                    <label htmlFor="Username">
                                        Nombre de usuario
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Username"
                                        name="username"
                                        value={form.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </form>
                            <Link to="/login">
                                <h2>Ya Tengo Cuenta</h2>
                            </Link>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
