// import * as React from "react";
import Background from "./Background";
import Walk from "./Walk";
import Music from "./Music";

// function Animation() {

//   return (

    
//   <div className="w-full h-[100%]">
//     <div className=''>
      
//       <Background/>
//       
//     </div>
//   </div>

//   )
// }

// export default Animation



import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BorderAll, BorderAllRounded } from "@mui/icons-material";



export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{background:"Black"}}>Visual Mate</Button>
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
          //   style: {
          //     backgroundColor: "rgba(0, 0, 0, 0.84)",
          // },
        }}}
      >
        <Fade in={open}>
          <div className="relative left-[15%]">
          <Music />
          <Background/>
          <Walk/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
