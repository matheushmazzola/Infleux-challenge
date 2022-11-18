import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props._id,
    campaign_name: props.campaign_name,
    advertiser: props.advertiser,
    country: props.country,
    conversion: props.conversion,
    bid: props.bid,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditCampaigns = () => {
    Axios.put("http://localhost:3001/campaigns/edit", {
      id: editValues.id,
      campaign_name: editValues.campaign_name,
      advertiser: editValues.advertiser,
      country: editValues.country,
      conversion: editValues.conversion,
      bid: editValues.bid,
    }).then(() => {
      props.setListCampaigns(
        props.listCampaigns.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                campaign_name: editValues.campaign_name,
                advertiser: editValues.advertiser,
                country: editValues.country,
                conversion: editValues.conversion,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteCampaigns = () => {
    Axios.delete(`http://localhost:3001/campaigns/delete/${editValues.id}`).then(() => {
      props.setListCampaigns(
        props.listCampaigns.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            defaultValue={props.cost}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteCampaigns()}>
            Delete
          </Button>
          <Button color="primary" onClick={() => handleEditCampaigns()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
