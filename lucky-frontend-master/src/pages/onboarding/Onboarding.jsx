
import { stepBackward, stepForward,} from '../../redux/reducer/onboarding.slice';
import {useSelector, useDispatch } from 'react-redux'
import Onboarding1 from './Steps/Onboarding1';
import Onboarding2 from './Steps/Onboarding2';
import Onboarding3 from './Steps/Onboarding3';
import "./onboarding.scss";
import {Link} from 'react-router-dom'

const Onboarding = () => {
    const dispatch = useDispatch();
    const actualStep = useSelector(state => state.onboarding.actualStep);

    const renderStep = () => {
        const actualStepComponent = steps[actualStep - 1];

        if (actualStepComponent) return actualStepComponent;
        else return null;
    };

    const steps = [
        <Onboarding1 />,
        <Onboarding2 />,
        <Onboarding3 />,
    ];

    const isLastStep = actualStep < steps.length;
    

    return (
        <>
        <div className="onboarding-Box">

            {renderStep()}
        <div className="buttons-Box">
            <button className="onboarding-Buttons" onClick={() => dispatch(stepBackward())} disabled={actualStep <= 1}>
                Anterior
            </button>
            {isLastStep && <button  className="onboarding-Buttons" onClick={() => dispatch(stepForward())}>Siguiente</button>}
            <Link to="/login">{!isLastStep && <button  className="onboarding-Buttons" onClick={() => dispatch(stepForward())}>Login</button>}</Link>
        </div>
        </div>
        <div className="bullet-Box">
        <div className={`bullet ${actualStep === 1 ? 'active': null}`}></div>
        <div className={`bullet ${actualStep === 2 ? 'active': null}`}></div>
        <div className={`bullet ${actualStep === 3 ? 'active': null}`}></div>
        </div>
        </>
    );
};

export default  Onboarding;