
# Vue记录

## defineProperty 和 proxy 的区别

`Object.defineProperty(target, key, {...})`

`new Proxy(target, handle)`

| 名称 | defineProperty | proxy |
| -- | -- | -- |
| 前沿性 | 老标准 | 新标准 |
| 应用范围 | vue2 | vue3 |
| 兼容性 | >=IE9 | 不兼容IE |
| 劫持 | 对象上的属性 | 对象本身 |
| 响应式 | 无法对数组的变动和新增属性进行响应，需要用到$set特殊处理，给其重新增加observe观测 | 观测类型丰富 |
| -- | -- | -- |