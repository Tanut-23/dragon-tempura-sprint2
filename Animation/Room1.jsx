import React from 'react'
import { Modal } from '@mui/material';

function Room1({picOpen, setPicopen, whichPic}) {

    // this picposition can .map which  modal?
    const picposition = [<Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
        <img src="public\productPicture\Genre-Painting-Modern-Art-4.jpg"
            className='absolute z-1  left-[485px] top-[100px]'
        />
        </Modal>,
        <Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
        <img src="public\productPicture\Genre-Painting-Classic-Art-3.jpg"
            className='absolute z-1  left-[485px] top-[100px]'
        />
        </Modal>,
        <Modal
        open={picOpen}
        onClose={()=>setPicopen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
        <img src="public\productPicture\Genre-Painting-Classic-Art-5.jpg"
            className='absolute z-1  left-[485px] top-[100px]'
        />
        </Modal>];

    const picShow1 =[<img src="./productPicture/Genre-Painting-Modern-Art-4.jpg" className='absolute z-10 w-[250px] h-[200px] left-[60px] top-[150px]'/>]
    const picShow2 =[<img src="./productPicture/Genre-Painting-Classic-Art-3.jpg" className='absolute z-10 w-[250px] h-[200px] left-[390px] top-[150px]'/>]
    const picShow3 =[<img src="./productPicture/Genre-Painting-Classic-Art-5.jpg" className='absolute z-10 w-[250px] h-[200px] left-[720px] top-[150px]'/>]
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