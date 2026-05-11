import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let&apos;s talk about your project.</h2>
          <p className="section-subtitle">
            POS, E-commerce, dashboards, 3D portfolio ya koi bhi custom software
            idea — just send a quick message and we&apos;ll reply with options.
          </p>
        </div>

        <div className="contact-grid">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email / WhatsApp</label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email or WhatsApp number"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="type">What do you need?</label>
                <input
                  id="type"
                  name="type"
                  placeholder="POS, E-commerce, website, dashboard, etc."
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Short description of your idea or problem..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message (demo only)
              </button>

              {submitted && (
                <p style={{ marginTop: "0.8rem", fontSize: "0.8rem" }}>
                  This is a demo form (front-end only). Connect it with your
                  backend, email service or WhatsApp link.
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="card">
              <h3>Direct contact</h3>
              <p>
                WhatsApp: <strong>+92-312-555-8818</strong> (example, apna actual
                number likho)
              </p>
              <p>Email: <strong>hello@codecraft.com</strong></p>
              <p>Location: Pakistan • Working with clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
