
// #region getQuery
function getQuery(key) {
  if (location.href.indexOf('?') == -1) {
    return '';
  }
  var search = location.href.split('?')[1];
  var arr = search.split('&');
  var res = '';
  for (var i = 0; i < arr.length; i++) {
    var valArr = arr[i].split('=');
    if (valArr[0] == key) {
      res = valArr[1];
      break;
    }
  }
  return decodeURIComponent(res);
}
// #endregion getQuery

// #region queryConcatString
function queryConcatString(obj) {
  var str = '';
  if (JSON.stringify(obj) == '{}') return str;
  for (var key in obj) {
    str += (key + '=' + obj[key] + '&')
  }
  str = str.slice(0, str.length - 1)
  return str;
}
// #endregion queryConcatString

// #region deepClone
function deepClone(obj) {
  var newObj = {};
  for (var key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}
// #endregion deepClone

// #region debounce
function debounce(fn, wait) {
  var timer;
  return function() {
      var _this = this;
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(function() {
          fn.apply(_this, arguments)
      }, wait)
  }
}
// #endregion debounce

// #region throttle
function throttle(fn, wait) {
  var timer;
  return function() {
      var _this = this;
      if (timer) return;
      setTimeout(function() {
          fn.apply(_this, arguments)
          timer = null;
      }, wait)
  }
}
// #endregion throttle

// #region once
function once (fn) {
  let called = false
  return function () {
      if (!called) {
          called = true
          fn.apply(this, arguments)
      }
  }
}
// #endregion once


// #region cutdownClass
class cutdownClass {
  // 参数初始化
  constructor(num, time, callback, overCallback) {
    this.num = num || 0
    this.time = time || 1000
    this.callback = callback || function () {}
    this.overCallback = overCallback || function () {}
    this.timer = null;
  }
  // 倒计时 -- 时，分，秒
  setTimeHMS(num, timer, callback, backOver) {
    this.timer = setTimeout(() => {
      if (this.num > 0) {
        var obj = {};
        var hours = parseInt(this.num / 60 / 60);
        obj.hours = hours > 9 ? hours : "0" + hours;
        var minutes = parseInt(this.num / 60 % 60);
        obj.minutes = minutes > 9 ? minutes : "0" + minutes;
        var seconds = parseInt(this.num % 60);
        obj.seconds = seconds;

        this.num -= 1;
        this.callback(obj);
        this.setTimeHMS(this.num, timer, callback, backOver);
      } else {
          backOver();
      }
    }, timer)
  }
  // 倒计时 -- 天，时，分
  setTimeDHM(num, timer, callback, backOver) {
    this.timer = setTimeout(() => {
      if (num > 0) {
        var obj = {};
        var day = parseInt(num / 60 / 60 / 24);
        obj.day = day > 9 ? day : "0" + day;
        var hours = parseInt(num / 60 / 60 % 24);
        obj.hours = hours > 9 ? hours : "0" + hours;
        var minutes = parseInt(num / 60 % 60);
        obj.minutes = minutes > 9 ? minutes : "0" + minutes;
        num -= 1;
        callback(obj);
        this.setTimeDHM(num, timer, callback, backOver);
      } else {
        backOver();
      }
    }, timer)
  }
  // 清除倒计时
  clearTimer() {
    clearTimeout(this.timer);
  }
}
// #endregion cutdownClass

// #region formatDate
function formatDate(date = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  var formatOption = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  };
  var week = ['日', '一', '二', '三', '四', '五', '六'];
  for (var i in formatOption) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function (m) {
      var val = formatOption[i] + '';
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
      return m.length == 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}
// #endregion formatDate

// #region Format
Date.prototype.Format = function (fmt) {
  if (!fmt) { 
    fmt = 'YYYY-MM-DD'
  }
  var o = {
      'M+': this.getMonth() + 1, // 月份 
      'D+': this.getDate(), // 日 
      'h+': this.getHours(), // 小时 
      'm+': this.getMinutes(), // 分 
      's+': this.getSeconds(), // 秒 
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度 
      'S': this.getMilliseconds() // 毫秒 
  };
  if (/([yY]+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  } 
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      var sk = RegExp.$1.length === 1? o[k] : ('00' + o[k]).substr(('' + o[k]).length);
      fmt = fmt.replace(RegExp.$1, sk);
    } 
  }
  return fmt;
};
// #endregion Format

// #region timeFromDate
const timeFromDate = date => date.toTimeString().slice(0, 8);
// #endregion timeFromDate

// #region copyToClipboard
function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text)
  } catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement

    element.value = text

    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '')

    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt' // Prevent zooming on iOS

    const selection = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null

    document.body.appendChild(element)
    element.select()

    // Explicit selection workaround for iOS
    element.selectionStart = 0
    element.selectionEnd = text.length

    document.execCommand('copy')
    document.body.removeChild(element)

    if (originalRange && selection) {
      selection.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus()
    }
  }
}
// #endregion copyToClipboard

// #region dayOfYear
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// #endregion dayOfYear

// #region removeDuplicates
const removeDuplicates = (arr) => [...new Set(arr)];
// #endregion removeDuplicates

// #region deviceIsOpenDark
const deviceIsOpenDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// #endregion deviceIsOpenDark

// #region randomHex
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
// #endregion randomHex







