import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ title, onClose, onSave, children }: any) {
  return (
    <React.Fragment>
      <Dialog open>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        {/* <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
