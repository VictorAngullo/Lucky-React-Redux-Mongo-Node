import './PetAdoption.scss';

const PetAdoption = (props) => {

    console.log(props.location.state.adoption)

    const booleanToString = (boolean) => {
        if(boolean === true) {
            return boolean = "Sí";
        } else {
            return boolean = "No";
        }
    }

  return (
    <div className="adoptioncard">
        <div>
            <h2>Requisitos de Adopción</h2>
            <p>{props.location.state.adoption.requires}</p>
        </div>
        <div>
            <h2>Tasa de Adopción</h2>
            <p>{props.location.state.adoption.taxesOfAdoption} €</p>
        </div>
        <div>
            <h2>¿Se envía a otra ciudad?</h2>
            <p>{booleanToString(props.location.state.adoption.shipment)}</p>
        </div>
    </div>
  );
};

export default PetAdoption;