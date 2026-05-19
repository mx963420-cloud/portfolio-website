import './ProjectCard.css';

export default function ChinaTradeProject() {
  const achievements = [
    {
      title: '数据处理',
      value: '50+',
      description: '处理 50+ 个国家/地区的贸易展览数据'
    },
    {
      title: '系统搭建',
      value: '1',
      description: '搭建全球贸易展览信息系统'
    },
    {
      title: '数据清洗',
      value: '100%',
      description: '完成原始数据的清洗和标准化'
    },
    {
      title: '报告撰写',
      value: '10+',
      description: '撰写行业调研报告和数据分析'
    }
  ];

  return (
    <section id="chinatrade" className="project-section">
      <div className="container">
        <h2 className="section-title">中国贸易报 · 数据处理实习</h2>

        <div className="project-header">
          <div className="project-info">
            <h3>全球贸易展览系统搭建</h3>
            <p className="project-period">2025年02月 - 2025年04月</p>
            <p className="project-description">
              在中国贸易报的实习中，我主要负责处理大量原始贸易数据，
              协助搭建全球贸易展览信息系统。通过数据清洗、标准化和分析，
              为行业研究和商业决策提供了数据基础。
            </p>
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-value">{item.value}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="project-details">
          <div className="detail-section">
            <h4>主要工作</h4>
            <ul>
              <li>收集和整理全球贸易展览数据</li>
              <li>使用 Excel 进行数据清洗和处理</li>
              <li>建立数据标准化流程</li>
              <li>参与行业调研和数据分析</li>
              <li>撰写贸易政策分析报告</li>
            </ul>
          </div>

          <div className="detail-section">
            <h4>技术应用</h4>
            <ul>
              <li>Excel 高级数据处理（VLOOKUP、数据透视表等）</li>
              <li>SQL 数据查询和处理</li>
              <li>Python 数据分析脚本</li>
              <li>数据库设计和管理</li>
              <li>数据可视化和报告制作</li>
            </ul>
          </div>
        </div>

        <div className="data-coverage">
          <h4>数据覆盖范围</h4>
          <div className="regions">
            <span className="region">非洲</span>
            <span className="region">亚洲</span>
            <span className="region">美国</span>
            <span className="region">欧洲</span>
            <span className="region">中东</span>
            <span className="region">拉美</span>
          </div>
        </div>

        <div className="tech-stack">
          <h4>技术栈</h4>
          <div className="tech-tags">
            <span className="tech-tag">Excel</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">数据清洗</span>
            <span className="tech-tag">数据分析</span>
            <span className="tech-tag">报告撰写</span>
          </div>
        </div>
      </div>
    </section>
  );
}
