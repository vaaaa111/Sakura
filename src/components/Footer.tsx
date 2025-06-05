import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#4a5568',
      color: '#fff',
      padding: '3rem 2rem 2rem',
      marginTop: '4rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* 院情報 */}
          <div>
            <h4 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#ffffff'
            }}>
              🌸 さくら鍼灸院
            </h4>
            <p style={{ 
              color: '#e2e8f0', 
              margin: '0.8rem 0',
              lineHeight: '1.6'
            }}>
              地域の皆様に愛され続けて30年。<br />
              一人ひとりに合わせた丁寧な施術で<br />
              健康をサポートいたします。
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#e2e8f0', margin: '0.5rem 0', fontWeight: '500' }}>
                📞 03-5555-1234
              </p>
              <p style={{ color: '#e2e8f0', margin: '0.5rem 0', fontSize: '0.9rem' }}>
                受付時間: 月〜金 9:00-18:00、土 9:00-15:00
              </p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 style={{ 
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#ffffff'
            }}>
              サイトメニュー
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  ホーム
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/about" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  院について
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  施術メニュー
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/portfolio" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  患者様の声
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/blog" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  健康コラム
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/contact" style={{ 
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                >
                  アクセス・予約
                </Link>
              </li>
            </ul>
          </div>

          {/* アクセス情報 */}
          <div>
            <h4 style={{ 
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#ffffff'
            }}>
              アクセス
            </h4>
            <div style={{ color: '#e2e8f0' }}>
              <p style={{ margin: '0.8rem 0', lineHeight: '1.6' }}>
                <strong style={{ color: '#ffffff' }}>🌸 さくら鍼灸院</strong><br />
                〒150-0001<br />
                東京都渋谷区神宮前3-15-8<br />
                さくらビル2F
              </p>
              <p style={{ margin: '0.8rem 0', fontSize: '0.9rem' }}>
                🚃 JR原宿駅 徒歩5分<br />
                🚇 地下鉄表参道駅 徒歩7分
              </p>
            </div>
          </div>
        </div>

        {/* 診療時間 */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h4 style={{ 
            marginBottom: '1rem',
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            ⏰ 診療時間
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            textAlign: 'center'
          }}>
            <div>
              <span style={{ fontWeight: '600', color: '#ffffff' }}>月〜金</span><br />
              <span style={{ color: '#e2e8f0' }}>9:00-12:00 / 14:00-18:00</span>
            </div>
            <div>
              <span style={{ fontWeight: '600', color: '#ffffff' }}>土曜日</span><br />
              <span style={{ color: '#e2e8f0' }}>9:00-15:00</span>
            </div>
            <div>
              <span style={{ fontWeight: '600', color: '#ff9999' }}>日曜・祝日</span><br />
              <span style={{ color: '#ffcccc' }}>休診</span>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0, 
            color: '#e2e8f0',
            fontSize: '0.9rem'
          }}>
            © 2024 さくら鍼灸院. All rights reserved.
          </p>
          <p style={{ 
            margin: '0.5rem 0 0', 
            color: '#b8d4ff',
            fontSize: '0.8rem'
          }}>
            健康保険取扱い・各種クレジットカード対応
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;