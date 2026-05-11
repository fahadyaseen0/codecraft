export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h4>CodeCraft</h4>
          <p>Modern POS, E-commerce & custom software made with care.</p>
        </div>
        <div className="footer-columns">
          <div>
            <h5>Products</h5>
            <ul>
              <li>CodeCraft POS Suite</li>
              <li>CodeCraft Commerce</li>
              <li>Custom Dashboards</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>WhatsApp: +92-XXX-XXXXXXX</li>
              <li>Email: hello@codecraft.com (change karo)</li>
              <li>Based in Pakistan • Working Worldwide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} CodeCraft. All rights reserved.
      </div>
    </footer>
  );
}
