
Object.prototype._bind = function() {
  var self = this
  var args = [].slice.call(arguments)
  var context = args[0]
  var otherArg = args.slice(1)
  return function() {
    return self.apply(context, otherArg)
  }
}

var obj = {
  name: 'xiaofan',
  sayName: function(a1, a2, a3) {
    console.log(this)
    console.log(this.name)
    console.log(a1)
    console.log(a2)
    console.log(a3)
  }
}

var newObj = {
  name: 'new xiaofan'
}

obj.sayName._bind(newObj, '1', '2', '3')()