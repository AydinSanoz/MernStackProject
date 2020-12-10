exports.auth_register = (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	console.log("fields",firstName, lastName, email, password);
	res.send('Registered Successfully');
};

exports.auth_login = (req, res) => {
	res.send('Signed Successfully');
};
