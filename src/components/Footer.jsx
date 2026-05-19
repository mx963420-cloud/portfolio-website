import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>马瑞浠</h4>
            <p>商业分析 | 数据驱动</p>
          </div>

          <div className="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#home">首页</a></li>
              <li><a href="#capgemini">凯捷咨询</a></li>
              <li><a href="#chinatrade">中国贸易报</a></li>
              <li><a href="#skills">技能</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>联系方式</h4>
            <ul>
              <li><a href="mailto:maruixi2005@163.com">📧 邮箱</a></li>
              <li><a href="tel:18081212576">📱 电话</a></li>
              <li>📍 北京</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 马瑞浠. 保留所有权利。</p>
          <p>使用 React + Vite 构建</p>
        </div>
      </div>
    </footer>
  );
}
