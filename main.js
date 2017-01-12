Var myButton = document.getElementById('button');
Var myHeading= document.getElementById('H1');

function setUserName() {
	
	var myname=Prompt('Please enter your user name');
	localstorage.setItem(name,myName);
	myHeading.textContext=' Hello '+myname;
	
}

