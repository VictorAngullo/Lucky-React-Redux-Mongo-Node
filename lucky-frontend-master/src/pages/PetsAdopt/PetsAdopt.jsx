import { useDispatch, useSelector } from "react-redux";
import {
    stepBackward,
    stepForward,
    addPet,
    resetForm
} from "../../redux/reducer/adopt.slice";
import { adoptForm } from "../../api/adopt.api";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import "./PetsAdopt.scss";

const PetsAdopt = () => {
    const dispatch = useDispatch();
    const { actualStep, form } = useSelector((state) => state.adopt);
    // const {actualStep} = useSelector

    const steps = [<Step1 />, <Step2 />, <Step3 />];

    const renderStep = () => {
        const actualStepComponent = steps[actualStep - 1];
        console.log(actualStepComponent);
        if (actualStepComponent) return actualStepComponent;
        else return null;
    };

    const submitForm = async (ev) => {
        ev.preventDefault();

        const formData = new FormData();

        for (let key in form) {
            formData.append(key, form[key]);
        }

        const adopt = await adoptForm(formData);

        if (adopt.name) {
            dispatch(addPet(adopt));
            dispatch(resetForm());
        } else {
            console.log("error", adopt);
        }
    };

    const isLastStep = actualStep < steps.length;

    return (
        <div className="form">
            <h1 className="form__Title">Formulario de adopción</h1>

            {renderStep()}
            <div className="form__Footer">
            <button
                className="buttons"
                onClick={() => dispatch(stepBackward())}
                disabled={actualStep <= 1}
            >
                Anterior
            </button>
            {isLastStep && (
                <button
                    className="buttons"
                    onClick={() => dispatch(stepForward())}
                >
                    Siguiente
                </button>
            )}

            {actualStep === 3 && (
                <div style={{ margin: "24px 0px" }}>
                    <button className="buttons" onClick={submitForm}>
                        SUBMIT FORM
                    </button>
                </div>
            )}
            </div>
        </div>
    );
};

export default PetsAdopt;
