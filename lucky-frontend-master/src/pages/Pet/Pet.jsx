import './Pet.scss';
import React from 'react';
import { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { PetData, PetHealth, PetAdoption } from '../../components';
// import atras from '../../assets/atras.png'

const INITIAL_STATE = {
    pet: [],
    isLoading: true,
};

const SET_PET = 'SET_PET';
const SET_IS_LOADING = 'SET_IS_LOADING';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_PET:
            return { ...state, pet: {...payload}, isLoading: false };
        case SET_IS_LOADING:
            return { ...state, isLoading: payload };
    }
};

const Pet = (props) => {



    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(async () => {
        dispatch({
            type: SET_IS_LOADING,
            payload: true,
        });

        fetch(`http://localhost:5000/pets/${props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: SET_PET,
                    payload: data,
                })
            })
    }, []);

    console.log(state.pet)

    const renderPet = () => {
        return(
        <>
            {/* <Link to="/pets">
                    <img className="pets__back" src={atras} alt="back"></img>
            </Link> */}
            <Router>
                <div className="pet-profile">
                    {/* <div> */}
                    <img src={state.pet.personalInfo.image} alt={state.pet._id} />
                    <div className="pet-profile__main">
                        <h2>{state.pet.personalInfo.name}</h2>
                        <p>{state.pet.personalInfo.location}</p>
                    {/* </div> */}
                    </div>
                    <nav className="pet-profile__nav">
                        <Link className="pet-profile__link" to={{
                            pathname: `/pets/${state.pet._id}/data`,
                            state: {data: state.pet.personalInfo},
                        }}>
                            <h2>Datos</h2>
                        </Link>
                        <Link className="pet-profile__link" to={{
                            pathname: `/pets/${state.pet._id}/health`,
                            state: {health: state.pet.health},
                        }}>
                            <h2>Salud</h2>
                        </Link>
                        <Link className="pet-profile__link" to={{
                            pathname: `/pets/${state.pet._id}/adoption`,
                            state: {adoption: state.pet.adoption},
                        }}>
                            <h2>Adopción</h2>
                        </Link>
                    </nav>
                    <Switch>
                        <Route path="/pets/:id/data" exact component={PetData} data={state.pet.personalInfo}/>
                        <Route path="/pets/:id/health" exact component={PetHealth} data={state.pet.health}/>
                        <Route path="/pets/:id/adoption" exact component={PetAdoption} data={state.pet.adoption}/>
                    </Switch>
                </div>
            </Router>
            <Link className="pet-profile__adopt" to={{
                    pathname: `/pets/${state.pet._id}/adopt`
                }}>
                    <p>Adoptar</p>
            </Link>
        </>
        )
    };

    return(
        <>
            {state.isLoading
                ? <div>Cargando...</div>
                : renderPet()
            }
        </>
    )
}

export default Pet;