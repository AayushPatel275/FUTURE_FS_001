import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission not yet implemented)');
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
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
      }}>Contact Me</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
          }}>Get in Touch</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>Email</h4>
            <a 
              href="mailto:paayush275@gmail.com"
              style={{
                color: '#3498db',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>📧</span> paayush275@gmail.com
            </a>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>Location</h4>
            <p style={{ color: '#666' }}>Gujarat, India</p>
          </div>

          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>Social Links</h4>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="https://www.linkedin.com/in/aayush-patel-b24207216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#3498db',
                  textDecoration: 'none'
                }}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#3498db',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
          }}>Send a Message</h3>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div>
              <label 
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50'
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #e1e4e8',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50'
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #e1e4e8',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50'
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #e1e4e8',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  minHeight: '150px',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit"
              style={{
                background: '#3498db',
                color: 'white',
                padding: '1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                ':hover': {
                  background: '#2980b9'
                }
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
