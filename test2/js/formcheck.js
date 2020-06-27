
function checking1(){ // 1번 문제 선지 값 저장

    if ( ! jQuery('input[name="1"]:checked').val() ) {  // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.');                  // alert창 띄움
        jQuery('input[name="1"]').focus();              // 문제에 포커스
        return false;                                   // false 반환해 페이지 이동 못하도록 함
    }
    else{ // 선지가 선택되었을 경우
        var x = document.getElementsByName("1");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;     
        }
        localStorage.setItem('sum1', res); // 체크된 선지의 value값 저장

       return true;                 // true 반환해 페이지 이동하도록 함
    }
}
function checking2(){ // 2번 문제 선지 값 저장

    if ( ! jQuery('input[name="2"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="2"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("2");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum2', res); // 체크된 선지의 value값 저장

        return true; // true 반환해 페이지 이동하도록 함
    }
}

function checking3(){ // 3번 문제 선지 값 저장

    if ( ! jQuery('input[name="3"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="3"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("3");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum3', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    } 
}

function checking4(){ // 4번 문제 선지 값 저장

    if ( ! jQuery('input[name="4"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="4"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("4");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum4', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}
function checking5(){ // 5번 문제 선지 값 저장

    if ( ! jQuery('input[name="5"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="5"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("5");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum5', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}

function checking6(){ // 6번 문제 선지 값 저장

    if ( ! jQuery('input[name="6"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="6"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("6");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum6', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}
function checking7(){ // 7번 문제 선지 값 저장

    if ( ! jQuery('input[name="7"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="7"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("7");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum7', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}
function checking8(){ // 8번 문제 선지 값 저장

    if ( ! jQuery('input[name="8"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="8"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    } 
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("8");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum8', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}

function checking9(){ // 9번 문제 선지 값 저장

    if ( ! jQuery('input[name="9"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="9"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("9");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum9', res); // 체크된 선지의 value값 저장
        return true; // true 반환해 페이지 이동하도록 함
    }
}function checking10(){ // 10번 문제 선지 값 저장

    if ( ! jQuery('input[name="10"]:checked').val() ) { // 선지 선택이 안되어 있을 경우
        alert('옵션을 선택해주세요.'); // alert창 띄움
        jQuery('input[name="10"]').focus(); // 문제에 포커스
        return false; // false 반환해 페이지 이동 못하도록 함
    }
    else{  // 선지가 선택되었을 경우
        var x = document.getElementsByName("10");
        var res;
        for (var i=0; i < x.length; i++){
        if (x[i].checked) res = x[i].value;
        }
        localStorage.setItem('sum10', res); // 체크된 선지의 value값 저장
        
        sum();  // 저장된 10개 문제의 value들의 합을 구함
        // 합의 범위따라 결과페이지 호출
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
       
    }
}
function sum(){ // 10개 선지 value의 합을 구하는 함수
    var Sum = 0;
    var getValue = localStorage.getItem('sum1'); // 1번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum2'); // 2번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum3'); // 3번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum4'); // 4번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum5'); // 5번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum6'); // 6번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum7'); // 7번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum8'); // 8번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum9'); // 9번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    var getValue = localStorage.getItem('sum10'); // 10번 선지 value
    var getInt = parseInt(getValue);
    Sum += getInt;
    console.log(Sum);

    return Sum; // 전체 합 반환
}