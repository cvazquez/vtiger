


/************
 *
 *   TRY ACCESSING THROUGH NODEJS INSTEAD
 *
 */




// API Manual https://www.vtiger.com/docs/rest-api-for-vtiger

import React, { useState, useEffect } from "react";

export default function Contacts() {
	const	[ loggedIn, setLoggedIn ]	= useState(false),
			[ contacts, setContacts ]	= useState([]);


	async function apiRequest(method, queryString) {
		try {
			const	endPoint	= "http://dev.api.carlosvazquez.org",
					path		= "/demo/vtiger/",
					fullEndPointRequestURL = endPoint + path + method + (queryString && queryString.trim().length ? "/" + queryString : ""),
					challengRequest = await fetch(fullEndPointRequestURL, {
													method	: 'GET'
												}),
					response		= await challengRequest.json();

			console.log(response);

			if(response.success && response.result) {
				console.log(response.result)
			} else {
				console.log(response.error)
			}

		} catch(e) {
			console.log(e);
		}
	}

	useEffect(() => {
		async function getData() {
			const data = await apiRequest("retrieve", "id=19x1")

			setContacts(data);
		}

		//if(loggedIn) {
			getData();
		//}

		return () => {
		}
	},[loggedIn])


	return <>
		Contacts
		<ul>
			{
				//contacts.map(contact => <li key={contact.id}>{contact.fullName}</li>)
			}
		</ul>
	</>
}