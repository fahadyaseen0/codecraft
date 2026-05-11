export default function ProductsSimple() {
  const products = [
    {
      title: 'CodeCraft POS Suite',
      icon: '🏪',
      description: 'Centralized POS, inventory and finance system.',
      price: 'PKR 50,000'
    },
    {
      title: 'CodeCraft Commerce',
      icon: '🛒',
      description: 'Next.js based E-commerce platform.',
      price: 'PKR 75,000'
    },
    {
      title: 'Custom Dashboards',
      icon: '📊',
      description: 'Business dashboards & analytics.',
      price: 'Custom'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional Products
          </h1>
          <p className="hero-subtitle">
            Explore our flagship MERN stack products
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}</div>
                <button className="product-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
