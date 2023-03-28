
class Promise {
  constructor(executor) {
    this.status = 'pending'
    this.reason = null
    this.value = null
    this.onResolvedCallback = []
    this.onRejectedCallbacks = []
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'onFulFilled'
        this.value = value
        this.onResolvedCallback.forEach(callback => callback())
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'onRejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(callback => callback())
      }
    }
    try {
      executor(resolve, reject)
    } catch(err) {
      this.reject(err)
    }
  }
  then(onFulFilled, onRejected) {
    if (this.status === 'onFulFilled') {
      onFulFilled(this.value)
    }
    if (this.status === 'onRejected') {
      onRejected(this.reason)
    }
    if (this.status === 'pending') {
      this.onResolvedCallback.push(() => {
        onFulFilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

let fn = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('成功')
  // }, 1000)
  setTimeout(() => {
    reject('错误')
  }, 2000)
}).then(res => {
  console.log(res)
  return '成功2'
}, err => {
  console.log(err)
})