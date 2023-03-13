
# 使用教程

## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

:tada: :100:

## 页面目录

[[toc]]

## 特殊提示

### 默认标题

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## 代码块指定行高亮

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{2-4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,3-4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 导入代码片段

<strong>全部导入</strong>

<<< @/test.js

<strong>导入片段A</strong>

<<< @/test.js#snippetA

<strong>导入片段B</strong>

<<< @/test.js#snippetB

## 图片引入

![An image](/logo.jpg)

## vue语法使用

<strong>input</strong>

```md
{{ 1 + 1 }}
```

<strong>output</strong>

{{ 1 + 1 }}

## side侧边栏展开或者收起

```js
export default {
  ...,
  themeConfig: {
     sidebar: [
      {
        text: 'side1',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'side1',
            link: '/side1'
          },
          {
            text: 'side1-2',
            link: '/side1-2'
          }
        ]
      }
    ],
  }
}
```

## nav列表增加选择项

```js
export default {
  ...,
  themeConfig: {
    nav: [
       {
        text: 'guide2',
        items: [
          {
            text: 'guide2-1',
            link: '/guide2',
          }
        ]
      }
    ]
  }
}
```




