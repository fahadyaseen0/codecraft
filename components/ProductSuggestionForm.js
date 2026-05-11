'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductSuggestionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productIdea: '',
    category: 'web-app'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Suggestion:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', productIdea: '', category: 'web-app' });
    }, 3000);
  };

  return (
    <motion.div
      className="suggestion-form-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="suggestion-form-header">
        <motion.div
          className="idea-icon"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          💡
        </motion.div>
        <h2>Got a Product Idea?</h2>
        <p>Share your innovative product concept with us and let's build it together!</p>
      </div>

      {isSubmitted ? (
        <motion.div
          className="success-message"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="success-icon">✓</div>
          <h3>Thank You!</h3>
          <p>We've received your idea and will get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="suggestion-form">
          <div className="form-row">
            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="john@example.com"
              />
            </motion.div>
          </div>

          <motion.div
            className="form-group"
            whileFocus={{ scale: 1.02 }}
          >
            <label htmlFor="category">Product Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="saas">SaaS Product</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="dashboard">Dashboard/Analytics</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          <motion.div
            className="form-group"
            whileFocus={{ scale: 1.02 }}
          >
            <label htmlFor="productIdea">Product Idea</label>
            <textarea
              id="productIdea"
              value={formData.productIdea}
              onChange={(e) => setFormData({ ...formData, productIdea: e.target.value })}
              required
              rows="5"
              placeholder="Describe your product idea in detail..."
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Submit Idea</span>
            <motion.span
              className="btn-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
