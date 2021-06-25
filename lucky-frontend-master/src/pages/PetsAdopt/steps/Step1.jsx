import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducer/adopt.slice";

const Step1 = () => {
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
                <div className="form__SubTitle">Tus datos</div>
                <div className="form__divs">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre y Apellido"
                    value={form.name}
                    onChange={inputChange}
                />
                </div>
                <div className="form__divs">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={inputChange}
                />
                </div>
                <div className="form__divs">
                <input
                    type="number"
                    name="Teléfono"
                    placeholder="Teléfono"
                    value={form.movil}
                    onChange={inputChange}
                />
                </div>
                <div className="form__divs">
                <input
                    type="text"
                    name="DNI"
                    placeholder="DNI"
                    value={form.dni}
                    onChange={inputChange}
                />
                </div>
                <div className="form__SubTitle">Dirección</div>
                <input
                    type="text"
                    name="calle"
                    placeholder="Calle y número"
                    value={form.address}
                    onChange={inputChange}
                />
                <div className="form__divs">
                <span>Acepto todos los términos y condiciones</span>
                <input
                    type="checkbox"
                    name="terms"
                    // placeholder="Terms and conditions"
                    checked={form.pedegree}
                    onChange={inputChange}
                />
                </div>
            </form>
        </>
    );
};

export default Step1;