import React, { useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  patientInfo: string;
  symptoms: string;
  description: string;
  initialCondition: string;
  treatment: string;
  results: string[];
  treatmentMethods: string[];
  duration: string;
  sessions: string;
}

interface Testimonial {
  id: string;
  name: string;
  age: string;
  condition: string;
  content: string;
  rating: number;
  treatmentPeriod: string;
}

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'testimonials'>('cases');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: '慢性腰痛の改善事例',
      patientInfo: '50代男性 / 会社員',
      symptoms: '慢性腰痛・坐骨神経痛',
      description: '5年間続く慢性的な腰痛に悩まされ、仕事に支障をきたしていた患者様の改善事例です。',
      initialCondition: '朝起きる時の激痛、長時間座っていることができない、足のしびれが常にある状態でした。',
      treatment: '鍼治療とお灸を組み合わせ、腰部・臀部・下肢のツボを中心に施術。生活習慣の改善指導も併せて実施。',
      results: [
        '1ヶ月後：朝の痛みが50%軽減',
        '2ヶ月後：デスクワーク2時間連続可能',
        '3ヶ月後：足のしびれがほぼ消失',
        '6ヶ月後：日常生活に支障なし'
      ],
      treatmentMethods: ['鍼治療', 'お灸', '生活指導', 'ストレッチ指導'],
      duration: '6ヶ月',
      sessions: '週2回 → 週1回 → 月2回'
    },
    {
      id: '2',
      title: '肩こり・頭痛の改善事例',
      patientInfo: '30代女性 / デスクワーカー',
      symptoms: '慢性的な肩こり・緊張型頭痛',
      description: '毎日のデスクワークによる肩こりから頭痛が頻発し、仕事の集中力が低下していた事例です。',
      initialCondition: '首・肩の可動域制限、週に3-4回の頭痛、目の疲れ、睡眠の質の低下がありました。',
      treatment: '首・肩周辺の鍼治療を中心に、頭部・顔面のツボも使用。デスクワーク時の姿勢指導も実施。',
      results: [
        '2週間後：頭痛の頻度が半減',
        '1ヶ月後：肩の可動域が改善',
        '2ヶ月後：頭痛がほぼなくなる',
        '3ヶ月後：予防のため月1回通院'
      ],
      treatmentMethods: ['鍼治療', '首肩マッサージ', '姿勢指導', 'セルフケア指導'],
      duration: '3ヶ月',
      sessions: '週2回 → 週1回 → 月1回'
    },
    {
      id: '3',
      title: '不眠症の改善事例',
      patientInfo: '40代男性 / 営業職',
      symptoms: '慢性不眠・ストレス',
      description: '仕事のストレスから不眠症になり、疲労が蓄積して日常生活に影響が出ていた事例です。',
      initialCondition: '入眠困難、夜中に何度も目が覚める、朝の疲労感、日中の集中力低下がありました。',
      treatment: '自律神経を整える鍼治療とお灸を実施。ストレス軽減のためのツボを重点的に施術。',
      results: [
        '1週間後：入眠時間が短縮',
        '2週間後：夜中の覚醒が減少',
        '1ヶ月後：朝の目覚めが改善',
        '2ヶ月後：良質な睡眠を確保'
      ],
      treatmentMethods: ['鍼治療', 'お灸', 'リラクゼーション指導', '生活リズム改善'],
      duration: '2ヶ月',
      sessions: '週2回 → 週1回'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'T.M様',
      age: '50代',
      condition: '慢性腰痛',
      content: '5年間苦しんだ腰痛が、さくら鍼灸院の治療で本当に改善しました。佐藤院長は私の話をよく聞いてくださり、生活習慣の改善まで丁寧に指導してくれました。今では趣味のゴルフも楽しめるようになり、感謝の気持ちでいっぱいです。',
      rating: 5,
      treatmentPeriod: '6ヶ月'
    },
    {
      id: '2',
      name: 'A.S様',
      age: '30代',
      condition: '肩こり・頭痛',
      content: 'デスクワークによる肩こりと頭痛に悩まされていましたが、こちらで治療を受けてから劇的に改善しました。鍼は初めてで不安でしたが、痛みもほとんどなく、施術後は体がとても軽くなります。今では予防のために定期的に通っています。',
      rating: 5,
      treatmentPeriod: '3ヶ月'
    },
    {
      id: '3',
      name: 'K.Y様',
      age: '40代',
      condition: '不眠症',
      content: '仕事のストレスで眠れない日が続いていましたが、鍼灸治療を受けるようになってから質の良い睡眠がとれるようになりました。院長先生は症状だけでなく、生活面でのアドバイスもしてくださり、心身ともに健康になれました。',
      rating: 5,
      treatmentPeriod: '2ヶ月'
    },
    {
      id: '4',
      name: 'M.T様',
      age: '60代',
      condition: '膝痛・冷え性',
      content: '年齢とともに膝の痛みと冷えに悩んでいましたが、お灸治療がとても効果的でした。体が温まり、膝の痛みも軽減されました。院内は清潔で居心地がよく、毎回リラックスして治療を受けています。これからもお世話になりたいと思います。',
      rating: 5,
      treatmentPeriod: '4ヶ月'
    },
    {
      id: '5',
      name: 'R.I様',
      age: '20代',
      condition: '美容鍼',
      content: '美容鍼を受けるようになってから、肌のハリとツヤが明らかに改善しました。友人からも「肌がきれいになったね」と言われるようになり、とても嬉しいです。自然な美しさを引き出してくれる美容鍼は、エステとはまた違った良さがあります。',
      rating: 5,
      treatmentPeriod: '継続中'
    },
    {
      id: '6',
      name: 'H.N様',
      age: '70代',
      condition: '往診治療',
      content: '足が不自由になり通院が困難でしたが、往診していただけるので本当に助かっています。自宅でリラックスして治療を受けられ、体調も良好を保てています。佐藤院長の人柄も素晴らしく、家族のように親身になってくださいます。',
      rating: 5,
      treatmentPeriod: '1年以上'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#ffd700' : '#ddd', fontSize: '1.2rem' }}>
        ★
      </span>
    ));
  };

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2c8aa6', textAlign: 'center' }}>
        🌸 患者様の声・改善事例
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.8', 
        color: '#4a5568', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        当院で治療を受けられた患者様の改善事例と、<br />
        実際にいただいたお声をご紹介いたします
      </p>

      {/* タブ切り替え */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '3rem'
      }}>
        <button
          onClick={() => setActiveTab('cases')}
          style={{
            padding: '12px 24px',
            border: 'none',
            backgroundColor: activeTab === 'cases' ? '#2c8aa6' : '#f8f9fa',
            color: activeTab === 'cases' ? 'white' : '#333',
            borderRadius: '8px 0 0 8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          🩺 改善事例
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          style={{
            padding: '12px 24px',
            border: 'none',
            backgroundColor: activeTab === 'testimonials' ? '#2c8aa6' : '#f8f9fa',
            color: activeTab === 'testimonials' ? 'white' : '#333',
            borderRadius: '0 8px 8px 0',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          💬 患者様の声
        </button>
      </div>

      {/* 改善事例 */}
      {activeTab === 'cases' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                border: '2px solid #e0f2e7',
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '3rem' }}>
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      backgroundColor: '#2c8aa6',
                      color: 'white',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {caseStudy.patientInfo}
                    </span>
                    <span style={{
                      backgroundColor: '#f0f8f5',
                      color: '#2c8aa6',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      border: '1px solid #2c8aa6'
                    }}>
                      {caseStudy.symptoms}
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    color: '#2c8aa6'
                  }}>
                    {caseStudy.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#4a5568',
                    marginBottom: '2rem',
                    lineHeight: '1.7'
                  }}>
                    {caseStudy.description}
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  <div style={{
                    backgroundColor: '#f9f9f9',
                    padding: '2rem',
                    borderRadius: '10px'
                  }}>
                    <h4 style={{
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      color: '#2c8aa6',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      😰 初回時の状態
                    </h4>
                    <p style={{
                      color: '#4a5568',
                      lineHeight: '1.7',
                      fontSize: '1.1rem'
                    }}>
                      {caseStudy.initialCondition}
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#f0f8f5',
                    padding: '2rem',
                    borderRadius: '10px'
                  }}>
                    <h4 style={{
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      color: '#2c8aa6',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      🩺 治療内容
                    </h4>
                    <p style={{
                      color: '#4a5568',
                      lineHeight: '1.7',
                      marginBottom: '1rem',
                      fontSize: '1.1rem'
                    }}>
                      {caseStudy.treatment}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap'
                    }}>
                      {caseStudy.treatmentMethods.map((method, index) => (
                        <span key={index} style={{
                          backgroundColor: '#2c8aa6',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '15px',
                          fontSize: '0.9rem'
                        }}>
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div style={{
                  marginTop: '2rem',
                  backgroundColor: '#e8f5e8',
                  padding: '2rem',
                  borderRadius: '10px'
                }}>
                  <h4 style={{
                    fontSize: '1.4rem',
                    marginBottom: '1rem',
                    color: '#2c8aa6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    ✨ 改善の経過
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    {caseStudy.results.map((result, index) => (
                      <div key={index} style={{
                        backgroundColor: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        border: '1px solid #c6f6d5'
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          marginBottom: '0.5rem'
                        }}>
                          ✅
                        </div>
                        <p style={{
                          color: '#2c8aa6',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          margin: 0
                        }}>
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'space-around',
                  textAlign: 'center',
                  backgroundColor: '#f8f9fa',
                  padding: '1.5rem',
                  borderRadius: '10px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#2c8aa6'
                    }}>
                      {caseStudy.duration}
                    </div>
                    <p style={{ color: '#666', margin: 0 }}>治療期間</p>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#2c8aa6'
                    }}>
                      {caseStudy.sessions}
                    </div>
                    <p style={{ color: '#666', margin: 0 }}>通院頻度</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 患者様の声 */}
      {activeTab === 'testimonials' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #e0f2e7'
              }}
            >
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    backgroundColor: '#2c8aa6',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {testimonial.age}
                  </span>
                  <span style={{
                    backgroundColor: '#f0f8f5',
                    color: '#2c8aa6',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    border: '1px solid #2c8aa6'
                  }}>
                    {testimonial.condition}
                  </span>
                </div>
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#4a5568',
                margin: '0 0 2rem 0',
                fontStyle: 'italic',
                flex: 1,
                backgroundColor: '#f8fffe',
                padding: '1.5rem',
                borderRadius: '10px',
                borderLeft: '4px solid #2c8aa6'
              }}>
                "{testimonial.content}"
              </blockquote>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                backgroundColor: '#f0f8f5',
                padding: '1rem',
                borderRadius: '10px'
              }}>
                <div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: '#2c8aa6', 
                    marginBottom: '0.25rem',
                    fontSize: '1.1rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    治療期間：{testimonial.treatmentPeriod}
                  </div>
                </div>
                <div style={{
                  fontSize: '2rem'
                }}>
                  🌸
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;