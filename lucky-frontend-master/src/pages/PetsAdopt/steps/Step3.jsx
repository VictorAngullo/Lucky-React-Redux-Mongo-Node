import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducer/adopt.slice";


const Step3 = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.adopt.form);


    const inputChange = (ev) => {
        const {name, value, type, checked} = ev.target;
        let tempValue = value;

        if (type === 'checkbox') {
            tempValue = checked;
        }

        dispatch(changeFormField({name, value: tempValue}));
    };


    return (
        <>
            <form>
                <div className="form__SubTitle">Familia y hogar</div>
                <div className="littleTitles">¿Vives de alquiler?</div>
                <input
                    type="checkbox"
                    name="rent"
                    checked={form.rent}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Te permiten tener animales?</div>
                <input
                    type="checkbox"
                    name="allow"
                    checked={form.allow}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Podrías mudarte?</div>
                <input
                    type="checkbox"
                    name="move"
                    checked={form.move}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Tiene jardin?</div>
                <input
                    type="checkbox"
                    name="garden"
                    checked={form.garden}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Vives con otras personas?</div>
                <input
                    type="checkbox"
                    name="people"
                    checked={form.people}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Están todos de acuerdo?</div>
                <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Estás de acuerdo con que visitemos tu casa?</div>
                <input
                    type="checkbox"
                    name="visit"
                    checked={form.visit}
                    onChange={inputChange}
                />
            </form>
        </>
    );
};

export default Step3;