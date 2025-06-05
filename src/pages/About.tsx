import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#2c8aa6', textAlign: 'center' }}>
        🌸 院について
      </h1>
      
      {/* 院長紹介 */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
          gap: '3rem',
          alignItems: 'center',
          backgroundColor: '#f0f8f5',
          padding: '3rem',
          borderRadius: '15px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#2c8aa6',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              fontWeight: 'bold'
            }}>
              佐藤
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2c8aa6' }}>
              佐藤 健一郎
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '1rem' }}>
              院長・鍼灸師
            </p>
            <div style={{
              backgroundColor: '#2c8aa6',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              はり師・きゅう師 国家資格取得
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#2c8aa6' }}>
              院長ごあいさつ
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#4a5568', marginBottom: '1.5rem' }}>
              この度は、さくら鍼灸院のホームページをご覧いただき、ありがとうございます。
              院長の佐藤健一郎と申します。
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#4a5568', marginBottom: '1.5rem' }}>
              当院は1994年の開院以来、地域の皆様の健康をサポートしてまいりました。
              「一人ひとりに寄り添う治療」をモットーに、患者様のお話をしっかりとお聞きし、
              症状の根本的な改善を目指した施術を心がけております。
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#4a5568' }}>
              お体の不調でお悩みの方、健康維持をお考えの方、
              どんな小さなことでもお気軽にご相談ください。
              皆様のお越しを心よりお待ちしております。
            </p>
          </div>
        </div>
      </section>

      {/* 院の特徴・理念 */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c8aa6', textAlign: 'center' }}>
          当院の理念
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              icon: '❤️',
              title: '心に寄り添う治療',
              description: 'お一人おひとりのお話をじっくりとお聞きし、心身ともに健康になっていただけるよう努めております。'
            },
            {
              icon: '🌱',
              title: '根本からの改善',
              description: '症状の表面的な緩和だけでなく、根本的な原因を見つけ出し、体質改善を目指します。'
            },
            {
              icon: '🤝',
              title: '地域密着の医療',
              description: '地域の皆様に愛され、信頼される鍼灸院として、30年間歩み続けてまいりました。'
            }
          ].map((item, index) => (
            <div key={index} style={{
              padding: '2rem',
              backgroundColor: '#fff',
              borderRadius: '12px',
              textAlign: 'center',
              border: '2px solid #e0f2e7',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c8aa6' }}>
                {item.title}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.7' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 院の歴史・実績 */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c8aa6', textAlign: 'center' }}>
          院の歴史
        </h2>
        <div style={{
          backgroundColor: '#f0f8f5',
          padding: '3rem',
          borderRadius: '15px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '3rem', color: '#2c8aa6', fontWeight: 'bold' }}>
                30年
              </div>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>開院からの歩み</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', color: '#2c8aa6', fontWeight: 'bold' }}>
                15,000人
              </div>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>延べ施術者数</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', color: '#2c8aa6', fontWeight: 'bold' }}>
                98%
              </div>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>患者様満足度</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c8aa6' }}>
              1994年〜現在まで
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
              開院以来、地域の皆様に支えられながら、伝統的な鍼灸治療を通じて
              多くの方々の健康回復・維持に貢献してまいりました。
              これからも変わらぬ想いで、皆様の健康をサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* 院内設備・資格 */}
      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c8aa6', textAlign: 'center' }}>
          院内設備・資格
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            border: '2px solid #e0f2e7'
          }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#2c8aa6' }}>
              🏥 院内設備
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                '完全個室の治療室',
                '最新の衛生管理システム',
                '使い捨て鍼の徹底使用',
                'バリアフリー対応',
                '駐車場完備（3台）'
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.5rem 0',
                  color: '#4a5568',
                  borderBottom: index < 4 ? '1px solid #f0f8f5' : 'none'
                }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            border: '2px solid #e0f2e7'
          }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#2c8aa6' }}>
              📜 資格・認定
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'はり師国家資格',
                'きゅう師国家資格',
                '日本鍼灸師会会員',
                '県鍼灸師会理事',
                '継続研修修了証'
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.5rem 0',
                  color: '#4a5568',
                  borderBottom: index < 4 ? '1px solid #f0f8f5' : 'none'
                }}>
                  🏆 {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;