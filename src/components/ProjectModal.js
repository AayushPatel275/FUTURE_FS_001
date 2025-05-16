import React from 'react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '15px',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ×
        </button>

        <div style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {project.image}
        </div>

        <h2 style={{
          color: '#2c3e50',
          marginBottom: '1rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>{project.title}</h2>

        <div style={{
          marginBottom: '2rem',
          padding: '1rem',
          background: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '1rem',
            fontSize: '1.3rem'
          }}>Project Overview</h3>
          <p style={{
            color: '#555',
            lineHeight: '1.6',
            fontSize: '1.1rem'
          }}>{project.description}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{
              color: '#3498db',
              marginBottom: '1rem',
              fontSize: '1.3rem'
            }}>Key Features</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {project.features.map((feature, index) => (
                <li key={index} style={{
                  margin: '0.8rem 0',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  color: '#555',
                  fontSize: '1.1rem'
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

          <div>
            <h3 style={{
              color: '#3498db',
              marginBottom: '1rem',
              fontSize: '1.3rem'
            }}>Technical Details</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem'
            }}>
              {project.technologies.map((tech, index) => (
                <span key={index} style={{
                  background: '#e9ecef',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  color: '#2c3e50',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#3498db',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'background-color 0.2s ease'
            }}
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal; 