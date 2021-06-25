import './Profile.scss'
import ProfileButton from '../../components/ProfileButton/ProfileButton'
import protectoras from '../../assets/protectora_2.png'
import eventos from '../../assets/eventos_2.png'
import curiosidades from '../../assets/blogCopy.png'
import ayuda from '../../assets/ayuda_2.png'
import configuración from '../../assets/confi_2.png'
import salir from '../../assets/salir_2.png'
// import Nav from '../../components'
import Nav from '../../components/Nav/Nav'
import Logout from '../../components/Logout/Logout'
import { Link } from 'react-router-dom'




const title = ["Asociaciones protectoras", "Eventos", "Curiosidades", "Ayuda", "Configuración", "Cerrar sesión" ]

const ProfilePlus = () => {
    return (
        <div class="profileplus">
            <div class="profileplus__container">
            <ProfileButton icon={protectoras} text={title[0]}/>
            <ProfileButton icon={eventos} text={title[1]}/>
            <ProfileButton icon={curiosidades} text={title[2]}/>
            <ProfileButton icon={ayuda} text={title[3]}/>
            <ProfileButton icon={configuración} text={title[4]}/>
            <Link to="/login"><Logout icon={salir} text={title[5]} /></Link>
            </div>
            {/* <ProfileButton icon={salir} text={title[5]}/> */}
            <Nav/>
        </div>
    )
}

export default ProfilePlus;