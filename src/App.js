import React, { useState, useEffect, useRef } from 'react';

// --- Ícones para a UI ---
const AppIcon = ({ style }) => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>);
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>;
const HistoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6"></path><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>;
const WindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>;
const AwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const UserCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;

// --- PÁGINA DE LOGIN ---
const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    if (!email.trim() || !password.trim()) { setMessage({ type: 'error', text: 'Por favor, preencha todos os campos.' }); return; }
    if (email === 'usuario@viscelius.com' && password === 'senha123') {
      setMessage({ type: 'success', text: 'Login realizado com sucesso! Bem-vindo(a).' });
      setTimeout(() => onLoginSuccess(), 1000);
    } else {
      setMessage({ type: 'error', text: 'Credenciais inválidas. Tente novamente.' });
    }
  };

  const styles = {
    container: { backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
    loginBox: { padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px) saturate(150%)', WebkitBackdropFilter: 'blur(12px) saturate(150%)', borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '420px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' },
    title: { marginBottom: '0.5rem', color: '#1F2937', fontSize: '32px', fontWeight: '700' },
    subtitle: { marginBottom: '2rem', color: '#6B7280', fontSize: '16px', fontWeight: '400' },
    form: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
    inputGroup: { textAlign: 'left', position: 'relative' },
    label: { display: 'block', marginBottom: '8px', color: '#374151', fontSize: '14px', fontWeight: '600' },
    input: { width: '100%', padding: '14px 16px', fontSize: '16px', border: '1px solid #D1D5DB', borderRadius: '12px', boxSizing: 'border-box', transition: 'border-color 0.3s, box-shadow 0.3s', backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#111827' },
    button: { padding: '15px 16px', border: 'none', borderRadius: '12px', backgroundColor: '#8B5CF6', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s', marginTop: '1rem', boxShadow: '0 4px 20px 0 rgba(139, 92, 246, 0.35)'},
    message: { padding: '12px', marginTop: '1.2rem', borderRadius: '10px', textAlign: 'center', fontWeight: '500', fontSize: '14px' },
    successMessage: { backgroundColor: 'rgba(221, 247, 226, 0.9)', color: '#166534' },
    errorMessage: { backgroundColor: 'rgba(254, 226, 226, 0.9)', color: '#991B1B' },
    footer: { position: 'absolute', bottom: '20px', fontSize: '14px', color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }
  };
  
  const handleMouseOver = (e) => { e.target.style.backgroundColor = '#7C3AED'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 22px 0 rgba(124, 58, 237, 0.4)';};
  const handleMouseOut = (e) => { e.target.style.backgroundColor = '#8B5CF6'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px 0 rgba(139, 92, 246, 0.35)';};
  const handleFocus = (e) => { e.target.style.borderColor = '#8B5CF6'; e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.2)'; };
  const handleBlur = (e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <AppIcon style={{ marginBottom: '1rem', color: '#6D28D9' }} />
        <h1 style={styles.title}>Viscelius</h1>
        <p style={styles.subtitle}>Acesse sua plataforma.</p>
        <form onSubmit={handleLogin} style={styles.form} noValidate>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} style={styles.input} placeholder="seu.email@exemplo.com" required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Senha</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} style={styles.input} placeholder="••••••••" required />
          </div>
          <button type="submit" style={styles.button} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Entrar
          </button>
        </form>
         {message.text && (<div style={{...styles.message, ...(message.type === 'success' ? styles.successMessage : styles.errorMessage)}}>{message.text}</div>)}
      </div>
      <footer style={styles.footer}><p>© 2025 Viscelius. Todos os direitos reservados.</p></footer>
    </div>
  );
};


// --- PÁGINA DE INÍCIO ---
const HomePage = ({ setActivePage }) => {
  const patientData = { name: "Ana Oliveira", daysInApp: 42, sessionsCount: 8, nextSession: { date: "25 de Julho, 2025", time: "14:30", therapist: "Dr. Carlos Mendes" }, therapistInfo: { name: "Dr. Carlos Mendes", specialty: "Musicoterapeuta Clínico", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" } };
  const styles = {
    pageContainer: { padding: '2rem 3.5rem', backgroundColor: '#F9FAFB', fontFamily: '"Inter", sans-serif' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' },
    headerText: {}, welcomeTitle: { color: '#6B7280', fontSize: '1.1rem', fontWeight: '500', margin: '0' },
    patientName: { color: '#1F2937', fontSize: '2.2rem', fontWeight: '700', margin: '0' },
    notificationButton: { backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#6B7280' },
    heroCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#6D28D9', color: '#FFFFFF', padding: '2rem', borderRadius: '20px', marginBottom: '2.5rem' },
    heroInfo: {}, heroTitle: { margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', opacity: 0.9 },
    heroDateTime: { margin: '0', fontSize: '2.5rem', fontWeight: '700' },
    heroTherapist: { margin: '1rem 0 0 0', opacity: 0.8 },
    heroButton: { backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' },
    sectionTitle: { fontSize: '1.5rem', color: '#1F2937', fontWeight: '600', marginBottom: '1.5rem' },
    quickAccessGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' },
    accessCard: { display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '16px', backgroundColor: '#fff', border: '1px solid #E5E7EB', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' },
    accessCardIcon: { color: '#8B5CF6' },
    accessCardText: {}, accessCardTitle: { margin: 0, fontSize: '1.1rem', fontWeight: '600', color: '#1F2937' },
    accessCardSubtitle: { margin: '4px 0 0 0', color: '#6B7280' },
    bottomGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' },
    statsAndTherapistColumn: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    card: { backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB' },
    statCard: { display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' },
    statLabel: { color: '#6B7280', fontSize: '0.9rem' },
    statValue: { color: '#1F2937', fontSize: '1.8rem', fontWeight: '600' },
    therapistCard: { display: 'flex', alignItems: 'center', gap: '1rem' },
    therapistAvatar: { width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' },
    therapistInfo: {},
    therapistName: { margin: 0, color: '#1F2937', fontWeight: 600 },
    therapistSpecialty: { margin: 0, color: '#6B7280', fontSize: '0.9rem' },
    infoSection: { ...{gridColumn: '1 / -1', marginTop: '1.5rem'} },
    infoTitle: { color: '#1F2937', borderBottom: '2px solid #D1C4E9', paddingBottom: '0.5rem', marginBottom: '1rem' },
    infoText: { color: '#4B5563', lineHeight: '1.6' }
  };
  const handleCardHover = (e, enter) => { if (enter) { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)'; } else { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)'; } };
  
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.headerText}>
            <h2 style={styles.welcomeTitle}>Bem-vindo(a) de volta,</h2>
            <h1 style={styles.patientName}>{patientData.name}</h1>
        </div>
        <button style={styles.notificationButton} title="Notificações"><BellIcon /></button>
      </header>
      
      <div style={styles.heroCard}>
        <div style={styles.heroInfo}>
            <h3 style={styles.heroTitle}>Sua Próxima Sessão</h3>
            <p style={styles.heroDateTime}>{patientData.nextSession.date} às {patientData.nextSession.time}</p>
            <p style={styles.heroTherapist}>com {patientData.nextSession.therapist}</p>
        </div>
        <button style={styles.heroButton} onClick={() => setActivePage('agendamentos')}>Ver Detalhes</button>
      </div>

      <h2 style={styles.sectionTitle}>Acesso Rápido</h2>
      <div style={styles.quickAccessGrid}>
        <div style={styles.accessCard} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={() => setActivePage('playlists')}>
            <div style={styles.accessCardIcon}><PlayIcon /></div>
            <div style={styles.accessCardText}>
                <h3 style={styles.accessCardTitle}>Ouvir suas Playlists</h3>
                <p style={styles.accessCardSubtitle}>Sons e músicas para o seu dia.</p>
            </div>
        </div>
        <div style={styles.accessCard} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
             <div style={styles.accessCardIcon}><WindIcon/></div>
             <div style={styles.accessCardText}>
                <h3 style={styles.accessCardTitle}>Exercício de Respiração</h3>
                <p style={styles.accessCardSubtitle}>Encontre seu foco e calma.</p>
            </div>
        </div>
      </div>

       <div style={styles.bottomGrid}>
            <div style={{...styles.card, ...styles.infoSection}}>
              <h2 style={styles.infoTitle}>O que é Musicoterapia?</h2>
              <p style={styles.infoText}>
                A musicoterapia é o uso profissional da música e seus elementos como uma intervenção em ambientes médicos, educacionais e cotidianos com indivíduos, grupos, famílias ou comunidades que procuram otimizar sua qualidade de vida e melhorar sua saúde e bem-estar físico, social, comunicativo, emocional, intelectual e espiritual.
              </p>
            </div>
            <div style={styles.statsAndTherapistColumn}>
                 <div style={styles.card}>
                    <div style={styles.statCard}>
                    <div>
                        <p style={styles.statValue}>{patientData.daysInApp}</p>
                        <p style={styles.statLabel}>Dias na Plataforma</p>
                    </div>
                    <div>
                        <p style={styles.statValue}>{patientData.sessionsCount}</p>
                        <p style={styles.statLabel}>Sessões Realizadas</p>
                    </div>
                    </div>
                </div>
                <div style={{...styles.card, ...styles.therapistCard}}>
                    <img src={patientData.therapistInfo.avatar} alt={patientData.therapistInfo.name} style={styles.therapistAvatar} />
                    <div style={styles.therapistInfo}>
                        <p style={styles.therapistName}>{patientData.therapistInfo.name}</p>
                        <p style={styles.therapistSpecialty}>{patientData.therapistInfo.specialty}</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};


// --- PÁGINA DE AGENDAMENTOS ---
const AgendamentosPage = () => {
  const therapists = [
    { id: 1, name: "Dr. Carlos Mendes", specialty: "Foco e Ansiedade", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" },
    { id: 2, name: "Dra. Sofia Ribeiro", specialty: "Expressão Emocional", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Dr. Ricardo Alves", specialty: "Reabilitação Motora", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
  ];
  
  const availableSchedule = {
      "Seg, 22 Jul": ["14:00", "15:00"],
      "Ter, 23 Jul": ["11:00", "13:00", "16:00"],
      "Qua, 24 Jul": ["10:00", "11:00"],
      "Qui, 25 Jul": [],
      "Sex, 26 Jul": ["08:00", "15:00", "16:00", "17:00"],
  };

  const bookedSlots = {
      1: { "Seg, 22 Jul": [{ time: "09:00", duration: 60, patient: "Juliana F." }, { time: "10:00", duration: 60, patient: "Marcos V." }], "Qua, 24 Jul": [{ time: "14:00", duration: 60, patient: "Reservado" }] },
      2: { "Ter, 23 Jul": [{ time: "09:00", duration: 60, patient: "Beatriz L." }], },
      3: { "Sex, 26 Jul": [{ time: "10:00", duration: 120, patient: "Lucas P." }] }
  };

  const [selectedTherapist, setSelectedTherapist] = useState(therapists[0]);
  const [selectedDate, setSelectedDate] = useState(Object.keys(availableSchedule)[0]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const workHours = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, '0')}:00`);

  const styles = {
    pageContainer: { padding: '2rem 3.5rem', backgroundColor: '#F9FAFB', fontFamily: '"Inter", sans-serif' },
    header: { marginBottom: '2rem' },
    title: { color: '#1F2937', fontSize: '2.2rem', fontWeight: '700', margin: '0' },
    subtitle: { color: '#6B7280', fontSize: '1.1rem', fontWeight: '500', marginTop: '0.5rem' },
    mainContent: { display: 'grid', gridTemplateColumns: '350px 1fr', gap: '2.5rem', alignItems: 'flex-start' },
    therapistList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    therapistCard: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', cursor: 'pointer', border: '2px solid #fff', transition: 'border-color 0.2s, background-color 0.2s' },
    therapistCardSelected: { borderColor: '#8B5CF6', backgroundColor: '#F5F3FF' },
    therapistAvatar: { width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' },
    therapistInfo: {},
    therapistName: { margin: 0, color: '#1F2937', fontWeight: 600 },
    therapistSpecialty: { margin: 0, color: '#6B7280', fontSize: '0.9rem' },
    scheduleContainer: { backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden' },
    dateNavigator: { display: 'flex', borderBottom: '1px solid #E5E7EB' },
    dateButton: { flex: 1, padding: '1rem', border: 'none', background: 'none', cursor: 'pointer', color: '#6B7280', fontWeight: 500, transition: 'background-color 0.2s, color 0.2s' },
    dateButtonSelected: { backgroundColor: '#F5F3FF', color: '#6D28D9', boxShadow: 'inset 0 -2px 0 #6D28D9' },
    slotsAndCalendarContainer: { padding: '1.5rem' },
    slotsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' },
    slotButton: { padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', background: 'none', cursor: 'pointer', color: '#374151', fontWeight: 600, transition: 'background-color 0.2s, color 0.2s' },
    slotButtonSelected: { backgroundColor: '#6D28D9', color: '#fff', borderColor: '#6D28D9' },
    sessionInfo: { display: 'flex', gap: '1rem', color: '#6B7280', marginTop: '1.5rem', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid #E5E7EB' },
    infoItem: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
    bookingAction: { marginTop: '2rem', textAlign: 'right' },
    bookingButton: { backgroundColor: '#8B5CF6', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem', transition: 'background-color 0.2s' },
    visualScheduleContainer: { marginTop: '2rem' },
    visualScheduleHeader: { fontWeight: 600, color: '#374151', marginBottom: '1rem' },
    visualScheduleGrid: { display: 'flex', backgroundColor: '#fff' },
    timeColumn: { display: 'flex', flexDirection: 'column', color: '#9CA3AF', fontSize: '0.8rem', paddingTop: '15px' },
    timeLabel: { height: '60px', textAlign: 'right', paddingRight: '10px' },
    gridColumn: { flex: 1, position: 'relative', borderLeft: '1px solid #E5E7EB' },
    gridRow: { height: '60px', borderTop: '1px solid #E5E7EB' },
    appointmentBlock: { position: 'absolute', left: '5px', right: '5px', borderRadius: '8px', padding: '5px 10px', color: 'white', fontSize: '0.8rem', overflow: 'hidden' },
    appointmentBlockBooked1: { backgroundColor: 'rgba(52, 211, 153, 0.8)' },
    appointmentBlockBooked2: { backgroundColor: 'rgba(96, 165, 250, 0.8)' },
    appointmentBlockSelected: { backgroundColor: 'rgba(139, 92, 246, 0.9)', border: '2px solid #fff', zIndex: 10 },
  };

  const currentBookedSlots = bookedSlots[selectedTherapist.id]?.[selectedDate] || [];

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Agendar Sessão</h1>
        <p style={styles.subtitle}>Encontre o melhor horário para sua próxima consulta.</p>
      </header>
      <div style={styles.mainContent}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1F2937', marginBottom: '1rem' }}>Nossos Terapeutas</h2>
          <div style={styles.therapistList}>
            {therapists.map(therapist => (
              <div key={therapist.id} style={{ ...styles.therapistCard, ...(selectedTherapist.id === therapist.id && styles.therapistCardSelected) }} onClick={() => { setSelectedTherapist(therapist); setSelectedSlot(null); }}>
                <img src={therapist.avatar} alt={therapist.name} style={styles.therapistAvatar} />
                <div style={styles.therapistInfo}>
                  <p style={styles.therapistName}>{therapist.name}</p>
                  <p style={styles.therapistSpecialty}>{therapist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.scheduleContainer}>
          <div style={styles.dateNavigator}>
            {Object.keys(availableSchedule).map(day => (
              <button key={day} style={{ ...styles.dateButton, ...(selectedDate === day && styles.dateButtonSelected) }} onClick={() => { setSelectedDate(day); setSelectedSlot(null); }}>
                {day}
              </button>
            ))}
          </div>
          <div style={styles.slotsAndCalendarContainer}>
            <div>
              <p style={{ fontWeight: 600, color: '#374151' }}>Horários disponíveis para {selectedDate}:</p>
              <div style={styles.slotsGrid}>
                {availableSchedule[selectedDate].length > 0 ? availableSchedule[selectedDate].map(time => (
                  <button key={time} style={{...styles.slotButton, ...(selectedSlot === time && styles.slotButtonSelected)}} onClick={() => setSelectedSlot(time)}>
                    {time}
                  </button>
                )) : <p style={{color: '#6B7280'}}>Nenhum horário disponível para este dia.</p>}
              </div>
            </div>
            <div style={styles.sessionInfo}>
              <div style={styles.infoItem}><ClockIcon/> <span>Duração: 50 min</span></div>
              <div style={styles.infoItem}><VideoIcon/> <span>Modalidade: Online</span></div>
            </div>
            <div style={styles.visualScheduleContainer}>
                <h3 style={styles.visualScheduleHeader}>Agenda de {selectedDate}</h3>
                <div style={styles.visualScheduleGrid}>
                    <div style={styles.timeColumn}>
                        {workHours.map(hour => <div key={hour} style={styles.timeLabel}>{hour}</div>)}
                    </div>
                    <div style={styles.gridColumn}>
                        {workHours.map((hour, index) => <div key={index} style={styles.gridRow}></div>)}
                        {currentBookedSlots.map((booking, index) => {
                            const startHour = parseInt(booking.time.split(':')[0]);
                            const top = (startHour - 8) * 60;
                            const height = (booking.duration || 60) - 4;
                            return (
                                <div key={`booked-${index}`} style={{...styles.appointmentBlock, top: `${top}px`, height: `${height}px`, ...(index % 2 === 0 ? styles.appointmentBlockBooked1 : styles.appointmentBlockBooked2)}}>
                                    <b>{booking.time}</b><br/>{booking.patient}
                                </div>
                            )
                        })}
                        {selectedSlot && (
                             (() => {
                                const startHour = parseInt(selectedSlot.split(':')[0]);
                                const top = (startHour - 8) * 60;
                                const height = 50 - 4;
                                return (
                                    <div style={{...styles.appointmentBlock, ...styles.appointmentBlockSelected, top: `${top}px`, height: `${height}px`}}>
                                        <b>{selectedSlot}</b><br/>Sua Seleção
                                    </div>
                                )
                            })()
                        )}
                    </div>
                </div>
            </div>
            {selectedSlot && (
              <div style={styles.bookingAction}>
                 <button style={styles.bookingButton}>Confirmar Agendamento</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PÁGINA DE PLAYLISTS ---
const PlaylistsPage = () => {
    const audioRef = useRef(null);
    const [nowPlaying, setNowPlaying] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (track) => {
        if (nowPlaying && nowPlaying.id === track.id) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            setNowPlaying(track);
        }
    };
    
    useEffect(() => {
        if (nowPlaying && audioRef.current) {
            audioRef.current.src = nowPlaying.url;
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(error => console.error("Erro ao tocar áudio:", error));
        }
    }, [nowPlaying]);

    const mainPlaylist = { name: "Relaxamento Profundo", description: "Deixe a calma fluir com estas melodias suaves.", image: "https://images.unsplash.com/photo-1510915361894-db8b60106f34?q=80&w=2070&auto=format&fit=crop" };
    const yourPlaylists = [
        { id: 1, name: "Calma Interior", desc: "Músicas para acalmar a mente.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
        { id: 2, name: "Manhã Positiva", desc: "Comece seu dia com energia.", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
        { id: 3, name: "Sons de Chuva", desc: "Relaxe com o som da chuva.", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
    ];
    const natureSounds = [
        { id: 4, name: "Ondas do Mar", desc: "Sinta a brisa do oceano.", image: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
        { id: 5, name: "Floresta Amazônica", desc: "Conecte-se com a natureza.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
        { id: 6, name: "Pássaros da Manhã", desc: "Desperte com sons suaves.", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1925&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
    ];
    const focusFrequencies = [
      { id: 7, name: "Foco Profundo", desc: "Ondas Alpha para concentração.", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
      { id: 8, name: "Criatividade Ativa", desc: "Frequências para inspirar.", image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
      { id: 9, name: "Memória e Estudo", desc: "Melhore sua capacidade de aprender.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
    ];
     const guidedJourneys = [
      { id: 10, name: "Jornada da Gratidão", desc: "10 min de meditação guiada.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
      { id: 11, name: "Encontrando a Paz", desc: "15 min para aliviar a ansiedade.", image: "https://images.unsplash.com/photo-1597282826928-85e59239d543?q=80&w=1974&auto=format&fit=crop", url: "/audio/relaxamento-profundo.mp3" },
    ];

    const PlaylistCard = ({ item, onPlay, isPlayingNow }) => {
        const [isHovered, setIsHovered] = useState(false);
        const styles = {
            card: { backgroundColor: '#181818', borderRadius: '8px', padding: '1rem', cursor: 'pointer', transition: 'background-color 0.3s', position: 'relative', width: '180px', flexShrink: 0 },
            cardImage: { width: '100%', height: '150px', borderRadius: '6px', objectFit: 'cover', marginBottom: '1rem' },
            cardTitle: { color: '#fff', fontWeight: '600', margin: '0 0 0.25rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
            cardDesc: { color: '#b3b3b3', fontSize: '0.9rem', margin: 0 },
            playButton: { position: 'absolute', bottom: '75px', right: '20px', backgroundColor: '#8B5CF6', color: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 15px rgba(0,0,0,0.3)', transition: 'transform 0.2s, opacity 0.2s', opacity: (isHovered || isPlayingNow) ? 1 : 0, transform: (isHovered || isPlayingNow) ? 'translateY(0)' : 'translateY(10px)' }
        };
        return (
            <div style={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={item.image} alt={item.name} style={styles.cardImage} />
                <h4 style={styles.cardTitle}>{item.name}</h4>
                <p style={styles.cardDesc}>{item.desc}</p>
                <button style={styles.playButton} onClick={() => onPlay(item)}>{isPlayingNow ? <PauseIcon/> : <PlayIcon />}</button>
            </div>
        );
    };

    const PlaylistSection = ({ title, data, onPlay, nowPlaying, isPlaying }) => (
        <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>{title}</h2>
            <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                {data.map(item => <PlaylistCard key={item.id} item={item} onPlay={onPlay} isPlayingNow={nowPlaying?.id === item.id && isPlaying}/>)}
            </div>
        </section>
    );

    const PlayerBar = ({ track, onPlayPause, isPlaying }) => {
        if (!track) return null;
        const styles = {
            playerBar: { position: 'fixed', bottom: 0, left: '250px', right: 0, backgroundColor: '#181818', borderTop: '1px solid #282828', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100 },
            trackInfo: { display: 'flex', alignItems: 'center', gap: '1rem' },
            trackImage: { width: '56px', height: '56px', borderRadius: '4px', objectFit: 'cover' },
            trackDetails: {},
            trackName: { color: '#fff', fontWeight: 600, margin: 0 },
            trackDesc: { color: '#b3b3b3', margin: '4px 0 0 0' },
            controls: { display: 'flex', alignItems: 'center' },
            playPauseButton: { background: 'none', border: '2px solid #fff', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
        };
        
        return (
            <div style={styles.playerBar}>
                <div style={styles.trackInfo}>
                    <img src={track.image} alt={track.name} style={styles.trackImage} />
                    <div style={styles.trackDetails}>
                        <p style={styles.trackName}>{track.name}</p>
                        <p style={styles.trackDesc}>{track.desc}</p>
                    </div>
                </div>
                <div style={styles.controls}>
                    <button style={styles.playPauseButton} onClick={() => onPlayPause(track)}>
                        {isPlaying ? <PauseIcon/> : <PlayIcon/>}
                    </button>
                </div>
            </div>
        );
    };

    const styles = {
        pageContainer: { padding: '0 2rem', backgroundColor: '#121212', color: '#fff', fontFamily: '"Inter", sans-serif', overflowY: 'auto', height: '100vh', paddingBottom: '100px' },
        heroSection: { display: 'flex', alignItems: 'flex-end', gap: '1.5rem', padding: '4rem 2rem 2rem 2rem', marginBottom: '2rem', borderRadius: '12px', background: `linear-gradient(to top, #121212 10%, transparent 100%), url(${mainPlaylist.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '340px' },
        heroInfo: {},
        heroTitle: { fontSize: '4rem', fontWeight: '800', margin: '0 0 0.5rem 0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' },
        heroDesc: { fontSize: '1rem', color: '#e0e0e0', margin: 0 },
    };

    return (
        <div style={styles.pageContainer}>
             <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
            <div style={styles.heroSection}>
                <div style={styles.heroInfo}>
                    <h1 style={styles.heroTitle}>{mainPlaylist.name}</h1>
                    <p style={styles.heroDesc}>{mainPlaylist.description}</p>
                </div>
            </div>
            
            <PlaylistSection title="Suas Playlists" data={yourPlaylists} onPlay={handlePlayPause} nowPlaying={nowPlaying} isPlaying={isPlaying}/>
            <PlaylistSection title="Sons da Natureza" data={natureSounds} onPlay={handlePlayPause} nowPlaying={nowPlaying} isPlaying={isPlaying}/>
            <PlaylistSection title="Frequências para Foco" data={focusFrequencies} onPlay={handlePlayPause} nowPlaying={nowPlaying} isPlaying={isPlaying}/>
            <PlaylistSection title="Jornadas Guiadas" data={guidedJourneys} onPlay={handlePlayPause} nowPlaying={nowPlaying} isPlaying={isPlaying}/>
            <PlayerBar track={nowPlaying} onPlayPause={handlePlayPause} isPlaying={isPlaying} />
        </div>
    );
};


// --- PÁGINA DE HISTÓRICO ---
const HistoricoPage = () => {
    const summaryData = {
        totalSessions: 12,
        timeInApp: "3 meses",
        mainTherapist: "Dr. Carlos Mendes",
    };

    const pastSessions = [
        { id: 1, date: "18 de Julho, 2025", therapistName: "Dr. Carlos Mendes", therapistAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop", status: "Realizada", notes: "Paciente demonstrou grande avanço na expressão emocional. A playlist 'Calma Interior' foi particularmente eficaz. Recomenda-se focar em exercícios de ritmo na próxima sessão." },
        { id: 2, date: "11 de Julho, 2025", therapistName: "Dr. Carlos Mendes", therapistAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop", status: "Realizada", notes: "Sessão focada em técnicas de respiração sincronizada com sons de baixa frequência. Paciente reportou uma diminuição significativa nos níveis de ansiedade após a sessão." },
        { id: 3, date: "02 de Julho, 2025", therapistName: "Dra. Sofia Ribeiro", therapistAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop", status: "Realizada", notes: "Introdução a instrumentos de percussão para canalizar energia. Paciente mostrou-se receptivo e engajado. Próximo passo é a composição de pequenas melodias." },
        { id: 4, date: "25 de Junho, 2025", therapistName: "Dr. Carlos Mendes", therapistAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop", status: "Realizada", notes: "Primeira sessão de avaliação. Histórico e objetivos foram discutidos. Paciente busca gerenciar o estresse do dia-a-dia." },
    ];

    const [expandedSessionId, setExpandedSessionId] = useState(null);

    const toggleNotes = (sessionId) => {
        setExpandedSessionId(expandedSessionId === sessionId ? null : sessionId);
    };

    const styles = {
        pageContainer: { padding: '2rem 3.5rem', backgroundColor: '#F9FAFB', fontFamily: '"Inter", sans-serif', overflowY: 'auto', height: '100vh' },
        header: { marginBottom: '2.5rem' },
        title: { color: '#1F2937', fontSize: '2.2rem', fontWeight: '700', margin: '0' },
        subtitle: { color: '#6B7280', fontSize: '1.1rem', fontWeight: '500', marginTop: '0.5rem' },
        summaryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' },
        summaryCard: { display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB' },
        summaryIcon: { color: '#8B5CF6' },
        summaryText: {},
        summaryLabel: { color: '#6B7280', fontSize: '0.9rem', margin: 0 },
        summaryValue: { color: '#1F2937', fontSize: '1.5rem', fontWeight: '600', margin: '4px 0 0 0' },
        historyList: {},
        historyTitle: { fontSize: '1.5rem', color: '#1F2937', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' },
        sessionItem: { marginBottom: '1rem' },
        sessionCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #E5E7EB' },
        sessionTherapistInfo: { display: 'flex', alignItems: 'center', gap: '1rem' },
        therapistAvatar: { width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' },
        sessionDetails: {},
        sessionDate: { color: '#1F2937', fontWeight: 600, margin: 0 },
        sessionTherapistName: { color: '#6B7280', margin: '4px 0 0 0' },
        sessionStatus: { backgroundColor: '#E8F5E9', color: '#2E7D32', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' },
        detailsButton: { background: 'none', border: '1px solid #D1D5DB', color: '#374151', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 500, transition: 'background-color 0.2s, color 0.2s' },
        notesSection: { backgroundColor: '#F9FAFB', padding: '1.5rem', border: '1px solid #E5E7EB', borderTop: 'none', borderRadius: '0 0 12px 12px', marginTop: '-1px' },
        notesTitle: { margin: '0 0 1rem 0', color: '#374151', fontWeight: 600 },
        notesText: { margin: 0, color: '#4B5563', lineHeight: 1.6 }
    };
    
    return (
        <div style={styles.pageContainer}>
            <header style={styles.header}>
                <h1 style={styles.title}>Seu Histórico</h1>
                <p style={styles.subtitle}>Acompanhe sua jornada e progresso na plataforma.</p>
            </header>
            
            <div style={styles.summaryGrid}>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryIcon}><CheckCircleIcon /></div>
                    <div style={styles.summaryText}>
                        <p style={styles.summaryLabel}>Total de Consultas</p>
                        <p style={styles.summaryValue}>{summaryData.totalSessions}</p>
                    </div>
                </div>
                <div style={styles.summaryCard}>
                     <div style={styles.summaryIcon}><AwardIcon /></div>
                    <div style={styles.summaryText}>
                        <p style={styles.summaryLabel}>Tempo no App</p>
                        <p style={styles.summaryValue}>{summaryData.timeInApp}</p>
                    </div>
                </div>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryIcon}><UserCheckIcon /></div>
                    <div style={styles.summaryText}>
                        <p style={styles.summaryLabel}>Terapeuta Principal</p>
                        <p style={styles.summaryValue}>{summaryData.mainTherapist}</p>
                    </div>
                </div>
            </div>

            <div style={styles.historyList}>
                <h2 style={styles.historyTitle}>Consultas Realizadas</h2>
                {pastSessions.map(session => (
                    <div key={session.id} style={styles.sessionItem}>
                        <div style={{...styles.sessionCard, borderRadius: expandedSessionId === session.id ? '12px 12px 0 0' : '12px'}}>
                            <div style={styles.sessionTherapistInfo}>
                                <img src={session.therapistAvatar} alt={session.therapistName} style={styles.therapistAvatar}/>
                                <div style={styles.sessionDetails}>
                                    <p style={styles.sessionDate}>{session.date}</p>
                                    <p style={styles.sessionTherapistName}>com {session.therapistName}</p>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
                                <span style={styles.sessionStatus}>{session.status}</span>
                                <button style={styles.detailsButton} onClick={() => toggleNotes(session.id)}>
                                    {expandedSessionId === session.id ? 'Ocultar Anotações' : 'Ver Anotações'}
                                </button>
                            </div>
                        </div>
                        {expandedSessionId === session.id && (
                             <div style={styles.notesSection}>
                                <h3 style={styles.notesTitle}>Anotações da Sessão</h3>
                                <p style={styles.notesText}>{session.notes}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- PÁGINA DE PERFIL ---
const ProfilePage = ({ onLogout }) => {
    const [userData, setUserData] = useState({
        name: "Ana Oliveira",
        email: "ana.oliveira@email.com",
        phone: "+55 11 98765-4321",
        memberSince: "Março, 2025",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        plan: "Plano Premium Mensal",
    });

    const [activeView, setActiveView] = useState('main'); // 'main', 'editInfo', 'changePassword', 'manageSubscription'
    
    // Componente para a visualização principal
    const MainProfileView = () => (
        <div style={styles.rightColumn}>
             <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>Informações da Conta</h3>
                    <button style={styles.editButton} onClick={() => setActiveView('editInfo')}>Editar</button>
                </div>
                <div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Nome Completo</span><span style={styles.infoValue}>{userData.name}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Email</span><span style={styles.infoValue}>{userData.email}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Telefone</span><span style={styles.infoValue}>{userData.phone}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Membro desde</span><span style={styles.infoValue}>{userData.memberSince}</span></div>
                </div>
            </div>
            <div style={styles.card}>
                <div style={styles.cardHeader}><h3 style={styles.cardTitle}>Segurança</h3></div>
                <div style={styles.actionRow}><p style={{margin: 0, color: '#374151'}}>Senha</p><button style={styles.actionButton} onClick={() => setActiveView('changePassword')}>Alterar Senha</button></div>
            </div>
            <div style={styles.card}>
                <div style={styles.cardHeader}><h3 style={styles.cardTitle}>Assinatura e Pagamentos</h3></div>
                <div style={styles.infoRow}><span style={styles.infoLabel}>Plano Atual</span><span style={styles.infoValue}>{userData.plan}</span></div>
                <div style={styles.actionRow}><p style={{margin: 0, color: '#374151'}}>Faturamento</p><button style={styles.actionButton} onClick={() => setActiveView('manageSubscription')}>Gerenciar Assinatura</button></div>
            </div>
            <div style={styles.card}>
                <div style={styles.cardHeader}><h3 style={styles.cardTitle}>Ações da Conta</h3></div>
                <div style={styles.actionRow}><p style={{margin: 0, color: '#374151'}}>Sair de todos os dispositivos</p><button style={styles.actionButton} onClick={onLogout}>Sair</button></div>
                <div style={styles.actionRow}><p style={{margin: 0, color: '#DC2626'}}>Excluir sua conta</p><button style={styles.dangerButton}>Excluir Conta</button></div>
            </div>
        </div>
    );
    
    // Componente para a visualização de Edição de Informações
    const EditInfoView = () => (
         <div style={styles.rightColumn}>
            <div style={styles.card}>
                <div style={styles.cardHeader}><h3 style={styles.cardTitle}>Editar Informações</h3></div>
                <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div style={styles.formGroup}><label style={styles.formLabel}>Nome Completo</label><input type="text" style={styles.formInput} defaultValue={userData.name} /></div>
                    <div style={styles.formGroup}><label style={styles.formLabel}>Email</label><input type="email" style={styles.formInput} defaultValue={userData.email} /></div>
                    <div style={styles.formGroup}><label style={styles.formLabel}>Telefone</label><input type="tel" style={styles.formInput} defaultValue={userData.phone} /></div>
                    <div style={styles.formActions}>
                        <button type="button" style={styles.cancelButton} onClick={() => setActiveView('main')}>Cancelar</button>
                        <button type="submit" style={styles.saveButton}>Salvar Alterações</button>
                    </div>
                </form>
            </div>
        </div>
    );

     // Componente para a visualização de Alteração de Senha
    const ChangePasswordView = () => (
        <div style={styles.rightColumn}>
            <div style={styles.card}>
                <div style={styles.cardHeader}><h3 style={styles.cardTitle}>Alterar Senha</h3></div>
                 <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div style={styles.formGroup}><label style={styles.formLabel}>Nova Senha</label><input type="password" style={styles.formInput} /></div>
                    <div style={styles.formGroup}><label style={styles.formLabel}>Confirmar Nova Senha</label><input type="password" style={styles.formInput} /></div>
                    <div style={styles.formActions}>
                        <button type="button" style={styles.cancelButton} onClick={() => setActiveView('main')}>Cancelar</button>
                        <button type="submit" style={styles.saveButton}>Salvar Senha</button>
                    </div>
                </form>
            </div>
        </div>
    );

    // Componente para a visualização de Gerenciamento de Assinatura
    const ManageSubscriptionView = () => {
        const plans = [
            { name: "Plano Básico", price: "R$ 29,90/mês", features: ["Acesso a playlists", "Agendamento de 2 sessões/mês"], current: false },
            { name: "Plano Premium", price: "R$ 49,90/mês", features: ["Acesso ilimitado", "Agendamento de 4 sessões/mês", "Sons binaurais exclusivos"], current: true },
            { name: "Plano Família", price: "R$ 79,90/mês", features: ["Tudo do Premium", "Até 4 membros", "Playlists compartilhadas"], current: false },
        ];
        return (
            <div style={styles.rightColumn}>
                <div style={styles.card}>
                     <div style={styles.cardHeader}>
                        <h3 style={styles.cardTitle}>Gerenciar Assinatura</h3>
                        <button style={styles.cancelButton} onClick={() => setActiveView('main')}>Voltar</button>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
                        {plans.map(plan => (
                             <div key={plan.name} style={{...styles.planCard, ...(plan.current && styles.planCardCurrent)}}>
                                <h4 style={styles.planName}>{plan.name}</h4>
                                <p style={styles.planPrice}>{plan.price}</p>
                                <ul style={styles.planFeatures}>
                                    {plan.features.map(feature => <li key={feature}>{feature}</li>)}
                                </ul>
                                <button style={{...styles.planButton, ...(plan.current && styles.planButtonCurrent)}}>
                                    {plan.current ? "Seu Plano Atual" : "Escolher Plano"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    const renderActiveView = () => {
        switch (activeView) {
            case 'editInfo': return <EditInfoView />;
            case 'changePassword': return <ChangePasswordView />;
            case 'manageSubscription': return <ManageSubscriptionView />;
            case 'main':
            default: return <MainProfileView />;
        }
    };
    
    const styles = {
        pageContainer: { padding: '2rem 3.5rem', backgroundColor: '#F9FAFB', fontFamily: '"Inter", sans-serif', overflowY: 'auto', height: '100vh' },
        header: { marginBottom: '2.5rem' },
        title: { color: '#1F2937', fontSize: '2.2rem', fontWeight: '700', margin: '0' },
        mainGrid: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2.5rem' },
        leftColumn: {},
        rightColumn: { display: 'flex', flexDirection: 'column', gap: '2rem' },
        profileCard: { backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '2rem', textAlign: 'center', position: 'relative' },
        avatarContainer: { position: 'relative', width: '120px', margin: '0 auto 1rem auto' },
        avatar: { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
        avatarOverlay: { position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0, transition: 'opacity 0.3s' },
        name: { color: '#1F2937', fontSize: '1.5rem', fontWeight: 600, margin: 0 },
        email: { color: '#6B7280', margin: '0.25rem 0 0 0' },
        card: { backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '2rem' },
        cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem', marginBottom: '1.5rem' },
        cardTitle: { color: '#1F2937', fontSize: '1.2rem', fontWeight: 600, margin: 0 },
        editButton: { background: 'none', border: '1px solid #D1D5DB', color: '#374151', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 },
        infoRow: { display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0' },
        infoLabel: { color: '#6B7280' },
        infoValue: { color: '#1F2937', fontWeight: 500 },
        actionRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderTop: '1px solid #F3F4F6' },
        actionButton: { background: 'none', border: 'none', color: '#4F46E5', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' },
        dangerButton: { background: 'none', border: 'none', color: '#DC2626', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' },
        formGroup: { display: 'flex', flexDirection: 'column' },
        formLabel: { color: '#374151', fontWeight: 500, marginBottom: '0.5rem' },
        formInput: { width: '100%', padding: '12px', fontSize: '1rem', border: '1px solid #D1D5DB', borderRadius: '8px', boxSizing: 'border-box' },
        formActions: { display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' },
        cancelButton: { backgroundColor: '#fff', border: '1px solid #D1D5DB', color: '#374151', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 },
        saveButton: { backgroundColor: '#8B5CF6', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 },
        planCard: { border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' },
        planCardCurrent: { borderColor: '#8B5CF6', borderWidth: '2px', boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)' },
        planName: { margin: 0, fontSize: '1.1rem', fontWeight: 600 },
        planPrice: { margin: '0.5rem 0 1rem 0', fontSize: '1.8rem', fontWeight: 700, color: '#1F2937' },
        planFeatures: { listStyle: 'none', padding: 0, margin: 0, color: '#6B7280' },
        planButton: { marginTop: '1.5rem', width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #8B5CF6', backgroundColor: 'transparent', color: '#8B5CF6', fontWeight: 600, cursor: 'pointer' },
        planButtonCurrent: { backgroundColor: '#8B5CF6', color: '#fff' }
    };
    
    return (
        <div style={styles.pageContainer}>
             <header style={styles.header}>
                <h1 style={styles.title}>Conta e Perfil</h1>
            </header>
            <div style={styles.mainGrid}>
                <div style={styles.leftColumn}>
                    <div style={styles.profileCard}>
                        <div style={styles.avatarContainer} onMouseEnter={(e) => e.currentTarget.children[1].style.opacity = 1} onMouseLeave={(e) => e.currentTarget.children[1].style.opacity = 0}>
                            <img src={userData.avatar} alt="User Avatar" style={styles.avatar}/>
                            <div style={styles.avatarOverlay}><span>Alterar</span></div>
                        </div>
                        <h2 style={styles.name}>{userData.name}</h2>
                        <p style={styles.email}>{userData.email}</p>
                    </div>
                </div>
                {renderActiveView()}
            </div>
        </div>
    );
};


// --- BARRA DE NAVEGAÇÃO ---
const Navbar = ({ activePage, setActivePage, onLogout }) => {
  const navItems = [ 
      { id: 'home', icon: <HomeIcon />, label: 'Início' }, 
      { id: 'agendamentos', icon: <CalendarIcon />, label: 'Agendamentos' }, 
      { id: 'playlists', icon: <MusicIcon />, label: 'Playlists' }, 
      { id: 'historico', icon: <HistoryIcon />, label: 'Histórico' },
      { id: 'perfil', icon: <UserIcon />, label: 'Perfil' }
    ];
  const styles = {
    navbar: { display: 'flex', flexDirection: 'column', width: '250px', backgroundColor: '#FFFFFF', padding: '2rem 1rem', borderRight: '1px solid #E5E7EB', color: '#4B5563', flexShrink: 0 },
    logoContainer: { display: 'flex', alignItems: 'center', gap: '10px', padding: '0 1rem', marginBottom: '3rem' },
    logoText: { fontSize: '24px', fontWeight: 'bold', color: '#4C1D95' },
    navLink: { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', color: '#4B5563', fontWeight: '500', margin: '4px 0', transition: 'background-color 0.2s, color 0.2s', cursor: 'pointer' },
    navLinkActive: { backgroundColor: '#EDE9FE', color: '#6D28D9' },
    logoutButton: { marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', color: '#4B5563', fontWeight: '500', margin: '4px 0', transition: 'background-color 0.2s, color 0.2s', cursor: 'pointer' },
  };
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <AppIcon style={{ color: '#6D28D9', width: '32px', height: '32px' }} />
        <span style={styles.logoText}>Viscelius</span>
      </div>
      {navItems.map(item => ( <a key={item.id} href="#" onClick={() => setActivePage(item.id)} style={{ ...styles.navLink, ...(activePage === item.id ? styles.navLinkActive : {}) }}> {item.icon} <span>{item.label}</span> </a> ))}
       <a href="#" onClick={onLogout} style={styles.logoutButton}> <LogoutIcon/> <span>Sair</span> </a>
    </nav>
  );
};

// --- COMPONENTE PRINCIPAL APP ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogout = () => {
      setIsLoggedIn(false);
      setCurrentPage('home');
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setActivePage={setCurrentPage} />;
      case 'agendamentos': return <AgendamentosPage />;
      case 'playlists': return <PlaylistsPage />;
      case 'historico': return <HistoricoPage />;
      case 'perfil': return <ProfilePage onLogout={handleLogout} />;
      default: return <HomePage setActivePage={setCurrentPage} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar activePage={currentPage} setActivePage={setCurrentPage} onLogout={handleLogout} />
      <main style={{ flexGrow: 1, backgroundColor: '#F9FAFB', overflowY: 'auto' }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
