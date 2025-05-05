import React from 'react'

function Model({direction, frame, frameback, x, y}) {

  const imgsrc = (direction === "a")
  ? `Animation/Model/walkback_${frame}.png`
  : (direction === null && frameback === true)
  ? `Animation/Model/idleback_${frame}.png`
  : (direction === null && frameback === false)
  ? `Animation/Model/idle_${frame}.png`
  : `Animation/Model/walk_${frame}.png`;

  // console.log(frameback);


  return (
     <img src= {imgsrc}
     style={{position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 20,
      overflow: "hidden",
      width:120,
      height:235,
      }}/>
  )
}
export default Model