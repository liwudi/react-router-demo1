import React, { Component } from 'react';

export default class Topic extends Component {
	render(){
		return (
			<div>
				<h3>{this.props.match.params.id}</h3>
			</div>
		)
	}
}