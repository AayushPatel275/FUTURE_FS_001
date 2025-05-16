import { useState } from 'react';

function About() {
  const [activeSection, setActiveSection] = useState('bio');

  const sections = {
    bio: {
      title: 'About Me',
      content: (
        <div className="section-content">
          <p>Hi! I'm Aayush Patel, a passionate web developer and tech enthusiast. I love creating beautiful and functional web applications that make a difference.</p>
          <p>Currently pursuing my B.Tech degree at CHARUSAT University, I'm constantly learning and exploring new technologies to enhance my skills.</p>
        </div>
      )
    },
    skills: {
      title: 'Skills',
      content: (
        <div className="section-content">
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend</h4>
              <ul>
                <li>JavaScript / React.js</li>
                <li>HTML / CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    education: {
      title: 'Education',
      content: (
        <div className="section-content">
          <div className="education-card">
            <h3>B.Tech in Computer Science</h3>
            <p>CHARUSAT University</p>
            <p>Currently Pursuing</p>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Experience',
      content: (
        <div className="section-content">
          <div className="experience-card">
            <h3>Intern</h3>
            <p>FutureInterns</p>
            <p>Working on exciting projects and gaining hands-on experience in web development.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>About Me</h2>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              padding: '0.8rem 1.5rem',
              border: 'none',
              borderRadius: '25px',
              backgroundColor: activeSection === key ? '#3498db' : '#e9ecef',
              color: activeSection === key ? 'white' : '#2c3e50',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              ':hover': {
                backgroundColor: '#2980b9'
              }
            }}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: '1.5rem',
          fontSize: '1.8rem'
        }}>{sections[activeSection].title}</h3>
        {sections[activeSection].content}
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .skill-card h4 {
          color: #3498db;
          margin-bottom: 1rem;
        }
        .skill-card ul {
          list-style: none;
          padding: 0;
        }
        .skill-card li {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }
        .skill-card li:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #3498db;
        }
        .education-card, .experience-card {
          background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .education-card h3, .experience-card h3 {
          color: #3498db;
          margin-bottom: 0.5rem;
        }
        .section-content {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default About;
