import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ResearchProject.css';

export default function ResearchProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  const researchProjects = [
    {
      id: 'paper-research',
      title: '跨国供应链效应研究',
      subtitle: '基于QJE论文的深度分析与交互可视化',
      description: '针对Alfaro-Urena等人发表在《Quarterly Journal of Economics》上的论文《The effects of joining multinational supply chains: New evidence from firm-to-firm linkages》进行深度研究。通过构建交互式看板，动态展示不同参数变化对企业加入跨国供应链后的影响。',
      highlights: [
        '独立完成论文结果的深层次研究和验证',
        '设计交互式参数调整系统，展示声誉效应、产能约束、TFP增长等变量的影响',
        '构建动态可视化看板，实时展示不同场景下的经济效应',
        '量化分析供应链加入对企业短期和长期的影响',
        '使用Streamlit框架实现交互式数据展示'
      ],
      metrics: [
        { value: '50+', label: '参数组合' },
        { value: '8+', label: '时间期限' },
        { value: '4', label: '核心指标' },
        { value: '2026.05', label: '完成时间' }
      ],
      link: 'https://minicat.streamlit.app',
      technologies: ['Streamlit', 'Python', 'Data Visualization', 'Economic Analysis', 'Interactive Dashboard']
    },
    {
      id: 'oecd-research',
      title: 'OECD支柱一金额A规则的减免机制研究',
      subtitle: '以中国头部数字企业为例',
      description: 'OECD支柱一金额A规则旨在重新分配跨国数字企业的超额利润。本研究构建了包含MDSH安全港和已缴税抵免的完整计算模型，以腾讯、字节跳动、拼多多、阿里巴巴四家中国头部数字企业为样本进行理论情景分析。',
      highlights: [
        '首次构建包含MDSH安全港和已缴税抵免的完整计算模型',
        '量化分析减免机制对应税利润的实际影响',
        '基于公开数据和合理假设，揭示规则设计中"防止利润转移"与"避免重复征税"的平衡逻辑',
        '明确指出研究的数据局限性和假设条件',
        '进行敏感性分析，识别关键风险变量'
      ],
      metrics: [
        { value: '4', label: '样本企业' },
        { value: '3', label: '情景分析' },
        { value: '5%', label: 'MDSH利润率' },
        { value: '25%', label: '可再分配比例' }
      ],
      findings: {
        finding1: 'MDSH安全港可减少3-10%的应税超额利润，对营销密集型企业保护作用更强',
        finding2: '在已缴海外税充足的假设下，已缴税抵免机制可使企业的净增量税负降至零',
        finding3: '规则通过减免机制在利润转移防止与重复征税避免之间实现了平衡'
      },
      technologies: ['税收分析', '定量模型', '案例研究', '敏感性分析', '国际税收']
    }
  ];

  const entrepreneurshipProjects = [
    {
      id: 'startup-project',
      title: '智汇永生数联慧忆创新团',
      subtitle: '中国大学生创新创业竞赛',
      description: '核心商业模式：通过AI技术和数据分析，为用户提供个性化的数字生命记录和智能回忆服务，解决人们对重要时刻保存、整理和回顾的需求。',
      highlights: [
        '开发完成AI驱动的回忆整理系统',
        '建立用户数据安全保护体系',
        '实现跨平台内容聚合功能',
        '完成初期用户测试和反馈迭代',
        '建立商业合作伙伴关系'
      ],
      metrics: [
        { value: '数亿', label: '预期市场规模' },
        { value: '数百万', label: '目标用户数' },
        { value: '高增长', label: '预期收益' },
        { value: '持续优化', label: '用户留存' }
      ],
      technologies: ['AI技术', '数据分析', '商业模式设计', '财务规划', '文稿撰写']
    }
  ];

  return (
    <section className="research-section" id="research">
      <div className="container">
        <h2 className="section-title">研究与创新</h2>

        {/* 论文研究 */}
        <div className="research-category">
          <h3 className="category-title">📚 学术研究</h3>
          <div className="projects-grid">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="project-card clickable"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-header">
                  <h4>{project.title}</h4>
                  <span className="click-hint">点击查看详情</span>
                </div>
                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-footer">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-btn">
                    查看交互看板 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 创业项目 */}
        <div className="research-category">
          <h3 className="category-title">🚀 创新创业</h3>
          <div className="projects-grid">
            {entrepreneurshipProjects.map((project) => (
              <div
                key={project.id}
                className="project-card clickable"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-header">
                  <h4>{project.title}</h4>
                  <span className="click-hint">点击查看详情</span>
                </div>
                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-description">{project.description}</p>
              </div>
            ))}
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
