import { SERVER_URL, addingConnectionFields } from "../../utils";
import ConnectionForm from "./ConnectionForm";
import FormDialog from "./FormDialog";
import { useDispatch } from "react-redux";
import { addConnection } from "../../store/connections/actions";

const connectionFormDialogTitle = "New DB Connection Details";

const ConnectionFormDialog = ({ onClose }: any) => {
  const dispatch = useDispatch();

  const onSubmit = async (connection: any) => {
    dispatch(addConnection(connection) as any);
    onClose();
  };

  return (
    <FormDialog title={connectionFormDialogTitle} onClose={onClose}>
      <ConnectionForm
        fields={addingConnectionFields}
        onSubmit={onSubmit}
        onClose={onClose}
        isEditMode
      />
    </FormDialog>
  );
};

export default ConnectionFormDialog;
