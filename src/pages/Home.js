import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        padding: '2rem'
      }}>
        {/* Profile Image Section */}
        <div style={{
          textAlign: 'center',
          order: window.innerWidth < 768 ? 1 : 0 // Stack image on top for mobile
        }}>
          <div style={{
            width: 'min(300px, 80vw)', // Responsive width
            height: 'min(300px, 80vw)', // Responsive height
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto',
            border: '5px solid #3498db',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative'
          }}>
            <img 
              src="/profile-image.jpg" 
              alt="Aayush Patel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300?text=Aayush+Patel';
              }}
            />
          </div>
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://www.linkedin.com/in/aayush-patel-b24207216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#3498db',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                transition: 'background-color 0.2s ease',
                ':hover': {
                  backgroundColor: 'rgba(52, 152, 219, 0.1)'
                }
              }}
            >
              <span>📱</span> LinkedIn
            </a>
            <a 
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#3498db',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                transition: 'background-color 0.2s ease',
                ':hover': {
                  backgroundColor: 'rgba(52, 152, 219, 0.1)'
                }
              }}
            >
              <span>💻</span> GitHub
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div style={{
          order: window.innerWidth < 768 ? 0 : 1 // Stack content below image for mobile
        }}>
          <h1 style={{
            color: '#2c3e50',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', // Responsive font size
            marginBottom: '1rem',
            fontWeight: 'bold',
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            Hi, I'm Aayush Patel
          </h1>
          
          <h2 style={{
            color: '#3498db',
            fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', // Responsive font size
            marginBottom: '1.5rem',
            fontWeight: '500',
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            Web Developer & Tech Enthusiast
          </h2>

          <p style={{
            color: '#555',
            fontSize: 'clamp(1rem, 3vw, 1.1rem)', // Responsive font size
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            I'm a passionate web developer currently pursuing my B.Tech degree at CHARUSAT University. 
            I love creating beautiful and functional web applications that make a difference.
          </p>

          <p style={{
            color: '#555',
            fontSize: 'clamp(1rem, 3vw, 1.1rem)', // Responsive font size
            lineHeight: '1.6',
            marginBottom: '2rem',
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            With expertise in modern web technologies and a keen eye for design, 
            I strive to build applications that are both powerful and user-friendly.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/projects"
              style={{
                padding: '0.8rem 1.5rem',
                background: '#3498db',
                color: 'white',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              style={{
                padding: '0.8rem 1.5rem',
                background: 'white',
                color: '#3498db',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                border: '2px solid #3498db',
                transition: 'all 0.2s ease',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .profile-section {
            order: 1;
          }
          .about-section {
            order: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
