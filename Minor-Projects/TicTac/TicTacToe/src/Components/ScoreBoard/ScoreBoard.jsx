import "./ScoreBoard.css"
function ScoreBoard({xScore,oScore,tie,playing}){
    return <div className="score-board">
      <span className={`x-score ${playing===true?"xPlay":null}`}>X-{xScore}</span>
      <span className={`o-score ${playing===false?"oPlay":null}`}>O-{oScore}</span>
      <span className="tie">Tie-{tie}</span>

    </div>
}export default ScoreBoard;