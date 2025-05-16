function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
      <div>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</div>
      <div style={{ marginTop: '0.5rem' }}>
        {/* Add your social links here */}
        <a href="#" style={{ color: '#fff', margin: '0 0.5rem' }}>LinkedIn</a>
        <a href="#" style={{ color: '#fff', margin: '0 0.5rem' }}>GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
