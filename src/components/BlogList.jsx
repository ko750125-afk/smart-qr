import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/posts';
import AdSenseContainer from './AdSenseContainer';

function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Marketing', 'Design', 'Tech', 'Security'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="blog-container">
      <div className="blog-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem', background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          QR Code Guide & Insights
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore professional design tips, tech trends, and marketing strategies to make your QR codes work smarter.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filters" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.2s ease',
              backgroundColor: activeCategory === category ? '#1e293b' : '#f1f5f9',
              color: activeCategory === category ? '#ffffff' : '#475569',
              boxShadow: activeCategory === category ? '0 4px 12px rgba(30, 41, 59, 0.15)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Safe Ad Placement Area (35px Margin-bottom Included) */}
      <AdSenseContainer style={{ margin: '0 0 35px 0' }} />

      {/* Blog Cards Grid */}
      <motion.div
        className="blog-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          width: '100%'
        }}
      >
        {filteredPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.article
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                transition: 'border-color 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ 
                  backgroundColor: '#f1f5f9', 
                  color: '#1e293b', 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <BookOpen size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#0f172a', 
                marginBottom: '0.75rem',
                lineHeight: 1.4
              }}>
                {post.title}
              </h3>

              <p style={{ 
                color: '#475569', 
                fontSize: '0.925rem', 
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                flexGrow: 1
              }}>
                {post.excerpt}
              </p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid #f8fafc'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  color: '#2563eb', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px' 
                }}>
                  Read Post <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default BlogList;
