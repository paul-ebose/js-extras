// Use JavaScript to modify the URL without reloading the page
// must have the same BASE_URL
// some browsers omit the nextTitle argument
//	window.history.back() to act as back button, window.history.go(0) OR window.history.go() to refresh page

const modifyURL = (pageTitle, [baseURL, route]) => {
	const nextURL = baseURL + route,
		nextTitle = pageTitle,
		nextState = { additionalInformation: 'Updated the URL' };

	// This will create a new entry in the browser's history, without reloading
	// The conditional is to check if values entered are valid strings
	(typeof baseURL === "string") && (typeof route === "string") && (typeof pageTitle === "string")
		? (window.history.pushState(nextState, nextTitle, nextURL))		//true
		: 'enter valid string'		//false
}