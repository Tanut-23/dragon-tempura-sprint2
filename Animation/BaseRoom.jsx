import React from 'react'
import Cat from './Cat';
import { Modal } from '@mui/material';

function BaseRoom({picOpen, setPicopen, cat }) {

    const baseRoomAsset = [<img src="./Asset/roombg.png" className='absolute z-1'/>,
    <img src="./Asset/fence.png" className='absolute z-1'/>,<Cat mate={cat}/>];
    const picShow =[<img src="./productPicture/Landscape-Painting-Contemporary-Art-2.jpg" className='absolute z-10 w-[250px] h-[200px] left-[400px] top-[150px]'/>]

  return (
    <>{picShow} {baseRoomAsset[0]} {baseRoomAsset[1]} {baseRoomAsset[2]}
    <Modal
    open={picOpen}
    onClose={()=>setPicopen(false)}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <img src="./productPicture/Landscape-Painting-Contemporary-Art-2.jpg"
        className='absolute z-1  left-[485px] top-[150px]'
    />
  </Modal>
  </>
  )
}

export default BaseRoom