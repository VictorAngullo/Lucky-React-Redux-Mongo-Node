import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducer/adopt.slice";

const Step2 = () => {
    
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
                <div className="form__SubTitle">Sobre las mascotas</div>
                <span className="littleTitles">¿Tienes otros animales?</span>
                <input
                    type="checkbox"
                    name="another"
                    checked={form.another}
                    onChange={inputChange}
                    className="checkbox"
                />
                <div>
                <input
                    type="text"
                    name="¿Cuantos?"
                    placeholder="¿Cuantos?"
                    value={form.howMany}
                    onChange={inputChange}
                    
                />
                </div>
                <div className="littleTitles">¿Porqué has elegido adoptar?</div>
                <input
                    type="text"
                    name="why"
                    value={form.why}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Conoces sus necesidades?</div>
                <input
                    type="text"
                    name="necesidades"
                    value={form.necessities}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Conoces sus gastos?</div>
                <input
                    type="text"
                    name="cost"
                    value={form.cost}
                    onChange={inputChange}
                />
                <div className="littleTitles">¿Conoces su alimentación?</div>
                <input
                    type="text"
                    name="diet"
                    value={form.diet}
                    onChange={inputChange}
                />
            </form>
        </>
    );
};

export default Step2;