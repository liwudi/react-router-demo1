import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import Choice from './Choice';
import Topic from './Topic';
export default class Topics extends Component {
	render(){
		let connect_url = this.props.match
		return (
			<div>
				<h1>主题列表</h1>
				<ul>
					<li><Link to={`${connect_url.url}/rendering`}>使用react渲染</Link></li>
					<li><Link to={`${connect_url.url}/component`}>组件</Link></li>
					<li><Link to={`${connect_url.url}/props-v-state`}>属性V.状态</Link></li>
					
				</ul>
				<Route exact path={`${connect_url.url}/:id`} component={Topic}/>
			</div>
		)
	}
}
