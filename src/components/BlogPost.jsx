import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/posts';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem' }}>Post Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>The article you are looking for does not exist.</p>
        <Link to="/blog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          backgroundColor: '#1e293b',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600
        }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="blog-post-detail" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 0 3rem' }}>
      {/* Back Button */}
      <Link to="/blog" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#64748b',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '2rem',
        transition: 'color 0.2s ease',
      }}
      className="back-link"
      >
        <ArrowLeft size={16} /> Back to Insights
      </Link>

      {/* Post Metadata Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
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
          <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} />
            {post.date}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BookOpen size={14} />
            {post.readTime}
          </span>
        </div>

        <h1 style={{ 
          fontSize: '2.4rem', 
          fontWeight: 800, 
          color: '#0f172a', 
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem'
        }}>
          {post.title}
        </h1>

        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', borderRadius: '2px' }}></div>
      </header>

      {/* Post Content Area */}
      <div className="post-content" style={{ 
        color: '#334155', 
        fontSize: '1.1rem', 
        lineHeight: 1.8,
        letterSpacing: '0.01em'
      }}>
        {post.content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1.75rem' }}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Bottom Card for Call to Action */}
      <div style={{ 
        marginTop: '3.5rem', 
        padding: '2rem', 
        backgroundColor: '#f8fafc', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Need a smart QR code?</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Generate custom high-resolution codes instantly for free.</p>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '10px 24px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
          transition: 'all 0.2s ease'
        }}
        className="cta-btn"
        >
          Create QR Code
        </Link>
      </div>
    </article>
  );
}

export default BlogPost;
