import React from 'react'
import { Modal } from '@mui/material';
import baseURL from "../service/api";

function Room1({picOpen, setPicopen, whichPic, pic}) {

    const goToProduct1 = () => {
    window.open(`${baseURL}/product/${link[4]}`, "_blank");
  };
  const goToProduct2 = () => {
    window.open(`${baseURL}/product/${link[5]}`, "_blank");
  };
  const goToProduct3 = () => {
    window.open(`${baseURL}/product/${link[3]}`, "_blank");
  };

  const image = pic.map((product)=> product.image);
  const link = pic.map((product)=> product._id);

    // this picposition can .map which  modal?
    const picposition = [<Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={goToProduct1}
        style={{ cursor: 'pointer'}}
        >
        <img src={image[4]}
            className='absolute z-1  left-[50%] -translate-x-1/2 top-[100px] max-w-[400px]'
        />
        </Modal>,
        <Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={goToProduct2}
        style={{ cursor: 'pointer'}}
        >
        <img src={image[5]}
            className='absolute z-1  left-[50%] -translate-x-1/2 top-[100px] max-w-[400px]'
        />
        </Modal>,
        <Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={goToProduct3}
        style={{ cursor: 'pointer'}}
        >
        <img src={image[3]}
            className='absolute z-1  left-[50%] -translate-x-1/2 top-[100px] max-w-[400px]'
        />
        </Modal>];

    const picShow1 =[<img src={image[4]} className='absolute z-10 w-[250px] h-[200px] left-[60px] top-[150px] shadow-md shadow-amber-100'/>]
    const picShow2 =[<img src={image[5]} className='absolute z-10 w-[250px] h-[200px] left-[390px] top-[150px] shadow-md shadow-amber-100'/>]
    const picShow3 =[<img src={image[3]} className='absolute z-10 w-[250px] h-[200px] left-[720px] top-[150px] shadow-md shadow-amber-100'/>]
    const Room1Asset = [<img src="./Asset/Room1.png" className='absolute '/>, <img src="./Asset/Room1_table.png" className='absolute z-11'/>,
                    <img src="./Asset/Room1_tree.png" className='absolute z-12'/>,<img src="./Asset/Room1_cat.png" className='absolute z-13'/>]


    return (
    <>
    {Room1Asset[0]}
    {Room1Asset[1]}
    {Room1Asset[2]}
    {Room1Asset[3]}
    {picShow1}
    {picShow2}
    {picShow3}
    {picposition[whichPic]}
    </>
  )
}

export default Room1