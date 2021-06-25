import './cover.scss';
import { Link } from 'react-router-dom';


const Cover = () => {


    return (
        <div className="cover">
        <Link to="/onboarding">
            <img src="assets/group29.png" alt="lucky"></img>
        </Link>
        <img src="assets/group.png" alt="lucky" className= "img2"></img>
        </div>
    );
};

export default Cover;
