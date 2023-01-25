/*****************************************************************************
 * 파일이름 : common_v1.01.js
 * 파일경로 : /js
 * 파일내용 : 각종 자바스크립트 함수
 * 수정일자 (수정자) : 수정항목
	1. 2013-01-31 11:30 (김경수) : setAlterReadBbs 함수 제작 -> 알리미 읽기 처리 함수
	1. 2013-01-31 16:05 (김경수) : getUserLayer 함수의 사용자 아이디 검색 부분 제외 처리
	1. 2013-02-14 16:30 (김경수) : setAlterReadBbs 함수 수정 -> 확인 후 페이지이동
*****************************************************************************/

//document.domain="hungryapp.co.kr";

var gNumType = /^\d+$/
var gSignedNumType = /^[+|-]?\d+$/
var gEngType = /^[a-zA-Z]+$/
var gHanType = /^[\uAC00-\uD7A3]+$/
var gEngNumType = /^[a-zA-Z0-9]+$/
var gPhoneType = /^[0-9\-]+$/
var gEngNumEtcType = /^[a-zA-Z0-9\-_]+$/
var gIdType = /^[a-z0-9\-_]+$/
var gEmailType = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
var gEmailType1 = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
/*
var gEmailType			= /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
var gEmailType1			= /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/

var gEmailType			= /^[a-zA-Z0-9\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]+$/
var gEmailType1			= /^[a-zA-Z0-9\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]+\.[a-zA-Z]+$/
*/
var gUpperEngNumType = /^[A-Z0-9]+$/
var gLowerEngNumType = /^[a-z0-9]+$/

var strChecking = "~!@#$%^&*()+|`-=\\?/<>,.\"':;";
var comma = /,/g;
var jsProto;
if (location.protocol == "https:")
    jsProto = "https";
else
    jsProto = "http";


String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/gi, "");
}

String.prototype.replaceAll = function(str1, str2) {
    var temp_str = this.trim();
    temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
    return temp_str;
}

function jsReplaceAll(str, str1, str2) {
    var temp_str = jsTrim(str);
    temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
    return temp_str;
}


/*-------------------------------------------------
	Return    :
---------------------------------------------------*/
function jsAlert(msg, Obj) {
    alert(msg);
    Obj.focus();
    Obj.val('');
    return;
}

function jsTrim(str) {
    return str.replace(/(^\s*)|(\s*$)/gi, '');
}

/*********************************************************************

 *********************************************************************/
/*-------------------------------------------------------------------------

	Return    : Boolean
-------------------------------------------------------------------------*/
function jsNumCheck(Obj) {
    if (!gNumType.test(Obj.val())) {
        jsAlert("숫자만 입력가능합니다.", Obj);
        return false;
    } else {
        return true;
    }
}

function jsIdNumCheck(idx, val1) {
    var Obj = $('#' + idx);
    if (!gNumType.test(Obj.val())) {
        alert("숫자만 입력가능합니다.");
        Obj.focus();
        Obj.val(val1);
        return false;
    } else {
        return true;
    }
}


