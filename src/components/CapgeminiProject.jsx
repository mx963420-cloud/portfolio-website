import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectCard.css';

export default function CapgeminiProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  const capgeminiCapabilities = [
    {
      id: 'capgemini-bi',
      title: 'BI 数据分析',
      subtitle: '凯捷咨询 · 联想医疗项目',
      icon: '📊',
      description: '使用 FineBI 完成医疗数据处理和可视化分析',
      fullDescription: '在凯捷咨询的商业分析实习中，我使用 FineBI 等专业 BI 工具完成了联想医疗项目的复杂数据处理工作。通过数据清洗、转换和分析，为业务决策提供了数据支持。',
      highlights: [
        'FineBI 数据可视化和仪表板设计',
        '医疗数据清洗和处理',
        '交互式报告和数据展示',
        '商业分析和数据洞察',
        '完成医疗数据的 ETL 处理'
      ],
      metrics: [
        { value: '5+', label: '交互式仪表板' },
        { value: '100%', label: '数据准确率' },
        { value: '8', label: '关键指标' },
        { value: '2026.03', label: '完成时间' }
      ],
      technologies: ['FineBI', 'SQL', 'Excel', '数据分析']
    },
    {
      id: 'capgemini-viz',
      title: '可视化呈现',
      subtitle: '凯捷咨询 · 联想医疗项目',
      icon: '📈',
      description: '设计交互式仪表板，展示关键业务指标',
      fullDescription: '设计并实现了多个交互式数据可视化仪表板，通过直观的图表和动态展示，帮助管理层快速理解复杂的医疗数据。仪表板支持多维度钻取和实时数据更新。',
      highlights: [
        '设计交互式仪表板和数据可视化',
        '多维度数据钻取功能',
        '实时数据更新和监控',
        '关键业务指标展示',
        '用户友好的界面设计'
      ],
      metrics: [
        { value: '5+', label: '仪表板' },
        { value: '20+', label: '可视化图表' },
        { value: '3', label: '维度钻取' },
        { value: '实时', label: '数据更新' }
      ],
      technologies: ['FineBI', '数据可视化', 'React', 'D3.js']
    },
    {
      id: 'capgemini-report',
      title: '报告撰写',
      subtitle: '凯捷咨询 · 联想医疗项目',
      icon: '📄',
      description: '撰写专业的数据分析报告和商业洞察',
      fullDescription: '撰写了多份专业的数据分析报告，清晰阐述数据发现、业务洞察和战略建议。报告结构清晰、数据支撑充分，为管理层的决策提供了有力支持。',
      highlights: [
        '撰写专业的数据分析报告',
        '清晰阐述数据发现和洞察',
        '提供战略建议和行动方案',
        '报告结构清晰、逻辑严密',
        '数据支撑充分、结论有力'
      ],
      metrics: [
        { value: '10+', label: '分析报告' },
        { value: '100+', label: '页数' },
        { value: '50+', label: '数据图表' },
        { value: '高', label: '采纳率' }
      ],
      technologies: ['数据分析', '商业写作', 'PowerPoint', 'Excel']
    },
    {
      id: 'capgemini-web',
      title: '网页制作',
      subtitle: '凯捷咨询 · 联想医疗项目',
      icon: '🌐',
      description: '使用 AI 工具和现代技术构建数据展示平台',
      fullDescription: '使用 AI 工具和现代技术开发了数据展示平台，实现了复杂的交互功能和响应式设计。平台支持实时数据更新、多用户协作和权限管理。',
      highlights: [
        'AI 工具辅助开发',
        '现代技术应用',
        '数据展示平台构建',
        '实时数据更新功能',
        '响应式设计和用户体验优化'
      ],
      metrics: [
        { value: '1', label: '数据平台' },
        { value: '50+', label: '页面' },
        { value: '100+', label: '组件' },
        { value: '高', label: '用户满意度' }
      ],
      links: [
        {
          label: 'PC 端预览',
          url: 'https://readdy.cc/preview/7601bf83-7c72-4999-94f8-cbf195b6be5c/7220050'
        },
        {
          label: '移动端预览',
          url: 'https://readdy.cc/preview/f4ac31fc-7525-4c7d-9b63-d1e1e12fd508/7220539'
        }
      ],
      technologies: ['AI工具', '现代前端技术', 'API集成']
    }
  ];

  return (
    <section id="capgemini" className="project-section">
      <div className="container">
        <h2 className="section-title">凯捷咨询 · 商业分析实习</h2>

        <div className="project-header">
          <div className="project-info">
            <h3>联想医疗项目组</h3>
            <p className="project-period">2026年01月 - 2026年03月</p>
            <p className="project-description">
              在凯捷咨询的商业分析实习中，我参与了联想医疗项目的数据分析工作。
              通过使用 FineBI 等 BI 工具，完成了复杂的医疗数据处理和可视化分析，
              为业务决策提供了数据支持。
            </p>
          </div>
        </div>

        <div className="capabilities-grid">
          {capgeminiCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="capability-card clickable"
              onClick={() => setSelectedProject(capability)}
            >
              <div className="capability-icon">{capability.icon}</div>
              <h4>{capability.title}</h4>
              <p className="capability-description">{capability.description}</p>
              <span className="click-hint">点击查看详情</span>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h4>技术栈</h4>
          <div className="tech-tags">
            <span className="tech-tag">FineBI</span>
            <span className="tech-tag">数据分析</span>
            <span className="tech-tag">可视化</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Excel</span>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
