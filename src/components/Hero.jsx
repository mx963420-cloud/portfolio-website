import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">商业分析 · 数据驱动</h1>
          <p className="hero-subtitle">
            通过数据洞察和 BI 可视化，为业务决策提供支持
          </p>
          <p className="hero-description">
            中央财经大学 | 国际经济与贸易专业 | 商业分析实习生
          </p>
          <div className="hero-cta">
            <a href="#capgemini" className="btn btn-primary">查看项目</a>
            <a href="mailto:maruixi2005@163.com" className="btn btn-secondary">联系我</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>2+</h3>
            <p>实习经历</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>数据项目</p>
          </div>
          <div className="stat">
            <h3>90.12</h3>
            <p>GPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
