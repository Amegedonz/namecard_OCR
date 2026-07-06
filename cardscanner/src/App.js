import { useState } from 'react'

function Square() { 
  return(
    <button className="Square">
      X
    </button>
  )
}

function Circle() {
  return(
    <button className="Circle">
      O
    </button>
  ) 
}

function Blank() {
  return(
    <button className="Blank">
      &nbsp;&nbsp;
    </button>
  )
}

const StateDB = {
  blank: {
    Component: Blank,
    next: 'square'
  },

  square:{
    Component: Square,
    next: 'circle'
  },

  circle: {
    Component: Circle,
    next: 'square'
  },
};

// const [CurrentShape, setCurrentShape] = useState(() => Square);

// export function ToggleShape(){
 

//   if (CurrentShape === Square) {
//     setCurrentShape(() => Circle);
//   } else {
//     setCurrentShape(() => Square);
//   }
// }

function CreateBoard() {
  return (
    <>
    <div className="boardRow1">
      <Blank/>
      <Blank/>
      <Blank/>
    </div>
    <div className="boardRow2">
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="boardRow3">
      <Square/>
      <Square/>
      <Square/>
    </div>
    </>
    
  )
}

export default function TicTakToe() {
  return(
    <CreateBoard/>
  )
}