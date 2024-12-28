const Footer = () => {

  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; 2025 UtopiaTour. All rights reserved.</p>
      <nav>
        <a href="/about" style={{ color: '#fff', margin: '0 1rem' }}>About</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 1rem' }}>Contact</a>
        <a href="/privacy" style={{ color: '#fff', margin: '0 1rem' }}>Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;