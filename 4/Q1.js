//버튼 안보이기
window.onload=function(){
	document.getElementById("arrow").style.display="none";
}
//선지 클릭시 버튼 보이기
function function1(){
		document.getElementById("arrow").style.display='';
}
//q1의 value값 localstorage에 저장
function store(){
var radios=document.getElementsByName("q1");
for(var i=0;i<radios.length;i++){
	if(radios[i].checked){
		var value=radios[i].value;
	localStorage.setItem('q1',value);
	}
}
}