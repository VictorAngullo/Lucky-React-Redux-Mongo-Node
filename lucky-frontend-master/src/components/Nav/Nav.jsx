import { Link } from 'react-router-dom';
import './Nav.scss';
import home from '../../assets/Nav/home.png';
import mapa from '../../assets/Nav/mapa.png';
import mascota from '../../assets/Nav/mascota.png';
import perfil from '../../assets/Nav/perfil.png';
import ms from '../../assets/Nav/mS.png';

// tiene que recibir la prop de imagen de perfil
// y hay que poner las rutas cuando las tengamos

const Nav = () => {
    return(
        <nav className="nav">
        <Link to="/home">
        <div className="nav__btn">
             <img src={home} alt=""/>  
        </div>
        </Link>
        <div className="nav__btn">
            <img src={mapa} alt=""/>
        </div>
        <Link to="/pets">
        <div className="nav__btn">
            <img src={mascota} alt=""/>
        </div>
        </Link>
        <Link to="/profile">
        <div className="nav__btn--profile">
            <img src={perfil} alt=""/>
        </div>
        </Link>
        <Link to="/profileplus">
        <div className="nav__btn">
            <img src={ms} alt=""/>
        </div>
        </Link>
    </nav>
    )
}

export default Nav;

