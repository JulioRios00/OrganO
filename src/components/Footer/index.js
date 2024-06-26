import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="icons">
        <div className="singleIcon">
          <a href="facebook.com" target="_blank">
            <img src="/imgs/fb.png" alt="Facebook" />
          </a>
        </div>
        <div className="singleIcon">
          <a href="twitter.com" target="_blank">
            <img src="/imgs/tw.png" alt="Twitter" />
          </a>
        </div>
        <div className="singleIcon">
          <a href="instagram.com" target="_blank">
            <img src="/imgs/ig.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <div>
        <img src="/imgs/logo.png" alt="" />
      </div>
      <div>
        <p>Desenvolvido por Julio Rios</p>
        </div>
    </footer>
  );
};

export default Footer;
