
# css知识点记录

[css动画](./css-animate)

## 文本溢出隐藏

:::danger 注意事项
不管单行还是多行都需要控制容器宽度
:::

- 单行文本溢出隐藏

```css
.demo {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

- 多行文本溢出隐藏

```css
.demo {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## ios 安全区域适配

```css
.demo {
  padding-top: calc(constant(safe-area-inset-top));
  padding-top: calc(env(safe-area-inset-top));
  
  padding-bottom: calc(110px + 25px + constant(safe-area-inset-bottom));
  padding-bottom: calc(110px + 25px + env(safe-area-inset-bottom));
}
```

## 三角绘制

> red对应的是三角形的底边

```css
.demo {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px;
  border-color: red transparent transparent transparent;
}

```

## ios 设备滚动优化

> 启动硬件加速，使滑动流畅

```css
.scroll-demo {
  webkit-overflow-scrolling: touch;
}
```