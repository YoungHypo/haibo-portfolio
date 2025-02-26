import { 
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiDocker,
  DiRuby,
  DiMysql,

} from 'react-icons/di';
import {
  SiCplusplus,
  SiKotlin,
  SiSwift,
  SiDjango,
  SiSolidity,
  SiTensorflow,
  SiRuby,
  SiSpringboot,
  SiPytorch
} from 'react-icons/si';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="about-text">
        <p>
          I am a <strong>Master&apos;s student in Computer Science</strong> 🎓 at the University of California, Santa Barbara 🌴, specializing in <strong>full-stack</strong> 💻, <strong>mobile application</strong> 📱, <strong>AI</strong> 🤖, and <strong>blockchain</strong> ⛓️. I am passionate about creating value through technology and firmly believe in the power of software to change the world 🌍.
        </p>
        <p>
          I aspire to become a <strong>software engineer</strong> 👨‍💻 and join an innovative team to build impactful products ✨ that bring positive change to users worldwide 🚀.
        </p>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <Image 
                src="/assets/images/ucsb.png" 
                alt="UCSB Logo" 
                width={50}
                height={50}
                style={{ 
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
              <Image 
                src="/assets/images/NJU.png" 
                alt="Nanjing University Logo" 
                width={50}
                height={50}
                style={{ 
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
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
              <Image 
                src="/assets/images/LF.png" 
                alt="Linux Foundation Logo" 
                width={50}
                height={50}
                style={{ 
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
          <h3 className="h3">Tech Skills</h3>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '15px',
          marginTop: '-15px',
          marginLeft: '-5px',
          marginRight: '40px'
        }}>
          {[
            { name: 'C++', Icon: SiCplusplus },
            { name: 'Python', Icon: DiPython },
            { name: 'Java', Icon: DiJava },
            { name: 'JavaScript', Icon: DiJavascript1 },
            { name: 'Swift', Icon: SiSwift },
            { name: 'Kotlin', Icon: SiKotlin },
            { name: 'Ruby', Icon: DiRuby },
            { name: 'Solidity', Icon: SiSolidity },
            { name: 'React', Icon: DiReact },
            { name: 'MySQL', Icon: DiMysql },
            { name: 'SpringBoot', Icon: SiSpringboot },
            { name: 'Django', Icon: SiDjango },
            { name: 'Docker', Icon: DiDocker },
            { name: 'TensorFlow', Icon: SiTensorflow },
            { name: 'Pytorch', Icon: SiPytorch },
            { name: 'Rails', Icon: SiRuby }
          ].map(({ name, Icon }) => {
            const cardStyle = {
              backgroundColor: 'var(--border-gradient-onyx)',
              borderRadius: '8px',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              gap: '5px',
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
