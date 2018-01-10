import React from 'react';

class Game extends React.Component{

var squares=require('./data.json');

render()
{
   constructor(props)
   {
    super(props);
    this.state={
      history:[
      squares:[squares];
              ],
              LastClicked:null  ,
      Score:0,
      Status:null;
    }
}

handleClick(i)
{
  this.state.LastClicked =i;
  if(history.includes(this.state.LastClicked))
   {
    this.setState.Status  ="You Guessed incorrectly";
    this.setState.Score  =0;
    this.State.squares=shuffle(squares);
    }
  else
 {
   this.setState.Status  ="You Guessed Correctly";
  this.setState(history :history.push(i);
  this.setState().Score++;
 }
}

function Shuffle(a)
{
   let localArr= a.clone(a);
   var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = localArr[i];
        localArr[i] = localArr[j];
        localArr[j] = x;
    }
    return localArr;
}



return(
    <div className="score">
    <Score value=this.state.score correct=this.state.Status/>
    </div>
    <div className="gameBoard">
    <Board onClick{() => this.handleClick(id)} squares={this.state.squares}/>
    </div>
    )
}
}
export default Game;