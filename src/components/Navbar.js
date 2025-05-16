import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold' }}>My Portfolio</div>
      <div>
        <Link to="/" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Projects</Link>
        <Link to="/achievements" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Achievements</Link>
        <Link to="/contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
