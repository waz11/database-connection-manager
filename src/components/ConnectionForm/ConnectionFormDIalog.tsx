import axios from "axios";
import { SERVER_URL, addingConnectionFields } from "../../utils";
import ConnectionForm from "./ConnectionForm";
import FormDialog from "./FormDialog";

const connectionFormDialogTitle = "New DB Connection Details";

const onSubmit = async (data: any) => {
  await axios
    .post(SERVER_URL, { data })
    .then((response) => console.log(response));
};

const ConnectionFormDialog = ({ onClose }: any) => (
  <FormDialog
    title={connectionFormDialogTitle}
    onClose={onClose}
    onSubmit={onSubmit}
  >
    <ConnectionForm fields={addingConnectionFields} />
  </FormDialog>
);

export default ConnectionFormDialog;
