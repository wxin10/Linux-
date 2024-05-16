import React from 'react';
import './Footer.css'; // 假设有一个CSS文件用于Footer的样式

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">关于我们</h5>
            <p>
              我们是一家致力于提供优质在线教育资源的平台，帮助学生随时随地获取知识。
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">联系我们</h5>
            <p>
              Email: support@onlineedu.com<br />
              电话: 123-456-7890
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 在线教育平台. 保留所有权利.
      </div>
    </footer>
  );
}

export default Footer;
