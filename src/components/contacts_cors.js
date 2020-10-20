


/************
 *
 *   TRY ACCESSING THROUGH NODEJS INSTEAD
 *
 */




// API Manual https://www.vtiger.com/docs/rest-api-for-vtiger

import React, { useState, useEffect } from "react";
import { encode } from "base-64";

export default function Contacts() {
	const	[ loggedIn, setLoggedIn ]	= useState(false),
			[ contacts, setContacts ]	= useState([]);


	async function apiRequest(method, queryString) {
		try {
			const proxyurl = "http://dev.carlosvazquez.org:8080/";
			const	endPoint	= "https://adventuresofcarlos.od2.vtiger.com",
					path		= "/modules/Rest/Api.php/V1/Vtiger/Default/",
					userName	= "cvazquez1976%40gmail.com",
					accessKey 	= "NJXZKiBT1Y7cV2z",
					fullEndPointRequestURL = proxyurl + endPoint + path + method + (queryString && queryString.trim().length ? "?" + queryString : ""),
					headers = new Headers();

			headers.append('Authorization', 'Basic' + encode(userName + ":" + accessKey));

			const	challengRequest = await fetch(fullEndPointRequestURL, {
													method	: 'GET',
													mode	: "no-cors",
													headers
												});

			const response		= await challengRequest.json();

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