function jsIdNumCheckB() {
    return true;
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsEngCheck(Obj) {
    if (!gEngType.test(Obj.val())) {
        jsAlert("영문자만 입력가능합니다", Obj);
        return false;
    } else {
        return true;
    }
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsHanCheck(Obj) {
    if (!gHanType.test(Obj.val())) {
        jsAlert("한글만 입력가능합니다", Obj);
        return false;
    } else {
        return true;
    }
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsEngNumEtcCheck(Obj) {
    if (!gEngNumEtcType.test(Obj.val())) {
        jsAlert("영문,숫자,'_','-' 으로만 입력하십시오.", Obj);
        return false;
    } else {
        return true;
    }
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsIDCheck(Obj) {
    if (!gIdType.test(Obj.val())) {
        jsAlert("영문 소문자,숫자,특수문자(-_)으로만 사용하세요.", Obj);
        return false;
    } else {
        return true;
    }
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/

function jsPhoneCheck(Obj) {
    if (!gPhoneType.test(Obj.val())) {
        jsAlert("숫자,'-' 으로만 입력하십시오", Obj);
        return false;
    } else {
        return true;
    }
}

/*-------------------------------------------------
	Example   : onKeyPress="jsFormatComma(document.f.acctAmt)"
---------------------------------------------------*/
function jsFormatComma(n) {
    return Number(String(n).replace(/\..*|[^\d]/g, "")).toLocaleString().slice(0, -3);

}

/*-------------------------------------------------
	Example   : jsRemoveValue(document.f.acctAmt, ",")
---------------------------------------------------*/
function jsRemoveValue(Obj, delim) {
    var str = "";
    if (delim == null) delim = "";
    var strr = Obj.value.split(delim);
    for (i = 0; i < strr.length; i++) {
        str += strr[i];
    }
    Obj.value = str;
}

function removeDelim(Obj) {
    var str = Obj.val();
    var sReturn = str.replace(/[^\d]/g, "");
    Obj.val(sReturn);
}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsJuminCheck(Obj) {
    var alertMSG = "잘못된 주민번호입니다.";
    if (jsByteLen(Obj) != 13) {
        jsAlert(alertMSG);
        Obj.value = "";
        Obj.focus();
        return false;
    }
    var jumin = Obj.value;
    var jumin1 = jumin.substring(0, 6);
    var jumin2 = jumin.substring(6, 13);

    // 倂 灸....
    if ((jumin2.substring(0, 1) == "5") || (jumin2.substring(0, 1) == "6") || (jumin2.substring(0, 1) == "7") || (jumin2.substring(0, 1) == "8")) {
        if ((jumin2.substring(1, 2) == "1") || (jumin2.substring(1, 2) == "2") || (jumin2.substring(1, 2) == "3") || (jumin2.substring(1, 2) == "4"))
            return true;
    }

    jumin = jumin1 + jumin2;
    var sum = 0;
    var mod = 0;
    var yearIn = 0;
    var monthIn = 0;
    var dateIn = 0;
    for (i = 0; i < 12; i++) {
        if (i == 0) yearIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 1) yearIn += parseInt(jumin.charAt(i));
        if (i == 2) monthIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 3) monthIn += parseInt(jumin.charAt(i));
        if (i == 4) dateIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 5) dateIn += parseInt(jumin.charAt(i));
        if (i < 6) sum += parseInt(jumin.charAt(i)) * (i + 2);
        if (i > 5 && i < 8) sum += parseInt(jumin.charAt(i)) * (i + 2);
        if (i > 7) sum += parseInt(jumin.charAt(i)) * (i - 6);
    }
    mod = 11 - (sum % 11);
    if ((11 - (sum % 11)) >= 10) mod -= 10;

    if (mod != parseInt(jumin.charAt(12))) {
        jsAlert(alertMSG);
        if (Obj.value.length == 13) Obj.value = "";
        Obj.focus();
        return false;
    }
    if (monthIn < 1 || monthIn > 12 || dateIn < 1 || dateIn > 31) {
        jsAlert(alertMSG);
        if (Obj.value.length == 13) Obj.value = "";
        Obj.focus();
        return false;
    }
    if ((monthIn == 4 || monthIn == 6 || monthIn == 9 || monthIn == 11) && dateIn > 30) {
        jsAlert(alertMSG);
        if (Obj.value.length == 13) Obj.value = "";
        Obj.focus();
        return false;
    }
    if (monthIn == 2 && dateIn > 29) {
        jsAlert(alertMSG);
        if (Obj.value.length == 13) Obj.value = "";
        Obj.focus();
        return false;
    }
    return true;
}

function jsJuminStrngCheck(jumin) {
    var alertMSG = "잘못된 주민번호입니다.";
    if (jsByteStrngLen(jumin) != 13) {
        alert(alertMSG);
        return false;
    }
    var jumin1 = jumin.substring(0, 6);
    var jumin2 = jumin.substring(6, 13);

    // 倂 灸....
    if ((jumin2.substring(0, 1) == "5") || (jumin2.substring(0, 1) == "6") || (jumin2.substring(0, 1) == "7") || (jumin2.substring(0, 1) == "8")) {
        if ((jumin2.substring(1, 2) == "1") || (jumin2.substring(1, 2) == "2") || (jumin2.substring(1, 2) == "3") || (jumin2.substring(1, 2) == "4"))
            return true;
    }

    jumin = jumin1 + jumin2;
    var sum = 0;
    var mod = 0;
    var yearIn = 0;
    var monthIn = 0;
    var dateIn = 0;
    for (i = 0; i < 12; i++) {
        if (i == 0) yearIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 1) yearIn += parseInt(jumin.charAt(i));
        if (i == 2) monthIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 3) monthIn += parseInt(jumin.charAt(i));
        if (i == 4) dateIn += parseInt(jumin.charAt(i)) * 10;
        if (i == 5) dateIn += parseInt(jumin.charAt(i));
        if (i < 6) sum += parseInt(jumin.charAt(i)) * (i + 2);
        if (i > 5 && i < 8) sum += parseInt(jumin.charAt(i)) * (i + 2);
        if (i > 7) sum += parseInt(jumin.charAt(i)) * (i - 6);
    }
    mod = 11 - (sum % 11);
    if ((11 - (sum % 11)) >= 10) mod -= 10;

    if (mod != parseInt(jumin.charAt(12))) {
        alert(alertMSG);
        return false;
    }
    if (monthIn < 1 || monthIn > 12 || dateIn < 1 || dateIn > 31) {
        alert(alertMSG);
        return false;
    }
    if ((monthIn == 4 || monthIn == 6 || monthIn == 9 || monthIn == 11) && dateIn > 30) {
        alert(alertMSG);
        return false;
    }
    if (monthIn == 2 && dateIn > 29) {
        alert(alertMSG);
        return false;
    }
    return true;
}
/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/

function jsBiznoCheck(Obj) {
    var alertMSG = "잘못된 등록번호입니다.";

    var vencod = "";
    var val = Obj.value;
    for (rhI = 0; rhI < val.length; rhI++) {
        if (!(val.charAt(rhI) == "-")) vencod = vencod + val.charAt(rhI);
    }

    if (parseInt(vencod) == 0) {
        jsAlert(alertMSG, Obj);
        return false;
    }

    var sum = 0;
    var getlist = new Array(10);
    var chkvalue = new Array("1", "3", "7", "1", "3", "7", "1", "3", "5");
    for (var i = 0; i < 10; i++) {
        getlist[i] = vencod.substring(i, i + 1);
    }
    for (var i = 0; i < 9; i++) {
        sum += getlist[i] * chkvalue[i];
    }
    sum = sum + parseInt((getlist[8] * 5) / 10);
    sidliy = sum % 10;
    sidchk = 0;
    if (sidliy != 0) {
        sidchk = 10 - sidliy;
    } else {
        sidchk = 0;
    }

    if (sidchk != getlist[9]) {
        jsAlert(alertMSG, Obj);
        return false;
    }
    return true;

}

