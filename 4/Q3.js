window.onload=function(){
	document.getElementById("arrow").style.display="none"; //버튼 숨기기
}
function function1(){
		document.getElementById("arrow").style.display='';//버튼 보이기
}

function store(){
	var radios=document.getElementsByName("q3");//key가 q3의 호출
	for(var i=0;i<radios.length;i++){
		if(radios[i].checked){
			var value=radios[i].value;
		localStorage.setItem('q3',value);//key가 q3의 value값 저장
		}
	}
	}