const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // 应用入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'bundle.js' // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配 JavaScript 和 JSX 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 babel-loader 编译 JS/JSX 文件
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // 使用预设配置编译 ES6 和 React 代码
          }
        }
      },
      {
        test: /\.css$/, // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'] // 使用 style-loader 和 css-loader 加载和打包 CSS 文件
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 模板文件路径
      favicon: './public/favicon.ico' // 网站图标
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 静态文件目录
    },
    compress: true, // 启用压缩
    port: 3000, // 服务器端口
    open: true // 开发服务器启动后自动打开浏览器
  },
  resolve: {
    extensions: ['.js', '.jsx'] // 自动解析确定的扩展
  }
};
