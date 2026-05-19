import './About.css';

export default function About() {
  const education = [
    {
      school: '中央财经大学',
      major: '国际经济与贸易（金融风险管理）',
      period: '2023年09月 - 2027年06月',
      gpa: 'GPA: 90.12/100',
      location: '北京'
    }
  ];

  const experiences = [
    {
      company: '凯捷咨询',
      position: '商业分析实习生',
      period: '2026年01月 - 2026年03月',
      location: '北京',
      description: '联想医疗项目组，使用 FineBI 完成医疗数据分析和可视化'
    },
    {
      company: '中国贸易报',
      position: '数据分析实习生',
      period: '2025年02月 - 2025年04月',
      location: '北京',
      description: '全球贸易展览系统搭建，处理 50+ 国家贸易数据'
    },
    {
      company: '华夏银行北京分行',
      position: '大堂经理实习',
      period: '2025年01月 - 2025年02月',
      location: '北京',
      description: '客户服务和业务流程管理'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">关于我</h2>

        <div className="about-content">
          <div className="about-intro">
            <h3>个人简介</h3>
            <p>
              我是一名来自中央财经大学的商业分析专业学生，
              专注于数据分析、BI 工具应用和商业洞察。
            </p>
            <p>
              通过在凯捷咨询和中国贸易报的实习经历，
              我积累了丰富的数据处理、分析和可视化经验。
              我相信数据驱动的决策能够为业务创造价值。
            </p>
            <p>
              我具备扎实的数据分析基础、BI 工具应用能力和前端开发技能，
              能够从数据中提取洞察，并通过可视化和报告有效传达信息。
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h4>3</h4>
              <p>实习经历</p>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <p>数据项目</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>国家数据处理</p>
            </div>
            <div className="stat-item">
              <h4>90.12</h4>
              <p>GPA</p>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h3>教育背景</h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-header">
                  <h4>{edu.school}</h4>
                  <span className="location">{edu.location}</span>
                </div>
                <p className="major">{edu.major}</p>
                <p className="period">{edu.period}</p>
                <p className="gpa">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3>实习经历</h3>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <h4>{exp.company}</h4>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="position">{exp.position}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h3>联系方式</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <p className="label">邮箱</p>
                <a href="mailto:maruixi2005@163.com">maruixi2005@163.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <div>
                <p className="label">电话</p>
                <p>18081212576</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <p className="label">位置</p>
                <p>北京</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
