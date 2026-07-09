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
  //init currentShape object, grabbing safely 
  const CurrentShape = StateDB[CurrentKey].Component;

  //Setting up the keys to allow for interaction with the DB
  const [CurrentKey, setCurrentShape] = useState('square');

  //Function to permenantly set the shape on buttons by forcing the function on the button
  function SetState(){
    // press button and sets the button to permenant predefined state:
    const PermShape = StateDB[CurrentKey].Component;
    if (PermShape === 'square'){
      <Square/>
    } else {
      <Circle/>
    }
  }

  // function SetShape() {
  //   const isSquare = useState('square');
  //   const nextKey = StateDB[CurrentKey].next;
  //   if (isSquare ? <Square/> : <Circle/>){
  //     setCurrentShape(nextKey)
  //   }
    
  // }

  return (
    <>
    <div className="TopRow">
      <button onClick={SetState} id="TopRight"></button>
      <button onClick={SetState} id="TopMiddle"></button>
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

function CreateInfromationTable(){
  function Winner(){
    // to fill
  }

  return(
    <>
      <p>
        Current Player: <CurrentKey/>
      </p>
    </>
  )
}

export default function TicTakToe() {
  return(
    <div className="Body">
    <CreateBoard/>
    <CreateInfromationTable/>
    </div>
  )
}