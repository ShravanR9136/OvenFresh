import React, { useState } from 'react';
import { 
  FaShoppingCart, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaStar, 
  FaBiking, 
  FaShoppingBag,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaUtensils,
  FaBirthdayCake,
  FaBreadSlice,
  FaIceCream,
  FaTag,
  FaHeart,
  FaSearch,
  FaTimes
} from 'react-icons/fa';
import { 
  menuItems, 
  testimonials, 
  specialOffers, 
  businessInfo, 
  categories 
} from '../data/bakerydata';
import './BakeryLanding.css';

const BakeryLanding = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('cakes');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const filteredItems = menuItems[activeCategory]?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bakery-landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon"><img src="https://tse2.mm.bing.net/th/id/OIP.A1TRjmObuldMU11q2cZqswHaIE?pid=Api&P=0&h=180" height={"40px"} alt="" /></div>
            <div>
              <h1>Ovenfresh</h1>
              <span>Cakes & Desserts</span>
            </div>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#offers" onClick={() => setIsMobileMenuOpen(false)}>Offers</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search cakes, pastries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <FaTimes 
                  className="clear-search" 
                  onClick={() => setSearchTerm('')}
                />
              )}
            </div>

            <div className="cart-container">
              <button 
                className="cart-btn"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FaShoppingCart />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </button>

              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button onClick={() => setIsCartOpen(false)}>×</button>
                  </div>
                  <div className="cart-items">
                    {cart.length === 0 ? (
                      <p className="empty-cart">Your cart is empty</p>
                    ) : (
                      cart.map(item => (
                        <div key={item.cartId} className="cart-item">
                          <div className="cart-item-info">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">₹{item.price}</span>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => removeFromCart(item.cartId)}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  {cart.length > 0 && (
                    <div className="cart-footer">
                      <div className="cart-total">
                        <span>Total: ₹{getCartTotal()}</span>
                      </div>
                      <button className="btn primary checkout-btn">
                        Proceed to Checkout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaStar /> Most Loved Bakery in Marol
            </div>
            <h1>Freshly Baked <span className="highlight">Happiness</span> Every Day</h1>
            <p>Indulge in our artisanal cakes, pastries, and desserts crafted with love and the finest ingredients. Delivered fresh to your doorstep in Mumbai.</p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Google Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">2K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">30min</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href={businessInfo.socialMedia.swiggy} className="btn primary" target="_blank" rel="noopener noreferrer">
                <FaBiking /> Order Delivery
              </a>
              <a href={businessInfo.socialMedia.zomato} className="btn secondary" target="_blank" rel="noopener noreferrer">
                <FaShoppingBag /> Pickup Order
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="floating-card card-1">
              <span>Red Velvet</span>
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop" alt="Red Velvet Cake" />
            </div>
            <div className="floating-card card-2">
                   <span>Chocolate Eclaier</span>
              <img src="https://tse3.mm.bing.net/th/id/OIP.qIIvGgqFnZ6maTxCUwntdwHaHQ?pid=Api&P=0&h=180" alt="Chocolate Eclairs" />
            </div>
            <div className="floating-card card-3">
                <span>Chicken Puffs </span>
              <img src="https://tse1.mm.bing.net/th/id/OIP.o2Od0S-TrXx9xrvF27JSgwHaEK?pid=Api&P=0&h=180" alt="Chicken Puffs" />
              </div>
              <div className="floating-card card-4">
              <span>Swissmiss</span>
              <img src="https://tse1.mm.bing.net/th/id/OIP.7jm2P5Hys7rs3el42IBSKgHaEo?pid=Api&P=0&h=180" alt="Red Velvet Cake" />
            </div>
            <div className="floating-card card-5">
                   <span>Sweet Rolls</span>
              <img src="https://tse3.mm.bing.net/th/id/OIP.aubcbqeXla84PTCHJ7sbUwHaI9?pid=Api&P=0&h=180" alt="Chocolate Eclairs" />
            </div>
            <div className="floating-card card-6">
                <span>Cup Cakes</span>
              <img src="https://tse2.mm.bing.net/th/id/OIP.etD7XlUhQ78vUkx1Ar8JugHaFw?pid=Api&P=0&h=180" alt="Chicken Puffs" />
              </div>
            
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="offers-section">
        <div className="container">
          <div className="section-header">
            <h2>Special Offers 🎁</h2>
            <p>Don't miss out on these sweet deals</p>
          </div>
          <div className="offers-grid">
            {specialOffers.map(offer => (
              <div key={offer.id} className="offer-card">
                <div className="offer-badge">
                  <FaTag />
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-code">
                  Use code: <strong>{offer.code}</strong>
                </div>
                <div className="offer-validity">
                  Valid until: {offer.validUntil}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Delicious Creations</h2>
            <p>Freshly baked with love and premium ingredients</p>
          </div>

          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems?.map(item => (
              <div key={item.id} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  {item.popular && <span className="popular-badge"><FaHeart /> Popular</span>}
                  {item.tags?.map(tag => (
                    <span key={tag} className="tag-badge">{tag}</span>
                  ))}
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="item-footer">
                    <span className="price">₹{item.price}</span>
                    <button 
                      className="add-to-cart"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say 💝</h2>
            <p>Join our family of happy customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="customer-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="customer-info">
                    <strong>{testimonial.name}</strong>
                    <div className="rating">
                      {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.comment}"</p>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Visit Our Bakery</h2>
              <p>Come experience the freshness and aroma of our bakery</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h3>Our Location</h3>
                    <p>{businessInfo.address}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div>
                    <h3>Opening Hours</h3>
                    <p>Everyday: 8:00 AM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h3>Call Us</h3>
                    <p>{businessInfo.phone}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaWhatsapp className="contact-icon" />
                  <div>
                    <h3>WhatsApp</h3>
                    <p>{businessInfo.whatsapp}</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us for Fresh Updates</h4>
                <div className="social-icons">
                  <a href={businessInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={businessInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <div className="map-section">
              <div className="map-placeholder">
                <FaMapMarkerAlt className="map-icon" />
                <p>Map showing location in Marol, Andheri East</p>
                <small>Interactive map would be integrated here</small>
              </div>
              
              <div className="delivery-info">
                <h3>🚚 Delivery Information</h3>
                <ul>
                  <li>Minimum order: ₹{businessInfo.delivery.minOrder}</li>
                  <li>Delivery time: {businessInfo.delivery.deliveryTime}</li>
                  <li>Free delivery on orders above ₹500</li>
                  <li>Serving: {businessInfo.delivery.areas.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-icon">🍰</div>
                <div>
                  <h3>Ovenfresh</h3>
                  <span>Cakes & Desserts</span>
                </div>
              </div>
              <p>Freshly baked happiness delivered to your doorstep in Mumbai.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#menu">Our Menu</a>
              <a href="#offers">Special Offers</a>
              <a href="#testimonials">Reviews</a>
              <a href="#contact">Contact Us</a>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📍 {businessInfo.address}</p>
              <p>📞 {businessInfo.phone}</p>
              <p>🕒 8:00 AM - 11:00 PM</p>
            </div>
            
            <div className="footer-section">
              <h4>Order Online</h4>
              <div className="footer-buttons">
                <a href={businessInfo.socialMedia.swiggy} className="btn outline small">Swiggy</a>
                <a href={businessInfo.socialMedia.zomato} className="btn outline small">Zomato</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Ovenfresh Cakes and Desserts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BakeryLanding;