## 测试

### 介绍

三大类

- 单元测试
- 组件测试
- 端到端测试

### 单元测试

单元测试允许你将独立单元的代码进行隔离测试，其目的是为开发者提供对代码的信心。通过编写细致且有意义的测试，你能够有信心在构建新特性或重构已有代码的同时，保持应用的功能和稳定。

为一个 Vue 应用做单元测试并没有和为其它类型的应用做测试有什么明显的区别。

#### Choosing your Framework

#### Jest

Jest 是一个专注于简易性的 JavaScript 测试框架。一个其独特的功能是可以为测试生成快照 (snapshot)，以提供另一种验证应用单元的方法。

**资料：**

- [Jest 官网](https://jestjs.io/zh-Hans/)
- [Vue CLI 官方插件 - Jest](https://cli.vuejs.org/core-plugins/unit-jest.html)

### 组件测试

测试大多数 Vue 组件时都必须将它们挂载到 DOM (虚拟或真实) 上，才能完全断言它们正在工作。这是另一个与框架无关的概念。因此组件测试框架的诞生，是为了让用户能够以可靠的方式完成这项工作，同时还提供了 Vue 特有的诸如对 Vuex、Vue Router 和其他 Vue 插件的集成的便利性。

#### 选择框架

##### Vue Test Utils

Vue Test Utils 是官方的偏底层的组件测试库，它是为用户提供对 Vue 特定 API 的访问而编写的。如果你对测试 Vue 应用不熟悉，我们建议你使用 Vue Testing Library，它是 Vue Test Utils 的抽象。

**资源：**

- [Vue Test Utils 官方文档](https://vue-test-utils.vuejs.org/)
- [Vue 测试指南](https://lmiller1990.github.io/vue-testing-handbook/zh-CN/) by Lachlan Miller