/*-------------------------------------------------------------------------
	Return    : Boolean
-------------------------------------------------------------------------*/
function jsEmailCheck(Obj) {
    num = 0;
    num_1 = 0;
    var email = Obj.val();

    for (i = 0; i < email.length; i++) {
        if (email.charAt(i) == '@')
            num++;
        if (email.charAt(i) == '.')
            num_1++;
    }

    if (num != 1 || num_1 == 0) {
        jsAlert("e-mail이 유효하지 않습니다.", Obj);
        return false;
    }

    if (!(gEmailType.test(email) || gEmailType1.test(email))) {
        jsAlert("e-mail을 정확히 입력하십시오.", Obj);
        return false;
    }
    return true;
}

function jsEmailStringCheck(email) {
    num = 0;
    num_1 = 0;
    //var email = Obj.val();

    for (i = 0; i < email.length; i++) {
        if (email.charAt(i) == '@')
            num++;
        if (email.charAt(i) == '.')
            num_1++;
    }

    if (num != 1 || num_1 == 0) {
        alert("e-mail이 유효하지 않습니다.");
        return false;
    }

    if (!(gEmailType.test(email) || gEmailType1.test(email))) {
        alert("e-mail을 정확히 입력하십시오.");
        return false;
    }
    return true;
}

/*-------------------------------------------------
 	Spec      : Null Check
	Return    : Boolean
---------------------------------------------------*/
function jsNullCheck(Obj, msg) {
    var str = jsTrim(Obj.val());
    Obj.val(str);
    if (str == "") {
        if ((typeof msg != 'undefined') && (msg != "")) jsAlert(msg, Obj);
        return true;
    } else
        return false;
}

function jsNullCheck2(Obj) {
    var str = Obj.val();
    Obj.val(str);
    if (str == "") {
        return true;
    } else
        return false;
}



/*-------------------------------------------------------------------------
 	Spec      : 특정문자 방지 처리
 	Parameter : 해당 Object Field
 	Parameter : 방지문자열
	Return    : Boolean
	Example   : if(jsDetectChars(Obj, "!,*&^%$#@~;")) alert("특수 문자를 사용할 수 없습니다.");
-------------------------------------------------------------------------*/
function jsDetectChars(Obj, msg) {
    for (i = 0; i < Obj.val().length; i++) {
        if (strChecking.indexOf(Obj.val().charAt(i)) != -1) {
            if ((typeof msg != 'undefined') && (msg != "")) jsAlert(msg, Obj);
            return true;
        }
    }

    return false;
}

function jsByteLen(Obj) {
    var len = 0;
    var fbyte = Obj.val();
    var str = "!,*&^%$#@~;<>()[]{} ";
    var temp;

    if (fbyte == null) return 0;
    for (var i = 0; i < fbyte.length; i++) {
        temp = "" + fbyte.substring(i, i + 1);
        var c = escape(fbyte.charAt(i));
        if (c.length == 1) len++;
        else if (str.indexOf(temp) > -1) len++;
        else if (c.indexOf("%u") != -1) len += 2;
    }
    return len;
}

function jsByteStrngLen(fbyte) {
    var len = 0;
    var str = "!,*&^%$#@~;<>()[]{} ";
    var temp;

    if (fbyte == null) return 0;
    for (var i = 0; i < fbyte.length; i++) {
        temp = "" + fbyte.substring(i, i + 1);
        var c = escape(fbyte.charAt(i));
        if (c.length == 1) len++;
        else if (str.indexOf(temp) > -1) len++;
        else if (c.indexOf("%u") != -1) len += 2;
    }
    return len;
}

function jsCheckLen(Obj, slen, blen, msg) {
    var len = jsByteLen(Obj);
    if (len > blen) {
        jsAlert(msg, Obj);
        return false;
    }

    if (len < slen) {
        jsAlert(msg, Obj);
        return false;
    }

    return true;
}

function jsCheckLen2(Obj, slen, blen) {
    var len = jsByteLen(Obj);
    if (len > blen) {
        //jsAlert(msg, Obj);
        return true;
    }

    if (len < slen) {
        //jsAlert(msg, Obj);
        return false;
    }

    return true;
}

/*-------------------------------------------------------------------------
 	Spec      : 한글이 입력됐는지 Check함(Submit시)
 	Parameter :
	Return    : Boolean
	ex) if (!jsCheckHan(frm.sAcctNo, "계좌번호에 한글은 입력할 수 없습니다.")) return false;
-------------------------------------------------------------------------*/
function jsCheckHan(Obj, msg) {
    var sTmp = Obj.val();
    var rtn = true;
    for (j = 0; j < sTmp.length; j++) {
        vAsc = sTmp.charCodeAt(j);
        if (((vAsc > 47) && (vAsc < 58)) || ((vAsc > 64) && (vAsc < 91)) || ((vAsc > 96) && (vAsc < 123)) || vAsc == 45) {
            rtn = true;
        } else {
            if ((typeof msg != 'undefined') && (msg != "")) jsAlert(msg, Obj);
            rtn = false;
            break;
        }
    }
    return rtn;
}

/*-------------------------------------------------
	Return    : Boolean
---------------------------------------------------*/
function openWin(windowURL, windowName, windowFeatures) {
    return window.open(windowURL, windowName, windowFeatures);
}




// 천 표
function funcFormatNumber(int) {
    // Declaring local variables
    var strInput;
    var strReturnValue;

    // Setting return Value
    strReturnValue = "";
    for (strInput = "" + int; strInput.length > 3; strInput = strInput.substr(0, strInput.length - 3))
        strReturnValue = "," + strInput.substr(strInput.length - 3, 3) + strReturnValue;
    strReturnValue = strInput + strReturnValue;

    // Returning
    return (strReturnValue);
}

/**
 * 키
 *
 *  : http://techpatterns.com/downloads/javascript_cookies.php
 */
