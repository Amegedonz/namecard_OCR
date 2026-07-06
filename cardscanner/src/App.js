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
    <button className="Blank" >
      &nbsp;&nbsp;
    </button>
  )
}

const StateDB = {
  square:{
    Component: Square,
    next: 'circle'
  },

  circle: {
    Component: Circle,
    next: 'square'
  },

  blank: {
    Component: Blank,
    next: 'square'
  }
};

function CreateBoard() {
  //Setting up the keys to allow for interaction with the DB
  const [CurrentKey, setCurrentShape] = useState('blank');

  //init currentShape object, grabbing safely 
  const CurrentShape = StateDB[CurrentKey].Component;

  function SetShape() {
    const isSquare = useState(true)
    const nextKey = StateDB[CurrentKey].next;
    if (isSquare ? <Square/> : <Circle/>)
    setCurrentShape(nextKey)
  }

  return (
    <>
    <div className="boardRow1">
      <button onClick={SetShape}>

      </button>
      <button onClick={SetShape}>
      </button>
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