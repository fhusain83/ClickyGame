import React from 'react';
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

export default Score;