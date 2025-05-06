import Walk from "./Walk";
import Music from "./Music";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";




export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Link onClick={handleOpen} style={{background:"#62483A", color: "Gold"}}>Visual Museum</Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.69)", // Semi-transparent background color
              backdropFilter: "blur(6px)",     // Applies a 12px blur to the backdrop
            },
        }}}
      >
        <Fade in={open}>
          <div>
          <Music />
          <Walk/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
