const Footer = () => {
  return (
    <footer className="footer">
      <p>Contáctanos en nuestras redes sociales:</p>
      <div className="social-icons">
        <a 
          href="https://github.com/Michael-Barboza" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
            alt="GitHub"
          />
        </a>

        <a 
          href="https://www.linkedin.com/in/carlos-michael-barboza-54ba5a61/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            alt="LinkedIn"
          />
        </a>

        <a 
          href="mailto:michaelbarboza7@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/email.png"
            alt="Enviar Email"
          />
        </a>
      </div>
      <p>&copy; 2025 Michael Alexander Barboza. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
