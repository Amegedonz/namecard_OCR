import { useState } from 'react'

function Square() { 
  return(
    <p className="Square">
      X
    </p>
  )
}

function Circle() {
  return(
    <p className="Circle">
      O
    </p>
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
};

function CreateBoard({currentKey, setCurrentKey}) {

  function toggleTurn(){
    setCurrentKey(StateDB[currentKey].next);
  }

  return (
    <>
    <div className="TopRow">
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"TopLeft"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"TopMiddle"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"TopRight"}/>
    </div>
    <div className="boardRow2">
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"MiddleLeft"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"MiddleMiddle"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"MiddleRight"}/>
    </div>
    <div className="boardRow3">
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"BottomLeft"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"BottomMiddle"}/>
      <Cell currentKey={currentKey} toggleTurn={toggleTurn} id={"BottomRight"}/>
    </div>
    </>
    
  )
}

function Cell({currentKey, toggleTurn, id}){
  const [spaceShape, setSpaceShape] = useState(currentKey)

  function Blank() {
    return (
      <button onClick={handleClick} className="play-button" id={id}>
        &nbsp;&nbsp;
      </button>
    )
  }

  function handleClick(){
    //do nothing if cell state is not blank
    if(StateDB[currentKey] === 'blank') return;
    setSpaceShape(currentKey)
    toggleTurn();
  }

  const TargetComponent = StateDB[spaceShape].Component;

  return(
    <Blank>
      <TargetComponent/>
    </Blank>
  )
}

function CreateInfromationTable(input){
  function Winner(){
    // to fill
  }

  return(
    <>
      <p>
        Current Player: {input.currentKey}
      </p>
    </>
  )
}

export default function TicTakToe() {
  const [currentKey, setCurrentKey] = useState('square');

  return(
    <div className="Body">
    <CreateBoard currentKey={currentKey} setCurrentKey={setCurrentKey}/>
    <CreateInfromationTable currentKey={currentKey} />
    </div>
  )
}