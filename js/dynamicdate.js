/*
 * (C) awhile.us
 *
 * [2011-08-11] dynamicDate v1
 *
 */

function dynamicDate(dt, option, nocalcserverdif) {
    if (typeof timeDif == "undefined") timeDif = 0;

    if (!nocalcserverdif) {
        dt += timeDif;
    }
    var dif = Math.floor(new Date().getTime() / 1000) - dt;

    switch (option) {
        case "half":
            if (dif >= 0) {
                var today = new Date();

                var seconds = dif % 60,
                    minutes = ((dif - seconds) % 3600) / 60,
                    hours = ((dif - (minutes * 60 + seconds)) % 86400) / 3600;

                var days = today.getDOY() - date("z", dt),
                    months = (today.getFullYear() * 12 + today.getMonth() + 1) - (parseInt(date("Y", dt) * 12) + parseInt(date("n", dt))),
                    years = today.getFullYear() - date("Y", dt);

                if (years == 0 || (years == 1 && months <= 1)) {
                    if (months == 0 || (months == 1 && days < 7)) {
                        if (days == 0) {
                            if (hours == 0) {
                                if (minutes == 0) {
                                    if (seconds <= 2) {
                                        return "방금전";
                                    } else {
                                        return seconds + "초전";
                                    }
                                } else {
                                    return minutes + "분전";
                                }
                            } else {
                                return hours + "시간전";
                            }
                        } else if (days == 1) {
                            return "어제 ";
                        } else {
                            return days + "일전 ";
                        }
                    } else if (months == 1) {
                        return "지난달 ";
                    } else if (months < 6) {
                        return months + "달전 ";
                    } else {
                        return date("n월 j일", dt);
                    }
                } else if (years == 1) {
                    return "작년 ";
                } else if (years == 2) {
                    return "재작년 ";
                } else {
                    return years + "년전 ";
                }
            } else {
                dif = dif * -1;
                var today = new Date();

                var seconds = dif % 60,
                    minutes = ((dif - seconds) % 3600) / 60,
                    hours = ((dif - (minutes * 60 + seconds)) % 86400) / 3600;

                var days = date("z", dt) - today.getDOY(),
                    months = (parseInt(date("Y", dt) * 12) + parseInt(date("n", dt))) - (today.getFullYear() * 12 + today.getMonth() + 1),
                    years = date("Y", dt) - today.getFullYear();

                if (years == 0 || (years == 1 && months <= 1)) {
                    if (months == 0 || (months == 1 && days < 7)) {
                        if (days == 0) {
                            if (hours == 0) {
                                if (minutes == 0) {
                                    if (seconds <= 2) {
                                        return "방금전";
                                    } else {
                                        return seconds + "초후";
                                    }
                                } else {
                                    return minutes + "분후";
                                }
                            } else {
                                return hours + "시간후";
                            }
                        } else if (days == 1) {
                            return "내일 ";
                        } else if (days == 2) {
                            return "모레 ";
                        } else {
                            return days + "일후 ";
                        }
                    } else if (months == 1) {
                        return "다음달 ";
                    } else if (months < 6) {
                        return months + "달후 ";
                    } else {
                        return date("n월 j일", dt);
                    }
                } else if (years == 1) {
                    return "내년 ";
                } else if (years == 2) {
                    return "내후년 ";
                } else {
                    return years + "년후 ";
                }
            }
            break;

        default:
            if (dif >= 0) {
                var today = new Date();

                var seconds = dif % 60,
                    minutes = ((dif - seconds) % 3600) / 60,
                    hours = ((dif - (minutes * 60 + seconds)) % 86400) / 3600;

                var days = today.getDOY() - date("z", dt),
                    months = (today.getFullYear() * 12 + today.getMonth() + 1) - (parseInt(date("Y", dt) * 12) + parseInt(date("n", dt))),
                    years = today.getFullYear() - date("Y", dt);

                if (years == 0 || (years == 1 && months <= 1)) {
                    if (months == 0 || (months == 1 && days < 7)) {
                        if (days == 0) {
                            if (hours == 0) {
                                if (minutes == 0) {
                                    if (seconds <= 2) {
                                        return "방금전";
                                    } else {
                                        return seconds + "초전";
                                    }
                                } else {
                                    return minutes + "분전";
                                }
                            } else {
                                return hours + "시간전";
                            }
                        } else if (days == 1) {
                            return "어제 ";
                        } else {
                            return days + "일전 ";
                        }
                    } else if (months == 1) {
                        return "지난달 ";
                    } else if (months < 6) {
                        return months + "달전 ";
                    } else {
                        return date("n월 j일", dt);
                    }
                } else if (years == 1) {
                    return "작년 ";
                } else if (years == 2) {
                    return "재작년 ";
                } else {
                    return years + "년전 ";
                }
            } else {
                dif = dif * -1;
                var today = new Date();

                var seconds = dif % 60,
                    minutes = ((dif - seconds) % 3600) / 60,
                    hours = ((dif - (minutes * 60 + seconds)) % 86400) / 3600;

                var days = date("z", dt) - today.getDOY(),
                    months = (parseInt(date("Y", dt) * 12) + parseInt(date("n", dt))) - (today.getFullYear() * 12 + today.getMonth() + 1),
                    years = date("Y", dt) - today.getFullYear();

                if (years == 0 || (years == 1 && months <= 1)) {
                    if (months == 0 || (months == 1 && days < 7)) {
                        if (days == 0) {
                            if (hours == 0) {
                                if (minutes == 0) {
                                    if (seconds <= 2) {
                                        return "방금전";
                                    } else {
                                        return seconds + "초후";
                                    }
                                } else {
                                    return minutes + "분후";
                                }
                            } else {
                                return hours + "시간후";
                            }
                        } else if (days == 1) {
                            return "내일 " + date("H시 i분", dt);
                        } else if (days == 2) {
                            return "모레 " + date("H시 i분", dt);
                        } else if (days < 7) {
                            var weekStr = ['일', '월', '화', '수', '목', '금', '토'];
                            return weekStr[date('w', dt)] + "요일 " + date("H시 i분", dt);
                        } else {
                            return days + "일 후 " + date("H시 i분", dt);
                        }
                    } else if (months == 1) {
                        return "다음달 " + date("j일 H시", dt);
                    } else if (months < 6) {
                        return months + "달 후 " + date("j일 H시", dt);
                    } else {
                        return date("n월 j일 H시", dt);
                    }
                } else if (years == 1) {
                    return "내년 " + date("n", dt) + "월 " + date("j일 H시", dt);
                } else if (years == 2) {
                    return "내후년 " + date("n", dt) + "월 " + date("j일 H시", dt);
                } else {
                    return years + "년 후 " + date("n", dt) + "월 " + date("j일 H시", dt);
                }
            }
    }
}

