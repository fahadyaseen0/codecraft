import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: '🚀',
    title: 'Web Application Development',
    description: 'Full-stack MERN and Next.js applications with cutting-edge features, secure authentication, and modern UI/UX design.',
    features: [
      'Custom dashboards & admin panels',
      'Real-time data synchronization',
      'Secure authentication & authorization',
      'RESTful & GraphQL APIs',
      'Progressive Web Apps (PWA)',
      'Cloud deployment & scaling'
    ],
    color: 'gradient-purple',
    badge: 'Most Popular'
  },
  {
    id: 2,
    icon: '🛍️',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with product management, payment integration, inventory tracking, and analytics dashboards.',
    features: [
      'Multi-vendor marketplace support',
      'Product catalog & search',
      'Secure payment gateways',
      'Order & inventory management',
      'Customer reviews & ratings',
      'Shipping & tax automation'
    ],
    color: 'gradient-blue'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance.',
    features: [
      'iOS & Android apps',
      'Native performance',
      'Push notifications',
      'Offline functionality',
      'App store optimization',
      'Backend API integration'
    ],
    color: 'gradient-green'
  },
  {
    id: 4,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces with user-centered design approach, wireframes, prototypes, and design systems.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design systems & style guides',
      'Interactive mockups',
      'Usability testing',
      'Brand identity design'
    ],
    color: 'gradient-pink'
  },
  {
    id: 5,
    icon: '🔌',
    title: 'API Development & Integration',
    description: 'Scalable RESTful and GraphQL APIs with third-party integrations, webhooks, and automation workflows.',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices architecture',
      'Payment gateway integration',
      'SMS & email automation',
      'Webhook & event handling',
      'API documentation'
    ],
    color: 'gradient-orange'
  },
  {
    id: 6,
    icon: '💼',
    title: 'Custom Business Solutions',
    description: 'Tailored software for your unique business needs including CRM, ERP, inventory, and management systems.',
    features: [
      'CRM & lead management',
      'ERP & resource planning',
      'Inventory management',
      'HR & payroll systems',
      'Project management tools',
      'Custom workflows'
    ],
    color: 'gradient-teal'
  },
  {
    id: 7,
    icon: '🎓',
    title: 'Education & LMS Platforms',
    description: 'Complete learning management systems with course creation, student tracking, assessments, and certifications.',
    features: [
      'Course & content management',
      'Video lessons & quizzes',
      'Student progress tracking',
      'Live classes & webinars',
      'Certification system',
      'Discussion forums'
    ],
    color: 'gradient-indigo'
  },
  {
    id: 8,
    icon: '🏥',
    title: 'Healthcare Management',
    description: 'HIPAA-compliant healthcare solutions including patient management, appointments, billing, and telemedicine.',
    features: [
      'Patient records management',
      'Appointment scheduling',
      'Prescription management',
      'Billing & insurance',
      'Telemedicine integration',
      'HIPAA compliance'
    ],
    color: 'gradient-red'
  },
  {
    id: 9,
    icon: '🔒',
    title: 'Security & Performance',
    description: 'Application security audits, performance optimization, code reviews, and best practices implementation.',
    features: [
      'Security audits & testing',
      'Performance optimization',
      'Code quality reviews',
      'Penetration testing',
      'SSL & encryption setup',
      'DDoS protection'
    ],
    color: 'gradient-gray'
  },
  {
    id: 10,
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, CI/CD pipelines, containerization, monitoring, and automated deployments.',
    features: [
      'AWS, Azure, GCP setup',
      'Docker & Kubernetes',
      'CI/CD pipelines',
      'Server monitoring',
      'Auto-scaling & load balancing',
      'Backup & disaster recovery'
    ],
    color: 'gradient-cyan'
  },
  {
    id: 11,
    icon: '📊',
    title: 'Data Analytics & BI',
    description: 'Business intelligence dashboards, data visualization, reporting systems, and predictive analytics.',
    features: [
      'Interactive dashboards',
      'Data visualization',
      'Custom reports & KPIs',
      'Predictive analytics',
      'Real-time monitoring',
      'Export & automation'
    ],
    color: 'gradient-yellow'
  },
  {
    id: 12,
    icon: '🛠️',
    title: 'Maintenance & Support',
    description: '24/7 technical support, bug fixes, feature updates, performance tuning, and long-term partnerships.',
    features: [
      '24/7 technical support',
      'Bug fixing & patches',
      'Feature enhancements',
      'Performance monitoring',
      'Security updates',
      'Monthly reports'
    ],
    color: 'gradient-purple',
    badge: 'Essential'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define project scope, create roadmap and establish clear milestones.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers create wireframes, mockups, and interactive prototypes for your approval.',
    icon: '🎨'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Agile development with regular updates, code reviews, and comprehensive testing at every stage.',
    icon: '⚙️'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Smooth deployment to production with training, documentation, and ongoing maintenance support.',
    icon: '🚀'
  }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - CodeCraft | Professional Software Development Services</title>
        <meta name="description" content="Comprehensive software development services including web apps, mobile apps, e-commerce, UI/UX design, API development, and custom business solutions." />
      </Head>

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-bg">
            <div className="hero-gradient-orb orb-1"></div>
            <div className="hero-gradient-orb orb-2"></div>
            <div className="hero-gradient-orb orb-3"></div>
          </div>

          <div className="floating-elements">
            <div className="float-icon float-1">💻</div>
            <div className="float-icon float-2">🎨</div>
            <div className="float-icon float-3">📱</div>
            <div className="float-icon float-4">🚀</div>
            <div className="float-icon float-5">⚡</div>
            <div className="float-icon float-6">🔧</div>
          </div>

          <div className="container">
            <div className="services-hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Full-Service Development Agency</span>
              </div>

              <h1 className="services-hero-title">
                <span className="title-line-1">Comprehensive Software</span>
                <span className="title-line-2 gradient-text">Development Services</span>
              </h1>

              <p className="services-hero-description">
                From concept to deployment, we provide end-to-end software development
                services to transform your ideas into powerful digital solutions.
              </p>

              <div className="hero-stats-row">
                <div className="hero-stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Services Offered</div>
                </div>
              </div>

              <div className="hero-cta-buttons">
                <Link href="/contact" className="btn-primary-hero">
                  <span>Get Started</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 14L12 9L7 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </Link>
                <Link href="/portfolio" className="btn-outline-hero">
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="scroll-down-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* Animated 3D Background Section */}
        <section className="services-animated-bg">
          {/* Cube Grid Background */}
          <div className="cube-grid">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="cube-item"></div>
            ))}
          </div>

          {/* Particle System */}
          <div className="particle-system">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>

          {/* Animated Rings */}
          <div className="animated-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <div className="ring ring-4"></div>
          </div>

          {/* Floating 3D Shapes */}
          <div className="floating-3d-shapes">
            <div className="shape-3d shape-cube"></div>
            <div className="shape-3d shape-pyramid"></div>
            <div className="shape-3d shape-sphere"></div>
            <div className="shape-3d shape-cylinder"></div>
          </div>

          {/* Center Content */}
          <div className="bg-center-content">
            <h2 className="bg-title">Cutting-Edge Technology Stack</h2>
            <p className="bg-subtitle">
              Powered by modern frameworks and tools to deliver exceptional performance
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          {/* Background Orbs */}
          <div className="services-bg-orbs">
            <div className="services-orb services-orb-1"></div>
            <div className="services-orb services-orb-2"></div>
            <div className="services-orb services-orb-3"></div>
          </div>

          {/* Dots Pattern */}
          <div className="dots-pattern"></div>

          <div className="container">
            <div className="section-header-services">
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title-services">
                Our <span className="highlight-gradient">Services</span>
              </h2>
              <p className="section-desc-services">
                Complete software solutions tailored to your business needs
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`service-card ${service.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.badge && (
                    <div className="service-badge">{service.badge}</div>
                  )}

                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                    <div className="icon-bg-blur"></div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="service-cta">
                    <span>Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>

                  <div className="card-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="services-process-section">
          {/* Process Background Orbs */}
          <div className="process-bg-orbs">
            <div className="process-orb process-orb-1"></div>
            <div className="process-orb process-orb-2"></div>
          </div>

          <div className="container">
            <div className="section-header-services">
              <div className="section-tag">Our Process</div>
              <h2 className="section-title-services">
                How We <span className="highlight-gradient">Work</span>
              </h2>
              <p className="section-desc-services">
                A proven methodology to deliver exceptional results
              </p>
            </div>

            <div className="services-process-timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="services-process-step">
                  <div className="services-step-number">{step.number}</div>
                  <div className="services-step-icon">{step.icon}</div>
                  <div className="services-step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="services-step-description">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="services-step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="tech-section">
          {/* Tech Wave Elements */}
          <div className="tech-bg-elements">
            <div className="tech-wave"></div>
            <div className="tech-bg-orb tech-bg-orb-1"></div>
            <div className="tech-bg-orb tech-bg-orb-2"></div>
            <div className="tech-bg-orb tech-bg-orb-3"></div>
          </div>

          {/* Animated Code Lines */}
          <div className="tech-code-lines">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>

          <div className="container">
            <div className="section-header-services">
              <div className="section-tag">Technologies</div>
              <h2 className="section-title-services">
                Built with <span className="highlight-gradient">Modern Stack</span>
              </h2>
            </div>

            <div className="tech-grid-modern">
              <div className="tech-card">
                <div className="tech-logo mongodb">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M16 30L14.5 28.5C13.5 27.5 13 26 13 24.5V19C13 17.5 13.5 16 14.5 15L16 13.5L17.5 15C18.5 16 19 17.5 19 19V24.5C19 26 18.5 27.5 17.5 28.5L16 30Z" fill="#00ED64"/>
                    <path d="M16 3L20 7C21.5 8.5 22 10.5 22 12.5V17C22 19 21.5 21 20 22.5L16 26.5L12 22.5C10.5 21 10 19 10 17V12.5C10 10.5 10.5 8.5 12 7L16 3Z" fill="#00684A"/>
                  </svg>
                </div>
                <h4>MongoDB</h4>
                <p>NoSQL Database</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo express">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M32 24L28 16L32 8M0 24L4 16L0 8M8 10H24M10 22H22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Express.js</h4>
                <p>Backend Framework</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo react">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
                    <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
                    <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
                    <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
                  </svg>
                </div>
                <h4>React</h4>
                <p>UI Library</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo nodejs">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L28 11V21L16 28L4 21V11L16 4Z" fill="#339933"/>
                    <path d="M16 4V28M28 11L4 21M4 11L28 21" stroke="#215732" strokeWidth="1"/>
                  </svg>
                </div>
                <h4>Node.js</h4>
                <p>JavaScript Runtime</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo nextjs">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
                    <path d="M20 8L12 24M24 14H8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Next.js</h4>
                <p>React Framework</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo typescript">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="2" fill="#3178C6"/>
                    <path d="M16 12V24M12 12H20M18 18L20 20L18 22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>TypeScript</h4>
                <p>Typed JavaScript</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo postgresql">
                  <svg viewBox="0 0 32 32" fill="none">
                    <ellipse cx="16" cy="16" rx="10" ry="12" fill="#336791"/>
                    <path d="M12 10C12 8 14 6 16 6C18 6 20 8 20 10V22C20 24 18 26 16 26C14 26 12 24 12 22V10Z" fill="#FFFFFF"/>
                    <circle cx="16" cy="16" r="4" fill="#336791"/>
                  </svg>
                </div>
                <h4>PostgreSQL</h4>
                <p>SQL Database</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo tailwind">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M16 8C12 8 9.5 10 9 14C10.5 12 12.25 11.25 14.25 11.75C15.25 12 16 12.75 16.75 13.5C18.25 15 20 16.5 23 16.5C27 16.5 29.5 14.5 30 10.5C28.5 12.5 26.75 13.25 24.75 12.75C23.75 12.5 23 11.75 22.25 11C20.75 9.5 19 8 16 8ZM9 16.5C5 16.5 2.5 18.5 2 22.5C3.5 20.5 5.25 19.75 7.25 20.25C8.25 20.5 9 21.25 9.75 22C11.25 23.5 13 25 16 25C20 25 22.5 23 23 19C21.5 21 19.75 21.75 17.75 21.25C16.75 21 16 20.25 15.25 19.5C13.75 18 12 16.5 9 16.5Z" fill="#06B6D4"/>
                  </svg>
                </div>
                <h4>Tailwind CSS</h4>
                <p>CSS Framework</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo docker">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="14" width="3" height="3" fill="#2496ED"/>
                    <rect x="10" y="14" width="3" height="3" fill="#2496ED"/>
                    <rect x="14" y="14" width="3" height="3" fill="#2496ED"/>
                    <rect x="18" y="14" width="3" height="3" fill="#2496ED"/>
                    <rect x="10" y="10" width="3" height="3" fill="#2496ED"/>
                    <rect x="14" y="10" width="3" height="3" fill="#2496ED"/>
                    <rect x="14" y="6" width="3" height="3" fill="#2496ED"/>
                    <path d="M22 14C23 13 25 13 27 14C28 15 28 17 27 19C25 20 23 20 22 19" stroke="#2496ED" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <h4>Docker</h4>
                <p>Containerization</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo aws">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M8 18L12 12L16 18L12 24L8 18Z" fill="#FF9900"/>
                    <path d="M16 18L20 12L24 18L20 24L16 18Z" fill="#FF9900"/>
                    <rect x="6" y="22" width="20" height="2" fill="#FF9900"/>
                  </svg>
                </div>
                <h4>AWS</h4>
                <p>Cloud Services</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo firebase">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M8 28L16 4L20 12L16 20L8 28Z" fill="#FFCA28"/>
                    <path d="M16 20L20 12L24 20L16 28L16 20Z" fill="#FFA000"/>
                    <circle cx="16" cy="26" r="2" fill="#FFFFFF"/>
                  </svg>
                </div>
                <h4>Firebase</h4>
                <p>Backend Platform</p>
              </div>

              <div className="tech-card">
                <div className="tech-logo graphql">
                  <svg viewBox="0 0 32 32" fill="none">
                    <polygon points="16,6 26,12 26,20 16,26 6,20 6,12" stroke="#E10098" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="6" r="2" fill="#E10098"/>
                    <circle cx="26" cy="12" r="2" fill="#E10098"/>
                    <circle cx="26" cy="20" r="2" fill="#E10098"/>
                    <circle cx="16" cy="26" r="2" fill="#E10098"/>
                    <circle cx="6" cy="20" r="2" fill="#E10098"/>
                    <circle cx="6" cy="12" r="2" fill="#E10098"/>
                  </svg>
                </div>
                <h4>GraphQL</h4>
                <p>API Query Language</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta-section">
          <div className="cta-bg-gradient"></div>

          {/* CTA Sparkles */}
          <div className="cta-sparkles">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
          </div>

          <div className="container">
            <div className="cta-content-box">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Lets discuss how we can help transform your ideas into reality
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn-cta-primary">
                  Get Free Consultation
                </Link>
                <Link href="/portfolio" className="btn-cta-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
