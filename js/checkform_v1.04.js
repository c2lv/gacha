var exeFlag = true;

function setFormInfo(selName, act, target, mode, send) {
    if (!exeFlag) {
        //alert('현재 실행중입니다.');
        //return;
    }

    $("#" + selName).attr('action', act);
    $("#" + selName).attr('target', target);
    $("#" + selName + " input[name=mode]").val(mode);
    if (send)
        $("#" + selName).submit();

    exeFlag = false;
}

function sendFormInfo(selName, act, target, mode, send) {
    if (!exeFlag) {
        //alert('현재 요청중입니다.');
        //return;
    }

    exeFlag = false;

    $("#" + selName + " input[name=mode]").val(mode);

    var formData = new FormData($('form#' + selName)[0]);
    //lju 161102 댓글 이미지첨부 기능추가로 serialize대신 formdata로  post값 넘김 
    $.ajax({
        url: act,
        type: 'POST',
        cache: false,
        data: formData,
        //data:$('#' + selName).serialize(),
        dataType: 'script',
        contentType: false,
        processData: false,
        success: function(data) {
            onFlag();
        },
        fail: function() {
            alert("요청이 실패하였습니다.");
            onFlag();

        },
        statusCode: {
            404: function() {
                alert("페이지를 찾을수 없습니다.");
                onFlag();
            }
        }
    });

}

//ssl관련 폼전달방식 변경
function sendLoginForm(selName, act, target, mode, send, act_https) {
    $.ajax({
        url: act,
        type: 'POST',
        cache: false,
        data: $('#' + selName).serialize(),
        dataType: 'text',
        success: function(data) {
            onFlag();
            if (data == "y") {
                sendFormInfo1(selName, act_https, target, mode, send);
            } else {
                eval(data);
            }
        },
        fail: function() {
            alert("요청이 실패하였습니다.");
            onFlag();

        },
        statusCode: {
            404: function() {
                alert("페이지를 찾을수 없습니다.");
                onFlag();
            }
        }

    });
}

//ssl관련 폼전달방식 변경
function sendFormInfo1(selName, act, target, mode, send) {
    if (!exeFlag) {
        //alert('현재 요청중입니다.');
        //return;
    }

    exeFlag = false;

    //$("#" +selName + " input[name=mode]").val(mode);

    $("#" + selName).attr('action', act);
    $("#" + selName).attr('target', '');
    //$("#" +selName).attr('method','get');
    $("#" + selName + " input[name=mode]").val(mode);
    if (send)
        $("#" + selName).submit();

}

//160602 lju - 폼전달방식 추가
function sendFormInfoSubmit(selName, act, target, mode, send) {
    if (!exeFlag) {
        //alert('현재 요청중입니다.');
        //return;
    }

    exeFlag = false;

    if (act) $("#" + selName).attr('action', act);
    if (target) $("#" + selName).attr('target', target);
    if (mode) $("#" + selName).attr('method', mode);
    if (send) $("#" + selName).submit();
}



//ssl관련 폼전달방식 변경 2015-02-11 김정득 ajax도 ssl 처리
function sendNewLoginForm(selName, act, target, mode, send, act_https) {
    $.ajax({
        url: act,
        type: 'POST',
        cache: false,
        data: $('#' + selName).serialize(),
        dataType: 'jsonp',
        jsonpCallback: "myCallback",
        success: function(data) {
            onFlag();
            if (data.message == "y") {
                sendFormInfo1(selName, act_https, target, mode, send);
            } else {
                alert(data.message);
            }
        },
        fail: function() {
            alert("요청이 실패하였습니다.");
            onFlag();

        },
        statusCode: {
            404: function() {
                alert("페이지를 찾을수 없습니다.");
                onFlag();
            }
        }

    });
}


function testFormInfo(selName, act, target, mode, send) {
    if (!exeFlag) {
        //return;
    }

    //alert($('#' + selName).serialize());

    $("#" + selName + " input[name=mode]").val(mode);

    $.ajax({
        url: act,
        type: 'POST',
        cache: true,
        data: $('#' + selName).serialize(),
        dataType: 'text',
        success: function(data) {
            alert(data);
        }
    });

}

