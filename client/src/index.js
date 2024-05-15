// 引入React库和ReactDOM库，这些是在React应用中创建组件和渲染到DOM所必需的
import React from 'react';
import ReactDOM from 'react-dom';

// 引入应用的全局样式文件
import './index.css';

// 引入根组件App
import App from './App';

// 引入reportWebVitals工具，用于监测应用的性能
import reportWebVitals from './reportWebVitals';

// 使用ReactDOM渲染App组件到HTML文档中id为'root'的元素
// React.StrictMode是一个用于检查应用中潜在问题的工具，它不会渲染任何实际的UI
// 它为其子组件触发额外的检查和警告，这在开发过程中非常有帮助
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 使用reportWebVitals函数来监测应用的性能指标
// 这个函数默认情况下不做任何操作，除非你向它提供一个函数作为参数
// 下面的代码将console.log作为参数传递给reportWebVitals，这意味着所有的性能指标都会被打印到控制台
// 这包括了如首次内容绘制(FCP)、最大内容绘制(LCP)、累积布局偏移(CLS)等指标
reportWebVitals(console.log);

// 上述性能指标可以帮助开发者理解应用在实际运行时的表现
// 分析这些指标可以揭示加载性能问题或运行时效率问题，使开发者能够针对性地优化应用

// 想了解更多关于性能指标和如何改进它们的信息，你可以访问以下链接：
// https://web.dev/vitals/
