import "./PetCard.scss";



const PetCard = (props) => {
  const km = props.pet.personalInfo.location === "Madrid" ? 1.5 : 360
  return (
    <div className="pet-card">
      <img className="pet-card__container--photo" src={props.pet.personalInfo.image} alt="broken"/>
      <div className="pet-card__container-text">
        <div className="pet-card__container-text--name">{props.pet.personalInfo.name}</div>
        <div className="pet-card__container-text--location">
          <span className="pet-card__container-text--city">{props.pet.personalInfo.location}</span>
          <span className="pet-card__container-text--km">{km}km</span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
