import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#ffffff', 
      padding: '1rem 2rem', 
      borderBottom: '1px solid #e6e6e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4a5568', textDecoration: 'none' }}>
        🌸 さくら鍼灸院
      </Link>
      <nav>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0, 
          gap: '2rem' 
        }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>ホーム</Link></li>
          <li><Link to="/about" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>院について</Link></li>
          <li><Link to="/services" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>施術メニュー</Link></li>
          <li><Link to="/portfolio" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>患者様の声</Link></li>
          <li><Link to="/blog" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>健康コラム</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none', color: '#666666', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#333333'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>アクセス・予約</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;