import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCharacterById } from '../../../redux/characters/charactersSlice';
import { setModalClose } from '../../../redux/sort/sortSlice';

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const { itemId } = useSelector((state) => state.sort);
  const item = useSelector((state) => selectCharacterById(state, itemId));
  const handleClose = () => {
    dispatch(setModalClose());
  };

  const open = useSelector((state) => state.sort.modal);

  return (
    <div>
      {item ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {item.name}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <img
                src={item.image}
                className="card-img-top"
                alt={'image' + item.id}
              />
              <div>Gender:{item.gender}</div>
              <div>Origin: {item.origin.name}</div>
              <div>Species: {item.species}</div>
              <div>Status: {item.status}</div>
              <div>Type: {item.type}</div>
              <div>Location: {item.location.name}</div>
              <div>Number of episodes: {item.episode.length}</div>
            </Typography>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
};
