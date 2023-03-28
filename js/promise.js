
var PENDING = 'pending'
var FULFILLED = 'fulfilled'
var REJECTED = 'rejected'

function Promise(executor) {
  var self = this
  self.status = PENDING
  self.value = null
  self.reason = null
  self.onFulFilledCallbacks = []
  self.onRejectedCallbacks = []
  function resolve(value) {
    if (self.status === PENDING) {
      self.status = FULFILLED
      self.value = value
      self.onFulFilledCallbacks.forEach(function(callback) {
        callback ? callback(value) : ''
      })
    }
  }
  function reject(reason) {
    if (self.status === PENDING) {
      self.status = REJECTED
      self.reason = reason
      self.onRejectedCallbacks.forEach(function(callback) {
        callback ? callback(reason) : ''
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch(err) {
    reject(err)
  }
}

Promise.prototype.then = function(onFulFilled, onRejected) {
  var self = this
  onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : function(value) { return value }
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { throw reason }
  return new Promise(function(resolve, reject) {
    if (self.status === FULFILLED) {
      try {
        var x = onFulFilled(self.value)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (err) {
        reject(err)
      }
    } else if (self.status === REJECTED) {
      try {
        let x = onRejected(self.reason)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          reject(x)
        }
      } catch (err) {
        reject(err)
      }
    } else if (self.status === PENDING) {
      self.onFulFilledCallbacks.push(function() {
        try {
          var x = onFulFilled(self.value)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        } catch (err) {
          reject(err)
        }
      })
      self.onRejectedCallbacks.push(function() {
        try {
          var x = onRejected(self.reason)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          } else {
            reject(x)
          }
        } catch (err) {
          reject(err)
        }
      })
    }
  })
}

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

let fn = new Promise((resolve, reject) => {
  resolve('成功')
}).then(res => {
  console.log(res)
  return '成功2'
}).then(res => {
  console.log(res)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功3')
    }, 1000)
  })
}).then('成功4').then(res => {
  console.log(res)
  return '成功5'
}).then(res => {
  console.log(res)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('失败')
    }, 1000)
  })
}).catch(err => {
  console.log(err)
})