function getLocationUrl(selName, url) {
    var strng = "";
    var qsArray = new Array();
    $("form[id=" + selName + "]  input").each(function(index) {
        if ($(this).val() != "")
            qsArray.push($(this).attr('name') + '=' + $(this).val());
    });

    strng = qsArray.join('&');

    return url + '?' + strng;
}

function onFlag() {
    exeFlag = true;
}

function setFormVal(selName, inName, val1) {
    $("#" + selName + " input[name=" + inName + "]").val(val1);
}

function setFormTextVal(selName, inName, val1) {
    $("#" + selName + " textarea[name=" + inName + "]").val(val1);
}

function getFormTextVal(selName, inName, val1) {
    return $("#" + selName + " textarea[name=" + inName + "]").val();
}

function getCheckLength(selName, inName) {
    return $("#" + selName + " input[name='" + inName + "']:checked").length;
}

function setFormCheckVal(selName, inName, val1) {
    if (val1) {
        $("#" + selName + " input[name=" + inName + "]").attr("checked", true);
    } else {
        $("#" + selName + " input[name=" + inName + "]").attr("checked", false);
    }
}

function setFormChecksVal(selName, inName, val1, idx) {
    if (val1) {
        $("#" + selName + " input[name=" + inName + "]").eq(idx).attr("checked", true);
    } else {
        $("#" + selName + " input[name=" + inName + "]").eq(idx).attr("checked", false);
    }
}

function getIdVars(vtype, inName) {
    return $(vtype + "[id=" + inName + "]").val();
}

function getIdHtml(inName) {
    return $("#" + inName).html();
}

function setIdHtml(inName, val1) {
    $("#" + inName).html(val1);
}

function setIdAttr(inName, attr, val1) {
    $("#" + inName).attr(attr, val1);
}

function getIdAttr(inName, attr) {
    return $("#" + inName).attr(attr);
}

function setIdVars(vtype, inName, inVal) {
    $(vtype + "[id=" + inName + "]").val(inVal);
}

function setFormMethod(selName, inVal) {
    $("#" + selName + "").attr('method', inVal);

}

function getFormVal(selName, inName) {
    return $("#" + selName + " input[name=" + inName + "]").val();

}

function getFormIdVal(selName, inName) {
    return $("#" + selName + " input[id=" + inName + "]").val();
}

function getFormCheck(selName, inName) {
    return $("#" + selName + " input[name=" + inName + "]:checked").val();

}

function getFormCheckVal(selName, inName) {
    return $("#" + selName + " input[name=" + inName + "]").attr('checked');

}


function setFormSelVal(selName, inName, val1) {
    $("#" + selName + " select[name=" + inName + "]").val(val1);
}

function getFormSelVal(selName, inName) {
    return $("#" + selName + " select[name=" + inName + "] option:selected").val();
}

function getFormSelAttrVal(selName, inName, attr) {
    return $("#" + selName + " select[name=" + inName + "] option:selected").attr(attr);
}

function getFormSelText(selName, inName) {
    return $("#" + selName + " select[name=" + inName + "] option:selected").text();
}

function getIDText(idName) {
    return $('#' + idName).text();
}

function jsCheckForm(selName) {
    var flag = true;

    $("form[id=" + selName + "]  input,form[id=" + selName + "]   select, form[id=" + selName + "] textarea").each(function(index) {

        if ($(this).attr("required")) {

            if ($(this).attr("option") != undefined) {
                flag = eval($(this).attr("option") + "($(this))");
            } else {
                flag = eval("isNotNullCheck($(this))");
            }
            if (!flag) return false;
        }

    });

    return flag;

}

function jsSubmitForm(selName) {
    var flag = true;

    $("form[id=" + selName + "]  input,form[id=" + selName + "]   select, form[id=" + selName + "] textarea").each(function(index) {
        if ($(this).attr("required") == "required") {

            if ($(this).attr("option") != undefined) {
                flag = eval($(this).attr("option") + "($(this))");
            } else {
                flag = eval("isNotNullCheck($(this))");
            }
            if (!flag) return false;
        }
    });

    if (flag) $("#" + selName).submit();

}

