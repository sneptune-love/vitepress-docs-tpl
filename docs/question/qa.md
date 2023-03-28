# 汇总

- [面试题-HTML方面](#面试题-html方面)
  - [HTML布局元素的分类和应用场景？](#html布局元素的分类和应用场景)
  - [减少dom元素的方法，一次性给大量的dom元素怎么优化？](#减少dom元素的方法一次性给大量的dom元素怎么优化)
  - [如何保证html语义化,理解语义化标签？](#如何保证html语义化理解语义化标签)
  - [DOM事件传递问题](#dom事件传递问题)
  - [async和defer的区别](#async和defer的区别)
  - [rem、em、vw/vh、px的区别](#rememvwvhpx的区别)
- [面试题-Css方面](#面试题-css方面)
  - [盒模型](#盒模型)
- [BFC](#bfc)
  - [@support、@media、calc的作用](#supportmediacalc的作用)
  - [inline-block元素为什么会有间距，去除间距的方法](#inline-block元素为什么会有间距去除间距的方法)
  - [水平垂直居中的几种方法](#水平垂直居中的几种方法)
  - [0.5px边框问题](#05px边框问题)
  - [CSS三角形](#css三角形)
- [面试题-Js方面](#面试题-js方面)
  - [this的指向](#this的指向)
  - [call、apply、bind的区别](#callapplybind的区别)
  - [节流和防抖函数的作用和场景](#节流和防抖函数的作用和场景)
  - [事件循环](#事件循环)
  - [for of 和 for in的区别](#for-of-和-for-in的区别)
  - [获取url参数](#获取url参数)
  - [实现一个网络请求模块，要求进行中的网络请求数量不超过10个，超过10个的进入请求队列中，等待前面的请求结束后陆续发送队列中的请求](#实现一个网络请求模块要求进行中的网络请求数量不超过10个超过10个的进入请求队列中等待前面的请求结束后陆续发送队列中的请求)
- [面试题-浏览器方面](#面试题-浏览器方面)
  - [浏览器渲染机制](#浏览器渲染机制)
  - [Http、Http2、Https的区别](#httphttp2https的区别)
  - [get和post的区别](#get和post的区别)
  - [常见的状态码](#常见的状态码)
  - [session、local、cookie的区别](#sessionlocalcookie的区别)
  - [浏览器缓存](#浏览器缓存)
    - [服务端设置缓存](#服务端设置缓存)
    - [前端如何设置资源不缓存](#前端如何设置资源不缓存)
  - [xss跨站脚本攻击](#xss跨站脚本攻击)
- [面试题-算法方面](#面试题-算法方面)
  - [写一个1-100的求和递归](#写一个1-100的求和递归)
  - [图像旋转算法](#图像旋转算法)
  - [如何实现一个eventBus？](#如何实现一个eventbus)
  - [实现一下深拷贝cloneDeep](#实现一下深拷贝clonedeep)
  - [手写一个promise函数](#手写一个promise函数)
- [面试题-vue方面](#面试题-vue方面)
  - [MVC、MVP、MVVM的认识](#mvcmvpmvvm的认识)
  - [生命周期的执行顺序](#生命周期的执行顺序)
  - [父子组件生命周期的执行顺序](#父子组件生命周期的执行顺序)
  - [双向绑定数据的原理](#双向绑定数据的原理)
  - [v-if和v-for的优先级哪个更高，如果同时出现，会有什么问题？](#v-if和v-for的优先级哪个更高如果同时出现会有什么问题)
  - [vue的组件data为什么是返回一个函数，根实例则是一个对象？](#vue的组件data为什么是返回一个函数根实例则是一个对象)
  - [v-for中的key作用是什么？](#v-for中的key作用是什么)
  - [怎么理解vue的diff算法？](#怎么理解vue的diff算法)
  - [对vue组件化的理解](#对vue组件化的理解)
  - [组件中的通信方式有哪些？](#组件中的通信方式有哪些)
  - [vue如何扩展现有的组件？](#vue如何扩展现有的组件)
  - [watch和computed的区别](#watch和computed的区别)
  - [nextTick的原理](#nexttick的原理)
  - [vuex的理解](#vuex的理解)
  - [vue-router的钩子函数有哪些？](#vue-router的钩子函数有哪些)
  - [vue的性能优化方法](#vue的性能优化方法)
  - [vue3.x的特性](#vue3x的特性)
  - [](#)

## 面试题-HTML方面

### HTML布局元素的分类和应用场景？

- div元素：通常用于分组和组织其他HTML元素，为它们提供样式和布局。div 元素可以用于创建网页的整个布局和结构。
- header元素：用于定义文档或页面的标题，通常包含logo、导航菜单和其他相关信息。在网站中，通常会将 header元素置于网页顶部。
- nav元素：用于定义导航菜单。nav元素可以包含列表、链接和其他HTML元素。
- main元素：用于定义文档或页面的主要内容。通常包含文章、博客、商品列表等主要内容。
- section元素：用于将网页内容划分为逻辑部分，通常包含一组相关的内容。可以用于划分网页的章节、文章的段落等。
- article元素：用于包含独立的、完整的、可复用的内容，通常表示一个新闻文章、博客文章、论坛帖子等。
- aside元素：用于包含与主要内容相关的附加信息，通常用于包含侧栏、广告、相关链接等。
- footer元素：用于定义文档或页面的页脚，通常包含版权信息、联系方式等。

### 减少dom元素的方法，一次性给大量的dom元素怎么优化？
  
减少dom元素的方法

- 合并和压缩 CSS 和 JavaScript 文件：减少文件的数量和大小，可以减少 DOM 元素的数量，从而提高网页的性能
- 使用 CSS Sprites：将多个图片合并到一个图片中，减少 HTTP 请求的次数，从而减少 DOM 元素的数量
- 使用 CSS3的transform和animation创建动态效果，减少 JavaScript 操作 DOM 的次数
- 使用模板引擎：将模板与数据分离，使用模板引擎可以减少 DOM 元素的数量，提高网页性能

一次性给大量的dom元素优化

- 使用 DocumentFragment：将 DOM 元素插入 DocumentFragment，再一次性插入到 DOM 树中，减少了插入操作的次数，从而提高性能
- 使用 innerHTML：将多个 DOM 元素的 HTML 代码合并为一个字符串，再使用 innerHTML 插入到 DOM 树中，减少 DOM 操作的次数，提高性能
- 使用虚拟滚动技术：对于需要大量渲染的列表或表格，可以使用虚拟滚动技术，只渲染可见的部分，减少 DOM 元素的数量，提高性能
- 分批插入：将大量 DOM 元素分批插入到 DOM 树中，避免一次性插入过多的 DOM 元素，减少浏览器的负担，提高性能
  
### 如何保证html语义化,理解语义化标签？

保证 HTML 语义化的方法

- 使用语义化标签可以让页面更具有可读性和可访问性，同时也有利于搜索引擎的优化
- 使用适当的 alt 属性：对于图片等非文本内容，使用适当的 alt 属性可以提高页面的可访问性
- 嵌套标签合理：标签的嵌套顺序应当合理，不应出现嵌套错误或不当的情况

如何理解语义化标签

- header元素：用于定义文档或页面的标题，通常包含logo、导航菜单和其他相关信息。在网站中，通常会将 header元素置于网页顶部。
- nav元素：用于定义导航菜单。nav元素可以包含列表、链接和其他HTML元素。
- main元素：用于定义文档或页面的主要内容。通常包含文章、博客、商品列表等主要内容。
- section元素：用于将网页内容划分为逻辑部分，通常包含一组相关的内容。可以用于划分网页的章节、文章的段落等。
- article元素：用于包含独立的、完整的、可复用的内容，通常表示一个新闻文章、博客文章、论坛帖子等。
- aside元素：用于包含与主要内容相关的附加信息，通常用于包含侧栏、广告、相关链接等。
- footer元素：用于定义文档或页面的页脚，通常包含版权信息、联系方式等。

### DOM事件传递问题

事件的传递分为三个阶段：捕获阶段、目标阶段和冒泡阶段

在捕获阶段，事件从 document 对象一直向下传递到触发事件的元素。在目标阶段，事件到达了触发事件的元素。在冒泡阶段，事件从触发事件的元素向上传递到 document 对象

事件传递的默认行为是从上往下（捕获阶段）传递，然后从下往上（冒泡阶段）传递，直到达到了 document 对象。在传递的过程中，可以通过 stopPropagation() 方法停止事件的传递，从而防止事件冒泡到父元素或者捕获到子元素

### async和defer的区别

- async 会让script标签并行加载，不会阻塞页面解析，加载完即执行；但是多个脚本添加这个属性，那么就是哪个脚本先加载完，先执行哪个脚本。
- defer 会让script标签在文档完成解析，触发DOMContentLoaded事件前执行，脚本加载并解析完成后，DOMContentLoaded事件才能执行；如果有多个脚本，那么按照顺序执行

### rem、em、vw/vh、px的区别

- rem是相对于根元素字体大小的单位
- em是相对于父元素字体大小的单位，适用于元素的width/height/margin/padding
- vw/vh是屏幕视口单位，1vw即屏幕视口1%的宽度，1vh是屏幕视口1%的高度
- px是屏幕分辨率像素单位

---

## 面试题-Css方面

### 盒模型

盒模型：由里向外，content/padding/border/margin

正常盒模型宽度计算：content的宽高

怪异（IE）盒模型宽度计算：content + padding + border

## BFC

**高度塌陷：**   子元素设置浮动脱离文档流后，无法撑起父元素的高度，就会导致高度塌陷，父元素后面的元素都会向上移动，页面错乱

**解决办法：** 开启元素的BFC（块级化格式上下文）属性，下面是几种开启的方法

- 设置父元素overflow属性为hidden（非visible即可），父元素高度恢复正常
- 设置父元素display属性为inline-block，父元素高度回复正常
- （推荐）在父元素上添加伪元素after，并设置如下清除浮动属性，父元素高度恢复正常

```css
.parent::after {
  display: block;
  content: '';
  clear: both;
}
```

- 在IE中对父元素zoom设置为1，可开启hasLayout（IE6以下不支持BFC，但是有类似的属性hasLayout），高度恢复正常

### @support、@media、calc的作用

- @support 是用来判断浏览器是否支持某种属性，如果支持，则可在该下面进行自定义的样式写入

```css
/* 浏览器是否支持display: flex属性，如果支持，则将div都设置为display: flex */
@support (display: flex) {
  div {
    display: flex;
  }
}
/* 浏览器是否支持display: flex属性，如果不支持，则将div都设置为float: right */
@support not(display: flex) {
  div {
    float: right;
  }
}
```

- @media 媒体查询匹配，用于设备屏幕尺寸匹配或者打印模式下样式写入

```css
/* 当屏幕尺寸小于1000px时，设置container宽度为1200px */
@media screen and (max-width: 1000px) {
  .container {
    width: 1200px;
  }
}
@media print {
  body {
    font-size: 12px;
  }
}
```

- calc 是在css中用来计算的一个属性，一般多用于宽度计算

```css
.container {
  width: calc(100% -20px);
}

```

### inline-block元素为什么会有间距，去除间距的方法

> 元素被当成行内元素排版的时候，元素之间的空白符（回车，空格，换行）会被浏览器处理。html中的回车和换行会被处理成空白符，这些空白符受到字体大小影响形成了间距

`解决办法`

- 在写html时，移除元素中间的换行符和回车。缺点是代码不美观，编辑器自动格式化会添加空白符
- 使用浮动，但是容易造成高度塌陷，需要配合清除浮动使用
- font-size设置为0，但是子元素文字大小会受到影响，需要单独给子元素设置font-size
- 给父元素添加word-spacing词边距属性，属性值设置为负值；缺点是会影响其它的子元素，最好是给需要清除的元素添加一个div父级

### 水平垂直居中的几种方法

```css
/* 方法1：flex布局 */
.parent { display: flex; justify-content: center; align-items: center; }
/* 方法2：gird布局 */
.parent { display: gird; justify-content: center; align-items: center; }
/* 方法3：table-cell布局 */
.parent { display: table-cell; vertical-align: center; text-align: center; }
/* 方法4：定位 + transform */
.parent { position: relative; }
.child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) }
/* 方法5：line-height + text-align */
.parent { height: 100px; line-height: 100px; text-align: center; }

```

### 0.5px边框问题

**出现原因：**retina屏幕的dpr都是大于等于2，在这个屏幕上0.5px边框，最终展示出来的还是1px边框

- 解决方案1（推荐使用）：使用transform缩放来实现

```css
/* 实现元素整体0.5px 边框 */
.border::after {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ddd;
  transform: scale(0.5);
  transform-origin: 0 0;
}

```

- 解决方案2：如果初始项目可以使用viewport + flexible 实现，根据dpr调整viewport的scale属性

```html
<head>
    <meta
      name="viewport"
      content="width=device-width,user-scalable=no,initial-scale=1,
                minimum-scale=1,maximum-scale=1,viewport-fit=cover"
    />
    <script type="text/javascript">
      // 动态设置 viewport 的 initial-scale
      var viewport = document.querySelector("meta[name=viewport]");
      var dpr = window.devicePixelRatio || 1;
      var scale = 1 / dpr;
      viewport.setAttribute(
        "content",
        "width=device-width," +
          "initial-scale=" +
          scale +
          ", maximum-scale=" +
          scale +
          ", minimum-scale=" +
          scale +
          ", user-scalable=no"
      );
      // 计算 rem font-size
      var clientWidth = 
        document.documentElement.clientWidth || document.body.clientWidth;
      clientWidth > 750 && (clientWidth = 750);
      var ft = (clientWidth / 7.5).toFixed(2); // 以750设计稿为例
      document.documentElement.style.fontSize = ft + "px";

    </script>
  </head>
```

- 解决方案3：使用border-image用图片来模拟实现0.5px的边框，缺点是需要额外的图片，不方便修改颜色

```css
.border {
  border-width: 1px;
  /* border-image: image-source image-height image-width image-repeat */
  border-image: url(xx.png) 2 repeat;
}
```

### CSS三角形

```css
/* 向下的三角形 */
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid #000;
}
/* 向上的三角形 */
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #000;
}
/* 向左的三角形 */
.triangle-down {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 50px solid #000;
}
/* 向右的三角形 */
.triangle-down {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid #000;
}

```

---

## 面试题-Js方面

### this的指向

在 JavaScript 中，this 关键字用于引用当前执行上下文中的对象。它的值取决于函数被调用的方式，可以是以下几种情况

- 在全局作用域中，this 指向全局对象（在浏览器中是 window 对象）
- 在函数内部，this 的值取决于函数的调用方式。如果函数是作为对象的方法调用，this 就指向该对象；如果函数作为普通函数调用，this 指向全局对象
- 在构造函数中，this 指向新创建的对象
- 在事件处理函数中，this 指向触发事件的元素
- 在箭头函数中，this 的值取决于函数定义时所处的上下文，而不是函数被调用时的上下文
- 在使用 call()、apply() 或 bind() 方法调用函数时，可以手动设置 this 的值

```js

// 1. 全局作用域中的 this
console.log(this); // window

// 2. 函数中的 this
function test() {
  console.log(this);
}

test(); // window

var obj = {
  foo: function() {
    console.log(this);
  }
};

obj.foo(); // obj

// 3. 构造函数中的 this
function Person(name) {
  this.name = name;
  console.log(this);
}

var p = new Person("Tom"); // Person { name: "Tom" }

// 4. 事件处理函数中的 this
var button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log(this); // button
});

// 5. 箭头函数中的 this
var obj = {
  foo: function() {
    var fn = () => console.log(this);
    fn();
  }
};

obj.foo(); // obj

// 6. call、apply、bind 方法中的 this
function test() {
  console.log(this);
}

test.call(obj); // obj
test.apply(obj); // obj

var fn = test.bind(obj);
fn(); // obj


```

### call、apply、bind的区别

- call、apply、bind的第一个参数都是this指向的对象
- call和bind后续传入的参数用逗号分隔，都是方法调用传入的参数；apply的第二个参数是一个数组，将传入的参数汇总到数组中
- bind返回的是一个函数，需要调用一下才能执行
- 如何使用apply来模拟实现bind

```js
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

```

### 节流和防抖函数的作用和场景

``防抖``

高频事件在N秒内只执行一次，如果多次触发，则重新计算时间

适用场景

- 表单按钮提交场景：防止多次点击提交，只执行最后一次点击提交
- 词汇联想搜索

```js
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
```

``节流``

高频事件在N秒内只执行一次，如果多次触发，只执行第一次；稀释高频事件的执行效率

使用场景：

- 鼠标拖拽事件：规定时间内只执行一次
- 监控浏览器窗口resize事件
- 动画场景：避免短时间内多次触发动画

```js
function throttle(fn, wait) {
  var timer;
  return function() {
    var _this = this;
    if (timer) return
    timer = setTimeout(function() {
      fn.apply(_this, arguments)
    }, wait)
  }
}

```

### 事件循环

- 主线程自上而下依次执行代码
- 同步任务直接进入主线程被执行
- 先执行同步，如果遇到宏任务setTimeout或者微任务promise.then，将其放入队列中
- 同步任务执行完毕后，在队列中查找微任务，先执行微任务，执行完成后再执行宏任务
- async 中的await就是promise.then

### for of 和 for in的区别

- for in 是遍历对象的key值；for of 是遍历数组的value值
- for in 只遍历可枚举属性以及对象从构造函数原型上继承的属性


### 获取url参数

### 实现一个网络请求模块，要求进行中的网络请求数量不超过10个，超过10个的进入请求队列中，等待前面的请求结束后陆续发送队列中的请求

### 实现一下深拷贝cloneDeep

```js

function deepClone(obj) {
  var newObj = {}
  for (var key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

var obj = {
  a: 1,
  b: 2,
  c: {
    c1: 3,
    c2: 4
  }
}

var newObj = deepClone(obj)

obj.c.c1 = 30

console.log(newObj.c.c1) // 3

```

### 手写一个promise函数

> 手写promise需要遵循几个原则

- 需要有三个状态 初始状态 **pending**、成功状态 **onFulfilled**、失败状态 **onRejected**，并且从初始状态到成功或者失败，不可逆
- new promise的时候需要传递一个执行器executor，执行器立即执行；executor接受两个参数resolve，reject
- promise需要保存成功的传递的值value，失败传递的值reason
- promise异步需要将回调执行方法保存到队列中，所以需要onResolveCallbacks和onRejectedCallbacks两个数组来模拟队列存储回调方法
- promise需要一个then方法，成功执行onFulfilled，参数是value；失败执行onRejected，参数是reason
- promise.then方法里面的两个参数如果不是函数，需要将其忽略
- promise.then必须返回一个promise对象，内部用setTimeout来模拟实现异步操作

```js

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

// 成功 成功2 成功3 成功5 失败

```

---

## 面试题-浏览器方面

### 浏览器渲染机制

- 输入一个网址xxx.com
- 浏览器首先会对该域名进行dns查询，得到一个ip地址并将其缓存下来，下次访问时就不需要进行dns查询了
- 浏览器通过TCP（三次握手）和服务器建立连接。若果是https协议的地址，那么还需要TSL协商来决定加密方式；最终往返8次，连接建立完毕
- 浏览器接收到服务端发来的html文件时，开始对其解析
- 解析Html形成DOM树，解析CSS形成CSSOM树，这两种解析并行进行；解析CSS时会暂停JS脚本的执行
- 将DOM和CSSOM组合成渲染Render树，display属性为none的元素不会出现在Render树上
- 在Render树上对元素的布局（大小，位置）进行计算，并对元素的层级进行合并
- 根据计算好的信息调用呈现器的绘制方法，来进行绘制

``构建DOM树``

- Conversion（转换）：浏览器从网络或者磁盘读取HTML文件原始字节，根据指定的文件编码（例如utf-8）将字节转换为字符
- Tokenizing（分词）：浏览器根据html规范将字符转换为不同的标记（例如`<html>`，`<body>`）
- Lexing（语法分析）：将标记转换为对象，其包含html语法的各种信息，比如属性，属性值，文本等
- DOM construction（DOM构造）：将上一步转换的对象连接在一个树状数据结构中，标识父子、兄弟等关系，形成DOM树

``构建CSSOM树``

- CSS引擎会从style、css文件和浏览器代理样式中收集所有的样式规则，进行划分建立索引，方便后续高效查询
- CSS引擎会遍历DOM节点，进行选择器匹配，为匹配的节点进行样式设置
- 不会阻塞DOM的构建，但是会阻塞JS的执行。因为js中可能会存在修改css的样式操作。再进入下一阶段前，必须需要等待CSSOM构建完成

``回流/重排``

- 第一次确定节点的大小和位置叫做布局，重新确定节点的大小和位置，叫做回流

``重绘``

- 改变元素的文字颜色，背景色、边框颜色等不影响它本身布局和内部布局的操作，会引起屏幕的重绘
- display: none 属性会引起回流，visibility: hidden 属性只会引起重绘

``如何减少和避免回流``
回流需要的性能消耗要远超于重绘，所以我们尽量要减少回流的操作从而提升性能

- 对需要操作的元素进行离线处理，即利用dom fragment片段来进行缓存操作（优化为一次）
- 克隆需要操作的元素，进行样式修改，修改完毕后再将元素用克隆元素替换（优化为一次）
- 对需要操作的元素的display属性设置为none，然后再修改其样式，最后将元素display属性更改为正常展示（优化为两次）
- 让元素脱离动画流，减少回流需要损耗的性能资源

### Http、Http2、Https的区别

``Http2.0新特性``

- 传输方式：使用二进制流格式传输数据
- 多路复用：区别于Http多个并发请求会建立多个TCL连接，在浏览器的限制下，同域名最多限制6个（不同浏览器限制不同）。Http2.0则有连接共享特性，一个连接上可以有多个请求
- header压缩：引入HPACK压缩首部数据；一个方面是对传输的标头字段编码，减少传输体积；另一方面是两端同时维护更新一个标头字段的索引列表，用作编码参考
- 服务端推送：在客户端请求资源时，可以将相关的资源推送至客户端缓存，在客户端请求这些资源时，无需请求，直接使用缓存

``Http和Https的区别``

- 传输方式：http是文本传输，https是二进制流传输
- 端口：http默认是请求服务器的80端口，https默认请求的是443端口
- 加密：https使用SSL/TLS对传输的数据进行加密，安全性强
- 证书：https请求，浏览器会对服务器进行证书验证，安全性更高

### get和post的区别

### 常见的状态码

- `100 接受的请求正在处理`
- `200 请求成功`
- `301 永久性重定向，请求的资源已被分配了新的URL`
- `302 临时性重定向，本次请求已被分配了新的URL，但是期望下次请求还是请求老的URL`
- `304 请求的资源未发生修改`
- `305 需要通过代理来访问`
- `400 请求报文存在语法错误`
- `401 该请求未认证`
- `403 服务器拒绝了本次访问请求`
- `404 服务器上无法找到该资源`
- `405 请求方法不被允许`
- `500 服务器内部错误`
- `502 服务器代理或者网关出现异常`

### session、local、cookie的区别

- sessionStorage是会话缓存，当前页面会话窗口关闭后就会被销毁
- localStorage是永久性本地缓存，针对当前页面域名进行缓存
- cookie是可设置过期失效的本地缓存，发送请求时会将该缓存携带至服务端

### 浏览器缓存

#### 服务端设置缓存

- 浏览器发送一个请求，服务端可以在响应头中加入强缓存或者协商缓存字段（缓存策略）。当浏览器发起第二次请求的时候，会将这些字段携带在请求头中，并通过这些字段来判断是否使用浏览器缓存

``强缓存``

- 浏览器首先识别请求头中的`Expires`或者`Cache-control`字段，如果其字段缓存时间在有效期内，则直接读取本地缓存。如果失效或者无本地缓存，则继续向服务器请求
  - `Expires`：是http1.0的产物，`Cache-control`是http1.1的产物，两者同时存在，只是一种兼容性的写法，代表兼容http1.0和http1.1；`Cache-control` 优先级高于 `Expires`
  - `Cache-control`： 是一个相对时间，距离上一次请求后的多少秒内缓存有效；缺点是在这个时间段内，如果服务端有更新，客户端无法接受到通知
  - `Expires`： 是一个绝对时间，设置过期时间，在这个时间之前请求，可以直接使用缓存；缺点是客户端时间被篡改，准确性就会降低
  
- （协商缓存）浏览器将第一次请求响应头中的`Last-Modified`或者`Etag`字段放在第二次请求的请求头中，服务端根据这些字段来对比是否需要缓存。如果需要，返回304，告知浏览器使用本地缓存；否则，继续返回相应的响应数据
  - `Last-Modified`： 资源文件上一次的修改时间
  - `Etag`： 资源的唯一标识，每次资源更新都会更改

#### 前端如何设置资源不缓存

- 针对css，js等资源文件，再其引入路径后面增加随机数标签
- 针对html页面不缓存，可以使用meta标签

```html
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate" >
<meta http-equiv="expires" content="Wed, 26 Feb 1997 00:00:00 GMT">

<script src="xxx.com/abc.js?t=12345678"></script>
```

### xss跨站脚本攻击

---

## 面试题-算法方面

### 写一个1-100的求和递归

```js
function add(startNum, endNum) {
  var result = startNum
  for (var i = 0, j = endNum - startNum; i < j; i++) {
    result += (startNum + i + 1)
  }
  return result
}

var res = add(1, 100)

console.log(res) // 5050

```

### 图像旋转算法

```js


/* 
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
旋转后得到
[
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
]
*/

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

function rotateArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      arr[j].push(arr[i].shift())
    }
  }
  return arr.map(val => val.reverse())
}

console.log(rotateArr(arr))

```

### 如何实现一个eventBus？

```js
class Bus {
  constructor() {
    this.events = {}
  }
  on (type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push({
      listener: cb
    })
  }
  off (type, listener) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter(event => listener !== event.listener)
  }
  emit(type, args) {
    if (!this.events[type]) return
    this.events[type].forEach(event => {
      event.listener(args)
      if (event.once) {
        this.off(type, event.listener)
      }
    })
  }
  once(type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push({
      listener: cb,
      once: true
    })
  }
}

let eventBus = new Bus()

eventBus.on('click', arg => {
  console.log('click')
  console.log(arg)
})

eventBus.emit('click', { type: 'click', num: 1 })
// click 
// { type: 'click', num: 1 }

eventBus.emit('click', { type: 'click', num: 2 })
// click 
// { type: 'click', num: 2 }

eventBus.once('click2', arg => {
  console.log('click2')
  console.log(arg)
})

eventBus.emit('click2', { type: 'click2', num: 1 })
// click2
// { type: 'click', num: 1 }

eventBus.emit('click2', { type: 'click2', num: 2 })
// 无输出

```

## 面试题-vue方面

### MVC、MVP、MVVM的认识

### 生命周期的执行顺序

### 父子组件生命周期的执行顺序

### 双向绑定数据的原理

### v-if和v-for的优先级哪个更高，如果同时出现，会有什么问题？

### vue的组件data为什么是返回一个函数，根实例则是一个对象？

### v-for中的key作用是什么？

### 怎么理解vue的diff算法？

### 对vue组件化的理解

### 组件中的通信方式有哪些？

### vue如何扩展现有的组件？

### watch和computed的区别

### nextTick的原理

### vuex的理解

### vue-router的钩子函数有哪些？

### vue的性能优化方法

### vue3.x的特性
