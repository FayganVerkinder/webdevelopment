const valideer = () => {
	let geldig = true;
	if (!valideerVoornaam()) geldig = false;
	if (!valideerFamilienaam()) geldig = false;
	if (!valideerGeboorteDatum()) geldig = false;
	if (!valideerEmail()) geldig = false;
	if (!valideerAantalKinderen()) geldig = false;
	return geldig;
};

const valideerVoornaam = () => {
	let input = document.getElementById("txtVoornaam");
	let value = input.value.trim();
	if (value.length > 30) {
		reportError(input, "max. 30 karakters");
		return false;
	}
	clearError(input);
	return true;
};

const valideerFamilienaam = () => {
	let input = document.getElementById("txtFamilienaam");
	let value = input.value.trim();
	if (value.length === 0) {
		reportError(input, "verplicht veld");
		return false;
	} else if (value.length > 50) {
		reportError(input, "max. 50 karakters");
		return false;
	}
	clearError(input);
	return true;
};

const valideerGeboorteDatum = () => {
	let input = document.getElementById("txtGeboorteDatum");
	let value = input.value.trim();
	const regex = /^\d{4}-\d{2}-\d{2}$/;

	if (!regex.test(value)) {
		reportError(input, "formaat is niet jjjj-mm-dd");
		return false;
	}
	clearError(input);
	return true;
};

const valideerEmail = () => {
	let input = document.getElementById("txtEmail");
	let email = input.value.trim();
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (email.length === 0) {
		reportError(input, "verplicht veld");
		return false;
	}
	if (!regex.test(email)) {
		reportError(input, "geen geldig email adres");
		return false;
	}
	clearError(input);
	return true;
};

const valideerAantalKinderen = () => {
	let input = document.getElementById("txtAantalKinderen");
	let value = input.value.trim();

	if (value.length === 0) {
		reportError(input, "verplicht veld");
		return false;
	}

	if (!/^\d+$/.test(value)) {
		reportError(input, "is geen positief getal");
		return false;
	}

	let aantal = parseInt(value, 10);
	if (aantal >= 99) {
		reportError(input, "te vruchtbaar");
		return false;
	}

	clearError(input);
	return true;
};

const reportError = (element, message) => {
	let elementId = element.id;
	let errElementId = "err" + elementId.substring(3);
	let errElement = document.getElementById(errElementId);
	element.className = "invalid";
	errElement.innerHTML = message;
};

const clearError = (element) => {
	let elementId = element.id;
	let errElementId = "err" + elementId.substring(3);
	let errElement = document.getElementById(errElementId);
	element.className = "";
	errElement.innerHTML = "";
};

const clearAllErrors = () => {
	let fields = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
	fields.forEach(id => clearError(document.getElementById(id)));
};
