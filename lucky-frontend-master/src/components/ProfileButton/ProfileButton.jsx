import './ProfileButton.scss'
import arrow from '../../assets/arrow.png';


const ProfileButton = (props) => {
    return (   
        <div class="profile-button"> 
        <div class="profile-button__icon">
            <img src={props.icon} alt="icon"/>
        </div>
        <div class="profile-button__text">{props.text}</div>
        <div class="profile-button__arrow">
            <img src={arrow} alt=""/>
        </div>
    </div>
    )
}

export default ProfileButton;