function isNotNullCheck(obj) {
    var label = obj.attr("label");
    if (obj.attr("type") == "checkbox") {
        //alert(obj.is(":checked"));
        if (!obj.is(":checked")) {
            alert(label + '를(을) 하셔야 합니다');
            return false;
        }
    } else if (obj.attr("type") == "radio") {
        var tmp = eval("$('input:radio[name=" + obj.attr("name") + "]:checked').length");
        if (tmp == 0) return false;
    } else if (obj.attr("type") == "select") {
        var name = obj.attr("name");
        var label = obj.attr("label");
        var value = eval("$('select[name=" + name + "] option:selected').val()");
        if (value != "")
            return true;
        else {
            alert(label + '를(을) 선택하셔야 합니다');
            return false;
        }
    } else if (obj.attr("type") == "textarea") {
        var name = obj.attr("name");
        var label = obj.attr("label");
        var value = eval("$('textarea[name=" + name + "]').val()");
        if (value != "")
            return true;
        else {
            alert(label + '란은 필수 입력입니다');
            return false;
        }
    } else {
        if (jsNullCheck(obj, label + "란은 필수 입력입니다")) return false;
    }
    return true;
}


function checkDupID() {

    if (jsNullCheck2($('input[name=sso_id]')))
        return;

    if (!regId($('input[name=sso_id]')))
        return;

    checkDuplicate('sso_id', 'ch_id', 'regId');

}

function checkNickName() {
    if (jsNullCheck2($('input[name=nickname]')))
        return;

    checkDuplicateNick('nickname', 'ch_nickname', 'regNick');

}

function checkRcm() {
    if (jsNullCheck2($('input[name=tosso_id]')))
        return;

    checkDuplicateRcm('tosso_id', 'tosso_code');
}

function regNick(obj) {
    if (jsNullCheck(obj, "닉네임을 입력하세요")) return false;

    //if(!jsIDCheck(obj)) return false;
    //if (!jsCheckHan(obj, "아이디에 한글은 입력할 수 없습니다.")) return false;
    return true;

}

function regDate(obj) {
    var val = obj.val();
    var label = obj.attr("label");
    if (val == "연도" || val == "월" || val == "일") {
        alert(label + '입력란은 필수입니다.');
        return false;
    }

    return true;

}

function regId(obj) {
    if (jsNullCheck(obj, "아이디를 입력하세요")) return false;
    //if(!jsCheckLen(obj, 6,32, "6자이상 32자이하로 입력하셔야 합니다.")) return false;
    if (!jsEmailCheck(obj)) return false;
    //if(!jsIDCheck(obj)) return false;
    //if (!jsCheckHan(obj, "아이디에 한글은 입력할 수 없습니다.")) return false;
    return true;

}

function regPwd(obj) {
    if (jsNullCheck(obj, "비밀번호를 입력하세요")) return false;
    if (!jsCheckLen(obj, 6, 32, "6자이상 32자이하로  입력하셔야 합니다.")) return false;
    //if(jsDetectChars(obj,"특수문자를 사용하실수 없습니다")) return false;
    //if (!jsCheckHan(obj, "비밀번호에 한글은 입력할 수 없습니다.")) return false;

    return true;

}

function regchPwd(obj) {
    if (jsNullCheck(obj, "비밀번호를 입력하세요")) return false;
    if (!jsCheckLen(obj, 6, 32, "6자이상 32자이하로 입력하셔야 합니다.")) return false;
    //if(jsDetectChars(obj,"특수문자를 사용하실수 없습니다")) return false;
    //if (!jsCheckHan(obj, "비밀번호에 한글은 입력할 수 없습니다.")) return false;
    if (obj.val() != $("input[name=mem_pwd2]").val()) {
        alert('재확인 비밀번호와 일치하지 않습니다. 다시 입력하세요');
        $("input[name=mem_pwd2]").val('');
        $("input[name=mem_pwd2]").focus();
        return false;
    }
    return true;

}

function regchPwd2(obj) {
    if (jsNullCheck(obj, "비밀번호를 입력하세요")) return false;
    if (!jsCheckLen(obj, 6, 32, "6자이상 32자이하로 입력하셔야 합니다.")) return false;
    //if(jsDetectChars(obj,"특수문자를 사용하실수 없습니다")) return false;
    //if (!jsCheckHan(obj, "비밀번호에 한글은 입력할 수 없습니다.")) return false;
    if (obj.val() != $("input[name=pwd2]").val()) {
        alert('재확인 비밀번호와 일치하지 않습니다. 다시 입력하세요');
        $("input[name=pwd2]").val('');
        $("input[name=pwd2]").focus();
        return false;
    }
    return true;

}

