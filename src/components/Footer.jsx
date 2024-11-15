const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <p className="footer-text">©{currentYear} Stoicism Quotes</p>
      </footer>
    </>
  );
};

export default Footer;
