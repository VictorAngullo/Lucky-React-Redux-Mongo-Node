import './Filter.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterField, petFilterAsync } from '../../redux/reducer/pets.slice';
import { render } from '@testing-library/react';
import PetCard from '../../components/PetCard/PetCard';
import { Link } from 'react-router-dom'

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.pets.filter);
    const pets = useSelector((state) => state.pets.petsFiltered);


    
    const inputChange = (ev) => {
        const { name, value } = ev.target;

        dispatch(changeFilterField({ name, value }));
    }

    const submitFilter = async (ev) => {
        ev.preventDefault();

        const url = "http://localhost:5000/pets?location=" + filter.location + "&species=" + filter.specie;
        console.log(url);
        
        await dispatch(petFilterAsync(url));
        console.log(pets)
    }

    const renderPets = () => {
        return (
            <>
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
            </>
        )
    }

    return(
        <div className="filter">
            <h1>Filtrar mascota</h1>

            <form className="filter__form">
                <h2>Ciudad: </h2>
                <input 
                    type="text" 
                    name="location"
                    placeholder="Ciudad en la que se encuentra"
                    value={filter.location}
                    onChange={inputChange}
                />
                <h2>Especie: </h2>
                <input 
                    type="text" 
                    name="specie"
                    placeholder="De que especie es el animal"
                    value={filter.specie}
                    onChange={inputChange}
                />
                <button className="filter__button" onClick={submitFilter}>Filtrar!</button>
            </form>
            <div className="filter__result">
                <h2>Resultado</h2>
                <>
                    {pets.lenght > 0
                        ? renderPets() 
                        : <div></div>
                    }
                </>
            </div>
        </div>
    )
}

export default Filter;