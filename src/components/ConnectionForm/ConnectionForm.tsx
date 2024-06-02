import { useForm, SubmitHandler } from "react-hook-form";
import FormDialog from "./FormDialog";
import { connectionFields } from "../../utils";
import { useEffect } from "react";

enum EConnectionType {
  SNOWFLAKE = "Snowflake",
  TRINO = "Trino",
  MY_SQL = "MySQL",
}

// type ConnectionFormFields = {
//   name: string;
//   url: string;
//   username: string;
//   password: string;
//   type: EConnectionType;
// };

const data = {
  id: 1,
  name: "Database 1",
  url: "https://db1.example.com",
  username: "user1",
  password: "password1",
  type: "Snowflake",
};

const ConnectionForm = ({ connection, isEditMode }: any) => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors, defaultValues = data },
  } = useForm();

  useEffect(() => {
    for (const key in connection) {
      setValue(key, connection[key]);
    }
  }, []);

  return (
    <table>
      {connectionFields.map((field) => {
        const { id, title, locked } = field;
        return !(locked && isEditMode) ? (
          <tr key={id}>
            <td>{title}</td>
            <td>
              {isEditMode ? (
                <input
                  {...register(id, {
                    required: "Please enter your first name.",
                  })}
                  placeholder={getValues(id)}
                  disabled={locked}
                />
              ) : (
                connection?.[id] || ""
              )}
            </td>
          </tr>
        ) : null;
      })}
    </table>
  );
};

export default ConnectionForm;