function setCookie(name, value, expires, path, domain, secure) {

    // set time, it's in milliseconds
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setTime(today.getTime());

    /*
    if the expires variable is set, make the correct
    expires time, the current script below will set
    it for x number of days, to make it for hours,
    delete * 24, for minutes, delete * 60 * 24
    */
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));

    document.cookie = name + "=" + escape(value) +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
}

function deleteCookie(cookieName) {
    var expireDate = new Date();

    //어제 날짜를 쿠키 소멸 날짜로 설정한다.
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function setCookies(name, value, expires, path, domain, secure) {
    // set time, it's in milliseconds
    var today = new Date();
    today.setTime(today.getTime());

    if (expires) {
        expires = expires * 1000 * 60 * 60 * 3;
    }
    var expires_date = new Date(today.getTime() + (expires));

    document.cookie = name + "=" + escape(value) +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
}

function getCookie(name) {
    var dc = document.cookie;
    if (dc.length > 0) {
        var start = dc.indexOf(name + "=");
        if (start > -1) {
            start = start + name.length + 1;
            var end = dc.indexOf(";", start);
            if (end == -1) {
                return unescape(dc.substring(start));
            } else {
                return unescape(dc.substring(start, end));
            }
        }
    }
    return "";
}

function getLoginUser() {

    //alert(getCookie('cookie_sid'));
    if (getCookie('cookie_userhash') == "")
        return false;
    else
        return true;
}

function selectAllList(obj, val) {
    var flag = obj.checked;
    $("input[name='" + val + "']").each(function() {
        if (flag)
            $(this).attr("checked", true);
        else
            $(this).attr("checked", false);
    });
}


function selectAllList2(bchk, val) {
    var flag = bchk;
    $("input[name='" + val + "']").each(function() {
        if (flag)
            $(this).attr("checked", true);
        else
            $(this).attr("checked", false);
    });
}

function getNumberOnly(obj) {
    var val = obj.val();
    val = new String(val);
    var regex = /[^0-9]/g;
    val = val.replace(regex, '');

    obj.val(val);
}

function noimage(obj) {
    obj.src = "/images/noimage.png";
}

function getCeilNumber(nCalcVal, nDigit) {
    return Math.floor(nCalcVal / Math.pow(10, nDigit)) * Math.pow(10, nDigit);
}

<!--### 날짜 출력형식-->
function toDate($date, $div) {
    return sprintf("%04d{$div}%02d{$div}%02d", substr($date, 0, 4), substr($date, 4, 2), substr($date, 6, 2));
}

function MS_Flash(fid, src, wid, hei, fvs, wmd) {
    this.fPrint = '';
    this.Id = document.getElementById(fid);
    this.Src = src;
    this.Width = wid;
    this.Height = hei;
    this.FlashVars = (typeof fvs != 'undefined') ? fvs : '';
    this.Wmod = (typeof wmd != 'undefined') ? wmd : '';
    if (isObject(Id)) {
        fPrint = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + jsProto + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"';
        fPrint += ' width="' + Width + '"';
        fPrint += ' height="' + Height + '">';
        fPrint += '<param name="movie" value="' + Src + '">';
        fPrint += '<param name="quality" value="high">';
        fPrint += '<param name="AllowScriptAccess" value="always" />';
        fPrint += (FlashVars != null) ? '<param name="FlashVars" value="' + FlashVars + '">' : '';
        fPrint += (Wmod != null) ? '<param name="wmode" value="' + Wmod + '">' : '';
        fPrint += '<embed';
        fPrint += ' src="' + Src + '"';
        fPrint += (FlashVars != null) ? ' FlashVars="' + FlashVars + '"' : '';
        fPrint += (Wmod != null) ? ' wmode="' + Wmod + '"' : '';
        fPrint += ' quality="high"';
        fPrint += ' pluginspage="' + jsProto + '://www.macromedia.com/go/getflashplayer"';
        fPrint += ' type="application/x-shockwave-flash"';
        fPrint += ' width="' + Width + '"';
        fPrint += ' height="' + Height + '"';
        fPrint += ' AllowScriptAccess="always"></embed>';
        fPrint += '</object>';
        Id.innerHTML = fPrint;
    }
}

function isObject(a) {
    return (a && typeof a == 'object');
}


function resizeIfr(obj, minHeight) {

    minHeight = minHeight || 10;
    //alert(minHeight);

    try {
        var getHeightByElement = function(body) {
            var last = body.lastChild;
            try {
                while (last && last.nodeType != 1 || !last.offsetTop) last = last.previousSibling;
                return last.offsetTop + last.offsetHeight;
            } catch (e) {
                return 0;
            }

        }

        //alert(getHeightByElement);

        var doc = obj.contentDocument || obj.contentWindow.document;
        if (doc.location.href == 'about:blank') {
            obj.style.height = minHeight + 'px';
            return;
        }

        //var h = Math.max(doc.body.scrollHeight,getHeightByElement(doc.body));
        //var h = doc.body.scrollHeight;
        if (/MSIE/.test(navigator.userAgent)) {
            var h = doc.body.scrollHeight;

        } else {
            var s = doc.body.appendChild(document.createElement('DIV'))
            s.style.clear = 'both';

            var h = s.offsetTop;
            s.parentNode.removeChild(s);

        }

        //if (/MSIE/.test(navigator.userAgent)) h += doc.body.offsetHeight - doc.body.clientHeight;
        if (h < minHeight) h = minHeight;

        obj.style.height = h + 'px';



        if (typeof resizeIfr.check == 'undefined') resizeIfr.check = 0;
        if (typeof obj._check == 'undefined') obj._check = 0;

        //		if (obj._check < 5) {
        //			obj._check++;
        setTimeout(function() {
            resizeIfr(obj, minHeight)
        }, 200); // check 5 times for IE bug
        //		} else {
        //obj._check = 0;
        //		}
    } catch (e) {
        //alert(e);
    }

}

function changeService(redirectURL, target) {

    if (redirectURL == "")
        return;

    if (target == "")
        location.href = redirectURL;
    else
        window.open(redirectURL, target, "");

}

$(function() {

    // Elements on which to bind the event.
    var elems = $("[id*='_box'], #detailSearch, #quick_search,#myFavorList, #myNoticeList, #myFriendList, #myinfosetup, #pop_search, #sch_result1,#sch_result2");

    elems.bind('clickoutside', function(event) {
        var elem = $(this),
            target = $(event.target);
        if (target.attr('id') != 'select_bt' && target.attr('id') != "") { //2015-05-07 김정득 샵 메인에서 오류나서 && target.attr('id')!="" 이거 추가
            $(this).hide();
        }
    });

    var elems1 = $("#select_bt, [class='user'],[id*='layerMenu']");
    elems1.unbind('click');


});


function showLayer(objname) {
    $('#' + objname).toggle();
}

var before_showList = "";

function showList(objname) {

    $('#' + objname + '_box').toggle();
    if (before_showList != objname) {
        $('#' + before_showList + '_box').hide();
        before_showList = objname;

    }
}

function selectList(val, objname) {
    $('#' + objname).val(val);
    $('#' + objname + '_box').toggle();


}

function selectList1(val, objname, val1, objname1) {
    $('#' + objname).val(val);
    $('#' + objname1).val(val1);
    $('#' + objname + '_box').toggle();
    $('#kin_check').hide();

}

function selectList_kin(val, objname, val1, objname1) {
    $('#' + objname).val(val);
    $('#' + objname1).val(val1);
    $('#' + objname + '_box').toggle();
    $('#kin_check').show();
}


//주소찾기팝업로드
function pop_zipcode(val1, val2, val3) {
    openWin("/zipcode/pop_zipcode.php?param1=" + val1 + "&param2=" + val2 + "&param3=" + val3, "zip", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function alertAuth(code) {
    if (code) {
        alert('권한이 없습니다.');
    } else {
        alert('로그인해 주세요');
    }
}


// sns 처리
function sns_link(desk, text, turl) {
    var href;
    switch (desk) {
        case 1: // twitter
            href = "http://twitter.com/home?status=" + encodeURI(text) + encodeURI(turl) + " ";
            break;

        case 2: // facebook
            href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(turl);
            break;

        case 3: // me2day
            href = "http://me2day.net/posts/new?new_post[body]=\"" + encodeURI(text) + "\":" + encodeURI(turl);
            break;

        case 4: // yozm
            href = "http://yozm.daum.net/home?m=\"" + encodeURI(text) + "\" " + encodeURI(turl);
            break;
        case 5: // 페이스북 신규
            href = turl;
            break;
    }

    window.open(href, 'sns', '');
    //return false;

}

function ajxSendGameCount(bcode, uid, utype, pickup, user, rtype) {
    $.ajax({
        url: "/updator/setgamecount.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode,
            "uid": uid,
            "utype": utype,
            "pickup": pickup,
            "user": user,
            "rtype": rtype
        }),
        async: true,
        success: function(data) {

        }
    });
}

function ajxSendBbsCount(bcode, uid, utype, pickup, user) {
    $.ajax({
        url: "/updator/setbbscount.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode,
            "uid": uid,
            "utype": utype,
            "pickup": pickup,
            "user": user
        }),
        async: true,
        success: function(data) {

        }
    });
}

