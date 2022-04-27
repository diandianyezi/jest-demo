## 指南

https://lmiller1990.github.io/vue-testing-handbook/zh-CN/

### 延伸阅读

- [Official docs](https://vue-test-utils.vuejs.org/)
- [Book](https://www.manning.com/books/testing-vue-js-applications) 另一位作者写的 `vue-test-utils`
- [This awesome course on VueSchool](https://vueschool.io/courses/learn-how-to-test-vuejs-components?friend=vth) 由多位 Vue 核心贡献者编写

### 两种渲染方式

- `mount`
- `shallowMount`：渲染父组件时，子组件应该出现的地方会被替换成`<vuecomponent-stub />`，会渲染常规的html元素，但使用`stub`替换掉Vue组件。

两者都会返回一个wrapper，是一个包含了Vue组件的对象，辅以一些对测试有用的方法。

> 一个stub就是一种替代真实组件的“假的”对象

### 测试Props

用`propsData`设置`props`，可以在`mount` 和 `shallowMount`中使用，常被用于测试从父组件中接受属性(`props`)的组件

```js
const wrapper = shallowMount(Foo, {
  propsData: {
    foo: 'bar'
  }
})
```

