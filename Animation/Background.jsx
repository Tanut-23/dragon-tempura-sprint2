import React from 'react'
import Invisblock from './Invisblock.jsx'
import dimensionSpec from './dimensionSpec.js'

function Background({step = 0}) {

const test = [<img src="Animation\Asset\roombg.png" className='absolute z-1'/>, <img src="Animation\Asset\fence.png" className='absolute z-1'/>];

const room1 = <>{test[0]} {test[1]}</>;
const room2 = <img src="Animation\Asset\Room_1.png" className='absolute z-1'/>

const roomBackground = [room1, room2];
const picShow =[<img src="public\productPicture\Landscape-Painting-Contemporary-Art-2.jpg" className='absolute z-1 w-[250px] h-[200px] left-[400px] top-[150px]'/>]

// console.log(`stepb4 ${step}`);
// if (step < 0) { step = step+2 };
// if (step > 1) { step = step-2 };
// console.log(`step ${step}`);


  return (
    <div>
      {/* <img src="Animation\Asset\Room_1.png" className='absolute'/> */}
      {roomBackground[step]}
      {picShow}
        {/* <Invisblock width="25px" height="768px"/>
        <Invisblock left="999px" width="25px" height="768px"/>
        <Invisblock top="743px" left="25px" width="974px" height="25px"/>
        <Invisblock top="380px" left="25px" width="300px" height="25px"/>
        <Invisblock top="380px" left="340px" width="350px" height="25px" background='#ccdd0b61'/>
        <Invisblock top="380px" left="700px" width="320px" height="25px"/> */}

        {dimensionSpec.map((block, index) => (
        <Invisblock
          key={index}
          top={block.top}
          left={block.left}
          width={block.width}
          height={block.height}
          background={block.background}
        />
      ))}

    </div>
  )
}

export default Background