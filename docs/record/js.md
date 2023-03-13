
# JS知识点记录

## JS方法

### URL参数获取 getQuery

<<< @/snippets/func.js#getQuery

### 参数拼接 queryConcatString

<<< @/snippets/func.js#queryConcatString

### 深度克隆 deepClone

> 下文方法只针对多层对象结构，递归处理

<<< @/snippets/func.js#deepClone

### 防抖函数 debounce

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

<<< @/snippets/func.js#debounce

### 节流函数 throttle

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

<<< @/snippets/func.js#throttle

### 函数只执行一次 once

<<< @/snippets/func.js#once


### 倒计时 cutdownClass

> 适用场景：单个或者多个倒计时

<<< @/snippets/func.js#cutdownClass

### 日期格式化 formatDate

> 适用场景：时间戳转换为各种格式

:::danger 注意
new Date(str)，str中如果包含-，ios系统会转换为undefined，建议使用/替代
:::

<<< @/snippets/func.js#formatDate

### 日期格式化 - 挂载Date原型上 Format

<<< @/snippets/func.js#Format

### 简易方法获取时分秒 timeFromDate

<<< @/snippets/func.js#timeFromDate

### 文案复制 copyToClipboard

<<< @/snippets/func.js#copyToClipboard

### 查找日期位于一年中的第几天 dayOfYear

<<< @/snippets/func.js#dayOfYear

### 数组去重 removeDuplicates

<<< @/snippets/func.js#removeDuplicates

### 检查设备是否处于暗黑模式 deviceIsOpenDark

<<< @/snippets/func.js#deviceIsOpenDark

### 生成随机十六进制颜色 randomHex

<<< @/snippets/func.js#randomHex


## JS小技巧

### 通过throw阻塞后续代码执行

```js
function a(){
  b();
  console.log(2);
}

function b() {
  throw new Error('error');
}
// a() -> 输出结果 Error, console会被阻塞无法执行

function c() {
  try {
    b();
  } catch(e) {
    console.log(e);
  }
}
// c() -> 输出结果  error信息
```

### 通过break来中断for循环，减少循环次数，同时避免跳出函数

```js
function handleData() {
  let arr = [1, 2, 3, 4];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === 2) {
      break;
    }
  }
  console.log(3);
}
// 使用break, 只循环两次, 同时输出 3
// 使用return，只循环两次，跳出函数，不执行console
```