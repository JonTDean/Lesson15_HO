const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');

// const firstNameListener =
firstNameInput.addEventListener('input', () => {
	let firstName = lengthCheck(firstNameInput);
	console.log('First Name is: ', firstName);
});

firstNameInput.addEventListener('change', () =>
	correctValidation(firstNameInput)
);

// const lastNameListener =
lastNameInput.addEventListener('input', () => {
	let lastName = lengthCheck(lastNameInput);
	// lastNameInput.innerText[0] = lastNameInput.value[0].toUpperCase();
	console.log('Last Name is: ', lastName);
});

lastNameInput.addEventListener('change', () =>
	correctValidation(lastNameInput)
);

function lengthCheck(nameInput) {
	if (nameInput.length < 1) {
		alert('Please enter more than one letter.');
	}

	return regexChecker(nameInput);
}

function regexChecker(nameInput) {
	let capitalized;
	const special = /[\W0-9]/g;

	if (nameInput.value[0].match(/a-z/)) {
		return capitalizeFirstLetter(nameInput);
	}

	if (nameInput.value.match(special)) {
		return regexSpecialSymbolRemoval(nameInput, special);
	}
}

function capitalizeFirstLetter(nameInput) {
	// console.log(`Value is ${nameInput.value[0]}`); //is a string
	let capitalized =
		nameInput.value[0].toUpperCase() + nameInput.value.substring(1);

	nameInput.value = capitalized;
	return capitalized;
}

function regexSpecialSymbolRemoval(nameInput, regex) {
	alert("Oh no! That's an invalid format!");
	nameInput.value = nameInput.value.replace(regex, '');
	return nameInput;
}

function correctValidation(nameInput) {
	const special = /[\W0-9]/g;

	if (nameInput.value.match(special)) {
		alert("Oh no! That's an invalid format!");
	}
	alert('Yay! Your inputs were all correct!');
}
