import "./PetHealth.scss";

const PetHealth = (props) => {

    console.log(props.location.state.health)

    const booleanToString = (boolean) => {
        if (boolean == true) {
            return (boolean = "Sí");
        } else {
            return (boolean = "No");
        }
    };

    return (
        <div className="cardhealth">
            <div className="cardhealth__data">
                <div>
                    <span>Vacunado</span>
                    <span>
                        {booleanToString(
                            props.location.state.health.vaccinated
                        )}
                    </span>
                </div>
                <div>
                    <span>Desparasitado</span>
                    <span>
                        {booleanToString(props.location.state.health.dewormed)}
                    </span>
                </div>
                <div>
                    <span>Sano</span>
                    <span>
                        {booleanToString(props.location.state.health.healthy)}
                    </span>
                </div>
                <div>
                    <span>Esterilizado</span>
                    <span>
                        {booleanToString(
                            props.location.state.health.sterilized
                        )}
                    </span>
                </div>
                <div>
                    <span>Identificado</span>
                    <span>
                        {booleanToString(props.location.state.health.identify)}
                    </span>
                </div>
                <div>
                    <span>Microchip</span>
                    <span>
                        {booleanToString(props.location.state.health.microchip)}
                    </span>
                </div>
            </div>
            <div className="cardhealth__know">
                <h2>Tienes que saber</h2>
                <p> {props.location.state.health.needToKnow} </p>  
            </div>
        </div>
    );
};

export default PetHealth;
