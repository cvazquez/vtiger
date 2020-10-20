import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Contacts from './components/contacts';
import Methods from './components/methods'

const getNavLinks = () => [
	{
		path	: "/",
		text	: "Home"
	},
	{
		path	: "/contacts",
		text	: "Contacts"
	}
],
getNavHeader = () =>
	<ul className="header" data-testid="header">
	{	// Loop through nav links and display at top of page
		getNavLinks().map(link =>
			<li key={link.text}>
				<Link	to			= {link.path}
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
						<Route exact	path		= "/contacts">
							<Contacts />
						</Route>
						<Route	path		= "/:method"
								component	= {Methods} />
					</Switch>
				</Router>
			</>
}