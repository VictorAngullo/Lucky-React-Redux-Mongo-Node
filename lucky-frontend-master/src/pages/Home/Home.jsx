import './Home.scss';
// import React from 'react';
import logo from './mascota.png';
import hamster from '../../assets/hamster-news.png';
import iguana from '../../assets/iguana-news.png';
import perro from '../../assets/dog-news.png';
import { useDispatch, useSelector } from "react-redux";
// import Logout from '../../components/Logout';
import Nav from '../../components/Nav/Nav';
// import Nav from '../../components/index'

    // Datos a reemplazar o agregar
    // Celia : viene de user del back
    // Onclick en div Estado de adopcion para redirigir a la pagina de adopcion
    // Las noticias, que imagenes usar? Las descargue pero en zeplin no tienen ninguna funcionalidad
    // preguntar como importar las imagenes
    // los 3 puntitos para hacer slide? las dos tarjetas de derecha e izquierda?

const Home = (props) => {


    const {user} = props;
    // const {user} = useSelector((state) => state.user);
    console.log(user);

    return (
        <div className="home-container">
            <div className="home">
                <h1 className="home__title">¡Hola {user.username}!</h1>
                <div className="home__card">
                    <img src={logo} alt="adoption"/>
                    <div className="home__card-text">
                        <h2>Estado de la adopción</h2>
                        <p>Revisa el proceso de tus adopciones en curso</p>
                    </div>
                </div>
                <div className="home__separator"></div>
                <h2 className="home__news">Novedades</h2>
                <div className="home__new-box">
                    <img src={hamster} alt=""/>
                    <h2>10 curiosidades sobre las chinchillas</h2>
                </div>
                <div className="home__new-box">
                    <img src={iguana} alt=""/>
                    <h2>¿Sabes qué comen las Iguanas?</h2>
                </div>
                <div className="home__new-box">
                    <img src={perro} alt=""/>
                    <h2>10 lugares para visitar con tu perro en Madrid</h2>
                </div>
                <Nav/>
            </div>
            
        </div>
        
    )
}

export default Home;
