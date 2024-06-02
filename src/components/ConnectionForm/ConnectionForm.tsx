import { useForm, SubmitHandler } from "react-hook-form";
import FormDialog from "./FormDialog";

enum EConnectionType {
  SNOWFLAKE = "Snowflake",
  TRINO = "Trino",
  MY_SQL = "MySQL",
}

type ConnectionFormFields = {
  name: string;
  url: string;
  username: string;
  password: string;
  type: EConnectionType;
};

const ConnectionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ConnectionFormFields>();
  const onSubmit: SubmitHandler<ConnectionFormFields> = (data) =>
    console.log(data);

  return (
    <div>
      Connection Form
      <FormDialog />
    </div>
  );
};

export default ConnectionForm;
