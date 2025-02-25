import { 
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiGit,
  DiDocker
} from 'react-icons/di';
import {
  SiCplusplus,
  SiKotlin,
  SiSwift,
  SiBlockchaindotcom
} from 'react-icons/si';

export default function Resume() {
  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <img 
                src="/assets/images/ucsb.png" 
                alt="UCSB Logo" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  borderRadius: '50%',
                  backgroundColor: 'white'
                }} 
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '50px' }}>
                  <h4 className="h4 timeline-item-title">University of California, Santa Barbara</h4>
                  <span>2024.09 — 2026.07</span>
                </div>

                <p className="timeline-text">
                  Master of Science, Computer Science
                </p>
              </div>
            </div>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <img 
                src="/assets/images/NJU.png" 
                alt="Nanjing University Logo" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  borderRadius: '10%',
                  backgroundColor: 'white'
                }} 
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '50px' }}>
                  <h4 className="h4 timeline-item-title">Nanjing University</h4>
                  <span>2020.09 — 2024.07</span>
                </div>

                <p className="timeline-text">
                  Bachelor of Science, Computer Science
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
              <img 
                src="/assets/images/LF.png" 
                alt="Linux Foundation Logo" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  borderRadius: '10%',
                  backgroundColor: 'white'
                }} 
              />

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '50px' }}>
                  <h4 className="h4 timeline-item-title">The Linux Foundation</h4>
                  <span>2024.05 — 2024.12</span>
                </div>

                <p className="timeline-text">
                  Software Engineer Intern
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="code-slash-outline"></ion-icon>
          </div>

          <h3 className="h3">Tech Skills</h3>
        </div>

        <div className="skills-list content-card" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '15px',
          padding: '20px'
        }}>
          {[
            { name: 'C++', Icon: SiCplusplus },
            { name: 'Java', Icon: DiJava },
            { name: 'JavaScript', Icon: DiJavascript1 },
            { name: 'Python', Icon: DiPython },
            { name: 'React', Icon: DiReact },
            { name: 'Kotlin', Icon: SiKotlin },
            { name: 'Swift', Icon: SiSwift },
            { name: 'Blockchain', Icon: SiBlockchaindotcom },
            { name: 'Docker', Icon: DiDocker },
            { name: 'Git', Icon: DiGit }
          ].map(({ name, Icon }) => {
            const cardStyle = {
              backgroundColor: 'var(--border-gradient-onyx)',
              borderRadius: '8px',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            };

            const textStyle = {
              fontSize: '14px',
              fontWeight: 'var(--fw-500)',
              color: 'var(--light-gray)'
            };

            return (
              <div key={name} style={cardStyle}>
                <Icon size={24} />
                <span style={textStyle}>{name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
