function isString(txt) {
	let string = false;

	if (typeof txt == 'string') {
		string = true;
	} else {
		string = false;
	}

	return string;
}

module.exports = {
	isString
}