import React, { useEffect, useState, useRef, Suspense } from "react";


async function apiRequest(method, queryString) {
	try {
		const	endPoint	= "http://dev.api.carlosvazquez.org",
				path		= "/demo/vtiger/",
				fullEndPointRequestURL = endPoint + path + method + (queryString && queryString.trim().length ? "/" + queryString : ""),
				challengRequest = await fetch(fullEndPointRequestURL, {
												method	: 'GET'
											}),
				response		= await challengRequest.json();


				return response;

	} catch(e) {
		console.log(e);
		return "Error Loading API";
	}
}

export default function Index(props) {
	const	[ data, setData ] = useState([]),
			[ loaded, setLoaded] = useState(false),
			mounted = useRef(false),
			method		= props.match.params.method && props.match.params.method.length ? props.match.params.method : undefined,
			queryString	= props.location && props.location.search && props.location.search.length ? props.location.search.replace("?", "") : "id=19x1";

	useEffect(() => {
		async function getData() {
			const data = await apiRequest(method, queryString)

			setData(data);
			setLoaded(true);

			mounted.current = true
		}

		if(!mounted.current) {
			getData();
		}

		return () => mounted.current = false;
	},[method, queryString]);

	if(!loaded) {
		return <div>Loading....</div>
	} else {
			return	<div>
				<ul>
				{
					Object.keys(data).map((key, index) => <li key={index}>{key} : {data[key]}</li>)
				}
				</ul>
			</div>
	}
}