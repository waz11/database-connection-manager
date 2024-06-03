import "./ConnectionForm.scss";
import { useForm } from "react-hook-form";
import { IField } from "../../utils";
import { useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";

interface IProps {
  fields: IField[];
  onSubmit?: any;
  onClose?: any;
  connection?: any;
}

const ConnectionForm = ({ fields, connection, onSubmit, onClose }: IProps) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (connection) {
      for (const key in connection) {
        setValue(key, connection[key]);
      }
    }
  }, [connection]);

  return (
    <div className="connection-form">
      <form className="form-fields">
        <table>
          <tbody>
            {fields.map(({ id, title, locked, type = "text", options }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>
                  {options ? (
                    <Dropdown
                      options={options}
                      onOptionChanged={(value) => setValue(id, value)}
                    />
                  ) : (
                    <input
                      {...register(id, { required: true })}
                      placeholder={getValues(id)}
                      disabled={!onSubmit}
                      type={type}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

      <div className="actions">
        {onClose && <button onClick={onClose}>Cancel</button>}

        {onSubmit && (
          <button onClick={handleSubmit(() => onSubmit(getValues()))}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ConnectionForm;
