//your JS code here. If required.
let dropdown = document.getElementById("colorSelect")
let btn = document.getElementById("removeButton")

btn.addEventListener("click", removeElement)

function removeElement() {
	let selectedIndex = dropdown.selectedIndex
	if(selectedIndex !== -1){
		dropdown.options[selectedIndex].remove()
	}
	else {
	    console.log("No option selected");
	}
	
}