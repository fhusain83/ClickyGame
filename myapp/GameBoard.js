import React from 'react';


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

export default ClickyGameBoard;