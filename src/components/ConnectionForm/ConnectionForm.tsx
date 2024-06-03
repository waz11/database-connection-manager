import "./ConnectionForm.scss";
import { useForm } from "react-hook-form";
import { IField } from "../../utils";
import { useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";

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
            {fields.map(({ id, title, type = "text", options, required }) => (
              <tr key={id}>
                <td>
                  <span
                    className={classNames({ required: required && onSubmit })}
                  >
                    {title}
                  </span>
                </td>
                <td>
                  {options ? (
                    <Dropdown
                      initialValue={getValues(id)}
                      options={options}
                      onOptionChanged={(value) => setValue(id, value)}
                      disabled={!onSubmit}
                    />
                  ) : (
                    <div className="form-input">
                      <input
                        {...register(id, {
                          required,
                        })}
                        placeholder={getValues(id)}
                        disabled={!onSubmit}
                        type={type}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

      <ErrorMessage errors={errors} name="singleErrorInput" />

      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />

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
