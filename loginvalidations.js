const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs()
 {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(emailValue === '') 
	{
		setErrorFor(email, 'Enter email');
	} 
	else if (!isEmail(emailValue))
	 {
		setErrorFor(email, 'Not a valid email');
	}
	 else 
	{
		setSuccessFor(email);
	}
	
	if(passwordValue === '') 
	{
		setErrorFor(password, 'Enter Password');
	} 
	else 
	{
		setSuccessFor(password);
	}
}

function isEmail(email)
 {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

	