import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'BI 工具',
      skills: ['FineBI', 'Power BI', 'Tableau', 'Excel 高级']
    },
    {
      category: '编程语言',
      skills: ['Python', 'SQL']
    },
    {
      category: '数据分析',
      skills: ['数据清洗', '数据可视化', '统计分析', '报告撰写']
    },
    {
      category: '其他技能',
      skills: ['视频剪辑', '图片美化', 'Markdown', '项目管理']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">技能与工具</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>专业能力评估</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>数据分析</span>
                <span className="level">高级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>BI 工具使用</span>
                <span className="level">高级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>前端开发</span>
                <span className="level">中级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>SQL 数据库</span>
                <span className="level">中级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Python 编程</span>
                <span className="level">中级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>报告撰写</span>
                <span className="level">高级</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
