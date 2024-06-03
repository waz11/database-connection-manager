import "./ConnectionForm.scss";
import { useForm } from "react-hook-form";
import { IField } from "../../utils";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import DropDown from "../Dropdown/DropDown";

interface IProps {
  fields: IField[];
  onSubmit?: any;
  onClose?: any;
  connection?: any;
  isEditMode?: boolean;
}

const ConnectionForm = ({
  fields,
  connection,
  onSubmit,
  onClose,
  isEditMode,
}: IProps) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
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
                isEditMode={isEditMode}
                defaultValue={connection ? connection?.[id] || " " : undefined}
                value={watch(id)}
              />
            ) : (
              <TextField
                id={id}
                label={`${title}${required ? " *" : ""}`}
                {...register(id, {
                  required,
                })}
                defaultValue={connection ? connection?.[id] || " " : undefined}
                inputProps={{ readOnly: !isEditMode }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="actions">
        {onClose && (
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        )}

        {onSubmit && (
          <Button
            variant="contained"
            onClick={handleSubmit(() => onSubmit(getValues()))}
          >
            Save
          </Button>
        )}

        <button onClick={() => console.log(errors)}>sdfsdf</button>
      </div>
    </div>
  );
};

export default ConnectionForm;
