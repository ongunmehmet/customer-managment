export default function SelectBox(props) {
    let key=props.keyName;
    return (
        <div className="input-group">
            <label className="input-group-text"
                   htmlFor={props.id}>{props.label}</label>
            <select id={props.id}
                    type="text"
                    name={props.id}
                    value={props.value}
                    onChange={props.handleChange}
                    className="form-control">
                {
                    props.options.map((op, index) => (

                            <option key={op[key]}>{op[key]}</option>

                        )
                    )

                }

            </select>
        </div>
    );
}