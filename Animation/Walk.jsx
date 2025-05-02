import React, { useState, useEffect } from 'react'
import Model from './Model.jsx'
import dimensionSpec from './dimensionSpec.js';

const speed = 25;
const charecter = {x:100, y:235}; // from 0,0 to ref point (body)

function Walk() {
    const [position, setPosition] = useState({x: 100, y: 400});
    const [direction, setDirection] = useState(null);
    const [frame, setFrame] = useState(0);
    const [frameBack, setFrameBack] = useState(false);

    useEffect(() => {

      let moveinterval;

      if (["w", "a", "s", "d"].includes(direction)) {
        moveinterval = setInterval(() => {
          setFrame((preFrame) => (preFrame+1) % 2);
          setPosition((prePos) => {
            // console.log(direction)
            let newPos = {...prePos};
            switch (direction) {
                case "w": newPos.y = newPos.y - speed
                break;
                case "a": newPos.x = newPos.x - speed
                break;
                case "s": newPos.y = newPos.y + speed
                break;
                case "d": newPos.x = newPos.x + speed
                break;
                default: break;
            }
            for (let a of dimensionSpec){
              const characterLeft = newPos.x;
              const characterRight = newPos.x + charecter.x;
              const characterTop = newPos.y;
              const characterBottom = newPos.y + charecter.y;

              const objectLeft = a.left;
              const objectRight = a.left + a.width;
              const objectTop = a.top;
              const objectBottom = a.top + a.height;

              if (  characterRight > objectLeft &&
                    characterLeft < objectRight &&
                    characterBottom > objectTop &&
                    characterTop < objectBottom
                  ) { if(a.trigger === "openGoogle"){
                      setDirection(null);
                      window.open("https://www.google.com", "_blank");
                  }
                  return prePos;}
            }
            return newPos;
        });
    },200);} else clearInterval(moveinterval);
    return () => clearInterval(moveinterval);
  },[direction])

    useEffect(() => {
        const moveDirection = (event) => {
            if (["w", "a", "s", "d"].includes(event.key)) {
                setDirection(event.key);
            }
        };
        const moveStop = (event) => {
            if (["w", "s", "d"].includes(event.key)) {
              setDirection(null);
              setFrameBack(false);
          } else if (event.key === "a") {
              setDirection(null);
              setFrameBack(true);
          }
        };
        window.addEventListener("keydown", moveDirection);
        window.addEventListener("keyup", moveStop);
        return () => {
            window.removeEventListener("keydown", moveDirection);
            window.removeEventListener("keyup", moveStop);
        }
    },[])

    useEffect(() => {
      let idleInterval = setInterval(() => {
        if (direction === null) {
          setFrame((preFrame) => (preFrame+1)%2);}
        },500)
        // console.log(idleInterval);
        return () => clearInterval(idleInterval);
      }, [direction]);



  return (
    // <div className={`absolute z-20  left-[${position.x}px] top-[${position.y}px]`}>{model}</div>
    <Model direction={direction} frame={frame} frameback={frameBack} x={position.x} y={position.y} />
  )
}

export default Walk