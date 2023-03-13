
# Ts记录

## 元组 []

```ts
let x: [string, number];
x = ['hello', 10]
```

## 接口 interface

> 类型约束

```ts
interface Point {
  x: number
  y: string
}
let point1: Point = {x: 10, y: '11'}
```

## 泛型 (T)

T为自定义变量

```ts
function test<T>(arg: T):T {
  return arg
}
test(1) // 1
test('1') // '1'
```

## 交叉类型 (&)

```ts
interface A {
  x: number
}
interface B {
  y: string
}
type C = A & B

const demo: C = {
  x: 1,
  y: '1'
}
```

## 联合类型 (|)

```ts
let x = string  | number | null

x = '1'
x = 1
x = null

```

## 符号介绍

| -- | -- | -- |
| -- | -- | -- |
| z?: number | z表示可选参数 | -- |
