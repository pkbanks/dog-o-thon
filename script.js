class Dog{
	constructor(name, breed){
		this.name = name;
		this.breed = breed;
	}
}

function clearInputs(){
	document.getElementById('the_form').reset();
}

function addDog(){
	// Console log all values of the form
		var dog_name = document.getElementById('dog_name').value;
		var dog_breed = document.getElementById('breed').value

		console.log("Name: " + dog_name);
		console.log("Breed: " + dog_breed);

		// Create an instance of a dog with a name and a breed from the values in the form
		var dog = new Dog(dog_name, dog_breed);

		var new_row = createRow(dog);

		addRow(new_row);

		// console.log(new_row);
}

function createRow(dog){
	// <tr>
 //    <td>name</td>
 //    <td>breed</td>
 //  </tr>
	var newRow = document.createElement("tr")
	var dog_name = document.createElement("td")
	var dog_breed = document.createElement("td")

	dog_name.appendChild(document.createTextNode(dog.name));
	dog_breed.appendChild(document.createTextNode(dog.breed));

	newRow.appendChild(dog_name)
	newRow.appendChild(dog_breed)
	
	return newRow;
}

function addRow(new_row){
	var t = document.getElementById('table_body');
	t.appendChild(new_row);
}

window.addEventListener("load", function(){
	// console.log("ready");

	// store the submit button as a variable
	var btn_submit = document.querySelector('input[type="submit"]');

	// on click
	btn_submit.addEventListener("click", function(){
		// override the default behavior
		event.preventDefault();
		
		addDog();
		clearInputs();
	});

})