function regchPwd3(obj) {
    if (jsNullCheck(obj, "비밀번호를 입력하세요")) return false;
    if (!jsCheckLen(obj, 6, 32, "6자이상 32자이하로 입력하셔야 합니다.")) return false;
    //if(jsDetectChars(obj,"특수문자를 사용하실수 없습니다")) return false;
    //if (!jsCheckHan(obj, "비밀번호에 한글은 입력할 수 없습니다.")) return false;
    if (obj.val() != $("input[name=pass2]").val()) {
        alert('재확인 비밀번호와 일치하지 않습니다. 다시 입력하세요');
        $("input[name=pass2]").val('');
        $("input[name=pass2]").focus();
        return false;
    }
    return true;

}

function checkKeyboard(password, limit = 3) {
    const word = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]; // 대소문자
    const specialWord = ["!@#$%^&*()"]; // 특수 문자

    const wordAll = ["1234567890", ...specialWord, ...word, ...word.map(v => v.toUpperCase())]; // 전체 키
    const reverseWord = [...wordAll.map(v => [...v].reverse().join(""))]; // 역순 키

    // 전체 배열 검증
    const keyboard = [...wordAll, ...reverseWord];
    for (let i = 0; i < password.length - (limit - 1); i++) {
        const sliceValue = password.substring(i, i + limit);

        if (keyboard.some(code => code.includes(sliceValue))) {
            return true;
        }
    }

    return false;
}

function isSameKey(password) {
    var len = password.length;
    if (len < 2) {
        return false;
    }

    for (i = 1; i < len; i++) {
        if (password[i - 1] === password[i]) {
            return true;
        }
    }

    return false;
}


function checkPWD(ob, desc) {
    var obj = $(ob);
    var password = $(ob).val();
    var label = obj.attr("label");

    if (jsNullCheck2(obj)) {
        $('#' + desc).html('');
        return;
    }

    if (checkKeyboard(password)) {
        $('#' + desc).html('키보드에 연속된 문자는 사용할 수 없습니다.');
        return;
    }

    if (isSameKey(password)) {
        $('#' + desc).html('비밀번호는 동일 문자를 연속해서 사용할 수 없습니다.');
        return;
    }

    if (!jsCheckLen2(obj, 8, 16)) {
        $('#' + desc).html('비밀번호는 8~16자 사이로 입력해주세요');
        return;
    }

    $('#' + desc).html('');
}


function checkPWD2(ob, desc, obj2name) {
    var obj = $(ob);
    var password = $(ob).val();
    var label = obj.attr("label");
    var obj2 = $("#" + obj2name);
    if (jsNullCheck2(obj)) {
        $('#' + desc).html('');
        return;
    }

    if (checkKeyboard(password)) {
        $('#' + desc).html('키보드에 연속된 문자는 사용할 수 없습니다.');
        return;
    }

    if (isSameKey(password)) {
        $('#' + desc).html('비밀번호는 동일 문자를 연속해서 사용할 수 없습니다.');
        return;
    }

    if (!jsCheckLen2(obj, 8, 16)) {
        $('#' + desc).html('비밀번호는 8~16자 사이로 입력해주세요');
        return;
    } else {
        $('#' + desc).html('');
        return;
    }

    if (obj.val() != obj2.val()) {
        $('#' + desc).html('비밀번호가 다릅니다. 다시 입력해 주세요');
        obj.val('');
        obj.focus();
        return;
    }

    $('#' + desc).html('');
}

