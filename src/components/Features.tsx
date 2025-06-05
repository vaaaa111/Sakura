import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🩺',
      title: '豊富な実績と経験',
      description: '30年以上の施術実績を持つ院長が、一人ひとりの症状に合わせた最適な治療をご提供いたします。'
    },
    {
      icon: '🌿',
      title: '安心・安全な施術',
      description: '使い捨て鍼の使用、徹底した衛生管理により、安心して施術を受けていただけます。'
    },
    {
      icon: '💆',
      title: 'オーダーメイド治療',
      description: '症状の根本原因を見つけ、お一人おひとりの体質・症状に合わせた治療プランをご提案いたします。'
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c8aa6'
        }}>
          さくら鍼灸院の特徴
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              padding: '2rem',
              backgroundColor: '#f0f8f5',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #e0f2e7',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#2c8aa6'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;