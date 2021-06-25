import "./PetData.scss";

const PetData = (props) => {
    console.log(props.location.state.data);
    return (
        <div className="cardpet">
            <div className="cardpet__data">
                <div>
                    <span>Especie</span>
                    <span>{props.location.state.data.species}</span>
                </div>
                <div>
                    <span>Fecha de nacimiento</span>
                    <span>{props.location.state.data.birthday}</span>
                </div>
                <div>
                    <span>Sexo</span>
                    <span>{props.location.state.data.sex}</span>
                </div>
                <div>
                    <span>Tamaño</span>
                    <span>{props.location.state.data.size}</span>
                </div>
                <div>
                    <span>Peso</span>
                    <span>{props.location.state.data.weight}</span>
                </div>
            </div>
            <div className="cardpet__personality">
                <h2>Personalidad</h2>
                <p> {props.location.state.data.personality} </p>
            </div>
            <div className="cardpet__history">
                <h2>Historia</h2>
                <p>{props.location.state.data.history}</p>
            </div>
        </div>
    );
};

export default PetData;
