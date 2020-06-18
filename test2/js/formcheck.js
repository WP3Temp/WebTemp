






function checking1(){

    if ( ! jQuery('input[name="1"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="1"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("1");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum1', res);

       return true;
    }
}
function checking2(){

    if ( ! jQuery('input[name="2"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="2"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("2");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum2', res);

        return true;
    }
}

function checking3(){

    if ( ! jQuery('input[name="3"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="3"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("3");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum3', res);
        return true;
    }
}

function checking4(){

    if ( ! jQuery('input[name="4"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="4"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("4");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum4', res);
        return true;
    }
}
function checking5(){

    if ( ! jQuery('input[name="5"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="5"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("5");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum5', res);
        return true;
    }
}

function checking6(){

    if ( ! jQuery('input[name="6"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="6"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("6");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum6', res);
        return true;
    }
}
function checking7(){

    if ( ! jQuery('input[name="7"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="7"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("7");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum7', res);
        return true;
    }
}
function checking8(){

    if ( ! jQuery('input[name="8"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="8"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("8");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum8', res);
        return true;
    }
}

function checking9(){

    if ( ! jQuery('input[name="9"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="9"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("9");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum9', res);
        return true;
    }
}function checking10(){

    if ( ! jQuery('input[name="10"]:checked').val() ) {
        alert('옵션을 선택해주세요.');
        jQuery('input[name="10"]').focus();
        return false;
    }
    else{
        var x = document.getElementsByName("10");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum10', res);
        
        sum();
        if(sum() < 13){
            location.href = 'final1.html';
        }
        else if (sum() < 18){
            location.href = 'final.html';
        }
        else if (sum() < 23){
            location.href = 'final2.html';
        }
        else if (sum() < 28){
            location.href = 'final3.html';
        }
        else if (sum() < 33){
            location.href = 'final7.html';
        }
        else if (sum() < 38){
            location.href = 'final6.html';
        }
        else if (sum() < 43){
            location.href = 'final9.html';
        }
        else if (sum() < 48){
            location.href = 'final5.html';
        }
        else if (sum() < 53){
            location.href = 'final4.html';
        }
        else if (sum() <= 60){
            location.href = 'final8.html';
        }
       
        //return true;
    }
}
function sum(){
    var Sum = 0;
    var getValue = localStorage.getItem('sum1');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum2');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum3');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum4');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum5');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum6');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum7');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum8');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum9');
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum10');
    var getInt = parseInt(getValue);
    Sum += getInt;
    console.log(Sum);

    return Sum;
}