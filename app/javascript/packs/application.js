import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import App from './app'
import StoryList from './storyList'


ReactDOM.render(

	//ROUTER - This should set up the pages, whats wrong with it?
	/*
	<Router> 
		<Route path="/" component={App} />
	</Router>,
	*/
	<StoryList />,
    document.getElementById("root")
);
