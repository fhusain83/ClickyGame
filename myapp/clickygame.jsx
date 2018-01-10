class Score extends React.Component
{
	render()
	{
		return (<div class="navbar navbar-default">
               <div class="container-fluid">
               
               <div class="navbar-header">
               <a class="navbar-brand" href="#">Clicky Game  </a>
               </div>
               <ul class="nav navbar-nav navbar-center">
                  <li><a href="#">You guessed {this.props.status}</a></li>
               </ul>             
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Score:{Score}|TopScore:{this.props.topscore}</a></li>
               </ul
               </div>
		       </div>)
	}

}

class ClickySquare extends React.Component
{
	                  
render()
{
	return 
	(<image className="MyImage" src={this.squares.src} onClick={props.handleClick}/>)
}

}


class ClickyGameBoard extends React.Component
{


	render()
	{
		return(
		<div>
	        <div className="board-row">
        <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(0)} />
        <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(1)} />
        <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(2)} />
        </div> 
        <div className="board-row">
          <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(3)} />
          <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(4)} />}
          <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(5)} />
        </div> 
        <div className="board-row">
         <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(6)} />
          <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(7)} />
          <ClickySquare onClick{() => this.props.handleClick(id)} squares={this.props.state.squares(8)} />
        </div> 
    </div>
		)
      
	}
}

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