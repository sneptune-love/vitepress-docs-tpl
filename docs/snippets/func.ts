
// #region Format
/* 时间格式化
 * 来源地址：https://gitee.com/mosowe/react-vite-app/blob/master/src/main.tsx 
*/
Date.prototype.Format = function (fmt?: string) {
  if (!fmt) { 
    fmt = 'YYYY-MM-DD'
  }
  let o:any = {
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
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      let sk = RegExp.$1.length === 1? o[k] : ('00' + o[k]).substr(('' + o[k]).length);
      fmt = fmt.replace(RegExp.$1, sk);
    } 
  }
  return fmt;
};
// #endregion Format


// #region copyToClipboard
/*
 * 复制功能 copyToClipboard  来源于vitepress源码 
 * https://github.com/vuejs/vitepress/blob/58da4c95d4f9eeceb5893eb4aaf132c593fc2a93/src/client/theme-default/composables/copy-code.ts 
*/
function copyToClipboard(text: string) {
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

    if (originalRange) {
      selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      ;(previouslyFocusedElement as HTMLElement).focus()
    }
  }
}
// #endregion copyToClipboard