// 1번문제 선지 localStorage에 저장
function checking1_1(){
    localStorage.setItem('Q1', '1'); // 첫번째 선지가 선택되었을 때 호출
}
function checking1_2(){
    localStorage.setItem('Q1', '2'); // 두번째 선지가 선택되었을 때 호출
}
function checking1_3(){
    localStorage.setItem('Q1', '3'); // 세번째 선지가 선택되었을 때 호출
}

// 2번문제 선지 localStorage에 저장
function checking2_1(){
    localStorage.setItem('Q2', '1'); // 첫번째 선지가 선택되었을 때 호출
}
function checking2_2(){
    localStorage.setItem('Q2', '2'); // 두번째 선지가 선택되었을 때 호출
}
function checking2_3(){
    localStorage.setItem('Q2', '3'); // 세번째 선지가 선택되었을 때 호출
}

// 3번문제 선지 localStorage에 저장
function checking3_1(){
    localStorage.setItem('Q3', '1'); // 첫번째 선지가 선택되었을 때 호출
}
function checking3_2(){
    localStorage.setItem('Q3', '2'); // 두번째 선지가 선택되었을 때 호출
}
function checking3_3(){
    localStorage.setItem('Q3', '3'); // 세번째 선지가 선택되었을 때 호출
}

// 4번문제 선지 localStorage에 저장
function checking4_1(){
    localStorage.setItem('Q4', '1'); // 첫번째 선지가 선택되었을 때 호출
}
function checking4_2(){
    localStorage.setItem('Q4', '2'); // 두번째 선지가 선택되었을 때 호출
}
function checking4_3(){
    localStorage.setItem('Q4', '3'); // 세번째 선지가 선택되었을 때 호출
}

// 결과 도출
$(document).ready(function(){
    if(localStorage.getItem('Q1')=='1'){ // 1번문제에서 첫번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#2_1').hide();  
        $('#2_2').hide();
        $('#3_1').hide();
        $('#3_2').hide();
        $('#b').hide();
        $('#c').hide();
    }
    if(localStorage.getItem('Q1')=='2'){ // 1번문제에서 두번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#1_1').hide();
        $('#1_2').hide();
        $('#3_1').hide();
        $('#3_2').hide();
        $('#a').hide();
        $('#c').hide();
    }
    if(localStorage.getItem('Q1')=='3'){ // 1번문제에서 세번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#1_1').hide();
        $('#1_2').hide();
        $('#2_1').hide();
        $('#2_2').hide();
        $('#b').hide();
        $('#a').hide();
    }

    if(localStorage.getItem('Q2')=='1'){ // 2번문제에서 첫번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#22_1').hide();
        $('#22_2').hide();
        $('#33_1').hide();
        $('#33_2').hide();
        $('#bb').hide();
        $('#cc').hide();
    }
    if(localStorage.getItem('Q2')=='2'){ // 2번문제에서 두번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#11_1').hide();
        $('#11_2').hide();
        $('#33_1').hide();
        $('#33_2').hide();
        $('#aa').hide();
        $('#cc').hide();
    }
    if(localStorage.getItem('Q2')=='3'){ // 2번문제에서 세번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#11_1').hide();
        $('#11_2').hide();
        $('#22_1').hide();
        $('#22_2').hide();
        $('#bb').hide();
        $('#aa').hide();
    }

    if(localStorage.getItem('Q3')=='1'){ // 3번문제에서 첫번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#222_1').hide();
        $('#222_2').hide();
        $('#333_1').hide();
        $('#333_2').hide();
        $('#bbb').hide();
        $('#ccc').hide();
    }
    if(localStorage.getItem('Q3')=='2'){ // 3번문제에서 두번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#111_1').hide();
        $('#111_2').hide();
        $('#333_1').hide();
        $('#333_2').hide();
        $('#ccc').hide();
        $('#aaa').hide();
    }
    if(localStorage.getItem('Q3')=='3'){ // 3번문제에서 세번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#111_1').hide();
        $('#111_2').hide();
        $('#222_1').hide();
        $('#222_2').hide();
        $('#bbb').hide();
        $('#aaa').hide();
    }

    if(localStorage.getItem('Q4')=='1'){ // 4번문제에서 첫번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#2222_1').hide();
        $('#2222_2').hide();
        $('#3333_1').hide();
        $('#3333_2').hide();
        $('#bbbb').hide();
        $('#cccc').hide();
    }
    if(localStorage.getItem('Q4')=='2'){ // 4번문제에서 두번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#1111_1').hide();
        $('#1111_2').hide();
        $('#3333_1').hide();
        $('#3333_2').hide();
        $('#cccc').hide();
        $('#aaaa').hide();
    }
    if(localStorage.getItem('Q4')=='3'){ // 4번문제에서 세번째 선지가 선택되었을 때
        // 해당되는 결과를 제외하고 모두 숨김
        $('#1111_1').hide();
        $('#1111_2').hide();
        $('#2222_1').hide();
        $('#2222_2').hide();
        $('#bbbb').hide();
        $('#aaaa').hide();
    }
});


