// 引入React库和ReactDOM库，这些是在React应用中创建组件和渲染到DOM所必需的
import React from 'react';
import ReactDOM from 'react-dom/client';

// 引入应用的全局样式文件
import './index.css';

// 引入根组件App
import App from './App';

// 引入reportWebVitals工具，用于监测应用的性能
import reportWebVitals from './reportWebVitals';

// 使用ReactDOM.createRoot渲染App组件到HTML文档中id为'root'的元素
// React.StrictMode是一个用于检查应用中潜在问题的工具，它不会渲染任何实际的UI
// 它为其子组件触发额外的检查和警告，这在开发过程中非常有帮助
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 使用reportWebVitals函数来监测应用的性能指标
// 该函数会将收集到的性能指标输出到控制台，包括如首次内容绘制(FCP)、最大内容绘制(LCP)、累积布局偏移(CLS)等
reportWebVitals(console.log);

// 上述性能指标可以帮助开发者理解应用在实际运行时的表现
// 分析这些指标可以揭示加载性能问题或运行时效率问题，使开发者能够针对性地优化应用

// 想了解更多关于性能指标和如何改进它们的信息，你可以访问以下链接：
// https://web.dev/vitals/
