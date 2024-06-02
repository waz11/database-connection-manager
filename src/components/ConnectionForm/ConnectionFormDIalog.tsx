import ConnectionForm from "./ConnectionForm";
import FormDialog from "./FormDialog";

const ConnectionFormDialog = ({ onClose }: any) => (
  <FormDialog onClose={onClose}>
    <ConnectionForm isEditMode />
  </FormDialog>
);

export default ConnectionFormDialog;
