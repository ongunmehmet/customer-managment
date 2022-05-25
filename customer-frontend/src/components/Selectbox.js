import uuid from "react-uuid"

export default function SelectBox(props) {
    let key_ = props.keyName;
    let currentValue = props.value || "DEFAULT"
    return (
        <div className="input-group">
            <label className="input-group-text"
                   htmlFor={props.id}>{props.label}</label>
            <select

                placeholder="il seç"
                id={props.id}
                type="text"
                name={props.id}
                value={currentValue}
                onChange={props.handleChange}
                className="form-control form-select"
                key={uuid()}
               aria-valuetext={"ssss"}
            >
                {<option defaultValue={'default'} disabled={true} key={uuid()}>Seçiniz</option>}

                {

                    props.options.map((op, index) => {

                    return (<option key={uuid()} value={op[key_]}>{op[key_]}</option>)
                }
                    )


                }


            </select>
        </div>
    );
}