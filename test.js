let str = '88888888888';
str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
console.log(str);


var list = {

  val: 1,

  next: {

    val: 2,

    next: {

      val: 3,

      next: {

        val: 4,

        next: null

      }

    }

  }

}

function reserveList(list) {
  let current = list
  let prev = null;
  while(current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
    console.log(current)
    console.log(prev)
  }
  return prev
}

console.log(reserveList(list))
