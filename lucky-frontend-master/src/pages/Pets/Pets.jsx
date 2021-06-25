import './Pets.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import { getAllPets } from '../../api/pets.api';
import PetCard from '../../components/PetCard/PetCard';
import atras from '../../assets/atras.png'
import arrow from '../../assets/arrow.png'


// falta boton de filtro
// animales favoritos

const url = 'http://localhost:5000/pets'

const Pets = () => {
    const [pets, setPets] = useState([]);

    const getPets = async () => {
        let pets = await getAllPets(url);
        setPets(pets);
    }

    useEffect(() => {
        getPets()
    }, []);

    console.log(pets)

    return (
        <div className="pets">
            <div className="pets__container">
                <div className="pets__nav">
                <Link to="/Profile">
                    <img className="pets__back" src={atras} alt="back"></img>
                </Link>
                <input className="pets__input" type="text" placeholder="Buscar"/>
                </div>
                <div className="pets__favs">
                    <h2>Mis mascotas</h2>
                    <p>Accede al perfil de tus mascotas</p>
                    <div>INSERTE MASCOTAS FAVORITAS</div>
                </div>
                <div className="pets__adoption">
                    <a className="pets__adoption--link" href="">Estado de la adopción</a>
                    <img src={arrow} />
                </div>
                    <h2 className="pets__all">Animales en adopción</h2>
            </div>
            <div className="pets__all">
                {pets.map(pet => {
                    return (
                        <Link className="pets__link" key={pet._id} to={{
                            pathname: `/pets/${pet._id}`,
                            state: {id: pet._id}
                        }}>
                            <PetCard pet={pet} key={pet._id}></PetCard>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Pets;