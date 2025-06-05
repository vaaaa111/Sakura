import React, { useState, useEffect } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
  duration: number;
}

interface TreatmentMenu {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
}

const Contact: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [reservationStep, setReservationStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    symptoms: '',
    message: ''
  });

  const treatmentMenus: TreatmentMenu[] = [
    { id: 'acupuncture', name: '鍼治療', price: 6000, duration: 60, description: '伝統的な鍼治療で体のバランスを整えます' },
    { id: 'moxibustion', name: 'お灸治療', price: 5000, duration: 45, description: '温熱効果で血行を促進し、免疫力を向上' },
    { id: 'beauty', name: '美容鍼', price: 8000, duration: 75, description: '顔面部の鍼で自然な美しさを引き出します' },
    { id: 'pediatric', name: '小児鍼', price: 3000, duration: 30, description: '刺さない鍼で小さなお子様も安心' },
    { id: 'combination', name: '鍼灸コンビネーション', price: 9000, duration: 90, description: '鍼とお灸を組み合わせた総合治療' },
    { id: 'consultation', name: '健康相談・予防ケア', price: 4000, duration: 45, description: '生活習慣のアドバイスと軽度の施術' }
  ];

  // 営業日・時間の設定（実際のシステムでは管理画面で設定）
  const generateTimeSlots = (date: string, treatmentDuration: number) => {
    const slots: TimeSlot[] = [];
    const dayOfWeek = new Date(date).getDay();
    
    // 日曜日は休診
    if (dayOfWeek === 0) return slots;
    
    // 営業時間設定
    const morningStart = 9;
    const morningEnd = 12;
    const afternoonStart = 14;
    const afternoonEnd = dayOfWeek === 6 ? 15 : 18; // 土曜日は15時まで
    
    // 午前の枠
    for (let hour = morningStart; hour < morningEnd; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      slots.push({
        time,
        available: Math.random() > 0.3, // ランダムで空き状況をシミュレート
        price: treatmentMenus.find(t => t.id === selectedTreatment)?.price || 0,
        duration: treatmentDuration
      });
      
      if (hour < morningEnd - 1) {
        const time30 = `${hour.toString().padStart(2, '0')}:30`;
        slots.push({
          time: time30,
          available: Math.random() > 0.3,
          price: treatmentMenus.find(t => t.id === selectedTreatment)?.price || 0,
          duration: treatmentDuration
        });
      }
    }
    
    // 午後の枠
    for (let hour = afternoonStart; hour < afternoonEnd; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      slots.push({
        time,
        available: Math.random() > 0.3,
        price: treatmentMenus.find(t => t.id === selectedTreatment)?.price || 0,
        duration: treatmentDuration
      });
      
      if (hour < afternoonEnd - 1) {
        const time30 = `${hour.toString().padStart(2, '0')}:30`;
        slots.push({
          time: time30,
          available: Math.random() > 0.3,
          price: treatmentMenus.find(t => t.id === selectedTreatment)?.price || 0,
          duration: treatmentDuration
        });
      }
    }
    
    return slots;
  };

  useEffect(() => {
    if (selectedDate && selectedTreatment) {
      const treatment = treatmentMenus.find(t => t.id === selectedTreatment);
      if (treatment) {
        const slots = generateTimeSlots(selectedDate, treatment.duration);
        setAvailableSlots(slots);
      }
    }
  }, [selectedDate, selectedTreatment]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTimeSlot('');
  };

  const handleTreatmentChange = (treatmentId: string) => {
    setSelectedTreatment(treatmentId);
    setSelectedTimeSlot('');
  };

  const handleTimeSlotSelect = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleNextStep = () => {
    setReservationStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setReservationStep(prev => prev - 1);
  };

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirmReservation = () => {
    const selectedTreatmentData = treatmentMenus.find(t => t.id === selectedTreatment);
    alert(`ご予約が完了しました！

【予約詳細】
施術メニュー: ${selectedTreatmentData?.name}
料金: ¥${selectedTreatmentData?.price.toLocaleString()}
日時: ${new Date(selectedDate).toLocaleDateString('ja-JP')} ${selectedTimeSlot}
施術時間: 約${selectedTreatmentData?.duration}分

お名前: ${customerInfo.name}
お電話: ${customerInfo.phone}
メール: ${customerInfo.email}

予約確認メールをお送りいたします。
ご来院をお待ちしております。

（デモモードで動作中）`);
    
    // リセット
    setReservationStep(1);
    setSelectedDate('');
    setSelectedTreatment('');
    setSelectedTimeSlot('');
    setCustomerInfo({ name: '', phone: '', email: '', symptoms: '', message: '' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    return `${date.getMonth() + 1}月${date.getDate()}日(${dayNames[date.getDay()]})`;
  };

  const isWeekend = (dateString: string) => {
    const dayOfWeek = new Date(dateString).getDay();
    return dayOfWeek === 0; // 日曜日は休診
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#333333', textAlign: 'center', fontWeight: '600' }}>
        オンライン予約システム
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.8', 
        color: '#666666', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        リアルタイム空き状況を確認して、今すぐご予約いただけます
      </p>

      {/* ステップインジケーター */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '3rem',
        gap: '1rem'
      }}>
        {[1, 2, 3, 4].map(step => (
          <div
            key={step}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: reservationStep >= step ? '#4a5568' : '#f5f5f5',
              color: reservationStep >= step ? 'white' : '#999999',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: reservationStep >= step ? 'none' : '1px solid #e6e6e6'
            }}
          >
            {step}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* ステップ1: メニュー選択 */}
        {reservationStep === 1 && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333333', textAlign: 'center', fontWeight: '600' }}>
              1. 施術メニューを選択
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {treatmentMenus.map(treatment => (
                <div
                  key={treatment.id}
                  onClick={() => handleTreatmentChange(treatment.id)}
                  style={{
                    padding: '2rem',
                    border: selectedTreatment === treatment.id ? '2px solid #4a5568' : '1px solid #e6e6e6',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: selectedTreatment === treatment.id ? '#f8f8f8' : 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{ fontSize: '1.4rem', color: '#333333', marginBottom: '1rem', fontWeight: '600' }}>
                    {treatment.name}
                  </h3>
                  <p style={{ color: '#666666', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {treatment.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333333' }}>
                      ¥{treatment.price.toLocaleString()}
                    </span>
                    <span style={{ color: '#888888', fontSize: '0.9rem' }}>
                      約{treatment.duration}分
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedTreatment && (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: '#4a5568',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  次へ：日時を選択 →
                </button>
              </div>
            )}
          </div>
        )}

        {/* ステップ2: 日付選択 */}
        {reservationStep === 2 && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333333', textAlign: 'center', fontWeight: '600' }}>
              2. 日付を選択
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '1.2rem',
                  border: '1px solid #e6e6e6',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}
              />
            </div>
            
            {selectedDate && isWeekend(selectedDate) && (
              <div style={{
                backgroundColor: '#fff3cd',
                border: '2px solid #ffeaa7',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <span style={{ color: '#856404' }}>
                  申し訳ございません。日曜日は休診日です。他の日程をお選びください。
                </span>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={handlePrevStep}
                style={{
                  backgroundColor: 'transparent',
                  color: '#4a5568',
                  border: '2px solid #4a5568',
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                ← 前に戻る
              </button>
              
              {selectedDate && !isWeekend(selectedDate) && (
                <button
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: '#4a5568',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  次へ：時間を選択 →
                </button>
              )}
            </div>
          </div>
        )}

        {/* ステップ3: 時間選択 */}
        {reservationStep === 3 && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a5568', textAlign: 'center' }}>
              3️⃣ 時間を選択
            </h2>
            
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
              {formatDate(selectedDate)} の空き状況
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {availableSlots.map(slot => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                  disabled={!slot.available}
                  style={{
                    padding: '12px',
                    border: selectedTimeSlot === slot.time ? '3px solid #4a5568' : '2px solid #e0f2e7',
                    borderRadius: '8px',
                    backgroundColor: 
                      !slot.available ? '#f5f5f5' :
                      selectedTimeSlot === slot.time ? '#f0f8f5' : 'white',
                    color: !slot.available ? '#999' : '#333',
                    cursor: slot.available ? 'pointer' : 'not-allowed',
                    fontSize: '1rem',
                    fontWeight: selectedTimeSlot === slot.time ? 'bold' : 'normal'
                  }}
                >
                  {slot.time}
                  {!slot.available && (
                    <div style={{ fontSize: '0.8rem', color: '#999' }}>×</div>
                  )}
                </button>
              ))}
            </div>
            
            {availableSlots.filter(slot => slot.available).length === 0 && (
              <div style={{
                backgroundColor: '#fff3cd',
                border: '2px solid #ffeaa7',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <span style={{ color: '#856404' }}>
                  申し訳ございません。この日は空きがございません。他の日程をお選びください。
                </span>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={handlePrevStep}
                style={{
                  backgroundColor: 'transparent',
                  color: '#4a5568',
                  border: '2px solid #4a5568',
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                ← 前に戻る
              </button>
              
              {selectedTimeSlot && (
                <button
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: '#4a5568',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  次へ：お客様情報入力 →
                </button>
              )}
            </div>
          </div>
        )}

        {/* ステップ4: お客様情報入力 */}
        {reservationStep === 4 && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4a5568', textAlign: 'center' }}>
              4️⃣ お客様情報入力
            </h2>
            
            {/* 予約内容確認 */}
            <div style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#4a5568', marginBottom: '1rem', fontWeight: '600' }}>予約内容確認</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem 1rem' }}>
                <span style={{ fontWeight: 'bold' }}>メニュー:</span>
                <span>{treatmentMenus.find(t => t.id === selectedTreatment)?.name}</span>
                <span style={{ fontWeight: 'bold' }}>料金:</span>
                <span>¥{treatmentMenus.find(t => t.id === selectedTreatment)?.price.toLocaleString()}</span>
                <span style={{ fontWeight: 'bold' }}>日時:</span>
                <span>{formatDate(selectedDate)} {selectedTimeSlot}</span>
                <span style={{ fontWeight: 'bold' }}>施術時間:</span>
                <span>約{treatmentMenus.find(t => t.id === selectedTreatment)?.duration}分</span>
              </div>
            </div>
            
            {/* お客様情報フォーム */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568', fontWeight: 'bold' }}>
                  お名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleCustomerInfoChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e6e6e6',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568', fontWeight: 'bold' }}>
                  お電話番号 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleCustomerInfoChange}
                  required
                  placeholder="例: 03-1234-5678"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e6e6e6',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568', fontWeight: 'bold' }}>
                  メールアドレス *
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleCustomerInfoChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e6e6e6',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568', fontWeight: 'bold' }}>
                  症状・お悩み
                </label>
                <textarea
                  name="symptoms"
                  value={customerInfo.symptoms}
                  onChange={handleCustomerInfoChange}
                  rows={3}
                  placeholder="痛みのある部位、症状の詳細などをお聞かせください"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e6e6e6',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <button
                onClick={handlePrevStep}
                style={{
                  backgroundColor: 'transparent',
                  color: '#4a5568',
                  border: '2px solid #4a5568',
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                ← 前に戻る
              </button>
              
              {customerInfo.name && customerInfo.phone && customerInfo.email && (
                <button
                  onClick={handleConfirmReservation}
                  style={{
                    backgroundColor: '#4a5568',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  🎉 予約を確定する
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* クリニック情報 */}
      <div data-section="clinic-info" style={{ marginTop: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4a5568', textAlign: 'center' }}>
          🌸 当院のご案内
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '2rem', backgroundColor: '#f7f8fa', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#4a5568', fontWeight: '600' }}>
              📞 お電話でのご予約・お問い合わせ
            </h3>
            <p style={{ color: '#333', margin: '0 0 0.5rem 0', fontSize: '1.8rem', fontWeight: 'bold' }}>03-5555-1234</p>
            <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>受付時間: 月〜金 9:00-18:00、土 9:00-15:00</p>
          </div>
          
          <div style={{ padding: '2rem', backgroundColor: '#f7f8fa', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#4a5568', fontWeight: '600' }}>
              📍 アクセス
            </h3>
            <p style={{ color: '#333', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>🌸 さくら鍼灸院</p>
            <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>東京都渋谷区神宮前3-15-8 さくらビル2F</p>
            <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>JR原宿駅 徒歩5分</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;