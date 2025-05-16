import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Pylock - Advanced Password Manager',
    description: 'A secure web application for managing and storing passwords with advanced security features.',
    features: [
      'Secure password storage and retrieval',
      'Password generation with customizable criteria',
      'Two-factor authentication (2FA)',
      'Encrypted data storage',
      'User-friendly interface'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Authentication'],
    link: '#',
    image: '🔐' // Placeholder for project image
  },
  {
    title: 'Chess Game',
    description: 'A sophisticated chess game application that brings the classic game to life with modern features and cross-platform compatibility. The application implements all standard chess rules, including special moves like castling, en passant, and pawn promotion, while providing an intuitive user interface for both beginners and experienced players.',
    features: [
      'Complete implementation of all chess rules and special moves',
      'Real-time game state synchronization',
      'Cross-platform support (Android & iOS)',
      'Intuitive drag-and-drop piece movement',
      'Game state persistence and history tracking',
      'Move validation and legal move highlighting',
      'Game timer and move counter',
      'Multiplayer support with real-time updates',
      'Game replay and analysis features',
      'Customizable board themes and piece designs'
    ],
    technologies: [
      'Java',
      'Flutter',
      'Dart',
      'Android Studio',
      'Firebase Realtime Database',
      'Material Design',
      'State Management',
      'WebSocket',
      'Local Storage'
    ],
    link: '#',
    image: '♟️'
  }
];

function Projects() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
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
      }}>My Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '1rem'
      }}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
