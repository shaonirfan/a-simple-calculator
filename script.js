function deleteMe(){
	document.getElementById('output-value').innerText = '';
}
function calculator(newValue){
	document.getElementById('output-value').innerText += newValue;
}
function answer(){
	var a = document.getElementById('output-value').innerText;
	var b = eval(a);
	document.getElementById('output-value').innerText = b;
}

