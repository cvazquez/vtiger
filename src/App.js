import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Methods from './components/methods'

const getNavLinks = () => [
	{
		path	: "/",
		text	: "Home"
	},
	{
		path	: "/me",
		text	: "Me"
	},
	{
		path	: "/retrieve",
		text	: "Retrieve",
		params	: "id=19x1"
	},
	{
		path	: "/listtypes",
		text	: "List Types",
		params	: "fieldTypeList=null"
	}
],
getNavHeader = () =>
	<ul className="header" data-testid="header">
	{	// Loop through nav links and display at top of page
		getNavLinks().map(link =>
			<li key={link.text}>
				<Link	to			= {link.path + (link.params && link.params.trim().length ? "?" + link.params : "")}
						data-testid	= {link.text}>
					{link.text}
				</Link>
			</li>
		)
	}
	</ul>;

export default function App() {
  return	<>
				<Router>
					{getNavHeader()}

					{/* React Router controls paths from nav link clicks */}
					<Switch>
						{/* Exact paths keep each sub folder from overriding parent path */}
						<Route exact	path		= "/" />
						<Route	path		= "/:method"
								component	= {Methods} />
					</Switch>
				</Router>
			</>
}