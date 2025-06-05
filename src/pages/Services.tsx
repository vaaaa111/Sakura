import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🪡',
      title: '鍼治療',
      description: '伝統的な鍼治療で、痛みの根本原因にアプローチします。肩こり、腰痛、頭痛などの慢性的な痛みに効果的です。',
      features: ['肩こり・首こり', '腰痛・ぎっくり腰', '頭痛・偏頭痛', '神経痛', '関節痛'],
      price: '初診：6,000円　再診：5,000円',
      duration: '施術時間：約60分'
    },
    {
      icon: '🔥',
      title: 'お灸治療',
      description: '天然のもぐさを使用したお灸治療で、体の冷えを改善し、免疫力を高めます。',
      features: ['冷え性改善', '免疫力向上', '疲労回復', '不眠症', '消化器系の不調'],
      price: '初診：5,500円　再診：4,500円',
      duration: '施術時間：約45分'
    },
    {
      icon: '💆',
      title: '美容鍼',
      description: '顔への鍼治療により、血行を促進し、お肌のハリやツヤを改善します。自然な美しさを引き出します。',
      features: ['リフトアップ', 'シワ・たるみ改善', '血色改善', 'むくみ解消', 'ニキビ・肌荒れ'],
      price: '初診：8,000円　再診：7,000円',
      duration: '施術時間：約70分'
    },
    {
      icon: '🌿',
      title: '小児鍼',
      description: '刺さない鍼を使用した、お子様専用の治療法です。夜泣きや疳の虫、アトピーなどに優しくアプローチします。',
      features: ['夜泣き・疳の虫', 'アトピー性皮膚炎', '小児喘息', '食欲不振', '成長促進'],
      price: '一律：3,000円',
      duration: '施術時間：約30分'
    },
    {
      icon: '🏥',
      title: '往診治療',
      description: 'ご自宅や施設への出張治療も承っております。通院が困難な方もお気軽にご相談ください。',
      features: ['ご自宅への出張', '介護施設への出張', '寝たきりの方対応', '車椅子の方対応', '定期往診可能'],
      price: '基本料金＋交通費',
      duration: '要相談'
    },
    {
      icon: '💪',
      title: '健康相談・予防ケア',
      description: '病気の予防や健康維持のためのアドバイスを行います。生活習慣の改善もサポートいたします。',
      features: ['健康チェック', '生活習慣アドバイス', 'ストレス管理', '運動指導', '食事指導'],
      price: '初回：3,000円　再診：2,000円',
      duration: '相談時間：約30分'
    }
  ];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#2c8aa6', textAlign: 'center' }}>
        🌸 施術メニュー
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.8', 
        color: '#4a5568', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 1rem'
      }}>
        さくら鍼灸院では、お一人おひとりの症状に合わせた<br />
        様々な治療メニューをご用意しております。
      </p>
      
      <p style={{ 
        fontSize: '1rem', 
        color: '#666', 
        textAlign: 'center',
        margin: '0 auto 4rem'
      }}>
        ※料金は全て税込み価格です。初診の方は別途初診料1,000円を頂戴いたします。
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            padding: '2.5rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '2px solid #e0f2e7',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {service.icon}
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              color: '#2c8aa6',
              textAlign: 'center'
            }}>
              {service.title}
            </h3>
            
            <p style={{
              color: '#4a5568',
              lineHeight: '1.7',
              marginBottom: '2rem',
              fontSize: '1.1rem'
            }}>
              {service.description}
            </p>
            
            <h4 style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              color: '#2c8aa6'
            }}>
              対応症状：
            </h4>
            
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '2rem'
            }}>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={{
                  padding: '0.5rem 0',
                  color: '#4a5568',
                  borderBottom: featureIndex < service.features.length - 1 ? '1px solid #f0f8f5' : 'none',
                  fontSize: '1rem'
                }}>
                  🌿 {feature}
                </li>
              ))}
            </ul>
            
            <div style={{
              backgroundColor: '#f0f8f5',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#2c8aa6',
                marginBottom: '0.5rem'
              }}>
                {service.price}
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#666'
              }}>
                {service.duration}
              </div>
            </div>
            
            <button style={{
              backgroundColor: '#2c8aa6',
              color: 'white',
              border: 'none',
              padding: '15px 24px',
              fontSize: '1.1rem',
              borderRadius: '25px',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.3s ease'
            }}>
              📞 ご予約・お問い合わせ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;