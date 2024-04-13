import { useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying,setXIsPlaying]=useState(true);
  const [xScore,setXScore]=useState(0);
  const [oScore,setOScore]=useState(0);
  const [gameOver,setGameOver]=useState(false);
  const [tie,setTie]=useState(0);


  const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  const handleBoxClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxId) {
        return xIsPlaying===true?"X":"O";
      } else {
        return value;
      }
    });
    setXIsPlaying(!xIsPlaying);
    setBoard(updatedBoard);
    const winner=checkWinner(updatedBoard);

    if(winner){
      if(winner==="X"){
        setXScore(xScore+1);
        setGameOver(true)
      }
      else{
        setOScore(oScore+1);
        setGameOver(true)
      }
    }

    let filled=true;
    updatedBoard.map((item)=>{
      if(item===null){
        filled=false;
      }
    })

    if(filled && winner!="X" && winner!="O"){
      filled=true;
      setTie(tie+1);
    }
  };
  const checkWinner=(updatedBoard)=>{
    for(let i=0;i<winConditions.length;i++){
       const [x,y,z]=winConditions[i];
       if(updatedBoard[x]===updatedBoard[y] && updatedBoard[y]===updatedBoard[z] && updatedBoard[x]!=null && updatedBoard[y]!=null && updatedBoard[z]!=null){
          return updatedBoard[x];
       }
    }
  }
  const reset=()=>{
    setBoard(Array(9).fill(null))
    setGameOver(false);
  }
  const restartGame=()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
    setXScore(0);
    setOScore(0);
    setTie(0);
  }
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard xScore={xScore} oScore={oScore} tie={tie} playing={xIsPlaying}/>
      <Board board={board} onClick={gameOver===true?reset:handleBoxClick} />
      <div className="btns">
      <button className="btn" onClick={reset}>Play Again</button>
      <button className="btn" onClick={restartGame}>Restart Game</button>
      </div>
      <button className="dark-mode-btn" onClick={()=>{
        const app=document.querySelector(".app");
        app.classList.toggle("dark-mode")
      }}><i className="fa-solid fa-moon"></i></button>
    </div>
  );
}
export default App;
