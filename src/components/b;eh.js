/*
I am trying to access the API using Javascript (react) and I receive the following error
Access to fetch at 'https://adventuresofcarlos.od2.vtiger.com/restapi/v1/vtiger/default/webservice.php?operation=getchallenge&username=cvazquez1976@gmail.com' from origin 'http://dev.vtiger.carlosvazquez.org' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Do I need to submit the ip address I an requesting from for access?

My Code looks like this
const				endPoint = "https://adventuresofcarlos.od2.vtiger.com/restapi/v1/vtiger/default",
					userName = "cvazquez1976@gmail.com",
					accessKey = "NJXZKiBT1Y7cV2z",

					fullEndPointRequestURL = endPoint + "/webservice.php?operation=getchallenge&username=" + userName,
					challengRequest = await fetch(fullEndPointRequestURL, {
													method	: 'GET',
													headers	: {
														'Content-Type': 'application/x-www-form-urlencoded',
														'Access-Control-Allow-Origin': "http://dev.vtiger.carlosvazquez.org"
													}
												}),
					response		= await challengRequest.json();