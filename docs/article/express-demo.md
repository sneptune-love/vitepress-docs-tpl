


## 灵活配置系统服务端框架流程

`项目开发和部署`
- 本地开发：本地安装nodemon，通过其来运行服务
- 线上发布：执行脚本文件（连接服务器->进入指定目录->拉取git->pm2重启项目服务）

`项目使用框架`
- express：服务端Node.js框架
- compression：对响应进行压缩，减少响应大小
- log4js：访问日志，应用日志，sql日志
- body-parser：解析请求体，可将json格式、URL-encoded数据解析成js对象，并放在req.body中
- serveStatic：静态资源目录
- moment：时间格式转换
- sequelize：用于Node.js的ORM（对象关系映射）框架，它允许开发人员使用JavaScript来操作关系型数据库。ORM框架可以将应用程序中的对象和关系型数据库之间的映射进行自动化，使开发人员能够使用面向对象的方式操作数据库，而无需直接使用SQL查询语言
- redis：高性能的键值存储系统，一般用作数据缓存，提升响应速度
- bluebird
  - 提供更快的 Promise 实现：bluebird 提供了一个比原生 Promise 更快的实现，它可以提高代码的性能和响应速度。
  - 可以通过 Promise.promisify 和 Promise.promisifyAll 方法将回调风格的异步函数转换为 Promise 形式，使代码更易于理解和维护。
  - 提供更丰富的 Promise 方法：bluebird 提供了许多原生 Promise 不支持的方法，如 Promise.map、Promise.reduce、Promise.props 等，这些方法可以更轻松地处理异步操作。
  - 支持取消：bluebird 允许通过 Promise.cancel() 方法取消一个 Promise，从而可以更好地控制异步操作的执行。
  - 支持链式调用：bluebird 允许在 Promise 上链式调用方法，使代码更加简洁和易于理解。
  - 提供更好的错误处理：bluebird 提供了一些有用的错误处理方法，如 Promise.catch 和 Promise.finally，可以更好地处理异步操作中的错误和清理操作。
- node-schedule：是一个基于 Node.js 的定时任务调度模块，它可以让开发人员非常方便地执行定期或延迟执行的任务。以下是 node-schedule 的一些主要功能
  - 支持各种调度规则：node-schedule 支持多种不同的调度规则，如每天的特定时间、每周的特定时间、每月的特定日期等等。开发人员可以根据自己的需要选择适合的规则来调度任务
  - 灵活的时间表达式：node-schedule 允许使用类似 cron 的时间表达式来定义调度规则，这使得开发人员可以非常灵活地定义任务的执行时间
  - 支持延迟执行：除了按计划执行任务之外，node-schedule 还可以延迟执行任务。这对于需要在一定时间后执行的任务非常有用，例如延迟发送电子邮件或延迟执行数据清理操作
  - 事件驱动的 API：node-schedule 的 API 是事件驱动的，这意味着开发人员可以监听各种事件（如任务开始、任务结束、任务错误等等），以便在必要时采取适当的措施
  - 支持任务取消：node-schedule 允许取消已经调度的任务，这对于需要在特定条件下停止任务执行的情况非常有用

## 埋点系统

`项目开发和部署`
- 本地开发：本地安装nodemon，通过其来运行服务
- 线上发布：执行脚本文件（连接服务器->进入指定目录->拉取git->pm2重启项目服务）

`项目使用框架`
- koa：服务端Node.js框架
- koa-static：静态资源