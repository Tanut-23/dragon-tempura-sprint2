import React from 'react'
import Invisblock from './Invisblock.jsx'
import dimensionSpec from './dimensionSpec.js'



function Background() {

  return (
    <div>
        <img src="Animation\Asset\roombg.png"
            className='absolute'
        />
        <img src="Animation\Asset\fence.png"
            className='absolute z-1'
        />
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