function checkPWD_new(ob) {
    var pass_str = $(ob).val();
    if (pass_str.length < 6) {
        alert("문자, 숫자, 특수문자의 조합으로 8~16자리로 입력해주세요.");
        $(ob).val("");
    } else if (!pass_str.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {
        alert("문자, 숫자, 특수문자의 조합으로 8~16자리로 입력해주세요.");
        $(ob).val("");
    }
}



function regEmail(obj) {
    if (jsNullCheck(obj, "이메일을 입력하세요.")) return false;
    if (!jsEmailCheck(obj)) return false;

    return true;
}

function regBiz(obj) {
    getNumberOnly(obj); //숫자만 남기고 지우기
    if (jsNullCheck(obj, "사업자번호를 입력하세요.")) return false;
    if (!jsBiznoCheck(obj)) return false;

    return true;
}

function regNum(obj) {
    var label = obj.attr("label");
    if (jsNullCheck(obj, label + "란은 필수 입력입니다")) return false;
    if (!jsNumCheck(obj)) return false;

    return true;
}

function regCNum(obj) {
    var label = obj.attr("label");
    if (jsNullCheck(obj, label + "란은 필수 입력입니다")) return false;
    if (!jsNumCheck(obj)) return false;

    var chMax = Number(obj.attr('pmax'));
    if (Number(obj.val()) > chMax || Number(obj.val()) < 0) {
        alert('배점에 준하여 입력하십시요');
        obj.val('');
        obj.focus();
        return false;
    }
    return true;
}

function regch(obj) {
    var obj1 = "";
    var label = obj.attr("label");
    if (jsNullCheck(obj, label + "을 체크하세요.")) return false;

    var name = obj.attr("name");
    if (name == "ch_id") {
        obj1 = $('input[name=sso_id]');
    } else if (name == "ch_mail") {
        obj1 = $('input[name=email]');
    } else if (name == "ch_nickname") {
        obj1 = $('input[name=nickname]');
    }

    if (obj.val() != obj1.val()) {
        alert(label + "을 체크하세요.");
        return false;
    }

    return true;
}

function regCheckbox(obj) {
    var name = obj.attr("name");
    var label = obj.attr("label");
    var len = eval("$('input[name=" + name + "]:checked').length");
    if (len > 0)
        return true;
    else {
        alert(label + '란은 한개 이상 선택하셔야 합니다');
        return false;
    }
}

function regSelect(obj) {
    var name = obj.attr("name");
    var label = obj.attr("label");
    var value = eval("$('select[name=" + name + "] option:selected').val()");
    if (value != "")
        return true;
    else {
        alert(label + '란을 선택하셔야 합니다');
        return false;
    }
}

function badword(obj) {
    var label = obj.attr("label");
    if (jsNullCheck(obj, label + "란은 필수 입력입니다")) return false;

    var word = obj.val();


    orgword = word.toLowerCase();
    awdrgy = 0;

    while (awdrgy <= swear_words.length - 1) {

        if (orgword.indexOf(swear_words[awdrgy]) > -1) {
            alert(swear_words[awdrgy] + "은(는) 금지어입니다. 등록 할 수 없습니다.");
            return false;
        }
        awdrgy++;
    }
    return true;
}



function checkDuplicate(name1, name2, func) {
    var objtext = "$('input[name=" + name1 + "]')";
    var obj = eval("$('input[name=" + name1 + "]')");
    var chobj = eval("$('input[name=" + name2 + "]')");
    var flag = eval(func + "(" + objtext + ")");
    if (flag) {

        var ch_id = obj.val();

        $.ajax({
            url: "/updator/checkDuplicate.php",
            global: false,
            type: "POST",
            data: ({
                "ch_id": ch_id,
                "mode": func
            }),
            dataType: "text",
            async: false,
            success: function(data) {
                if (data != "") {

                    $("#checkid").html('사용하실 수 있는 이메일주소(아이디)입니다.');
                    chobj.val(data);
                } else {
                    $("#checkid").html('중복된 사용자가 있습니다.');
                    chobj.val('');
                }
            }
        });

    } else return;
}

function checkDuplicate1(name1, func) {
    var objtext = "$('input[name=" + name1 + "]')";
    var obj = eval("$('input[name=" + name1 + "]')");
    var flag = true;


    var ch_id = obj.val();

    $.ajax({
        url: "/updator/checkDuplicate.php",
        global: false,
        type: "POST",
        data: ({
            "ch_id": ch_id,
            "mode": func
        }),
        dataType: "text",
        async: false,
        success: function(data) {

            if (data != "") {
                $('input[name=encodeid]').val(data);
                flag = true;
                return;
            } else {
                alert('중복된 사용자가 있습니다.');
                flag = false;
                return;
            }
        }
    });

    return flag;
}

//특수문자 검색
function chk_special_cha(tmp) {
    var i = 0; //for문을 이용할 변수
    var special = new Array("~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "_", "`", "/", "?", ",", "<", ".", ">", ";", ":", "[", "]", '"', "'", "­", " "); // 특수문자 배열

    for (i = 0; i < special.length; i++) {
        var output = tmp.indexOf(special[i], 0) //해당문자열에 특수문자열이 있는지 확인
        if (output != -1) //특수문자가 없다면 -1을 반환 -1이외의값에 alert 수행후 함수 종료
        {
            return false;
        }
    }
}

function checkDuplicateNick1(name1, func) {
    var objtext = "$('input[name=" + name1 + "]')";
    var obj = eval("$('input[name=" + name1 + "]')");
    var flag = true;


    var ch_id = obj.val();


    //닉네임 공백 검사
    if (ch_id == "") {
        alert("닉네임을 입력하세요.");
        flag = false;
        return;
    }


    //닉네임 특수문자 검색
    if (false == chk_special_cha(ch_id)) {
        alert("특수문자를 사용하실수 없습니다");
        flag = false;
        return;
    }

    $.ajax({
        url: "/updator/checkDuplicate.php",
        global: false,
        type: "POST",
        data: ({
            "ch_id": ch_id,
            "mode": func
        }),
        dataType: "text",
        async: false,
        success: function(data) {


            if (data != "") {
                //$('input[name=nickname]').val(data);
                flag = true;
                return;
            } else {
                alert('중복된 사용자가 있습니다.');
                flag = false;
                return;
            }
        }
    });

    return flag;
}

function checkDuplicateNick(name1, name2, func) {
    var objtext = "$('input[name=" + name1 + "]')";
    var obj = eval("$('input[name=" + name1 + "]')");
    var chobj = eval("$('input[name=" + name2 + "]')");
    var flag = eval(func + "(" + objtext + ")");
    if (flag) {

        var ch_id = obj.val();

        $.ajax({
            url: "/updator/checkDuplicate.php",
            global: false,
            type: "POST",
            data: ({
                "ch_id": ch_id,
                "mode": func
            }),
            dataType: "text",
            async: false,
            success: function(data) {
                if (data != "") { //닉네임 특수문자 검색
                    if (false == chk_special_cha(ch_id)) {
                        $("#checknick").html('특수문자를 사용하실수 없습니다.');
                        chobj.val('');
                    } else {
                        $("#checknick").html('사용하실 수 있는 닉네임입니다.');
                        chobj.val(data);
                    }
                } else {
                    if (false == chk_special_cha(ch_id)) {
                        $("#checknick").html('특수문자를 사용하실수 없습니다.');
                        chobj.val('');
                    } else {
                        $("#checknick").html('중복된 사용자가 있습니다.');
                        chobj.val('');
                    }
                }
            }
        });

    } else return;
}

function checkDuplicateRcm(name1, name2) {
    var objtext = "$('input[name=" + name1 + "]')";
    var obj = eval("$('input[name=" + name1 + "]')");
    var chobj = eval("$('input[name=" + name2 + "]')");

    var ch_id = obj.val();
    $.ajax({
        url: "/updator/checkDuplicateRcm.php",
        global: false,
        type: "POST",
        data: ({
            "ch_id": ch_id
        }),
        dataType: "text",
        async: false,
        success: function(data) {
            if (data != "") {

                if (data == "d") {
                    $("#checkrcm").html('자기자신의 아이디를 입력하실수 없습니다');
                    chobj.val('');
                } else {
                    var datas = data.split("|");
                    var profileimg = "<img src=\"http://appdata.hungryapp.co.kr/profile/" + datas[2] + "\" class=\"pimg_02\" onerror='noimage(this)' />";
                    profileimg = profileimg + "<strong>" + datas[1] + "</strong>님</span> <span class=\"check\">추천할 수 있는 아이디입니다.";
                    $("#checkrcm").html(profileimg);
                    chobj.val(datas[0]);
                }
            } else {
                $("#checkrcm").html('추천할수 없는 아이디 입니다');
                chobj.val('');
            }
        }
    });


}

function OnErrorBox() {
    alert('실행하는데 실패했습니다.');
    onFlag();
}

function OnErrorAttendBox(num) {
    alert('작업에 실패 했습니다.\n 잠시후에 다시 시도해 주세요.(' + num + ')');
    onFlag();
}