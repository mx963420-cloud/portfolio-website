import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <h1>马瑞浠</h1>
          <p>商业分析 | 数据驱动</p>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>首页</a></li>
          <li><a onClick={() => scrollToSection('capgemini')}>凯捷咨询</a></li>
          <li><a onClick={() => scrollToSection('chinatrade')}>中国贸易报</a></li>
          <li><a onClick={() => scrollToSection('research')}>研究与创新</a></li>
          <li><a onClick={() => scrollToSection('skills')}>技能</a></li>
          <li><a onClick={() => scrollToSection('about')}>关于我</a></li>
          <li><a href="mailto:maruixi2005@163.com" className="contact-btn">联系我</a></li>
        </ul>
      </div>
    </nav>
  );
}
