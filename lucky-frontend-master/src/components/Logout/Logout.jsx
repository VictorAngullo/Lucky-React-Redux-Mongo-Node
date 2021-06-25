import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAsync    } from "../../redux/reducer/user.slice";
import arrow from "../../assets/arrow.png";

const Logout = (props) => {

    const history = useHistory();
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const redirect = () => history.push('/home')
               
    
    const logout = () => {
       dispatch(logoutAsync(redirect));
       
    };
    

    return (
        <div>
            
            {/* {!user && (
                <>
            
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                </>
            )} */}
            {user && (
              <div class="profile-button" onClick={logout}>
              <div class="profile-button__icon">
                  <img src={props.icon} alt="icon" />
              </div>
              <div class="profile-button__text" onClick={logout}>{props.text}</div>
              <div class="profile-button__arrow">
                  <img src={arrow} alt="" />
              </div>
          </div>
            )}
        </div>
    );
};

export default Logout;
