window.onload=function(){
	document.getElementById("arrow").style.display="none";
}
function function1(){
		document.getElementById("arrow").style.display='';
}

function store(){
	var radios=document.getElementsByName("q3");
	for(var i=0;i<radios.length;i++){
		if(radios[i].checked){
			var value=radios[i].value;
		localStorage.setItem('q3',value);
		}
	}
	}