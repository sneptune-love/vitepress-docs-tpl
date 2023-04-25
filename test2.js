

function debounce(fn, wait) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

function throttle(fn, wait) {
  let timer = null;
  return function() {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}