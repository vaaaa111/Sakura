import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/contact');
  };

  const handleAccessClick = () => {
    navigate('/contact');
    // ページ遷移後にアクセス情報までスクロール
    setTimeout(() => {
      const element = document.querySelector('[data-section="clinic-info"]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '4rem 2rem',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderBottom: '1px solid #e6e6e6'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#4a5568',
        fontWeight: '600'
      }}>
        🌸 さくら鍼灸院
      </h1>
      <p style={{
        fontSize: '1.3rem',
        color: '#666666',
        maxWidth: '700px',
        margin: '0 auto 1rem',
        lineHeight: '1.8'
      }}>
        地域の皆様に愛され続けて30年。<br />
        経験豊富な院長が、一人ひとりに合わせた丁寧な施術で<br />
        あなたの健康をサポートいたします。
      </p>
      <p style={{
        fontSize: '1.1rem',
        color: '#888888',
        maxWidth: '600px',
        margin: '0 auto 2rem'
      }}>
        肩こり・腰痛・頭痛・不眠・ストレスなど、お気軽にご相談ください
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={handleReservationClick}
          style={{
            backgroundColor: '#4a5568',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2d3748';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a5568';
          }}
        >
          予約・お問い合わせ
        </button>
        <button 
          onClick={handleAccessClick}
          style={{
            backgroundColor: 'transparent',
            color: '#4a5568',
            border: '2px solid #4a5568',
            padding: '15px 30px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4a5568';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#4a5568';
          }}
        >
          アクセス・営業時間
        </button>
      </div>
    </section>
  );
};

export default Hero;