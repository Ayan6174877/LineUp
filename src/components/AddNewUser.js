import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../redux/store";
import { userAdded } from "../redux/actions";

function AddNewUser(props) {
  const [open, setOpen] = React.useState(true);
  const [userName, setUsername] = React.useState("");

  const UserSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || userName.length <= 2) {
      alert("Please enter a valid name");
    } else {
      store.dispatch(userAdded(userName));
    }
  };

  return (
    <div>
      <Dialog
        disableBackdropClick
        open={props.show}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Welcome to lineup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            LineUp helps you to create and manage your personal and work task so
            that you don't miss out on anything ever. Tell us your name so next
            time when you show up, you always find your tasks right here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={UserSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
