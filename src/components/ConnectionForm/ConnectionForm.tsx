import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  IField,
  SERVER_URL,
  connectionFields,
  connectionTypes,
} from "../../utils";
import axios from "axios";

interface IProps {
  fields: IField[];
  connection?: any;
  isEditMode?: boolean;
}

const ConnectionForm = ({ fields, connection, isEditMode }: IProps) => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, defaultValues = connection },
  } = useForm();

  useEffect(() => {
    for (const key in connection) {
      setValue(key, connection[key]);
    }
  }, []);

  const onSubmit = async (data: any) => {
    await axios
      .post(SERVER_URL, data)
      .then((response) => console.log(response));
  };

  return (
    <form>
      <table>
        {fields.map(({ id, title, locked, type = "text" }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>
              <input
                {...register(id)}
                placeholder={getValues(id)}
                disabled={locked}
                type={type}
              />
            </td>
          </tr>
        ))}
      </table>

      <button onClick={handleSubmit(onSubmit)}>button</button>
    </form>
  );
};

export default ConnectionForm;