function ajxSendBestCount(bcode, uid, user_id) {

    $.ajax({
        url: "/updator/setbbsBestCount.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode,
            "uid": uid,
            "user_id": user_id
        }),
        async: true,
        success: function(data) {

        }
    });
}

//20221025 hje - 회원차단 클릭 시 창 띄우기
function pop_block(bcode, blockid) {
    openWin("/police/pop_block.php?bcode=" + bcode + "&blockid=" + blockid, "", "width=530,scrollbars=yes,height=410,top=100,left=200,scrolls=no");
}

function pop_block_list(bcode) {
    openWin("/police/pop_block_list.php?bcode=" + bcode, "", "width=1200,scrollbars=yes,height=600,top=100,left=500,scrolls=no");
}

function pop_police(ptype, btype, code, idx, ridx, flag) {
    if (!isLogin()) return;

    if (flag == 1) {
        alert('자신의 글은 신고할수 없습니다.');
        return;
    }

    if (flag == 2) {
        alert('이글은 신고할수 없습니다.');
        return;
    }

    openWin("/police/pop_police.php?ptype=" + ptype + "&btype=" + btype + "&bcode=" + code + "&pid=" + idx + "&repid=" + ridx, "police", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_policegame(ptype, btype, code, idx, ridx, flag) {
    if (!isLogin()) return;

    if (flag == 1) {
        alert('자신의 글은 신고할수 없습니다.');
        return;
    }

    if (flag == 2) {
        alert('이글은 신고할수 없습니다.');
        return;
    }

    openWin("/police/pop_policegame.php?ptype=" + ptype + "&btype=" + btype + "&bcode=" + code + "&pid=" + idx + "&repid=" + ridx, "police", "width=530,scrollbars=yes,height=540,top=100,left=200,scrolls=no");
}

function pop_gamehub() {
    alert('준비중입니다.');
    return;
    openWin("/join/gamehubid.php", "hubgameid", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}


function pop_IDAuth() {
    openWin("/join/pop_idauth.php", "id_auth", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_Phone() {
    openWin("/join/pop_phone.php", "phone", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_Help() {
    openWin("/policy/help01.php", "help", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_Profile(userid) {
    openWin("/profiles/profile01.php?userid=" + userid, "phone", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_findidpwd() {
    openWin("/join/pop_searchid.php", "searchid", "width=552,scrollbars=yes,height=335,top=100,left=200,scrolls=no");
}

function pop_ispickup(code, pid) {
    openWin("/pop/pop_ispickup.php?bcode=" + code + "&pid=" + pid, "searchid", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_ispickup_game(code, pid) {
    openWin("/pop/pop_ispickup_game.php?bcode=" + code + "&pid=" + pid, "searchid", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_favorite() {
    if (!isLogin()) return;

    openWin("/favorite/favorite_search.php", "favorite", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}


function pop_memo() {
    if (!isLogin()) return;
    openWin("/memo/memo_list.php", "memo", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_sendmemo(sid) {
    if (!isLogin()) return;
    openWin("/memo/memo_form.php?sid=" + sid, "memo", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_alter() {
    if (!isLogin()) return;
    openWin("/join/member_alter.php", "alter", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_mileage() {
    openWin("/join/pop_mileage_list.php", "id_auth", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_mileageLottery(sid) {
    if (!isLogin()) return;
    openWin("/join/pop_mileage_lottery.php?idx=" + sid, "alter", "width=500,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
}

function pop_admin(code) {
    if ($("input[name='uid[]']:checked").length == 0) {
        alert('관리할 글을 선택하셔야 합니다.');
        return;
    }
    openWin("bbs_admin.php?bcode=" + code, "popadmin", "width=828,scrollbars=yes,height=500,top=100,left=200,scrolls=no,status=yes");
}

function pop_kin_admin(code) {
    if ($("input[name='uid[]']:checked").length == 0) {
        alert('관리할 글을 선택하셔야 합니다.');
        return;
    }
    openWin("bbs_kin_admin.php?bcode=" + code, "popkinadmin", "width=828,scrollbars=yes,height=300,top=100,left=200,scrolls=no,status=yes");
}

function setHome() {
    var strUrl = "'http://dev.hungryapp.co.kr/";
    if (document.all) {
        if (window.external) {

            startpage.style.behavior = 'url(#default#homepage)';
            startpage.setHomePage(strUrl);
        }
    }
}

function setFavorite() {
    window.external.AddFavorite('http://' + document.domain, '헝그리앱');
}

// 브라우져별 즐겨찾기 추가하기처리
function addbookmark() {
    var url = "http://" + document.domain; // URL
    var title = "헝그리앱"; // 사이트 이름
    var browser = navigator.userAgent.toLowerCase();

    // Mozilla, Firefox, Netscape
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    // IE or chrome
    else if (window.external) {
        // IE
        if (browser.indexOf('chrome') == -1) {
            window.external.AddFavorite(url, title);
        } else {
            // chrome
            alert('CTRL+D 또는 Command+D를 눌러 즐겨찾기에 추가해주세요.');
        }
    }
    // Opera - automatically adds to sidebar if rel=sidebar in the tag
    else if (window.opera && window.print) {
        return true;
    }
    // Konqueror
    else if (browser.indexOf('konqueror') != -1) {
        alert('CTRL+B를 눌러 즐겨찾기에 추가해주세요.');
    }
    // safari
    else if (browser.indexOf('webkit') != -1) {
        alert('CTRL+B 또는 Command+B를 눌러 즐겨찾기에 추가해주세요.');
    } else {
        alert('사용하고 계시는 브라우저에서는 이 버튼으로 즐겨찾기를 추가할 수 없습니다. 수동으로 링크를 추가해주세요.')
    }
}

function pop_IDAuth1() {
    if (!jsEmailStringCheck(getFormVal('inputFrm', 'changeid'))) {
        return;
    }
    if (checkDuplicate1('changeid', 'regId1')) {
        var eid = getFormVal('inputFrm', 'encodeid');
        openWin("/join/pop_idauth.php?eid=" + eid, "id_auth", "width=530,scrollbars=yes,height=500,top=100,left=200,scrolls=no");
    }
}

function getDupNick() {

    if (checkDuplicateNick1('nickname', 'regNick')) {
        var change_nickname = $('#nickname').val();
        setFormVal("inputFrm", "nickname", change_nickname);
        sendFormInfo('inputFrm', 'join_upload.php', 'ifrmUpload', 'mod_nick', true);
    }
}

function setFavoriteBBS(bcode) {
    if (!isLogin()) return;

    $.ajax({
        url: "/updator/setfavorite.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode
        }),
        async: true,
        success: function(data) {
            if (data == "nologin")
                alert('로그인하셔야 합니다.');
            else if (data == "y") {

                alert("즐겨찾기에 추가되었습니다.");
                $('img[id=star_' + bcode + ']').attr('src', 'http://appdata.hungryapp.co.kr/images/common_/img_astar.gif');
            } else if (data == "over")
                alert("최대 6개 까지 등록가능합니다.");
            else if (data == "exist")
                alert("즐겨찾기에 이미 추가되어 있으십니다.");
            else
                alert("저장하는데 실패하였습니다.");
        }
    });
}


function setDeleteFavorite(act, bcode) {
    if (!confirm('즐겨찾기를 삭제하시겠습니까?'))
        return;

    $.ajax({
        url: "/updator/setDeleteFavorite.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode
        }),
        async: true,
        success: function(data) {

            if (data == "nologin")
                alert('로그인하셔야 합니다.');
            else if (data == "y") {
                eval(act + "()");
            } else
                alert("삭제하는데 실패하였습니다.");
        }
    });
}

var beforeMenu = 0;
var userFlag = false;

//20221025 hje - 매니저는 회원차단 항목 보이도록, is_manager,level,bcode,blockid 추가
function userMenuShow(obj, idxs, userid, is_manager = 0, level, bcode, blockid, stype) {

    if (userid == "guest") return;
    if (!stype) stype = "B";
    var idx = stype + idxs;
    var jeml = $(obj);
    if ($('#layerMenu' + idx).length) {
        if (beforeMenu == idx) {
            $('#layerMenu' + idx).toggle();
            userFlag = true;
        } else {
            $('#layerMenu' + beforeMenu).hide();
            $('#layerMenu' + idx).show();
            userFlag = true;

        }

    } else {
        $('#layerMenu' + beforeMenu).hide();
        //jeml.parent().css('position', 'relative');
        var position = jeml.position();

        //20221025 hje - 매니저는 회원차단 항목 보이도록
        if (is_manager == 1) {
            jeml.parent().append($(getUserLayer(idx, userid, level, bcode, blockid)));
        } else {
            jeml.parent().append($(getUserLayer(idx, userid)));
        }
        $('#layerMenu' + idx).css('left', position.left);
        $('#layerMenu' + idx).css('top', position.top);
        $('#layerMenu' + idx).show();
        userFlag = true;
    }


    beforeMenu = idx;

    jeml.click(function(event) {
        event.stopPropagation();
    });

    $('.lmenuClose').live('click', function() {
        if ($('#layerMenu' + beforeMenu).css('display') != 'none' && userFlag) {
            $('#layerMenu' + beforeMenu).hide();
            userFlag = false;
        }
    });

}


//20221025 hje - 매니저는 회원차단 항목 보이도록 level,bcode 추가
function getUserLayer(uid, sid, level, bcode, blockid, stype) {
    var str = "";
    str = str + "<div id=\"layerMenu" + uid + "\" class=\"lmenuw\" style=\"display:none;position:absolute;top:50px;z-index:999;\"> <span class=\"mh\"></span>\n";
    str = str + "	  <span class=\"lmenuClose\" style=\"position:absolute;top:30px;right:15px;font-weight:bold;cursor:pointer;\" >X</span>\n";
    str = str + "	  <ul class=\"lmenu\">\n";
    if (level == "level_10") { // 일반회원인 경우
        str = str + "		    <li class=\"prof_m\"><a href=\"javascript:pop_block('" + bcode + "','" + blockid + "')\">회원차단</a></li>\n";
    }
    str = str + "		    <li class=\"prof_m\"><a href=\"javascript:pop_Profile('" + sid + "')\">프로필 보기</a></li>\n";
    str = str + "		    <li class=\"msg_m\"><a href=\"javascript:pop_sendmemo('" + sid + "')\">쪽지톡 보내기</a></li>\n";
    if ($('#hidFrm input[name=manager]').val() == 1)
        str = str + "		    <li class=\"search_m\"><a href=\"javascript:OnSearchIDForm('" + sid + "')\">아이디로 검색</a></li>\n";
    //str = str + "		    <li class=\"view_m\"><a href=\"#\">전체 게시물 보기</a></li>\n";
    str = str + "		    <li class=\"req_m end\"><a href=\"javascript:requestFriend('" + sid + "')\">친구요청</a></li>\n";

    str = str + "	  </ul>\n";
    str = str + "</div>\n";

    return str;
}

function OnSearchIDForm(userid) {
    if ($('#searchFrm').length == 0)
        return
    var dcode_userid = Base64.decode(userid);
    setFormVal('searchFrm', 'searchtype', 'user_id');
    setFormVal('searchFrm', 'searchstr', dcode_userid);
    OnSearchForm();

}


function requestFriend(userid) {
    if (!isLogin()) return;

    $.ajax({
        url: "/updator/setfriendrequest.php",
        global: false,
        type: "POST",
        data: ({
            "userid": userid
        }),
        async: true,
        success: function(data) {

            if (data == "request")
                alert('현재 요청중입니다.');
            else if (data == "y")
                alert("친구가 요청되었습니다.");
            else if (data == "friend")
                alert("이미 친구로 등록되어 있습니다.");
            else if (data == "nologin")
                alert("로그인을 하셔야 이용하실수 있습니다.");
            else if (data == "same")
                alert("자신에게 친구요청을 하실수 없습니다.");
            else
                alert("요청하는데 실패하였습니다.");
        }
    });
}

function setFriend(idx, mode) {
    if (!isLogin()) return;

    $.ajax({
        url: "/updator/setfriend.php",
        global: false,
        type: "POST",
        data: ({
            "mfr_idx": idx,
            'mode': mode
        }),
        async: true,
        success: function(data) {

            if (data == "ok") {
                $('#requestfrd' + idx).hide();
                alert("친구가 추가되었습니다.");

            } else if (data == "later") {
                $('#requestfrd' + idx).hide();
                alert("변경되었습니다.");
            } else if (data == "nologin") {
                alert("로그인을 하셔야 이용하실수 있습니다.");
            } else {
                alert("추가하는데 실패하였습니다.");
            }
            top.location.reload();


        }
    });
}


function setAlterReadBbs(bcode, bid) {
    $.ajax({
        url: "/updator/setAlterRead.php",
        global: false,
        type: "POST",
        data: ({
            "bcode": bcode,
            "bid": bid
        }),
        async: true,
        success: function(data) {
            location.href = '/bbs/bbs_view.php?bcode=' + bcode + '&pid=' + bid;
        }
    });
}

function setAlterReadKin(idx, bid) {
    $.ajax({
        url: "/updator/setAlterRead.php",
        global: false,
        type: "POST",
        data: ({
            "uid": idx
        }),
        async: true,
        success: function(data) {
            location.href = '/kin/kin_view.php?kfid=' + bid;
        }
    });
}



function delAlterReadBbs(userid) {
    $.ajax({
        url: "/updator/delAlterRead.php",
        global: false,
        type: "POST",
        data: ({
            "userid": userid
        }),
        async: true,
        success: function(data) {
            location.href = '/join/member_alter.php';
        }
    });
}



function setAlterRead(idx) {
    $.ajax({
        url: "/updator/setAlterRead.php",
        global: false,
        type: "POST",
        data: ({
            "uid": idx
        }),
        async: true,
        success: function(data) {

        }
    });
}

function isLogin() {
    if (isLoginFlag) return true;

    alert('로그인을 하셔야 이용하실수 있습니다');
    setFormInfo('loginFrm', '/join/login.php', '', '', true);
    return false;
}

function noLogin() {

    alert('글쓰기가 제한되어 있습니다.');
    onFlag();
}

function requestLogin() {

    alert('로그인을 하셔야 이용하실수 있습니다');

}


function deleteSpecialChar(obj) {
    with(obj) { // 입력된값중 포함된 문자있으면 backspace
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+|}{\":?><=-\\][';/.,";
        for (i = 0; i < a.length; i++) {
            if (obj.value.substr(obj.value.length - 1, obj.value.length) == a.charAt(i)) {
                obj.value = obj.value.substr(0, obj.value.length - 1);
            }
        }
    }
    var change, cnt;
    change = obj.value;
    cnt = change.length;

    var returnValue = false;

    if (cnt == 4) { //자릿수에 맞추어 '-' 넣기
        obj.value = obj.value + "-";
    }
    if (cnt == 7) { //자릿수에 맞추어 '-' 넣기
        obj.value = obj.value + "-";
    }

    /*
	if(cnt == 10 ){                             //자릿수에 맞추어 ' ' 넣기
		obj.value = obj.value + " ";
	}
	if(cnt == 13 ){                             //자릿수에 맞추어 ' ' 넣기
		obj.value = obj.value + ":";
	}
     - \w : 모든 문자
     - \d : 정수형 문자
     - .   : 모든 문자
     - {} :  e.g.) .{2} : 2개의 문자와 일치
     - () : 캡처할 그룹
     - \ : 이스케이프 시퀀스
     - /패턴/ : 정규식 문자열 (literal)
	*/

    if (cnt == 16) { //입력한 날짜가 유효한지 검사
        /*
        	정규식 해석
        	19 or 20, 숫자형2개, / or - or _, 0이 들어오면 뒤에는 1~9, 1이 들어오면 뒤에는 0~2,
        	/ or - or _, 0이 들어오면 뒤에는 1~9, 1~2이 들어오면 뒤에는 0~9, 3이 들어오면 0~1

        	var reg = /^(19|20)(\d){2}(\/|-|_)(0[1-9]|1[0-2])(\/|-|_)(0[1-9]|[1-2][0-9]|3[0-1])( )([0-1][1-9]|2[0-3])(:)([0-5][0-9])$/;
        */
        var reg = /^(19|20)(\d){2}(\/|-|_)(0[1-9]|1[0-2])(\/|-|_)(0[1-9]|[1-2][0-9]|3[0-1])$/;

        if (reg.test(obj.value)) {
            returnValue = true;
        } else {
            alert("날짜가 올바르지 않습니다.");
            obj.value = "";
        }
        return returnValue;
    }

    if (event.keyCode == 8 && cnt == 9) { // 일자를 지우고 '-'넣어줌
        obj.value = obj.value.substr(0, obj.value.length - 2) + "-";
    } else if (event.keyCode == 8 && cnt == 7) { // 월을지움
        obj.value = obj.value.substr(0, obj.value.length - 3);
    } else if (event.keyCode == 8) { // 년﻿도지움
        obj.value = "";
    }
}


function banner_open(url_link, btarget, pid) {
    if (btarget == "B") {
        window.open(url_link, 'banner', '');
    } else {
        location.href = url_link;
    }

    $.ajax({
        url: "/banner/banner_cnt.php",
        global: false,
        type: "POST",
        data: ({
            "pid": pid
        }),
        async: true,
        success: function(data) {

        }
    });
}


function skin_banner(url_link, btarget, pid) {
    if (btarget == "B") {
        window.open(url_link, 'banner', '');
    } else {
        location.href = url_link;
    }

    $.ajax({
        url: "/banner/banner_skin_cnt.php",
        global: false,
        type: "POST",
        data: ({
            "pid": pid
        }),
        async: true,
        success: function(data) {

        }
    });
}

function banner_expose(uids, suid, tuid) {

    $.ajax({
        url: "/banner/banner_expose.php",
        global: false,
        type: "POST",
        data: ({
            "pid": uids,
            "suid": suid,
            "tuid": tuid
        }),
        async: true,
        success: function(data) {

        }
    });
}

function setSearchCount(uids, kword) {
    $.ajax({
        url: "/updator/updateSearchCnt.php",
        global: false,
        type: "POST",
        data: ({
            "uids": uids,
            "kword": kword
        }),
        async: true,
        success: function(data) {

        }
    });
}

function setWdata() {
    $.ajax({
        url: "/updator/wdata_reg.php",
        global: false,
        type: "POST",
        async: true,
        success: function(data) {

        }
    });
}

function setDownCount(code) {
    $.ajax({
        url: "/updator/setdowncount.php",
        global: false,
        type: "POST",
        data: ({
            "gcode": code
        }),
        async: true,
        success: function(data) {

        }
    });
}


function fillzero(obj, len) {
    obj = '000000000000000' + obj;
    return obj.substring(obj.length - len);
}