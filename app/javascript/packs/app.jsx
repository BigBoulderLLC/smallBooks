import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom'
import StoryList from './storyList'
import Pages from './pages'

class App extends React.Component {
  render () {
  	return(
  		<div>
  			<Switch>
  				<Route exact path="/" component={StoryList} />
  				<Route exact path="/pages" component={Pages} />
  			</Switch>
  		</div>
  	)
  }
}