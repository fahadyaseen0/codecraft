import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      {/* Portfolio Hero Section */}
      <section className="portfolio-hero">
        {/* 3D Coding Elements Background */}
        <div className="code-bg">
          <div className="code-line code-line-1">
            <span className="code-keyword">const</span> <span className="code-variable">project</span> = <span className="code-bracket">{'{'}</span>
          </div>
          <div className="code-line code-line-2">
            &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">CodeCraft</span>,
          </div>
          <div className="code-line code-line-3">
            &nbsp;&nbsp;<span className="code-property">stack</span>: [<span className="code-string">MERN</span>, <span className="code-string">Next.js</span>],
          </div>
          <div className="code-line code-line-4">
            &nbsp;&nbsp;<span className="code-property">quality</span>: <span className="code-string">Premium</span>
          </div>
          <div className="code-line code-line-5">
            <span className="code-bracket">{'}'}</span>
          </div>
        </div>

        {/* 3D Floating Icons */}
        <div className="floating-icons">
          <div className="icon-3d icon-code">&lt;/&gt;</div>
          <div className="icon-3d icon-brackets">{'{}'}</div>
          <div className="icon-3d icon-terminal">$_</div>
          <div className="icon-3d icon-react">⚛</div>
          <div className="icon-3d icon-node">◉</div>
        </div>

        <div className="container">
          <div className="portfolio-hero-content">
            <div className="code-badge">
              <span className="code-dot"></span>
              <span>&lt;Portfolio /&gt;</span>
            </div>
            <h1 className="portfolio-hero-title">
              Our <span className="gradient-text">Code</span> Speaks for Itself
            </h1>
            <p className="portfolio-hero-subtitle">
              From scalable MERN applications to lightning-fast Next.js websites,
              we have delivered 50+ projects that combine cutting-edge technology
              with pixel-perfect design. Every line of code is crafted with precision,
              every interface designed for delight.
            </p>
            <div className="portfolio-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Featured Work</div>
            <h2 className="section-title">Our Most Impactful Projects</h2>
            <p className="section-subtitle">
              Showcasing enterprise-grade solutions that have transformed businesses
              and delighted users across Pakistan.
            </p>
          </div>

          <div className="featured-grid">
            {/* Project 1 */}
            <div className="featured-project">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-browser">
                    <div className="browser-bar">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="browser-content">
                      <div className="project-icon">🏪</div>
                      <h4>POS System</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">Enterprise Solution</div>
                <h3>Multi-Branch Retail POS & Inventory</h3>
                <p>
                  Complete point-of-sale system with real-time inventory synchronization
                  across multiple branches. Features include billing, stock management,
                  financial reports, user roles, and cloud backups. Serving 20+ retail
                  stores with 99.9% uptime.
                </p>
                <div className="tech-stack">
                  <span className="tech-badge tech-mongodb">MongoDB</span>
                  <span className="tech-badge tech-express">Express.js</span>
                  <span className="tech-badge tech-react">React</span>
                  <span className="tech-badge tech-node">Node.js</span>
                </div>
                <div className="project-features">
                  <div className="feature">✓ Multi-branch sync</div>
                  <div className="feature">✓ Real-time inventory</div>
                  <div className="feature">✓ Financial reports</div>
                  <div className="feature">✓ Cloud-based</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="featured-project featured-project-reverse">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-browser">
                    <div className="browser-bar">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="browser-content">
                      <div className="project-icon">🛍️</div>
                      <h4>E-Commerce</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">E-Commerce Platform</div>
                <h3>Premium Fashion E-Commerce Store</h3>
                <p>
                  High-performance Next.js e-commerce platform with advanced product
                  filtering, wishlist, cart, order tracking, payment gateway integration,
                  and comprehensive admin dashboard. Optimized for SEO and mobile conversions.
                </p>
                <div className="tech-stack">
                  <span className="tech-badge tech-nextjs">Next.js</span>
                  <span className="tech-badge tech-tailwind">Tailwind CSS</span>
                  <span className="tech-badge tech-mongodb">MongoDB</span>
                  <span className="tech-badge tech-stripe">Stripe</span>
                </div>
                <div className="project-features">
                  <div className="feature">✓ SEO Optimized</div>
                  <div className="feature">✓ Payment Gateway</div>
                  <div className="feature">✓ Admin Panel</div>
                  <div className="feature">✓ Order Tracking</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="featured-project">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-browser">
                    <div className="browser-bar">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="browser-content">
                      <div className="project-icon">💼</div>
                      <h4>3D Portfolio</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">Interactive Portfolio</div>
                <h3>3D Interactive Designer Portfolio</h3>
                <p>
                  Immersive 3D portfolio website with Three.js, featuring scroll-based
                  animations, interactive 3D models, smooth transitions, and dynamic
                  project showcases. Built to leave a lasting impression.
                </p>
                <div className="tech-stack">
                  <span className="tech-badge tech-react">React</span>
                  <span className="tech-badge tech-threejs">Three.js</span>
                  <span className="tech-badge tech-gsap">GSAP</span>
                  <span className="tech-badge tech-tailwind">Tailwind</span>
                </div>
                <div className="project-features">
                  <div className="feature">✓ 3D Animations</div>
                  <div className="feature">✓ Scroll Effects</div>
                  <div className="feature">✓ Interactive UI</div>
                  <div className="feature">✓ Mobile Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section all-projects">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center'}}>
            <div className="section-kicker">Complete Portfolio</div>
            <h2 className="section-title">More Projects We are Proud Of</h2>
            <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '700px'}}>
              From small businesses to enterprise solutions, each project is a testament
              to our commitment to quality, innovation, and client success.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-card-icon">📱</div>
              <h3>Restaurant Management System</h3>
              <p>
                Complete restaurant management with table booking, order management,
                kitchen display, billing, and inventory tracking.
              </p>
              <div className="chip-row">
                <span className="chip">MERN</span>
                <span className="chip">Real-time</span>
                <span className="chip">Cloud</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-card-icon">🏥</div>
              <h3>Hospital Management Portal</h3>
              <p>
                Patient records, appointment scheduling, doctor management, billing,
                and prescription tracking for healthcare facilities.
              </p>
              <div className="chip-row">
                <span className="chip">Node.js</span>
                <span className="chip">MySQL</span>
                <span className="chip">Secure</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-card-icon">🎓</div>
              <h3>School Management System</h3>
              <p>
                Student enrollment, attendance tracking, fee management, grade reports,
                and parent-teacher communication portal.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">MongoDB</span>
                <span className="chip">Reports</span>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="project-card">
              <div className="project-card-icon">📊</div>
              <h3>Business Analytics Dashboard</h3>
              <p>
                Real-time business intelligence dashboard with interactive charts,
                KPI tracking, data visualization, and export capabilities.
              </p>
              <div className="chip-row">
                <span className="chip">Chart.js</span>
                <span className="chip">D3.js</span>
                <span className="chip">API</span>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="project-card">
              <div className="project-card-icon">🏢</div>
              <h3>Corporate Website</h3>
              <p>
                Professional corporate website with CMS, blog system, contact forms,
                career portal, and SEO optimization.
              </p>
              <div className="chip-row">
                <span className="chip">Next.js</span>
                <span className="chip">SEO</span>
                <span className="chip">CMS</span>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="project-card">
              <div className="project-card-icon">💳</div>
              <h3>Payment Integration Platform</h3>
              <p>
                Secure payment gateway integration with multiple providers, transaction
                tracking, and automated reconciliation.
              </p>
              <div className="chip-row">
                <span className="chip">Stripe</span>
                <span className="chip">PayPal</span>
                <span className="chip">Secure</span>
              </div>
            </div>

            {/* Project Card 7 */}
            <div className="project-card">
              <div className="project-card-icon">📦</div>
              <h3>Warehouse Management</h3>
              <p>
                Inventory tracking, order fulfillment, barcode scanning, stock alerts,
                and supplier management system.
              </p>
              <div className="chip-row">
                <span className="chip">MERN</span>
                <span className="chip">Barcode</span>
                <span className="chip">Alerts</span>
              </div>
            </div>

            {/* Project Card 8 */}
            <div className="project-card">
              <div className="project-card-icon">🎨</div>
              <h3>Creative Agency Portfolio</h3>
              <p>
                Stunning portfolio website with animations, case studies, team showcase,
                and project galleries for creative agency.
              </p>
              <div className="chip-row">
                <span className="chip">GSAP</span>
                <span className="chip">Framer</span>
                <span className="chip">Animated</span>
              </div>
            </div>

            {/* Project Card 9 */}
            <div className="project-card">
              <div className="project-card-icon">🚗</div>
              <h3>Car Rental Platform</h3>
              <p>
                Complete car rental system with booking, availability checking,
                pricing calculator, and customer management.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">Booking</span>
                <span className="chip">Payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section tech-stack-section">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center'}}>
            <div className="section-kicker">Technologies We Master</div>
            <h2 className="section-title">Built with Modern Tech Stack</h2>
            <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '650px'}}>
              We leverage cutting-edge technologies to build fast, scalable, and
              maintainable applications that stand the test of time.
            </p>
          </div>

          <div className="tech-categories">
            {/* Frontend */}
            <div className="tech-category">
              <h3 className="tech-category-title">
                <span className="tech-icon">🎨</span>
                Frontend Development
              </h3>
              <div className="tech-items">
                <div className="tech-item tech-react">
                  <div className="tech-symbol">⚛</div>
                  <div className="tech-name">React.js</div>
                </div>
                <div className="tech-item tech-nextjs">
                  <div className="tech-symbol">▲</div>
                  <div className="tech-name">Next.js</div>
                </div>
                <div className="tech-item tech-javascript">
                  <div className="tech-symbol">JS</div>
                  <div className="tech-name">JavaScript</div>
                </div>
                <div className="tech-item tech-typescript">
                  <div className="tech-symbol">TS</div>
                  <div className="tech-name">TypeScript</div>
                </div>
                <div className="tech-item tech-tailwind">
                  <div className="tech-symbol">🎨</div>
                  <div className="tech-name">Tailwind</div>
                </div>
                <div className="tech-item tech-html">
                  <div className="tech-symbol">&lt;/&gt;</div>
                  <div className="tech-name">HTML5</div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="tech-category">
              <h3 className="tech-category-title">
                <span className="tech-icon">⚙️</span>
                Backend Development
              </h3>
              <div className="tech-items">
                <div className="tech-item tech-node">
                  <div className="tech-symbol">◉</div>
                  <div className="tech-name">Node.js</div>
                </div>
                <div className="tech-item tech-express">
                  <div className="tech-symbol">Ex</div>
                  <div className="tech-name">Express</div>
                </div>
                <div className="tech-item tech-mongodb">
                  <div className="tech-symbol">🍃</div>
                  <div className="tech-name">MongoDB</div>
                </div>
                <div className="tech-item tech-mysql">
                  <div className="tech-symbol">🐬</div>
                  <div className="tech-name">MySQL</div>
                </div>
                <div className="tech-item tech-api">
                  <div className="tech-symbol">API</div>
                  <div className="tech-name">REST API</div>
                </div>
                <div className="tech-item tech-graphql">
                  <div className="tech-symbol">◈</div>
                  <div className="tech-name">GraphQL</div>
                </div>
              </div>
            </div>

            {/* Tools & Others */}
            <div className="tech-category">
              <h3 className="tech-category-title">
                <span className="tech-icon">🛠️</span>
                Tools & Platforms
              </h3>
              <div className="tech-items">
                <div className="tech-item tech-git">
                  <div className="tech-symbol">Git</div>
                  <div className="tech-name">Git</div>
                </div>
                <div className="tech-item tech-github">
                  <div className="tech-symbol">🐙</div>
                  <div className="tech-name">GitHub</div>
                </div>
                <div className="tech-item tech-aws">
                  <div className="tech-symbol">☁️</div>
                  <div className="tech-name">AWS</div>
                </div>
                <div className="tech-item tech-docker">
                  <div className="tech-symbol">🐳</div>
                  <div className="tech-name">Docker</div>
                </div>
                <div className="tech-item tech-vercel">
                  <div className="tech-symbol">▲</div>
                  <div className="tech-name">Vercel</div>
                </div>
                <div className="tech-item tech-figma">
                  <div className="tech-symbol">🎨</div>
                  <div className="tech-name">Figma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center'}}>
            <div className="section-kicker">Client Feedback</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '600px'}}>
              Dont just take our word for it - hear from businesses weve helped transform.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                CodeCraft transformed our retail operations completely. The POS system
                they built is incredibly intuitive and has streamlined our entire workflow.
                Our staff adapted to it within days!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💼</div>
                <div className="author-info">
                  <div className="author-name">Ahmed Khan</div>
                  <div className="author-role">CEO, Retail Chain</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                Outstanding work on our e-commerce platform! Sales increased by 40% in
                the first month. The design is beautiful and the admin panel makes
                management so easy.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💼</div>
                <div className="author-info">
                  <div className="author-name">Fatima Ali</div>
                  <div className="author-role">Founder, Fashion Brand</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                Professional, responsive, and delivered exactly what we needed. The
                hospital management system has improved our efficiency tremendously.
                Highly recommended!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍⚕️</div>
                <div className="author-info">
                  <div className="author-name">Dr. Hassan Raza</div>
                  <div className="author-role">Hospital Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section portfolio-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-text">
                Lets turn your vision into reality. Whether its a POS system, e-commerce
                platform, or custom web application - were here to help you succeed.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn-primary">
                  Get Started Today →
                </Link>
                <Link href="/services" className="btn-outline">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-code">
                <div className="code-snippet">
                  <span className="code-comment"> Your success story starts here</span><br/>
                  <span className="code-keyword">const</span> <span className="code-variable">success</span> = <span className="code-function">await</span> <span className="code-function">CodeCraft</span>.<span className="code-method">build</span>({'{'}
                  <br/>&nbsp;&nbsp;idea: <span className="code-string">Your Vision</span>,
                  <br/>&nbsp;&nbsp;quality: <span className="code-string">Premium</span>,
                  <br/>&nbsp;&nbsp;support: <span className="code-string">24/7</span>
                  <br/>{'}'});
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
