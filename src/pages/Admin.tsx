import React, { useState, useEffect } from 'react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: string;
}

const Admin: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/contact');
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.data);
      } else {
        setError('データの取得に失敗しました');
      }
    } catch (err) {
      setError('サーバーに接続できません');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 簡単なパスワード認証（実際のサイトではもっと安全な方法を使用）
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('パスワードが間違っています');
    }
  };

  // ログインしていない場合はログイン画面を表示
  if (!isAuthenticated) {
    return (
      <div style={{ 
        padding: '4rem 2rem', 
        maxWidth: '400px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
          管理者ログイン
        </h1>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
              管理者パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          {error && (
            <p style={{ color: 'red', margin: 0 }}>{error}</p>
          )}
          
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              fontSize: '1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            ログイン
          </button>
        </form>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '5px',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p><strong>デモ用パスワード:</strong> admin123</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>お問い合わせ管理</h1>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>お問い合わせ管理</h1>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={fetchContacts} style={{ padding: '10px 20px', marginTop: '1rem' }}>
          再試行
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#333' }}>
        お問い合わせ管理
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          受信したお問い合わせ: {contacts.length}件
        </p>
        <button 
          onClick={fetchContacts}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          更新
        </button>
      </div>

      {contacts.length === 0 ? (
        <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', padding: '2rem' }}>
          まだお問い合わせはありません
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {contacts.map((contact) => (
            <div
              key={contact._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <strong>お名前:</strong> {contact.name}
                </div>
                <div>
                  <strong>メール:</strong> {contact.email}
                </div>
                <div>
                  <strong>会社名:</strong> {contact.company || '未入力'}
                </div>
                <div>
                  <strong>受信日時:</strong> {new Date(contact.createdAt).toLocaleString('ja-JP')}
                </div>
              </div>
              
              <div>
                <strong>メッセージ:</strong>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '5px',
                  marginTop: '0.5rem',
                  border: '1px solid #eee'
                }}>
                  {contact.message}
                </div>
              </div>
              
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <a 
                  href={`mailto:${contact.email}`}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '0.9rem'
                  }}
                >
                  返信する
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;