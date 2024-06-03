import "./ConnectionForm.scss";
import { useForm } from "react-hook-form";
import { IField } from "../../utils";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import DropDown from "../Dropdown/DropDown";

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
      <div className="form-fields">
        {fields.map(({ id, title, type = "text", options, required }) => (
          <div key={id}>
            {options ? (
              <DropDown
                label={`${title}${required ? " *" : ""}`}
                options={options}
                {...register(id, {
                  required,
                })}
                onChange={(value) => setValue(id, value)}
              />
            ) : (
              <TextField
                id="id"
                label={`${title}${required ? " *" : ""}`}
                {...register(id, {
                  required,
                })}
              />
            )}
          </div>
        ))}
      </div>

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
