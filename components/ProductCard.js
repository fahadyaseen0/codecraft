'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="product-card-container"
    >
      <motion.div
        className="product-card"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Header with Icon */}
        <div className="product-card-header">
          <motion.div
            className="product-icon"
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
          >
            {product.icon}
          </motion.div>
          {product.badge && (
            <motion.span
              className="product-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.badge}
            </motion.span>
          )}
        </div>

        {/* Card Content */}
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>

        {/* Features List */}
        <ul className="product-features">
          {product.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="feature-icon">✔</span>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Price and Tech Stack */}
        <div className="product-footer">
          <div className="tech-stack">
            {product.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
          <motion.div
            className="product-price"
            whileHover={{ scale: 1.1 }}
          >
            {product.price}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          className="product-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <motion.span
            className="arrow"
            animate={isHovered ? { x: 5 } : { x: 0 }}
          >
            →
          </motion.span>
        </motion.button>

        {/* Animated Background Effect */}
        <motion.div
          className="card-glow"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
}
