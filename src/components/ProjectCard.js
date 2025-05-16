import { useState } from 'react';
import ProjectModal from './ProjectModal';

function ProjectCard({ title, description, features, technologies, link, image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={{
        border: '1px solid #e1e4e8',
        borderRadius: '12px',
        padding: '1.5rem',
        background: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease-in-out',
        ':hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <div style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {image}
        </div>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>{title}</h3>
        
        <p style={{
          color: '#666',
          marginBottom: '1.5rem',
          lineHeight: '1.6'
        }}>{description}</p>

        {features && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{
              color: '#3498db',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>Key Features:</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {features.map((feature, index) => (
                <li key={index} style={{
                  margin: '0.5rem 0',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  color: '#555'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#3498db'
                  }}>▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technologies && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{
              color: '#3498db',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>Technologies:</h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {technologies.map((tech, index) => (
                <span key={index} style={{
                  background: '#e9ecef',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  color: '#2c3e50'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setShowModal(true)}
          style={{
            display: 'inline-block',
            background: '#3498db',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            ':hover': {
              background: '#2980b9'
            }
          }}
        >
          View Project
        </button>
      </div>

      {showModal && (
        <ProjectModal
          project={{ title, description, features, technologies, link, image }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ProjectCard;
