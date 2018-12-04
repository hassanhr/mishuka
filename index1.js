import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class HelloWord extends React.Component{

	render(){

		return(
			<h2>hello world</h2>
		)

	}

}
class Tutorial extends React.Component{
	render(){
		return(
			<p>This page is about React jsx</p>
		)
	}
}
class AllComponents extends React.Component{
/*	constructor (){
		super();
		this.named = "Mahmodul"

	}*/
	render(){
		return(
			<section className="content">
				<HelloWord/>
				<Tutorial/>
			
			</section>
		)
	}
}
ReactDOM.render(<AllComponents/>, document.getElementById('root'))