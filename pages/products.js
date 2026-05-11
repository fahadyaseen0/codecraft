import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import animated components to avoid SSR issues
const ProductCard = dynamic(() => import('../components/ProductCard'), { ssr: false });
const ProductSuggestionForm = dynamic(() => import('../components/ProductSuggestionForm'), { ssr: false });

const products = [
  {
    title: 'CodeCraft POS Suite',
    icon: '🏪',
    badge: 'Popular',
    description: 'Centralized POS, inventory and finance system for shops, marts, pharmacies, restaurants and service providers.',
    features: [
      'Web-based (no offline headaches)',
      'Products, categories & barcode support',
      'Stock in/out, adjustments and purchase',
      'Customer & supplier ledgers',
      'Profit & loss, daily sales reports',
      'Multi-user access with role management'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    price: 'Starting at PKR 50,000'
  },
  {
    title: 'CodeCraft Commerce',
    icon: '🛒',
    badge: 'New',
    description: 'Next.js based E-commerce platform — har client ke liye alag design aur feature set.',
    features: [
      'Custom home page & product listing',
      'Order management & status tracking',
      'Coupons, discounts and offers',
      'Mobile-first UX with fast loading',
      'Can connect with your POS/inventory',
      'Payment gateway integration'
    ],
    techStack: ['Next.js', 'React', 'MongoDB', 'Stripe'],
    price: 'Starting at PKR 75,000'
  },
  {
    title: 'Custom Dashboards',
    icon: '📊',
    badge: 'Pro',
    description: 'When ready products are not enough, we build exactly what your business needs.',
    features: [
      'Business dashboards & analytics',
      'Real-time data visualization',
      'Custom reports generation',
      'Integration with existing systems',
      'Role-based access control',
      'Export to PDF/Excel'
    ],
    techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    price: 'Custom Pricing'
  },
  {
    title: 'School Management System',
    icon: '🎓',
    description: 'Complete institute management solution with student, teacher, and admin portals.',
    features: [
      'Student & teacher management',
      'Attendance tracking system',
      'Online fee collection',
      'Exam & result management',
      'Parent portal with notifications',
      'Timetable & class scheduling'
    ],
    techStack: ['MERN Stack', 'Socket.io', 'PDF Generator'],
    price: 'Starting at PKR 80,000'
  },
  {
    title: 'Hospital Management',
    icon: '🏥',
    badge: 'Enterprise',
    description: 'Comprehensive healthcare system for clinics and hospitals.',
    features: [
      'Patient registration & records',
      'Appointment scheduling',
      'Prescription management',
      'Billing & insurance',
      'Lab & pharmacy integration',
      'Doctor & staff management'
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'Redis'],
    price: 'Contact for Quote'
  },
  {
    title: 'Booking & Reservation',
    icon: '📅',
    description: 'Online booking system for restaurants, salons, hotels, and service providers.',
    features: [
      'Real-time availability calendar',
      'Customer booking portal',
      'SMS & email notifications',
      'Payment processing',
      'Customer database',
      'Analytics & reporting'
    ],
    techStack: ['Next.js', 'MongoDB', 'Twilio', 'Stripe'],
    price: 'Starting at PKR 60,000'
  },
  {
    title: 'SaaS Starter Kit',
    icon: '🚀',
    badge: 'Hot',
    description: 'Launch your SaaS product quickly with authentication, payments, and multi-tenancy.',
    features: [
      'User authentication & authorization',
      'Subscription management',
      'Multi-tenant architecture',
      'Payment integration',
      'Admin dashboard',
      'API documentation'
    ],
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    price: 'Starting at PKR 100,000'
  },
  {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Cross-platform mobile apps using React Native for iOS and Android.',
    features: [
      'iOS & Android support',
      'Native performance',
      'Push notifications',
      'Offline functionality',
      'App store deployment',
      'Backend API integration'
    ],
    techStack: ['React Native', 'Expo', 'Firebase', 'REST API'],
    price: 'Starting at PKR 120,000'
  },
  {
    title: 'API Development',
    icon: '🔌',
    description: 'Scalable and secure REST & GraphQL APIs for your applications.',
    features: [
      'RESTful API design',
      'GraphQL support',
      'Authentication & authorization',
      'Rate limiting & caching',
      'API documentation',
      'Microservices architecture'
    ],
    techStack: ['Node.js', 'Express', 'GraphQL', 'MongoDB'],
    price: 'Starting at PKR 40,000'
  }
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - CodeCraft | Professional MERN Stack Solutions</title>
        <meta name="description" content="Explore our range of professional web applications, SaaS products, and custom development services built with MERN stack." />
      </Head>

      <div className="products-page">
        {/* Revolutionary Hero Section */}
        <section className="hero-ultimate">
          {/* Animated Particle Grid */}
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
            <div className="particle particle-7"></div>
            <div className="particle particle-8"></div>
          </div>

          {/* Animated Grid Lines */}
          <div className="grid-lines">
            <div className="grid-line horizontal line-1"></div>
            <div className="grid-line horizontal line-2"></div>
            <div className="grid-line horizontal line-3"></div>
            <div className="grid-line vertical vline-1"></div>
            <div className="grid-line vertical vline-2"></div>
            <div className="grid-line vertical vline-3"></div>
          </div>

          {/* Glowing Code Blocks */}
          <div className="floating-code-blocks">
            <div className="code-block block-1">
              <div className="code-line">const product = {'{'}</div>
              <div className="code-line">  stack: MERN,</div>
              <div className="code-line">  quality: premium</div>
              <div className="code-line">{'}'}</div>
            </div>
            <div className="code-block block-2">
              <div className="code-line">npm install</div>
              <div className="code-line">npm run dev</div>
            </div>
            <div className="code-block block-3">
              <div className="code-line">git commit -m</div>
              <div className="code-line">Amazing!</div>
            </div>
          </div>

          <div className="container">
            <div className="hero-content-ultimate">
              {/* Animated Badge */}
              <div className="ultimate-badge">
                <span className="badge-glow"></span>
                <span className="badge-icon">⚡</span>
                <span className="badge-label">Production Ready</span>
              </div>

              {/* Main Title with Typewriter Effect */}
              <h1 className="ultimate-title">
                <span className="title-line">Professional</span>
                <span className="title-line gradient-shine">Software Products</span>
                <span className="title-accent">That Actually Work</span>
              </h1>

              {/* Description */}
              <p className="ultimate-description">
                Skip months of development. Get production-ready, fully customizable
                applications built with modern MERN stack. Trusted by 30+ businesses across Pakistan and Worldwide.
              </p>

              {/* Feature Highlights */}
              <div className="hero-features">
                <div className="feature-chip">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Production Ready</span>
                </div>
                <div className="feature-chip">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Fully Customizable</span>
                </div>
                <div className="feature-chip">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Fast Deployment</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <button className="ultimate-btn btn-primary">
                  <span>Browse Products</span>
                  <span className="btn-arrow">→</span>
                </button>
                <button className="ultimate-btn btn-outline">
                  <span className="play-icon">▶</span>
                  <span>See Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* 3D Visual Cards */}
            <div className="hero-visual-cards">
              <div className="visual-stack">
                {/* Main Card - Live Dashboard */}
                <div className="stack-card card-primary">
                  <div className="card-glass-overlay"></div>
                  <div className="card-header">
                    <div className="window-controls">
                      <span className="control red"></span>
                      <span className="control yellow"></span>
                      <span className="control green"></span>
                    </div>
                    <span className="card-label">Dashboard.jsx</span>
                  </div>
                  <div className="card-body">
                    <div className="dashboard-visual">
                      <div className="dash-stat">
                        <div className="stat-icon">📈</div>
                        <div className="stat-info">
                          <div className="stat-value">$24.5k</div>
                          <div className="stat-name">Revenue</div>
                        </div>
                        <div className="stat-trend positive">+12%</div>
                      </div>
                      <div className="dash-stat">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                          <div className="stat-value">1.2k</div>
                          <div className="stat-name">Users</div>
                        </div>
                        <div className="stat-trend positive">+8%</div>
                      </div>
                      <div className="chart-mini">
                        <div className="chart-bar bar-1"></div>
                        <div className="chart-bar bar-2"></div>
                        <div className="chart-bar bar-3"></div>
                        <div className="chart-bar bar-4"></div>
                        <div className="chart-bar bar-5"></div>
                        <div className="chart-bar bar-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1 - Code */}
                <div className="stack-card card-float float-1">
                  <div className="float-icon">💻</div>
                  <div className="float-text">Clean Code</div>
                </div>

                {/* Floating Card 2 - Speed */}
                <div className="stack-card card-float float-2">
                  <div className="float-icon">⚡</div>
                  <div className="float-text">Lightning Fast</div>
                </div>

                {/* Floating Card 3 - Security */}
                <div className="stack-card card-float float-3">
                  <div className="float-icon">🔒</div>
                  <div className="float-text">100% Secure</div>
                </div>

                {/* MERN Stack Badge */}
                <div className="stack-card card-tech">
                  <div className="tech-grid">
                    <div className="tech-item tech-m " style={{ color: "#47A248" }}>M</div>
                    <div className="tech-item tech-e" style={{ color: "#000000" }}>E</div>
                    <div className="tech-item tech-r" style={{ color: "#00b3ffff" }}>R</div>
                    <div className="tech-item tech-n" style={{ color: "#3C873A" }}>N</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="scroll-indicator-new">
            <div className="mouse-icon">
              <div className="mouse-wheel"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Our <span className="highlight">Products</span> Showcase
              </h2>
              <p className="section-description">
                Production-ready applications built with modern tech stack
              </p>
            </div>

            <div className="products-grid">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {[
                { number: '50+', label: 'Projects Delivered', icon: '✅' },
                { number: '30+', label: 'Happy Clients', icon: '😊' },
                { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
                { number: '24/7', label: 'Support Available', icon: '💬' }
              ].map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-stack-section">
          <div className="container">
            <h2 className="section-title">
              Built with <span className="highlight">Modern Technologies</span>
            </h2>
            <div className="tech-logos">
              {['MongoDB', 'Express', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'].map((tech, index) => (
                <div key={index} className="tech-logo">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Suggestion Form */}
        <section className="suggestion-section">
          <div className="container">
            <ProductSuggestionForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Build Your Next Project?</h2>
              <p>Lets turn your ideas into reality with cutting-edge technology</p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Get Started</button>
                <button className="cta-btn secondary">View Portfolio</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
