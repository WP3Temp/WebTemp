// 문제 데이터 
var result_table = {
    0: ["한국", "서울", "9E40F3", "러시아", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 새롭고 다양한 기회를 좋아합니다. 빠르게 결과를 향해 행동해 성급해보일 수 있으나, 솔선수범하는 당신을 친구들은 의지하고 함께하고 싶어합니다. 이런 당신의 도전에 친구들은 조언과 격려를 아끼지 않습니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 한국이고 빠름과 도전을 중시하는 <b>대한민국 - 서울</b>입니다. 서울은 강력한 문화적 기반과 세련된 도시문화로 빠르게 세계 문화 중심지로 급부상하고 있습니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>러시아 - 모스크바</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    1: ["아랍에미리트", "두바이", "0CBBEE", "브라질", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 꿈을 꾸며 행동하는 사람입니다. 그리고 그 꿈을 향한 과정 속에서 직접적인 답을 제시하는 사람입니다. 친구들의 마음을 잘 헤아려 고민을 해결해주기도 합니다. 어느 상황에서도 친구들의 기대를 받으며, 조금 더 크게 성장하고 싶다는 마음을 품고 있습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 꿈과 희망의 도시 <b>아랍에미리트 - 두바이</b>입니다. 두바이는 페르시아 만 남동쪽 해안에 위치한 아랍에미리트의 최대 도시로, 중동과 페르시아 만 지역의 문화 중심지입니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>브라질 - 리우데자네이루</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    2: ["스페인", "바르셀로나", "FFBC3D", "이탈리아", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 평소 빠른 것을 즐기지 않고, 천천히 여유를 갖는 편입니다. 그러나 놀 기회가 왔을 때 세상에게 가장 열심히 즐기는 사람으로 돌변합니다. 춤과 예술을 사랑하며, 열정적인 성격에 매료되어 주위에 애인친구가 많습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 열정과 휴식을 중시하는 <b>스페인 - 바르셀로나</b>입니다. 바르셀로나는 세계 10대 해변 도시 중 1위에 랭크된 적이 있는 아름다운 도시로, 가우디의 건축물로 유명한 문화, 경제 도시입니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>이탈리아 - 밀라노</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    3: ["독일", "베를린", "E2535A", "호주", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 문제를 해결하는 것을 즐깁니다. 스스로의 성취에 대한 만족도가 높으며, 특히 어려운 문제를 좋아합니다. 꼼꼼하고 신중한 성격 탓에 여행에서 일정을 짜고, 준비물을 챙기는 역할을 맡습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 신중함과 배움을 중시하는 <b>독일 - 베를린</b>입니다. 베를린은 현대 미술과 디자인, 클럽 문화의 중심이면서 베를린 필하모닉, 베를린 국제영화제 등 다양한 문화적 유산이 공존하는 도시입니다.<br>전체 인구의 <font style='color:red'>6%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>호주 - 시드니</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    4: ["일본", "도쿄", "FF8879", "싱가포르", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 맡은 것을 무조건 해결하고자 하는 책임감이 강합니다. 책임 소재가 명확하지 않음에도 수습하려고 달려들며, 이런 모습에 친구들은 당신을 신뢰합니다. 또한, 당신의 결정은 언제나 친구들의 지지를 받습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 단정하고 조용한 배려가 있는 <b>일본 - 도쿄</b>입니다. 세계적인 다국적 기업의 본사가 가장 많이 밀집한 도시이며, 20세기 세계 최고의 도시였던 도쿄는 여전히 스트릿하고 독특한 에너지와 고풍스러운 옛스러움이 공존합니다.<br>전체 인구의 <font style='color:red'>8%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>싱가포르 - 싱가포르</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    5: ["핀란드", "헬싱키", "6BB499", "영국", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 첫인상이 좋다는 말을 자주 듣습니다. 의견을 자유롭게 제시하며, 유연하며 부드러운 관계를 선호합니다. <br>성실함을 중시하며, 같이 있으면 편안하다는 소리를 자주 듣습니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 성실함과 존중을 중시하는 <b>핀란드 - 헬싱키</b>입니다. 약 60만명의 인구를 가진 작은 도시인 헬싱키는 사우나와 헤비메탈이 공존하는 쌀쌀한 북유럽 도시입니다. 침묵의 캄피 예배당에서 평화와 고요함을 가져보는건 어떨까요.<br>전체 인구의 <font style='color:red'>1%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>영국 - 런던</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    6: ["프랑스", "파리", "C09091", "베트남", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 사람과 상황에 대해 낙관적인 경향이 있습니다. 평소 대화를 주도하는 편이며, 단도직입적으로 말하는 것을 좋아합니다. 이런 성격 탓에 술을 마시는 것 보다는 술을 마시는 분위기를 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 낭만과 대화를 중시하는 <b>프랑스 - 파리</b>입니다. 빛에 도시라는 애칭을 가진 파리는 세계 예술과 문화, 낭만의 수도이며, 피카소, 마티스, 고흐, 살바도르 달리 등 여러 예술가가 사랑했던 도시이며, 현재에도 끝없는 영감을 주는 도시입니다. 한편으로 파리는 유럽의 중요한 금융도시이기도 합니다.<br>전체 인구의 <font style='color:red'>5%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>베트남 - 하노이</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    7: ["체코", "프라하", "F39B4A", "미국", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 남의 말을 잘 들어주며, 한 번 들은 비밀 이야기는 무덤까지 가져가는 편입니다. 진지하면서도 위트있는 대화로 친구들의 매번 당신의 이야기에 귀를 기울이고 있습니다. 속 깊은 이야기를 나눌 수 있는 당신을 친구들은 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 독창적이고 자유로운 기풍을 가진 <b>체코 - 프라하</b>입니다. 블타바 강을 중심으로 만들어진 프라하는 중세/19세기 유럽의 모습을 잘 간직하고 있으며, 메멘토 모리의 낙서들이 장난스럽게 곳곳에 남겨져 있습니다.<br>전체 인구의 <font style='color:red'>5%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>미국 - LA</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    8: ["러시아", "모스크바", "0C266B", "한국", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 낯을 가려 처음에 바로 다가가기는 어렵지만, 시간을 두고 진지한 관계를 형성하는 것을 좋아합니다. 매번 논리적으로 말을 하고자 하며, 해야 할 일이 생기면 직접 하기를 좋아합니다. 가끔 당신의 용기 있는 행동에 친구들은 놀라곤 합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 논리적이고 지적 융성함을 지닌 <b>러시아 - 모스크바</b>입니다. 세계에서 4번째로 큰 도시인 모스크바는 기계공업과 학술문화의 중심지로 명성이 높습니다.<br>전체 인구의 <font style='color:red'>10%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>한국 - 서울</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div><br><br>"],
    9: ["브라질", "리우데자네이루", "4FD7BE", "아랍에미리트", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 그룹 활동에서 항상 앞장서 놀 곳을 정하는 편입니다. 흥이 주체하지 못하며, 그런 모습에 그룹의 분위기가 흥이 넘치는 분위기로 탈바꿈합니다. 의기소침해있는 친구에게 힘이 나는 말을 자주 해주며, 용기를 북돋아주는 능력 역시 탁월해 친구들과의 약속이 많습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 사람간의 관계와 흥을 중시하는 <b>브라질 - 리우데자네이루</b>입니다. 정열의 도시 리우는 삼바와 보사노바가 시작된 곳으로, 덥고 습한 기후를 가지고 있으며 세계적인 축제인 카니발이 매년 개최되는 곳입니다.<br>전체 인구의 <font style='color:red'>12%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>아랍에미레트 - 두바이</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    10: ["이탈리아", "밀라노", "CFA091", "스페인", "<div class='t1'>여행 성향</div><div class='tt1'>당신은 의사 표현이 매우 자유로우며, 공격적이라는 말까지 듣기도 합니다. 자유로운 사고와 유창한 언어 센스로 주위에 애인 친구가 많습니다. 활발하면서도 매력 넘치는 모습에 누구나 당신과 친구가 되고 싶을 것입니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 멋과 사랑이 공존하는 <b>이탈리아 - 밀라노</b>입니다. 밀라노는 세계 패션과 디자인의 중심지이며 재능 있는 예술인이 많은 곳입니다. 매력 있는 사람과 함께하며 그 사이에서 본인의 매력을 뽐내기를 좋아하는 당신과 가장 잘 어울리는 여행지입니다.<br>전체 인구의 <font style='color:red'>9%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>스페인 - 바르셀로나</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
}
// 유저 입력 저장공간
var userdata = 0;

// 레이아웃 개수 및 id 조정
var myFullpage = new fullpage('#fullpage', {
    anchors: ['titlepage', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'resultpage', 'Comment'],
    sectionsColor: [],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['titlepage', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'resultpage', 'Comment']
});

// document.querySelector('.moveSectionDown').addEventListener('click', function(e){
//     e.preventDefault();
//     fullpage_api.moveSectionDown();
// });

// document.querySelector('.moveSectionUp').addEventListener('click', function(e){
//     e.preventDefault();
//     fullpage_api.moveSectionUp();
// });

// 스크롤 지시기 생성
$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $('section.ok').offset().top
        }, 'slow');
        return false;
    });
});

// 1번 선지 입력 시
function btn1input() {
    fullpage_api.moveSectionDown();
}
// 2번 선지 입력 시
function btn2input() {
    userdata = userdata + 1;
    fullpage_api.moveSectionDown();
}

// 결과 표시
function result_render(userdata) {
    $(".finalq").css('text-align','left');
    $(".finalq").html(result_table[userdata][4]);
    // fullpage_api.setAllowScrolling(false);
    $(".scroll-down").css('display','none');
}

// 결과 모달 창 보이기
function result() 
{

    var resultBox = $('.result'),
        resultTrigger = $('.result__trigger'),
        resultClose = $('.result__close'),
        resultTitle = $('.result__title'),
        resultContent = $('.result__content'),
        resultAction = $('.result__action');

    // Open the result
    resultTrigger.on('click', function(e) {
        resultBox.toggleClass('result--active');
        e.stopPropagation()
    });

    // Close the result - click close button
    resultClose.on('click', function() {
        resultBox.removeClass('result--active');
    });

    // Close the result - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            resultBox.removeClass('result--active');
        }
    });

    // Close result - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(resultBox) === false &&
            $(e.target).is(resultTitle) === false &&
            $(e.target).is(resultContent) === false &&
            $(e.target).is(resultAction) === false) {
            resultBox.removeClass("result--active");
        }
    });

};

//Run function when the document has loaded
$(function() {
    result();
});