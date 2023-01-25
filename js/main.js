/*****************************************************************************
 * 파일이름 : main.js
 * 작성자 : 밤팔이(hyeonjun7@naver.com)
 * 파일내용 : 우마무스메 캐릭터 뽑기 시뮬레이터에 필요한 스크립트 전반
 * 작성일 : 2023-01-22
*****************************************************************************/

/** 뽑기 진행 중 새로운 뽑기가 진행되지 않도록 bool처럼 쓰이는 변수 */
var loding = "N";
/**
 * 뽑기 함수
 * @param {int} chkCnt 뽑기 횟수(1 or 10)
 * @param {int} type 쥬얼(1: 50, 2: 150, 3: 1500, 4: 0)
 */
function selectCard(chkCnt, type) {
    if (loding == "N") {
        loding = "Y"; 
        /** @type {int} 픽업 종류 */
        var lineUp = $("#lineUp option:selected").data("idx");
        /** 뽑은 우마무스메(서포트 카드) 리스트 */
        var card = new Array();

        /**전체 우마무스메 데이터 [[번호, 등급, 별명, 이름], ...]*/
        var db = [
            ['001', '1', '[스트레이트 라인]', '메지로 라이언'],
            ['002', '1', '[tach-nology]', '아그네스 타키온'],
            ['003', '1', '[Go To Winning!]', '위닝 티켓'],
            ['004', '1', '[사쿠라, 나아가라!]', '사쿠라 바쿠신 오'],
            ['005', '1', '[화창한 1등상♪]', '하루 우라라'],
            ['006', '1', '[운기상승☆행복만래]', '마치카네 후쿠키타루'],
            ['007', '1', '[포인세티아 리본]', '나이스 네이처'],
            ['008', '1', '[킹 오브 에메랄드]', '킹 헤일로'],
            ['009', '2', '[레드 스트라이프]', '골드 쉽'],
            ['010', '2', '[와일드 톱기어]', '보드카'],
            ['011', '2', '[톱 오브 블루]', '다이와 스칼렛'],
            ['012', '2', '[바위 뚫는 파랑]', '그래스 원더'],
            ['013', '2', '[엘☆Número 1]', '엘 콘도르 파사'],
            ['014', '2', '[엠프리스 로드]', '에어 그루브'],
            ['015', '2', '[스크램블☆존]', '마야노 탑건'],
            ['016', '2', '[머머링 스트림]', '슈퍼 크릭'],
            ['017', '3', '[스페셜 드리머]', '스페셜 위크'],
            ['018', '3', '[사일런트 이노센스]', '사일런스 스즈카'],
            ['019', '3', '[톱 오브 조이풀]', '토카이 테이오'],
            ['020', '3', '[포뮬러 오브 루주]', '마루젠스키'],
            ['021', '3', '[와일드 프론티어]', '타이키 셔틀'],
            ['022', '3', '[엘레강스 라인]', '메지로 맥퀸'],
            ['023', '3', '[로드 오브 엠퍼러]', '심볼리 루돌프'],
            ['024', '3', '[로제스 드림]', '라이스 샤워'],
            ['025', '3', '[스타라이트 비트]', '오구리 캡'],
            ['026', '3', '[오 솔레 수오!]', '티엠 오페라 오'],
            ['027', '3', '[MB-19890425]', '미호노 부르봉'],
            ['028', '3', '[pf.Victory formula...]', '비와 하야히데'],
            ['029', '3', '[비욘드 더 호라이즌]', '토카이 테이오'],
            ['030', '3', '[엔드 오브 스카이]', '메지로 맥퀸'],
            ['031', '3', '[피유 에클레르]', '카렌짱'],
            ['032', '3', '[Nevertheless]', '나리타 타이신'],
            ['033', '3', '[앱설루트☆LOVE]', '스마트 팔콘'],
            ['034', '3', '[Maverick]', '나리타 브라이언'],
            ['035', '3', '[퀘르쿠스 키윌리스]', '에어 그루브'],
            ['036', '3', '[선라이트 부케]', '마야노 탑건'],
            ['037', '3', '[푸른 구름 서밍]', '세이운 스카이'],
            ['038', '3', '[아마조네스 라피스]', '히시 아마존'],
            ['039', '3', '[쿠쿨칸 몽크]', '엘 콘도르 파사'],
            ['040', '3', '[세인트 제이드 힐러]', '그래스 원더'],
            ['041', '3', '[슈팅 스타 레뷔]', '후지 키세키'],
            ['042', '3', '[오센틱/1928]', '골드 시티'],
            ['043', '3', '[호핑♪비타민 하트]', '스페셜 위크'],
            ['044', '3', '[날아라☆서머 나이트]', '마루젠스키'],
            ['045', '3', '[블루/레이징]', '메이쇼 도토'],
            ['046', '3', '[Meisterschaft]', '에이신 플래시'],
            ['047', '3', '[길조・초가을 바람]', '마치카네 후쿠키타루'],
            ['048', '3', '[보노☆알라모다]', '히시 아케보노'],
            ['049', '3', '[초특급! 풀컬러 특수 PP]', '아그네스 디지털'],
            ['050', '3', '[시폰 리본 머미]', '슈퍼 크릭'],
            ['051', '3', '[Make up Vampire!]', '라이스 샤워'],
            ['052', '3', '[프린세스 오브 핑크]', '카와카미 프린세스'],
            ['053', '3', '[]', '맨하탄 카페'],
            ['054', '3', '[]', '심볼리 루돌프'],
            ['055', '3', '[]', '골드 시티'],
            ['056', '3', '[]', '토센 조던'],
            ['057', '3', '[]', '메지로 도베르'],
            ['058', '3', '[]', '오구리 캡'],
            ['059', '3', '[]', '비와 하야히데'],
            ['060', '3', '[]', '파인 모션'],
            ['061', '3', '[]', '타마모 크로스'],
            ['062', '3', '[]', '하루 우라라'],
            ['063', '3', '[]', '티엠 오페라 오'],
            ['064', '3', '[]', '사쿠라 치요노 오'],
            ['065', '3', '[]', '미호노 부르봉'],
            ['066', '3', '[]', '에이신 플래시'],
            ['067', '3', '[]', '메지로 아르당'],
            ['068', '3', '[]', '어드마이어 베가'],
        ];

        var n = 1;
        /** @type {int} 랜덤 정수 값 */
        var rand;
        /** 가챠에 포함되는 우마무스메(서포트 카드) 목록 */
        var uma_list;
        /**
        prob: [
            1-9뽑 3성 확률(%),
            1-9뽑 2 or 3성 확률(%),
            10뽑 3성 확률(%),
            10뽑 2 or 3성 확률(%)
        ]
        */
        var prob = [3, 21, 3, 100];
        /**
        pickup: [
            [3성 픽업 1 인덱스, 3성 픽업 2 인덱스, ...],
            [2성 픽업 1 인덱스, 2성 픽업 2 인덱스, ...],
            [1성 픽업 1 인덱스, 1성 픽업 2 인덱스, ...]
        ]
        */
        var pickup = [[], [], []];
        /**
        * pickup_prob: [
        * 3성(SSR) 픽업 확률 * 100(보통 50 or 75),
        * 2성(SR) 픽업 확률 * 100(보통 225),
        * 1성(R) 픽업 확률 * 100(보통 375)]
        */
        var pickup_prob = [0, 0, 0]
        /** 
         * [3성 픽업 개수, 2성 픽업 개수, 1성 픽업 개수]
        */
        var pickup_num = [0, 0, 0]

        // 픽업에 따라 uma_list 결정
        if (lineUp == '1') {
            uma_list = db.slice(0, 25)
        }
        else if (lineUp == '2') {
            uma_list = db.slice(0, 26)
            pickup = [[25], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '3') {
            uma_list = db.slice(0, 27)
            pickup = [[26], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '4') {
            uma_list = db.slice(0, 28)
            pickup = [[27], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '5') {
            uma_list = db.slice(0, 30)
            pickup = [[28, 29], [], []]
            pickup_prob = [50, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '6') {
            uma_list = db.slice(0, 31)
            pickup = [[30], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '7') {
            uma_list = db.slice(0, 32)
            pickup = [[31], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '8') {
            uma_list = db.slice(0, 33)
            pickup = [[32], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '9') {
            uma_list = db.slice(0, 34)
            pickup = [[33], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '10') {
            uma_list = db.slice(0, 36)
            pickup = [[34, 35], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '11') {
            uma_list = db.slice(0, 37)
            pickup = [[36], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '12') {
            uma_list = db.slice(0, 38)
            pickup = [[37], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '13') {
            uma_list = db.slice(0, 40)
            pickup = [[38, 39], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '14') {
            uma_list = db.slice(0, 41)
            pickup = [[40], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '15') {
            uma_list = db.slice(0, 42)
            pickup = [[41], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '16') {
            uma_list = db.slice(0, 44)
            pickup = [[42, 43], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '17') {
            uma_list = db.slice(0, 45)
            pickup = [[44], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '18') {
            uma_list = db.slice(0, 46)
            pickup = [[45], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '19') {
            uma_list = db.slice(0, 47)
            pickup = [[46], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '20') {
            uma_list = db.slice(0, 48)
            pickup = [[47], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '21') {
            uma_list = db.slice(0, 49)
            pickup = [[48], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '22') {
            uma_list = db.slice(0, 51)
            pickup = [[49, 50], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '23') {
            uma_list = db.slice(0, 52)
            pickup = [[51], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '24') {
            uma_list = db.slice(0, 53)
            pickup = [[52], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '25') {
            uma_list = db.slice(0, 55)
            pickup = [[53, 54], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '26') {
            uma_list = db.slice(0, 56)
            pickup = [[55], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '27') {
            uma_list = db.slice(0, 57)
            pickup = [[56], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '28') {
            uma_list = db.slice(0, 59)
            pickup = [[57, 58], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '29') {
            uma_list = db.slice(0, 60)
            pickup = [[59], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '30') {
            uma_list = db.slice(0, 61)
            pickup = [[60], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '31') {
            uma_list = db.slice(0, 63)
            pickup = [[61, 62], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '32') {
            uma_list = db.slice(0, 63)
        }
        else if (lineUp == '33') {
            uma_list = db.slice(0, 64)
            pickup = [[63], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '34') {
            uma_list = db.slice(0, 66)
            pickup = [[64, 65], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [2, 0, 0]
        }
        else if (lineUp == '35') {
            uma_list = db.slice(0, 67)
            pickup = [[66], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == '36') {
            uma_list = db.slice(0, 68)
            pickup = [[67], [], []]
            pickup_prob = [75, 0, 0]
            pickup_num = [1, 0, 0]
        }
        else if (lineUp == 's1') {
            uma_list = db.slice(0, 25)
            prob = [3, 21, 100, 100]
        }
        else if (lineUp == 's2') {
            uma_list = db.slice(0, 25)
            prob = [3, 100, 3, 100]
        }
        else if (lineUp == 's3') {
            uma_list = db.slice(0, 25)
            prob = [100, 100, 100, 100]
        }
        else if (lineUp == 's4') {
            uma_list = db.slice(0, 46)
            prob = [3, 21, 100, 100]
        }
        else if (lineUp == 's5') {
            uma_list = db.slice(0, 55)
            prob = [100, 100, 100, 100]
        }
        else if (lineUp == 's6') {
            uma_list = db.slice(0, 55)
            prob = [3, 100, 3, 100]
        }
        else if (lineUp == 's7') {
            uma_list = db.slice(0, 63)
            prob = [3, 21, 100, 100]
        }

        // 카드 뽑기
        for (var i = 0; i < chkCnt; i++) {
            rand = Math.floor(Math.random() * 100);
            if (i == 9) { // 10뽑
                if (rand < prob[2]) { // 10뽑 3성
                    rand = Math.floor(Math.random() * 100 * prob[2]);
                    if (rand < pickup_prob[0] * pickup_num[0]) { // 3성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[0]);
                        card[n] = uma_list[pickup[0][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '3');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[0]));
                        card[n]	= temp_list[rand];
                    }
                }
                else if (rand < prob[3]){ // 10뽑 2성
                    rand = Math.floor(Math.random() * 100 * (prob[3] - prob[2]));
                    if (rand < pickup_prob[1] * pickup_num[1]) { // 2성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[1]);
                        card[n] = uma_list[pickup[1][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '2');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[1]));
                        card[n]	= temp_list[rand];
                    }
                }
                else { // 10뽑 1성
                    rand = Math.floor(Math.random() * 100 * (100 - prob[3]));
                    if (rand < pickup_prob[2] * pickup_num[2]) { // 2성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[2]);
                        card[n] = uma_list[pickup[2][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '1');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[2]));
                        card[n]	= temp_list[rand];
                    }
                }
            }
            else { // 1-9뽑
                if (rand < prob[0]) { // 1-9뽑 3성
                    rand = Math.floor(Math.random() * 100 * prob[0]);
                    if (rand < pickup_prob[0] * pickup_num[0]) { // 3성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[0]);
                        card[n] = uma_list[pickup[0][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '3');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[0]));
                        card[n]	= temp_list[rand];
                    }
                }
                else if (rand < prob[1]) { // 1-9뽑 2성
                    rand = Math.floor(Math.random() * 100 * (prob[1] - prob[0]));
                    if (rand < pickup_prob[1] * pickup_num[1]) { // 2성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[1]);
                        card[n] = uma_list[pickup[1][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '2');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[1]));
                        card[n]	= temp_list[rand];
                    }
                }
                else { // 1-9뽑 1성
                    rand = Math.floor(Math.random() * 100 * (100 - prob[1]));
                    if (rand < pickup_prob[2] * pickup_num[2]) { // 2성 픽업 중 하나
                        rand = Math.floor(Math.random() * pickup_num[2]);
                        card[n] = uma_list[pickup[2][rand]]
                    }
                    else { // 픽업 제외한 나머지 중 하나
                        temp_list = uma_list.filter(el => el[1] == '1');
                        rand = Math.floor(Math.random() * (temp_list.length - pickup_num[2]));
                        card[n]	= temp_list[rand];
                    }
                }
            }
            n++;
        }

        var load_delay		= 0;
        var result_delay	= 0;
        var cardTotalEa		= card.length;
        var bgInterval      = "";
        var eq              = 0;
        var timerID;
        var cost;
        
        if (type == 1)
            cost = "50";
        else if (type == 2)
            cost = "150";
        else if (type == 3)
            cost = "1500";
        else
            cost = "0";

        $("#small_list").html("");
        $("#effctArea").bind('click', function() {
            eq = 80;
        });

        loadingCard(1);

        function loadingCard(key)
        {
            eq = 0;
            clearTimeout(timerID);
            clearTimeout(bgInterval);
            $("#simulArea").hide();
            $("#skipArea").show();
            $("#startImg").hide();
            $("#small_list").hide();
            load_delay=0;
            result_delay = 0;
            timerID	= setTimeout(function(){ viewCard(key); }, load_delay);
        }

        function viewCard(key)
        {
            var idx	= card[key][0];
            var rare = card[key][1];
            var name = card[key][2]+" "+card[key][3];
            var  imgSrc = "";

            if (idx<100) {
                imgSrc = fillzero(idx, 3);
            }
            else {
                imgSrc = idx;
            }

            var thum		= 
            "<img src='images/gacha/"+imgSrc+"gacha.png' onError='noimage(this)' alt='"+name+"' title='"+name+"'>" +
            "<span class='star"+rare+"'></span>";
            var cardEa		= parseInt($("#get_ea"+rare).val()) + 1;
            
            var smallList	= $("#small_list").html();
            var simulList	= $("#simul_list").html();
            
            // 3성이면 3성 프레임 추가
            if(rare == "3"){
                thum = "<img src='images/gacha/"+"frame_3star"+".png' onError='noimage(this)' style='position:absolute;padding-top:3px;opacity:0.8;'>" + thum
            }
            if(cardTotalEa-1 == 1){
                $("#big_list").hide();
                $("#small_list").show();
                $("#small_list").html('');
                $("#small_list").html(smallList+thum);
            }

            if(cardTotalEa-1 == 10){

                if(key == "1"){
                    $("#small_list").hide();
                    $("#big_list").show();
                    $("#big_list").html("<ul></ul><ul></ul><ul></ul><ul></ul>");
                }
                $("#big_list").show();

                if(key < 4){
                    $("#big_list ul").eq(0).append("<li>"+thum+"</li>");
                }else if(key < 6){
                    $("#big_list ul").eq(1).append("<li>"+thum+"</li>");
                }else if(key < 9){
                    $("#big_list ul").eq(2).append("<li>"+thum+"</li>");
                }else if(key < 11){
                    $("#big_list ul").eq(3).append("<li>"+thum+"</li>");
                }
            }

            $("#simul_list").html(simulList+"<li style='height:93px'>"+thum+"</li>");

            $("#mainImg2").show();
            $("#mainImg1").hide();

            $("#get_ea"+rare).attr("value",cardEa);

            // 뽑기 결과 계산
            var cardTotal = 0;
            cardTotal += parseInt($("#get_ea1").val()) + parseInt($("#get_ea2").val()) + parseInt($("#get_ea3").val());
            $("#get_persent3").html(($("#get_ea3").val()*100/cardTotal).toFixed(1)+"%");
            $("#get_persent2").html(($("#get_ea2").val()*100/cardTotal).toFixed(1)+"%");
            $("#get_persent1").html(($("#get_ea1").val()*100/cardTotal).toFixed(1)+"%");
            $("#get_cnt3").html($("#get_ea3").val());
            $("#get_cnt2").html($("#get_ea2").val());
            $("#get_cnt1").html($("#get_ea1").val());
            $("#totalCnt").html(cardTotal);

            if (key == 1) {
                $("#infoCost_total").text(parseInt($("#infoCost_total").text())+parseInt(cost));
            }
            key++;

            if (key == cardTotalEa) {
                loding = "N";

                if (cardTotalEa >= 10) {
                    $("#small_list").show();
                    $("#simulArea").hide();
                }
                return false;
            }

            if(key < cardTotalEa) {
                setTimeout(function(){ loadingCard(key); }, result_delay);
            }
        }
    }
}

// 시뮬레이터 초기화
function onReset(){
    if(loding=="N"){
        $("#get_persent3").html("0%");
        $("#get_persent2").html("0%");
        $("#get_persent1").html("0%");

        $("#get_ea3").val("0");
        $("#get_ea2").val("0");
        $("#get_ea1").val("0");

        $("#get_cnt3").html("0");
        $("#get_cnt2").html("0");
        $("#get_cnt1").html("0");

        $("#small_list").html(" ");
        $("#big_list").html("<ul></ul><ul></ul><ul></ul><ul></ul>");

        $("#simul_list").html(" ");

        $("#mainImg2").hide();
        $("#mainImg1").show();

        $("#infoCost_total").html("0");

        $("#totalCnt").html("0");
    }
}

// 픽업 선택시 배너 이미지 변경
$(function(){
    $('#lineUp').change(function(){
        $('.sim_banner img').attr('src', "../images/banner/banner"+$("#lineUp option:selected").data("idx")+".png");
    })
})