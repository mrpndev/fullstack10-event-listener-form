/* 
	? Event Listeners
	* methods which listen for an event
	* when that event occurs, a callback fx is triggered
	* that method is called .AddEventListener()
	
	? Callbacks
	* a function that gets called by another function
	* this call occurs when an event triggers it
	* event - a string of something that happens
*/

// 1. Grab an item you're trying to set an event listener on
let submit = document.querySelector(".submit")

// 2. Apply your event listener and the type of event
submit.addEventListener("click", event => {
	console.log(event)
	event.target.style.color = "red"
})