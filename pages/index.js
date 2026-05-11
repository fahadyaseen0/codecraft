import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeCraft - Professional MERN Stack Development | Custom Software Solutions</title>
        <meta name="description" content="Transform your business with custom MERN stack solutions. POS systems, E-commerce, and bespoke software development." />
      </Head>

      {/* Revolutionary Hero Section */}
      <section className="home-hero-ultimate">
        {/* Animated Matrix Rain Effect */}
        <div className="matrix-rain">
          <div className="matrix-column column-1"></div>
          <div className="matrix-column column-2"></div>
          <div className="matrix-column column-3"></div>
          <div className="matrix-column column-4"></div>
          <div className="matrix-column column-5"></div>
          <div className="matrix-column column-6"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="geo-shape shape-hexagon hex-1"></div>
          <div className="geo-shape shape-circle circle-1"></div>
          <div className="geo-shape shape-triangle tri-1"></div>
          <div className="geo-shape shape-hexagon hex-2"></div>
          <div className="geo-shape shape-circle circle-2"></div>
          <div className="geo-shape shape-triangle tri-2"></div>
        </div>

        {/* Animated Code Snippets */}
        <div className="code-snippets-float">
          <div className="snippet snippet-1">
            <div className="snippet-header">
              <span className="lang">JavaScript</span>
            </div>
            <div className="snippet-code">
              <span className="keyword">const</span> <span className="variable">success</span> = <span className="function">await</span> <span className="method">build</span>();
            </div>
          </div>
          <div className="snippet snippet-2">
            <div className="snippet-header">
              <span className="lang">React</span>
            </div>
            <div className="snippet-code">
              &lt;<span className="tag">App</span> /&gt;
            </div>
          </div>
          <div className="snippet snippet-3">
            <div className="snippet-header">
              <span className="lang">Node.js</span>
            </div>
            <div className="snippet-code">
              app.<span className="method">listen</span>(<span className="number">3000</span>);
            </div>
          </div>
        </div>

        <div className="container">
          <div className="home-hero-grid">
            {/* Left Content */}
            <div className="home-hero-content">
              {/* Animated Badge */}
              <div className="home-hero-badge">
                <span className="badge-pulse"></span>
                <span className="badge-icon">⚡</span>
                <span className="badge-text">We Build Amazing Products</span>
              </div>

              {/* Main Heading */}
              <h1 className="home-hero-title">
                <span className="title-top">Transform Your Ideas Into</span>
                <span className="title-main">
                  <span className="word-highlight">Powerful</span>
                  <br />
                  Software Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="home-hero-description">
                We specialize in building production-ready MERN stack applications,
                custom POS systems, e-commerce platforms, and beautiful 3D websites
                that drive real business growth.
              </p>

              {/* Feature Pills */}
              <div className="home-features-inline">
                <div className="feature-pill">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>MERN Stack</span>
                </div>
                <div className="feature-pill">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Production Ready</span>
                </div>
                <div className="feature-pill">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="home-hero-cta">
                <Link href="/products" className="home-btn home-btn-primary">
                  <span>Explore Products</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 14L12 9L7 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className="home-btn home-btn-glass">
                  <span>Get Started</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="home-trust-bar">
                <div className="trust-item">
                  <div className="trust-number">50+</div>
                  <div className="trust-label">Projects</div>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <div className="trust-number">30+</div>
                  <div className="trust-label">Clients</div>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <div className="trust-number">100%</div>
                  <div className="trust-label">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Visual - 3D Card Stack */}
            <div className="home-hero-visual">
              <div className="hero-visual-cards">
                <div className="visual-card card-main">
                  <div className="card-glow-effect"></div>
                  <div className="card-header">
                    <div className="window-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <span className="card-title">MERN Stack</span>
                  </div>
                  <div className="card-content">
                    <div className="tech-icon mongodb-icon">M</div>
                    <div className="tech-icon express-icon">E</div>
                    <div className="tech-icon react-icon">R</div>
                    <div className="tech-icon node-icon">N</div>
                  </div>
                  <div className="card-footer">
                    <div className="status-indicator">
                      <span className="status-dot"></span>
                      <span>Active Development</span>
                    </div>
                  </div>
                </div>

                <div className="visual-card card-floating floating-1">
                  <div className="mini-card-content">
                    <span className="mini-icon">🚀</span>
                    <span className="mini-text">Fast Deploy</span>
                  </div>
                </div>

                <div className="visual-card card-floating floating-2">
                  <div className="mini-card-content">
                    <span className="mini-icon">⚡</span>
                    <span className="mini-text">High Performance</span>
                  </div>
                </div>

                <div className="visual-card card-floating floating-3">
                  <div className="mini-card-content">
                    <span className="mini-icon">🔒</span>
                    <span className="mini-text">Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="home-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to discover</span>
        </div>
      </section>

      {/* What we build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Our Services</div>
            <h2 className="section-title">Comprehensive Software Solutions for Every Business Need</h2>
            <p className="section-subtitle">
              From retail management to digital storefronts, we deliver cutting-edge solutions
              powered by modern technology stacks including MERN, Next.js, and immersive 3D experiences.
              Each solution is tailored to your unique business requirements.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>🎯 POS & Inventory Management</h3>
              <p>
                Complete centralized point-of-sale system with real-time inventory tracking,
                financial management, and multi-branch support. Perfect for retail stores,
                pharmacies, restaurants, and service businesses. Cloud-based, secure, and
                incredibly user-friendly.
              </p>
              <div className="chip-row">
                <span className="chip">Real-time inventory</span>
                <span className="chip">Multi-branch sync</span>
                <span className="chip">Financial reports</span>
                <span className="chip">Staff management</span>
              </div>
            </div>

            <div className="card">
              <h3>🛍️ E-Commerce Platforms</h3>
              <p>
                Fully-functional, custom-designed online stores built with Next.js for blazing-fast
                performance. Complete with product management, order processing, payment gateway
                integration, and powerful admin dashboards. Each store reflects your unique brand
                identity.
              </p>
              <div className="chip-row">
                <span className="chip">Next.js powered</span>
                <span className="chip">SEO optimized</span>
                <span className="chip">Payment gateways</span>
                <span className="chip">Order management</span>
              </div>
            </div>

            <div className="card">
              <h3>💼 Business Websites & Portfolios</h3>
              <p>
                Professional business websites, stunning 3D portfolios, and corporate landing pages
                that capture attention and convert visitors. Mobile-responsive, fast-loading, and
                designed to showcase your brand in the best light possible.
              </p>
              <div className="chip-row">
                <span className="chip">3D portfolios</span>
                <span className="chip">Responsive design</span>
                <span className="chip">Brand identity</span>
                <span className="chip">Fast performance</span>
              </div>
            </div>

            <div className="card">
              <h3>⚙️ Custom Software Development</h3>
              <p>
                Bespoke software solutions tailored to your specific workflow. From school management
                systems to hospital dashboards, CRM platforms to automation tools - we build exactly
                what you need with scalable, maintainable code.
              </p>
              <div className="chip-row">
                <span className="chip">Custom features</span>
                <span className="chip">Scalable architecture</span>
                <span className="chip">API integrations</span>
                <span className="chip">Automation</span>
              </div>
            </div>

            <div className="card">
              <h3>📊 Marketing & Analytics</h3>
              <p>
                Digital marketing expertise combined with powerful analytics dashboards. Track your
                business performance, understand customer behavior, and make data-driven decisions
                to grow your business effectively.
              </p>
              <div className="chip-row">
                <span className="chip">SEO optimization</span>
                <span className="chip">Analytics setup</span>
                <span className="chip">Performance tracking</span>
                <span className="chip">Growth strategy</span>
              </div>
            </div>

            <div className="card">
              <h3>🔧 Maintenance & Support</h3>
              <p>
                Ongoing technical support, regular updates, bug fixes, and feature enhancements.
                We dont just build and leave - we partner with you for long-term success with
                dedicated support and continuous improvement.
              </p>
              <div className="chip-row">
                <span className="chip">24/7 support</span>
                <span className="chip">Regular updates</span>
                <span className="chip">Bug fixes</span>
                <span className="chip">Feature additions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Our Process</div>
            <h2 className="section-title">Simple, Transparent & Effective Workflow</h2>
            <p className="section-subtitle">
              We believe in clear communication and streamlined processes. Our proven methodology
              ensures timely delivery without compromising on quality. Youll have direct access
              to our development team throughout the entire journey.
            </p>
          </div>
          <div className="process">
            <div className="process-step">
              <span className="badge">1</span>
              <h4>Discovery & Planning</h4>
              <p>
                We start by understanding your business goals, challenges, and requirements
                in detail. Whether you prefer Urdu or English, we ensure complete clarity
                before moving forward. We analyze your existing systems and create a
                comprehensive project roadmap.
              </p>
            </div>
            <div className="process-step">
              <span className="badge">2</span>
              <h4>Design & Prototyping</h4>
              <p>
                Our designers create intuitive wireframes and beautiful UI mockups that align
                with your brand identity. Youll see exactly how your application will look
                and function before any code is written, ensuring were on the same page.
              </p>
            </div>
            <div className="process-step">
              <span className="badge">3</span>
              <h4>Development & Testing</h4>
              <p>
                Using cutting-edge technologies like MERN stack and Next.js, we build robust,
                scalable solutions. Rigorous testing with real-world scenarios ensures
                everything works flawlessly. We keep you updated with regular progress reports.
              </p>
            </div>
            <div className="process-step">
              <span className="badge">4</span>
              <h4>Launch & Support</h4>
              <p>
                Smooth deployment to production with comprehensive training for your team.
                We provide detailed documentation, video tutorials, and 24/7 ongoing support
                for updates, bug fixes, and new feature additions as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Why CodeCraft</div>
            <h2 className="section-title">Why Businesses Trust CodeCraft</h2>
            <p className="section-subtitle">
              Were not just developers - were your technology partners committed to your success.
              Heres what makes us different from the rest.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>⚡ Fast Delivery</h3>
              <p>
                We understand time is money. Our agile development process ensures quick
                turnaround times without compromising quality. Most projects launch within
                4-8 weeks.
              </p>
            </div>
            <div className="card">
              <h3>💰 Affordable Pricing</h3>
              <p>
                Enterprise-quality solutions at prices that make sense for small and medium
                businesses. Transparent pricing with no hidden costs. Pay for what you need.
              </p>
            </div>
            <div className="card">
              <h3>🎨 Custom Design</h3>
              <p>
                No templates, no cookie-cutter solutions. Every project is designed from
                scratch to match your unique brand identity and business requirements.
              </p>
            </div>
            <div className="card">
              <h3>🔒 Secure & Reliable</h3>
              <p>
                Built with security best practices. Regular backups, encrypted data, and
                cloud infrastructure ensure your business runs smoothly 24/7.
              </p>
            </div>
            <div className="card">
              <h3>📱 Mobile Responsive</h3>
              <p>
                Every solution we build works flawlessly on all devices - desktops, tablets,
                and smartphones. Your customers can access your platform anywhere, anytime.
              </p>
            </div>
            <div className="card">
              <h3>🌍 Local Understanding</h3>
              <p>
                Based in Pakistan, we understand local market dynamics, business culture,
                and language preferences. Communication in Urdu or English - whatever works
                best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <div className="section-header" style={{textAlign: 'center'}}>
            <div className="section-kicker">Ready to Get Started?</div>
            <h2 className="section-title">Lets Build Something Amazing Together</h2>
            <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '600px'}}>
              Whether you need a POS system, e-commerce store, or custom software solution,
              were here to help. Schedule a free consultation to discuss your project.
            </p>
          </div>
          <div className="hero-cta-row" style={{justifyContent: 'center', marginTop: '2.5rem'}}>
            <Link href="/contact" className="btn-primary">
              Start Your Project Today →
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
