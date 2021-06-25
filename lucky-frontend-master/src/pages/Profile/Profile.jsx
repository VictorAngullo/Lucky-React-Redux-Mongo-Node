import './Profile.scss'
import Nav from '../../components/Nav/Nav'
import foto from '../../assets/Nav/perfil@3x.png'

// import Nav from '../../components'
import ProfileButton from '../../components/ProfileButton/ProfileButton'
import chico from '../../assets/chico_2.png'
import localizacion from '../../assets/localization.png'
import favoritos from '../../assets/favoritosCopy.png'
import notificaciones from '../../assets/notification.png'
import mascota from '../../assets/Nav/mascota.png'
import apadrina from '../../assets/apadrina.png'
import donar from '../../assets/donar.png'




const title = [ "Mi perfil", "Direcciones", "Favoritos", "Notificaciones", "Estado de la adopción", "Apadrinar", "Donar" ];

const Profile = () => {
    return (
        <div class="profile">
            <img class="profile__img" src={foto}></img>
            <div class="profile__container"> 
                <ProfileButton icon={chico} text={title[0]}/>
                <ProfileButton icon={localizacion} text={title[1]}/>
                <ProfileButton icon={favoritos} text={title[2]}/>
                <ProfileButton icon={notificaciones} text={title[3]}/>
            </div>
            <div>
                <ProfileButton icon={mascota} text={title[4]}/>
                <ProfileButton icon={apadrina} text={title[5]}/>
                <ProfileButton icon={donar} text={title[6]}/>
            </div>
            <Nav/>
        </div>
    )
}

export default Profile;