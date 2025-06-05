import React from 'react';

interface HealthArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  icon: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'お知らせ' | '休診' | 'キャンペーン';
  isImportant: boolean;
}

const Blog: React.FC = () => {
  const healthArticles: HealthArticle[] = [
    {
      id: '1',
      title: '春の養生法〜季節の変わり目を健やかに過ごすために〜',
      excerpt: '春は肝の季節とされています。季節の変わり目に起こりやすい体調不良を予防し、春を健やかに過ごすための養生法をご紹介します。',
      date: '2024-06-01',
      category: '季節の養生',
      readTime: '約5分',
      icon: '🌸'
    },
    {
      id: '2',
      title: '肩こり解消！自宅でできる簡単ストレッチ',
      excerpt: 'デスクワークによる肩こりに悩む方必見。毎日続けられる簡単なストレッチ方法で、肩こりを予防・改善しましょう。',
      date: '2024-05-28',
      category: '健康ケア',
      readTime: '約3分',
      icon: '💪'
    },
    {
      id: '3',
      title: '鍼灸治療のメカニズム〜なぜ鍼は効くのか？〜',
      excerpt: '鍼灸治療がなぜ効果的なのか、現代医学的な観点から分かりやすく解説します。治療への理解を深めてみませんか。',
      date: '2024-05-25',
      category: '治療について',
      readTime: '約7分',
      icon: '🩺'
    },
    {
      id: '4',
      title: '質の良い睡眠のための生活習慣',
      excerpt: '不眠に悩む方が増えています。良質な睡眠を得るための生活習慣の改善点をご紹介します。',
      date: '2024-05-20',
      category: '健康ケア',
      readTime: '約6分',
      icon: '🌙'
    },
    {
      id: '5',
      title: '冷え性改善のツボ押しマッサージ',
      excerpt: '冷え性にお悩みの方におすすめの、自宅で簡単にできるツボ押しマッサージをご紹介します。',
      date: '2024-05-15',
      category: 'セルフケア',
      readTime: '約4分',
      icon: '🔥'
    },
    {
      id: '6',
      title: '美容鍼の効果とメカニズム',
      excerpt: '自然な美しさを引き出す美容鍼。その効果的なメカニズムと期待できる変化について詳しく解説します。',
      date: '2024-05-10',
      category: '美容鍼',
      readTime: '約5分',
      icon: '✨'
    }
  ];

  const announcements: Announcement[] = [
    {
      id: '1',
      title: '夏季休診のお知らせ',
      content: '8月13日（火）〜8月16日（金）まで夏季休診とさせていただきます。ご迷惑をおかけいたしますが、ご理解のほどよろしくお願いいたします。',
      date: '2024-06-01',
      type: '休診',
      isImportant: true
    },
    {
      id: '2',
      title: '美容鍼キャンペーンのお知らせ',
      content: '6月1日〜6月30日まで、美容鍼初回体験価格5,000円（通常8,000円）でご提供いたします。この機会にぜひお試しください。',
      date: '2024-05-28',
      type: 'キャンペーン',
      isImportant: false
    },
    {
      id: '3',
      title: '診療時間変更のお知らせ',
      content: '6月より木曜日の診療時間を19時まで延長いたします。お仕事帰りの方もお気軽にご利用ください。',
      date: '2024-05-25',
      type: 'お知らせ',
      isImportant: false
    },
    {
      id: '4',
      title: 'ホームページリニューアルのお知らせ',
      content: 'より見やすく、分かりやすいホームページにリニューアルいたしました。ご不明な点がございましたらお気軽にお問い合わせください。',
      date: '2024-05-20',
      type: 'お知らせ',
      isImportant: false
    }
  ];

  const categories = ['全て', '季節の養生', '健康ケア', '治療について', 'セルフケア', '美容鍼'];
  const [selectedCategory, setSelectedCategory] = React.useState('全て');
  const [activeTab, setActiveTab] = React.useState<'articles' | 'announcements'>('articles');

  const filteredArticles = selectedCategory === '全て' 
    ? healthArticles 
    : healthArticles.filter(article => article.category === selectedCategory);

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2c8aa6', textAlign: 'center' }}>
        🌸 健康コラム・お知らせ
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.8', 
        color: '#4a5568', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        健康に関する情報や当院からのお知らせを<br />
        定期的にお届けしております
      </p>

      {/* タブ切り替え */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '3rem'
      }}>
        <button
          onClick={() => setActiveTab('articles')}
          style={{
            padding: '12px 24px',
            border: 'none',
            backgroundColor: activeTab === 'articles' ? '#2c8aa6' : '#f8f9fa',
            color: activeTab === 'articles' ? 'white' : '#333',
            borderRadius: '8px 0 0 8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          📚 健康コラム
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          style={{
            padding: '12px 24px',
            border: 'none',
            backgroundColor: activeTab === 'announcements' ? '#2c8aa6' : '#f8f9fa',
            color: activeTab === 'announcements' ? 'white' : '#333',
            borderRadius: '0 8px 8px 0',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          📢 お知らせ
        </button>
      </div>

      {/* 健康コラム */}
      {activeTab === 'articles' && (
        <div>
          {/* カテゴリフィルター */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 16px',
                  border: selectedCategory === category ? '2px solid #2c8aa6' : '2px solid #ddd',
                  backgroundColor: selectedCategory === category ? '#2c8aa6' : 'white',
                  color: selectedCategory === category ? 'white' : '#333',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 健康コラム一覧 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredArticles.map(article => (
              <article
                key={article.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid #e0f2e7'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(44, 138, 166, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ padding: '2rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{article.icon}</span>
                      <span style={{
                        backgroundColor: '#2c8aa6',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {article.category}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>
                      {new Date(article.date).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '1rem',
                    color: '#2c8aa6',
                    lineHeight: '1.5'
                  }}>
                    {article.title}
                  </h3>
                  
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}>
                    {article.excerpt}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#f0f8f5',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>
                      📖 {article.readTime}
                    </span>
                    <button style={{
                      backgroundColor: '#2c8aa6',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}>
                      続きを読む →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>
                選択されたカテゴリの記事がありません
              </p>
            </div>
          )}
        </div>
      )}

      {/* お知らせ */}
      {activeTab === 'announcements' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {announcements.map(announcement => (
            <div
              key={announcement.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '2rem',
                overflow: 'hidden',
                border: announcement.isImportant ? '3px solid #ff6b6b' : '2px solid #e0f2e7'
              }}
            >
              {announcement.isImportant && (
                <div style={{
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  🚨 重要なお知らせ
                </div>
              )}
              
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    backgroundColor: 
                      announcement.type === '休診' ? '#ff9800' :
                      announcement.type === 'キャンペーン' ? '#4caf50' : '#2c8aa6',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {announcement.type === '休診' ? '🏥' : 
                     announcement.type === 'キャンペーン' ? '🎉' : '📢'} {announcement.type}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    {new Date(announcement.date).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#2c8aa6'
                }}>
                  {announcement.title}
                </h3>
                
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontSize: '1.1rem'
                }}>
                  {announcement.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;