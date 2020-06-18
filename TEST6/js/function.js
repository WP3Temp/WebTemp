var data = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
window.onload=function(){
  document.getElementById("result").style.display="none";
  document.getElementById("scroll").style.display="none";
}
function display_scroll(){
  document.getElementById("scroll").style.display='';
}
function display_result(){
  document.getElementById("result").style.display='';
}
function memory1(){
  var radio=document.getElementsByName("Q1");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[0]=radio[i].value;
  	  localStorage.setItem('Q1',data[0]);
  	}
  }
}
function memory2(){
  var radio=document.getElementsByName("Q2");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[1]=radio[i].value;
  	  localStorage.setItem('Q2',data[1]);
  	}
  }
}
function memory3(){
  var radio=document.getElementsByName("Q3");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[2]=radio[i].value;
  	  localStorage.setItem('Q3',data[2]);
  	}
  }
}
function memory4(){
  var radio=document.getElementsByName("Q4");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[3]=radio[i].value;
  	  localStorage.setItem('Q4',data[3]);
  	}
  }
}
function memory5(){
  var radio=document.getElementsByName("Q5");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[4]=radio[i].value;
  	  localStorage.setItem('Q5',data[4]);
  	}
  }
}
function memory6(){
  var radio=document.getElementsByName("Q6");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[5]=radio[i].value;
  	  localStorage.setItem('Q6',data[5]);
  	}
  }
}
function memory7(){
  var radio=document.getElementsByName("Q7");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[6]=radio[i].value;
  	  localStorage.setItem('Q7',data[6]);
  	}
  }
}
function memory8(){
  var radio=document.getElementsByName("Q8");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[7]=radio[i].value;
  	  localStorage.setItem('Q8',data[7]);
  	}
  }
}
function memory9(){
  var radio=document.getElementsByName("Q9");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[8]=radio[i].value;
  	  localStorage.setItem('Q9',data[8]);
  	}
  }
}
function memory10(){
  var radio=document.getElementsByName("Q10");
  for(var i=0; i<radio.length; i++){
  	if(radio[i].checked){
  		data[9]=radio[i].value;
  	  localStorage.setItem('Q10',data[9]);
  	}
  }
}

function cal(){
  var sum=0;
  for (var i=0; i<10; i++)  {
    sum+=Number(data[i]);
  }
  if (sum > 60) {
    document.getElementById("result1").style.display="";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="none";
    document.getElementById("result5").style.display="none";
    document.getElementById("result6").style.display="none";
  }
  else if (sum > 50) {
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="none";
    document.getElementById("result5").style.display="none";
    document.getElementById("result6").style.display="none";
  }
  else if (sum > 40) {
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="";
    document.getElementById("result4").style.display="none";
    document.getElementById("result5").style.display="none";
    document.getElementById("result6").style.display="none";
  }
  else if (sum > 30) {
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="";
    document.getElementById("result5").style.display="none";
    document.getElementById("result6").style.display="none";
  }
  else if (sum > 20) {
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="none";
    document.getElementById("result5").style.display="";
    document.getElementById("result6").style.display="none";
  }
  else {
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="none";
    document.getElementById("result5").style.display="none";
    document.getElementById("result6").style.display="";
  }
}

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
if (hasClass(elem, className)) {
  while (newClass.indexOf(" " + className + " ") >= 0 ) {
      newClass = newClass.replace( " " + className + " " , " " );
  }
  elem.className = newClass.replace(/^\s+|\s+$/g, '');
} else {
  elem.className += ' ' + className;
}
}

theToggle.onclick = function() {
  toggleClass(this, 'on');
  return false;
}
function reset(){
  document.getElementById("result").style.display="none";
  document.getElementById("scroll").style.display="none";
  for (var i=0;i<10;i++){
    data[i]=-1;
  }
  var radio1=document.getElementsByName("Q1");
  for(var i=0; i<radio.length; i++){
  	if(radio1[i].checked){
  		radio1[i].checked=false;
  	}
  }
  var radio2=document.getElementsByName("Q2");
  for(var i=0; i<radio.length; i++){
  	if(radio2[i].checked){
  		radio2[i].checked=false;
  	}
  }
  var radio3=document.getElementsByName("Q3");
  for(var i=0; i<radio.length; i++){
  	if(radio3[i].checked){
  		radio3[i].checked=false;
  	}
  }
  var radio4=document.getElementsByName("Q4");
  for(var i=0; i<radio.length; i++){
  	if(radio4[i].checked){
  		radio4[i].checked=false;
  	}
  }
  var radio5=document.getElementsByName("Q5");
  for(var i=0; i<radio.length; i++){
  	if(radio5[i].checked){
  		radio5[i].checked=false;
  	}
  }
  var radio6=document.getElementsByName("Q6");
  for(var i=0; i<radio.length; i++){
  	if(radio6[i].checked){
  		radio6[i].checked=false;
  	}
  }
  var radio7=document.getElementsByName("Q7");
  for(var i=0; i<radio.length; i++){
  	if(radio7[i].checked){
  		radio7[i].checked=false;
  	}
  }
  var radio8=document.getElementsByName("Q8");
  for(var i=0; i<radio.length; i++){
  	if(radio8[i].checked){
  		radio8[i].checked=false;
  	}
  }
  var radio9=document.getElementsByName("Q9");
  for(var i=0; i<radio.length; i++){
  	if(radio9[i].checked){
  		radio9[i].checked=false;
  	}
  }
  var radio10=document.getElementsByName("Q10");
  for(var i=0; i<radio.length; i++){
  	if(radio10[i].checked){
  		radio10[i].checked=false;
  	}
  }
}