function refreshDate(target) {
    if (typeof target == "undefined") {
        $("span._timestamp").each(function(i, o) {
            var oT = $(o);
            var timestamp = oT.attr("timestamp");
            var date = oT.attr("date");
            if (date) timestamp = strtotime(date);
            var nocalcserverdif = false;
            timestamp = parseInt(timestamp);
            if (isNaN(timestamp)) return true;
            if (oT.attr("clientside")) nocalcserverdif = true;
            oT.html(dynamicDate(timestamp, oT.attr('option'), nocalcserverdif));
        });
    } else {
        $("span._timestamp", $(target)).each(function(i, o) {
            var oT = $(o);
            var timestamp = oT.attr("timestamp");
            var date = oT.attr("date");
            if (date) timestamp = strtotime(date);
            var nocalcserverdif = false;
            timestamp = parseInt(timestamp);
            if (isNaN(timestamp)) return true;
            if (oT.attr("clientside")) nocalcserverdif = true;
            oT.html(dynamicDate(timestamp, oT.attr('option'), nocalcserverdif));
        });
    }
}

Date.prototype.getDOY = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
}

function date(format, timestamp) {
    // Format a local date/time
    //
    // version: 1107.2516
    // discuss at: http://phpjs.org/functions/date
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: MeEtc (http://yass.meetcweb.com)
    // +   improved by: Brad Touesnard
    // +   improved by: Tim Wiel
    // +   improved by: Bryan Elliott
    //
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: David Randall
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +  derived from: gettimeofday
    // +      input by: majak
    // +   bugfixed by: majak
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Thomas Beaucourt (http://www.webapp.fr)
    // +   improved by: JT
    // +   improved by: Theriault
    // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
    // +      input by: Martin
    // +      input by: Alex Wilson
    // %        note 1: Uses global: php_js to store the default timezone
    // %        note 2: Although the function potentially allows timezone info (see notes), it currently does not set
    // %        note 2: per a timezone specified by date_default_timezone_set(). Implementers might use
    // %        note 2: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
    // %        note 2: in order to adjust the dates in this function (or our other date functions!) accordingly
    // *     example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
    // *     returns 1: '09:09:40 m is month'
    // *     example 2: date('F j, Y, g:i a', 1062462400);
    // *     returns 2: 'September 2, 2003, 2:26 am'
    // *     example 3: date('Y W o', 1062462400);
    // *     returns 3: '2003 36 2003'
    // *     example 4: x = date('Y m d', (new Date()).getTime()/1000);
    // *     example 4: (x+'').length == 10 // 2009 01 09
    // *     returns 4: true
    // *     example 5: date('W', 1104534000);
    // *     returns 5: '53'
    // *     example 6: date('B t', 1104534000);
    // *     returns 6: '999 31'
    // *     example 7: date('W U', 1293750000.82); // 2010-12-31
    // *     returns 7: '52 1293750000'
    // *     example 8: date('W', 1293836400); // 2011-01-01
    // *     returns 8: '52'
    // *     example 9: date('W Y-m-d', 1293974054); // 2011-01-02
    // *     returns 9: '52 2011-01-02'
    var that = this,
        jsdate, f, formatChr = /\\?([a-z])/gi,
        formatChrCb,
        // Keep this here (works, but for code commented-out
        // below for file size reasons)
        //, tal= [],
        _pad = function(n, c) {
            if ((n = n + '').length < c) {
                return new Array((++c) - n.length).join('0') + n;
            }
            return n;
        },
        txt_words = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    formatChrCb = function(t, s) {
        return f[t] ? f[t]() : s;
    };
    f = {
        // Day
        d: function() { // Day of month w/leading 0; 01..31
            return _pad(f.j(), 2);
        },
        D: function() { // Shorthand day name; Mon...Sun
            return f.l().slice(0, 3);
        },
        j: function() { // Day of month; 1..31
            return jsdate.getDate();
        },
        l: function() { // Full day name; Monday...Sunday
            return txt_words[f.w()] + 'day';
        },
        N: function() { // ISO-8601 day of week; 1[Mon]..7[Sun]
            return f.w() || 7;
        },
        S: function() { // Ordinal suffix for day of month; st, nd, rd, th
            var j = f.j();
            return j > 4 || j < 21 ? 'th' : {
                1: 'st',
                2: 'nd',
                3: 'rd'
            }[j % 10] || 'th';
        },
        w: function() { // Day of week; 0[Sun]..6[Sat]
            return jsdate.getDay();
        },
        z: function() { // Day of year; 0..365
            /* var a = new Date(f.Y(), f.n() - 1, f.j()),
                 b = new Date(f.Y(), 0, 1); 2019-01-02 김정득 수정*/
            var a = new Date(f.Y(), f.n() - 1, f.j()),
                b = new Date(new Date().getFullYear(), 0, 1);
            return Math.round((a - b) / 864e5) + 1;
        },

        // Week
        W: function() { // ISO-8601 week number
            var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3),
                b = new Date(a.getFullYear(), 0, 4);
            return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
        },

        // Month
        F: function() { // Full month name; January...December
            return txt_words[6 + f.n()];
        },
        m: function() { // Month w/leading 0; 01...12
            return _pad(f.n(), 2);
        },
        M: function() { // Shorthand month name; Jan...Dec
            return f.F().slice(0, 3);
        },
        n: function() { // Month; 1...12
            return jsdate.getMonth() + 1;
        },
        t: function() { // Days in month; 28...31
            return (new Date(f.Y(), f.n(), 0)).getDate();
        },

        // Year
        L: function() { // Is leap year?; 0 or 1
            return new Date(f.Y(), 1, 29).getMonth() === 1 | 0;
        },
        o: function() { // ISO-8601 year
            var n = f.n(),
                W = f.W(),
                Y = f.Y();
            return Y + (n === 12 && W < 9 ? -1 : n === 1 && W > 9);
        },
        Y: function() { // Full year; e.g. 1980...2010
            return jsdate.getFullYear();
        },
        y: function() { // Last two digits of year; 00...99
            return (f.Y() + "").slice(-2);
        },

        // Time
        a: function() { // am or pm
            return jsdate.getHours() > 11 ? "pm" : "am";
        },
        A: function() { // AM or PM
            return f.a().toUpperCase();
        },
        B: function() { // Swatch Internet time; 000..999
            var H = jsdate.getUTCHours() * 36e2,
                // Hours
                i = jsdate.getUTCMinutes() * 60,
                // Minutes
                s = jsdate.getUTCSeconds(); // Seconds
            return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
        },
        g: function() { // 12-Hours; 1..12
            return f.G() % 12 || 12;
        },
        G: function() { // 24-Hours; 0..23
            return jsdate.getHours();
        },
        h: function() { // 12-Hours w/leading 0; 01..12
            return _pad(f.g(), 2);
        },
        H: function() { // 24-Hours w/leading 0; 00..23
            return _pad(f.G(), 2);
        },
        i: function() { // Minutes w/leading 0; 00..59
            return _pad(jsdate.getMinutes(), 2);
        },
        s: function() { // Seconds w/leading 0; 00..59
            return _pad(jsdate.getSeconds(), 2);
        },
        u: function() { // Microseconds; 000000-999000
            return _pad(jsdate.getMilliseconds() * 1000, 6);
        },

        // Timezone
        e: function() { // Timezone identifier; e.g. Atlantic/Azores, ...
            // The following works, but requires inclusion of the very large
            // timezone_abbreviations_list() function.
            /*              return this.date_default_timezone_get();
             */
            throw 'Not supported (see source code of date() for timezone on how to add support)';
        },
        I: function() { // DST observed?; 0 or 1
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            var a = new Date(f.Y(), 0),
                // Jan 1
                c = Date.UTC(f.Y(), 0),
                // Jan 1 UTC
                b = new Date(f.Y(), 6),
                // Jul 1
                d = Date.UTC(f.Y(), 6); // Jul 1 UTC
            return 0 + ((a - c) !== (b - d));
        },
        O: function() { // Difference to GMT in hour format; e.g. +0200
            var a = jsdate.getTimezoneOffset();
            return (a > 0 ? "-" : "+") + _pad(Math.abs(a / 60 * 100), 4);
        },
        P: function() { // Difference to GMT w/colon; e.g. +02:00
            var O = f.O();
            return (O.substr(0, 3) + ":" + O.substr(3, 2));
        },
        T: function() { // Timezone abbreviation; e.g. EST, MDT, ...
            // The following works, but requires inclusion of the very
            // large timezone_abbreviations_list() function.
            /*              var abbr = '', i = 0, os = 0, default = 0;
                        if (!tal.length) {
                            tal = that.timezone_abbreviations_list();
                        }
                        if (that.php_js && that.php_js.default_timezone) {
                            default = that.php_js.default_timezone;
                            for (abbr in tal) {
                                for (i=0; i < tal[abbr].length; i++) {
                                    if (tal[abbr][i].timezone_id === default) {
                                        return abbr.toUpperCase();
                                    }
                                }
                            }
                        }
                        for (abbr in tal) {
                            for (i = 0; i < tal[abbr].length; i++) {
                                os = -jsdate.getTimezoneOffset() * 60;
                                if (tal[abbr][i].offset === os) {
                                    return abbr.toUpperCase();
                                }
                            }
                        }
            */
            return 'UTC';
        },
        Z: function() { // Timezone offset in seconds (-43200...50400)
            return -jsdate.getTimezoneOffset() * 60;
        },

        // Full Date/Time
        c: function() { // ISO-8601 date.
            return 'Y-m-d\\Th:i:sP'.replace(formatChr, formatChrCb);
        },
        r: function() { // RFC 2822
            return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        },
        U: function() { // Seconds since UNIX epoch
            return jsdate.getTime() / 1000 | 0;
        }
    };
    this.date = function(format, timestamp) {
        that = this;
        jsdate = ((typeof timestamp === 'undefined') ? new Date() : // Not provided
            (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
        );
        return format.replace(formatChr, formatChrCb);
    };
    return this.date(format, timestamp);
}

function strtotime(str, now) {
    // Convert string representation of date and time to a timestamp
    //
    // version: 1107.2516
    // discuss at: http://phpjs.org/functions/strtotime
    // +   original by: Caio Ariede (http://caioariede.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: David
    // +   improved by: Caio Ariede (http://caioariede.com)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Wagner B. Soares
    // +   bugfixed by: Artur Tchernychev
    // %        note 1: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
    // *     example 1: strtotime('+1 day', 1129633200);
    // *     returns 1: 1129719600
    // *     example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
    // *     returns 2: 1130425202
    // *     example 3: strtotime('last month', 1129633200);
    // *     returns 3: 1127041200
    // *     example 4: strtotime('2009-05-04 08:30:00');
    // *     returns 4: 1241418600
    var i, match, s, strTmp = '',
        parse = '';

    strTmp = str;
    strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' '); // unecessary spaces
    strTmp = strTmp.replace(/[\t\r\n]/g, ''); // unecessary chars
    if (strTmp == 'now') {
        return (new Date()).getTime() / 1000; // Return seconds, not milli-seconds
    } else if (!isNaN(parse = Date.parse(strTmp))) {
        return (parse / 1000);
    } else if (now) {
        now = new Date(now * 1000); // Accept PHP-style seconds
    } else {
        now = new Date();
    }

    strTmp = strTmp.toLowerCase();

    var __is = {
        day: {
            'sun': 0,
            'mon': 1,
            'tue': 2,
            'wed': 3,
            'thu': 4,
            'fri': 5,
            'sat': 6
        },
        mon: {
            'jan': 0,
            'feb': 1,
            'mar': 2,
            'apr': 3,
            'may': 4,
            'jun': 5,
            'jul': 6,
            'aug': 7,
            'sep': 8,
            'oct': 9,
            'nov': 10,
            'dec': 11
        }
    };

    var process = function(m) {
        var ago = (m[2] && m[2] == 'ago');
        var num = (num = m[0] == 'last' ? -1 : 1) * (ago ? -1 : 1);

        switch (m[0]) {
            case 'last':
            case 'next':
                switch (m[1].substring(0, 3)) {
                    case 'yea':
                        now.setFullYear(now.getFullYear() + num);
                        break;
                    case 'mon':
                        now.setMonth(now.getMonth() + num);
                        break;
                    case 'wee':
                        now.setDate(now.getDate() + (num * 7));
                        break;
                    case 'day':
                        now.setDate(now.getDate() + num);
                        break;
                    case 'hou':
                        now.setHours(now.getHours() + num);
                        break;
                    case 'min':
                        now.setMinutes(now.getMinutes() + num);
                        break;
                    case 'sec':
                        now.setSeconds(now.getSeconds() + num);
                        break;
                    default:
                        var day;
                        if (typeof(day = __is.day[m[1].substring(0, 3)]) != 'undefined') {
                            var diff = day - now.getDay();
                            if (diff == 0) {
                                diff = 7 * num;
                            } else if (diff > 0) {
                                if (m[0] == 'last') {
                                    diff -= 7;
                                }
                            } else {
                                if (m[0] == 'next') {
                                    diff += 7;
                                }
                            }
                            now.setDate(now.getDate() + diff);
                        }
                }
                break;

            default:
                if (/\d+/.test(m[0])) {
                    num *= parseInt(m[0], 10);

                    switch (m[1].substring(0, 3)) {
                        case 'yea':
                            now.setFullYear(now.getFullYear() + num);
                            break;
                        case 'mon':
                            now.setMonth(now.getMonth() + num);
                            break;
                        case 'wee':
                            now.setDate(now.getDate() + (num * 7));
                            break;
                        case 'day':
                            now.setDate(now.getDate() + num);
                            break;
                        case 'hou':
                            now.setHours(now.getHours() + num);
                            break;
                        case 'min':
                            now.setMinutes(now.getMinutes() + num);
                            break;
                        case 'sec':
                            now.setSeconds(now.getSeconds() + num);
                            break;
                    }
                } else {
                    return false;
                }
                break;
        }
        return true;
    };

    match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (match != null) {
        if (!match[2]) {
            match[2] = '00:00:00';
        } else if (!match[3]) {
            match[2] += ':00';
        }

        s = match[1].split(/-/g);

        for (i in __is.mon) {
            if (__is.mon[i] == s[1] - 1) {
                s[1] = i;
            }
        }
        s[0] = parseInt(s[0], 10);

        s[0] = (s[0] >= 0 && s[0] <= 69) ? '20' + (s[0] < 10 ? '0' + s[0] : s[0] + '') : (s[0] >= 70 && s[0] <= 99) ? '19' + s[0] : s[0] + '';
        return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]) + (match[4] ? match[4] / 1000 : ''), 10);
    }

    var regex = '([+-]?\\d+\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)' + '|(last|next)\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))' + '(\\sago)?';

    match = strTmp.match(new RegExp(regex, 'gi')); // Brett: seems should be case insensitive per docs, so added 'i'
    if (match == null) {
        return false;
    }

    for (i = 0; i < match.length; i++) {
        if (!process(match[i].split(' '))) {
            return false;
        }
    }

    return (now.getTime() / 1000);
}

jQuery(function() {
    //$("head").append("<style> span._timestamp { color: inherit; font-family: inherit; font-size: inherit; } </style>");
    refreshDate();
    //setInterval(function(){refreshDate()}, 5000);
});