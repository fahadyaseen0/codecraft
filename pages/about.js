import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - CodeCraft | Professional Software Development Company</title>
        <meta name="description" content="Learn about CodeCraft - your trusted partner for custom software development, MERN stack solutions, and digital transformation." />
      </Head>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          {/* Background Elements */}
          <div className="hero-mesh-bg"></div>

          {/* 3D Floating Shapes */}
          <div className="hero-shapes">
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>
          </div>

          {/* 3D Rotating MERN Stack Icons */}
          <div className="hero-mern-icons">
            {/* MongoDB */}
            <div className="mern-icon mern-mongo">
              <svg viewBox="0 0 32 32" className="mern-svg">
                <path d="M16 30L14.5 28.5C13.5 27.5 10 23 10 18C10 14 12 10 16 8C20 10 22 14 22 18C22 23 18.5 27.5 17.5 28.5L16 30Z" fill="#00ED64"/>
                <path d="M16 8V30" stroke="#00684A" strokeWidth="1"/>
              </svg>
            </div>

            {/* Express */}
            <div className="mern-icon mern-express">
              <svg viewBox="0 0 32 32" className="mern-svg">
                <path d="M4 10L16 4L28 10L16 16L4 10Z" fill="#303030"/>
                <path d="M4 16L16 22L28 16" stroke="#303030" strokeWidth="2" fill="none"/>
                <path d="M4 22L16 28L28 22" stroke="#303030" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* React */}
            <div className="mern-icon mern-react">
              <svg viewBox="0 0 32 32" className="mern-svg">
                <ellipse cx="16" cy="16" rx="12" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
                <ellipse cx="16" cy="16" rx="12" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/>
                <ellipse cx="16" cy="16" rx="12" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/>
                <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
              </svg>
            </div>

            {/* Node.js */}
            <div className="mern-icon mern-node">
              <svg viewBox="0 0 32 32" className="mern-svg">
                <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" fill="#339933"/>
                <path d="M16 4V28M6 10L16 16L26 10M6 22L16 16L26 22" stroke="#23682A" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          {/* 3D Device Icons (Mobile, Tablet, Desktop) */}
          <div className="hero-device-icons">
            {/* Mobile Phone */}
            <div className="device-icon device-mobile">
              <svg viewBox="0 0 32 32" className="device-svg">
                <rect x="10" y="4" width="12" height="24" rx="2" fill="#667eea" stroke="#4facfe" strokeWidth="1.5"/>
                <rect x="12" y="6" width="8" height="14" fill="#f8f9ff"/>
                <circle cx="16" cy="24" r="1.5" fill="#4facfe"/>
              </svg>
            </div>

            {/* Tablet */}
            <div className="device-icon device-tablet">
              <svg viewBox="0 0 32 32" className="device-svg">
                <rect x="6" y="6" width="20" height="20" rx="2" fill="#f093fb" stroke="#667eea" strokeWidth="1.5"/>
                <rect x="8" y="8" width="16" height="14" fill="#f8f9ff"/>
                <circle cx="16" cy="24" r="1" fill="#667eea"/>
              </svg>
            </div>

            {/* Desktop/Monitor */}
            <div className="device-icon device-desktop">
              <svg viewBox="0 0 32 32" className="device-svg">
                <rect x="4" y="6" width="24" height="16" rx="1" fill="#4facfe" stroke="#667eea" strokeWidth="1.5"/>
                <rect x="6" y="8" width="20" height="12" fill="#f8f9ff"/>
                <path d="M12 22L12 26L20 26L20 22" stroke="#667eea" strokeWidth="2"/>
                <path d="M10 28L22 28" stroke="#667eea" strokeWidth="2"/>
              </svg>
            </div>

            {/* Smartwatch */}
            <div className="device-icon device-watch">
              <svg viewBox="0 0 32 32" className="device-svg">
                <rect x="11" y="10" width="10" height="12" rx="2" fill="#667eea"/>
                <rect x="13" y="12" width="6" height="8" fill="#f8f9ff"/>
                <path d="M13 10L13 6L19 6L19 10" fill="#f093fb"/>
                <path d="M13 22L13 26L19 26L19 22" fill="#f093fb"/>
              </svg>
            </div>
          </div>

          {/* 3D Coding Icons */}
          <div className="hero-coding-icons">
            {/* Code Brackets */}
            <div className="coding-icon coding-brackets">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <path d="M12 8L6 16L12 24" stroke="#667eea" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M20 8L26 16L20 24" stroke="#f093fb" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M14 6L18 26" stroke="#4facfe" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Terminal */}
            <div className="coding-icon coding-terminal">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <rect x="4" y="6" width="24" height="20" rx="2" fill="#1a1a2e" stroke="#667eea" strokeWidth="1.5"/>
                <path d="M8 12L12 16L8 20" stroke="#00ED64" strokeWidth="2" fill="none"/>
                <path d="M14 18L20 18" stroke="#00ED64" strokeWidth="2"/>
              </svg>
            </div>

            {/* Git Branch */}
            <div className="coding-icon coding-git">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <circle cx="10" cy="8" r="3" fill="#f093fb"/>
                <circle cx="10" cy="24" r="3" fill="#f093fb"/>
                <circle cx="22" cy="16" r="3" fill="#667eea"/>
                <path d="M10 11L10 21" stroke="#667eea" strokeWidth="2"/>
                <path d="M10 16L19 16" stroke="#667eea" strokeWidth="2"/>
              </svg>
            </div>

            {/* Database */}
            <div className="coding-icon coding-database">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <ellipse cx="16" cy="10" rx="10" ry="4" fill="#4facfe"/>
                <path d="M6 10L6 22C6 24 10 26 16 26C22 26 26 24 26 22L26 10" fill="#667eea"/>
                <ellipse cx="16" cy="16" rx="10" ry="3" fill="none" stroke="#f8f9ff" strokeWidth="1"/>
                <ellipse cx="16" cy="22" rx="10" ry="3" fill="none" stroke="#f8f9ff" strokeWidth="1"/>
              </svg>
            </div>

            {/* API */}
            <div className="coding-icon coding-api">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <circle cx="8" cy="16" r="4" fill="#667eea"/>
                <circle cx="24" cy="16" r="4" fill="#f093fb"/>
                <circle cx="16" cy="8" r="4" fill="#4facfe"/>
                <circle cx="16" cy="24" r="4" fill="#4facfe"/>
                <path d="M11 14L13 10M21 14L19 10M11 18L13 22M21 18L19 22" stroke="#667eea" strokeWidth="2"/>
              </svg>
            </div>

            {/* Cloud */}
            <div className="coding-icon coding-cloud">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <path d="M8 20C6 20 4 18 4 16C4 14 6 12 8 12C8 9 10 6 14 6C17 6 19 8 20 10C22 10 24 12 24 14C26 14 28 16 28 18C28 20 26 22 24 22L8 22Z" fill="#667eea"/>
                <circle cx="12" cy="16" r="1.5" fill="#f8f9ff"/>
                <circle cx="16" cy="16" r="1.5" fill="#f8f9ff"/>
                <circle cx="20" cy="16" r="1.5" fill="#f8f9ff"/>
              </svg>
            </div>

            {/* Settings/Gear */}
            <div className="coding-icon coding-settings">
              <svg viewBox="0 0 32 32" className="coding-svg">
                <circle cx="16" cy="16" r="5" fill="#f093fb"/>
                <path d="M16 6L17 10L21 8L20 12L24 12L22 16L24 20L20 20L21 24L17 22L16 26L15 22L11 24L12 20L8 20L10 16L8 12L12 12L11 8L15 10L16 6Z" fill="#667eea"/>
                <circle cx="16" cy="16" r="3" fill="#4facfe"/>
              </svg>
            </div>
          </div>

          <div className="container">
            <div className="about-hero-content">
              <div className="hero-label">
                <span className="hero-label-icon">⚡</span>
                <span>About CodeCraft</span>
              </div>

              <h1 className="hero-main-title">
                Building Software Solutions That <span className="hero-gradient-text">Transform Businesses</span>
              </h1>

              <p className="hero-description">
                We are a team of passionate developers, designers, and innovators committed to delivering
                world-class software solutions that drive growth and success for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-icon-wrapper">🚀</div>
                <span className="stat-value">50+</span>
                <div className="stat-title">Projects Completed</div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrapper">😊</div>
                <span className="stat-value">30+</span>
                <div className="stat-title">Happy Clients</div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrapper">⭐</div>
                <span className="stat-value">100%</span>
                <div className="stat-title">Client Satisfaction</div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrapper">⚡</div>
                <span className="stat-value">24/7</span>
                <div className="stat-title">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="company-info-section">
          <div className="container">
            <div className="section-header-center">
              <div className="section-label">Who We Are</div>
              <h2 className="section-main-title">
                Your Trusted <span className="hero-gradient-text">Technology Partner</span>
              </h2>
              <p className="section-description">
                CodeCraft is a professional software development company dedicated to building innovative,
                scalable, and secure solutions that help businesses thrive in the digital age.
              </p>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with cutting-edge technology solutions that solve real problems,
                  improve efficiency, and drive measurable growth. We believe in making enterprise-grade
                  software accessible and affordable for companies of all sizes.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted software development partner in the region, known for
                  exceptional quality, reliability, and customer satisfaction. We envision a future where
                  every business has access to world-class technology that drives innovation.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">💼</div>
                <h3>What We Do</h3>
                <p>
                  We specialize in custom web applications, e-commerce platforms, POS systems, and business
                  automation tools using modern technologies like MERN stack, Next.js, and cloud infrastructure.
                  From concept to deployment, we handle everything.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">⚙️</div>
                <h3>How We Work</h3>
                <p>
                  Our agile development process ensures transparency, flexibility, and timely delivery.
                  We work closely with clients, involve them at every stage, and maintain clear communication
                  in their preferred language—Urdu or English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="section-header-center">
              <div className="section-label">Our Team</div>
              <h2 className="section-main-title">
                Meet The <span className="hero-gradient-text">Experts</span>
              </h2>
              <p className="section-description">
                Our team consists of senior developers, designers, and strategists with years of experience
                building production-grade systems. We are passionate about clean code, beautiful design,
                and solving real-world problems.
              </p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-icon-circle">👨‍💻</div>
                <h3>Development Team</h3>
                <div className="team-position">Full-Stack Developers</div>
                <p>
                  Expert MERN stack developers with 5+ years of experience building scalable web applications,
                  APIs, and cloud infrastructure. Specialized in React, Node.js, MongoDB, and modern frameworks.
                </p>
              </div>

              <div className="team-card">
                <div className="team-icon-circle">🎨</div>
                <h3>Design Team</h3>
                <div className="team-position">UI/UX Designers</div>
                <p>
                  Creative designers focused on user-centered design, wireframing, prototyping, and creating
                  beautiful, intuitive interfaces that users love and enjoy using every day.
                </p>
              </div>

              <div className="team-card">
                <div className="team-icon-circle">⚙️</div>
                <h3>DevOps Team</h3>
                <div className="team-position">Cloud Engineers</div>
                <p>
                  Cloud specialists managing CI/CD pipelines, Docker containers, AWS infrastructure, database
                  optimization, and ensuring 99.9% uptime for all applications.
                </p>
              </div>

              <div className="team-card">
                <div className="team-icon-circle">🧪</div>
                <h3>QA Team</h3>
                <div className="team-position">Quality Assurance</div>
                <p>
                  Dedicated QA engineers performing comprehensive testing from unit tests to end-to-end testing,
                  ensuring bug-free, reliable software delivery with every release.
                </p>
              </div>

              <div className="team-card">
                <div className="team-icon-circle">📊</div>
                <h3>Project Team</h3>
                <div className="team-position">Project Managers</div>
                <p>
                  Experienced PMs ensuring timely delivery, clear communication, and seamless coordination
                  between teams and clients throughout the entire development lifecycle.
                </p>
              </div>

              <div className="team-card">
                <div className="team-icon-circle">🔧</div>
                <h3>Support Team</h3>
                <div className="team-position">24/7 Technical Support</div>
                <p>
                  Dedicated support engineers available round-the-clock to handle technical issues, feature
                  requests, maintenance needs, and any questions you may have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-header-center">
              <div className="section-label">Core Values</div>
              <h2 className="section-main-title">
                What We <span className="hero-gradient-text">Believe In</span>
              </h2>
              <p className="section-description">
                Our core values guide everything we do—from how we build software to how we work with clients.
                These principles define who we are as a company.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon-box">💡</div>
                <h4>Innovation First</h4>
                <p>
                  We stay updated with the latest technologies and best practices to ensure your software
                  is built with modern tools that will stay relevant for years to come.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon-box">🎯</div>
                <h4>Quality Over Speed</h4>
                <p>
                  We never cut corners. Every feature is thoroughly tested, every design is polished,
                  and every line of code is reviewed before deployment.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon-box">🤝</div>
                <h4>Transparent Communication</h4>
                <p>
                  You will always know what we are working on, what challenges we face, and what to expect
                  next. No technical jargon—just clear, honest updates.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon-box">🔒</div>
                <h4>Security & Privacy</h4>
                <p>
                  Your data and your customers data are sacred. We implement industry-standard security
                  practices and never compromise on privacy or data protection.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon-box">📈</div>
                <h4>Long-Term Partnership</h4>
                <p>
                  We dont just build and disappear. We provide ongoing support, regular updates, and
                  continuous improvements as your business grows and evolves.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon-box">💰</div>
                <h4>Fair Pricing</h4>
                <p>
                  Enterprise-quality software at prices that make sense for small and medium businesses.
                  Transparent pricing with no hidden costs or surprise fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="cta-pattern"></div>
          <div className="container">
            <div className="cta-content-wrapper">
              <h2 className="cta-main-title">Ready to Build Something Amazing?</h2>
              <p className="cta-text">
                Lets discuss how we can help transform your business with custom software solutions.
                Get in touch with our team for a free consultation today.
              </p>
              <div className="cta-buttons-group">
                <Link href="/contact" className="cta-btn-primary">
                  Start Your Project
                </Link>
                <Link href="/services" className="cta-btn-outline">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
