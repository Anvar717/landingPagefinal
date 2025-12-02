<template>
  <div class="page-about">
    <!-- Animated Background -->
    <div class="animated-bg">
      <div class="gradient-mesh"></div>
      <div class="floating-orb orb-1"></div>
      <div class="floating-orb orb-2"></div>
      <div class="floating-orb orb-3"></div>
      <div class="noise-overlay"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-glow"></div>
      
      <div class="container">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>О платформе FreelanceHub</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-line">Мы создаём</span>
          <span class="title-line gradient-line">будущее фриланса</span>
        </h1>
        
        <p class="hero-description">
          FreelanceHub — это не просто площадка для заказов. Это экосистема, 
          которая объединяет таланты с возможностями по всему миру.
        </p>

        <div class="hero-stats">
          <div class="stat-pill">
            <span class="stat-number">50K+</span>
            <span class="stat-text">Пользователей</span>
          </div>
          <div class="stat-pill">
            <span class="stat-number">15</span>
            <span class="stat-text">Стран</span>
          </div>
          <div class="stat-pill">
            <span class="stat-number">2020</span>
            <span class="stat-text">Год основания</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mission Section -->
    <section class="section mission-section">
      <div class="container">
        <div class="mission-layout">
          <div class="mission-left">
            <div class="section-badge green">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="3"/>
              </svg>
              <span>Наша миссия</span>
            </div>
            
            <h2 class="section-heading">
              Создаём пространство для 
              <span class="highlight-text">качественной работы</span>
            </h2>
          </div>
          
          <div class="mission-right">
            <p class="mission-paragraph">
              Мы верим, что каждый талант заслуживает признания, а каждый бизнес — 
              доступа к лучшим специалистам. Наша миссия — устранить барьеры между 
              профессионалами и компаниями.
            </p>
            <p class="mission-paragraph">
              FreelanceHub делает фриланс простым, безопасным и выгодным для всех 
              участников процесса. Мы инвестируем в технологии, которые помогают 
              людям работать эффективнее.
            </p>
          </div>
        </div>

        <div class="visual-showcase">
          <div class="showcase-card">
            <div class="card-inner">
              <div class="card-rings">
                <span class="ring ring-1"></span>
                <span class="ring ring-2"></span>
                <span class="ring ring-3"></span>
              </div>
              <div class="card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="8" stroke="currentColor" stroke-width="2"/>
                  <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                  <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" stroke-width="1" opacity="0.3"/>
                  <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" stroke-width="1" opacity="0.3"/>
                </svg>
              </div>
              <div class="card-label">Глобальная сеть</div>
            </div>
          </div>
          
          <div class="showcase-card">
            <div class="card-inner">
              <div class="card-bars">
                <span class="bar" style="--height: 40%"></span>
                <span class="bar" style="--height: 70%"></span>
                <span class="bar" style="--height: 55%"></span>
                <span class="bar" style="--height: 90%"></span>
                <span class="bar" style="--height: 65%"></span>
              </div>
              <div class="card-label">Рост платформы</div>
            </div>
          </div>
          
          <div class="showcase-card">
            <div class="card-inner">
              <div class="card-nodes">
                <span class="node node-1"></span>
                <span class="node node-2"></span>
                <span class="node node-3"></span>
                <span class="node node-4"></span>
                <svg class="node-lines" width="100%" height="100%">
                  <line x1="30%" y1="30%" x2="70%" y2="30%" stroke="currentColor" stroke-width="1"/>
                  <line x1="30%" y1="70%" x2="70%" y2="70%" stroke="currentColor" stroke-width="1"/>
                  <line x1="30%" y1="30%" x2="30%" y2="70%" stroke="currentColor" stroke-width="1"/>
                  <line x1="70%" y1="30%" x2="70%" y2="70%" stroke="currentColor" stroke-width="1"/>
                </svg>
              </div>
              <div class="card-label">Связи</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Problems Section -->
    <section class="section problems-section">
      <div class="container">
        <div class="section-header centered">
          <div class="section-badge coral">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
            </svg>
            <span>Проблемы рынка</span>
          </div>
          <h2 class="section-heading centered-heading">
            Что мы <span class="highlight-coral">решаем</span>
          </h2>
          <p class="section-subtext">
            Мы видим проблемы, которые мешают эффективной работе на рынке фриланса
          </p>
        </div>
        
        <div class="problems-grid">
          <div class="problem-card">
            <div class="problem-number">01</div>
            <div class="problem-icon-wrap coral">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 19h20L12 2z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="problem-title">Небезопасные сделки</h3>
            <p class="problem-text">Заказчики боятся платить вперёд, фрилансеры — работать без предоплаты. Мошенничество подрывает доверие.</p>
            <div class="problem-glow"></div>
          </div>
          
          <div class="problem-card">
            <div class="problem-number">02</div>
            <div class="problem-icon-wrap amber">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="10" cy="10" r="6"/>
                <line x1="21" y1="21" x2="15" y2="15"/>
              </svg>
            </div>
            <h3 class="problem-title">Сложный поиск</h3>
            <p class="problem-text">Трудно найти проверенного специалиста или надёжного заказчика среди тысяч профилей.</p>
            <div class="problem-glow amber"></div>
          </div>
          
          <div class="problem-card">
            <div class="problem-number">03</div>
            <div class="problem-icon-wrap blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 6h16v12H12l-4 4v-4H4V6z"/>
                <line x1="8" y1="10" x2="16" y2="10"/>
                <line x1="8" y1="14" x2="12" y2="14"/>
              </svg>
            </div>
            <h3 class="problem-title">Плохая коммуникация</h3>
            <p class="problem-text">Отсутствие удобных инструментов для общения и управления проектами создаёт хаос.</p>
            <div class="problem-glow blue"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="section values-section">
      <div class="values-bg"></div>
      
      <div class="container">
        <div class="section-header centered">
          <div class="section-badge purple">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 5h5l-4 3 2 5-5-4-5 4 2-5-4-3h5l2-5z"/>
            </svg>
            <span>Ценности</span>
          </div>
          <h2 class="section-heading centered-heading">
            Наши <span class="highlight-purple">принципы</span>
          </h2>
        </div>
        
        <div class="values-grid">
          <div class="value-card glass">
            <div class="value-icon-wrap">
              <div class="icon-glow coral"></div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="14" cy="14" r="10"/>
                <line x1="14" y1="8" x2="14" y2="20"/>
                <line x1="8" y1="14" x2="20" y2="14"/>
              </svg>
            </div>
            <h3 class="value-title">Прозрачность</h3>
            <p class="value-text">Честные правила, понятные комиссии, открытая система рейтингов. Никаких скрытых условий.</p>
            <div class="value-accent coral"></div>
          </div>
          
          <div class="value-card glass">
            <div class="value-icon-wrap green">
              <div class="icon-glow green"></div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 3L6 7v6c0 5 3 9 8 10 5-1 8-5 8-10V7l-8-4z"/>
                <polyline points="10,14 13,17 18,11"/>
              </svg>
            </div>
            <h3 class="value-title">Безопасность</h3>
            <p class="value-text">Защита сделок, верификация пользователей, поддержка в спорах. Ваши деньги в безопасности.</p>
            <div class="value-accent green"></div>
          </div>
          
          <div class="value-card glass">
            <div class="value-icon-wrap purple">
              <div class="icon-glow purple"></div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 3l2.5 5 5.5 1-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-1 2.5-5z"/>
              </svg>
            </div>
            <h3 class="value-title">Качество</h3>
            <p class="value-text">Только проверенные специалисты и реальные отзывы клиентов. Мы следим за стандартами.</p>
            <div class="value-accent purple"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="section team-section">
      <div class="container">
        <div class="team-layout">
          <div class="team-content">
            <div class="section-badge green">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="6" cy="6" r="2"/>
                <circle cx="10" cy="6" r="2"/>
                <circle cx="8" cy="10" r="2"/>
              </svg>
              <span>Команда</span>
            </div>
            
            <h2 class="section-heading">
              Люди, которые<br>
              <span class="highlight-text">создают</span> продукт
            </h2>
            
            <p class="team-description">
              Мы — команда из 30+ профессионалов: разработчики, дизайнеры, маркетологи и специалисты поддержки. Объединены общей целью — сделать фриланс лучше.
            </p>
            
            <a href="/contacts" class="cta-button">
              <span>Связаться с нами</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 9h10M10 5l4 4-4 4"/>
              </svg>
            </a>
          </div>
          
          <div class="team-visual">
            <div class="avatar-constellation">
              <div class="avatar-item" style="--delay: 0s; --x: 0; --y: 0">
                <span class="avatar coral">А</span>
              </div>
              <div class="avatar-item" style="--delay: 0.1s; --x: 80px; --y: -20px">
                <span class="avatar green">М</span>
              </div>
              <div class="avatar-item" style="--delay: 0.2s; --x: 40px; --y: 70px">
                <span class="avatar purple">Д</span>
              </div>
              <div class="avatar-item" style="--delay: 0.3s; --x: -40px; --y: 70px">
                <span class="avatar teal">Е</span>
              </div>
              <div class="avatar-item" style="--delay: 0.4s; --x: -80px; --y: -20px">
                <span class="avatar amber">И</span>
              </div>
              <div class="avatar-item" style="--delay: 0.5s; --x: 120px; --y: 40px">
                <span class="avatar pink">О</span>
              </div>
              <div class="avatar-item" style="--delay: 0.6s; --x: -120px; --y: 40px">
                <span class="avatar more">+24</span>
              </div>
            </div>
            <div class="constellation-glow"></div>
          </div>
        </div>
      </div>
    </section>
    
    <FinalCtaSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'О платформе — FreelanceHub',
  description: 'Узнайте больше о FreelanceHub — современной платформе для фрилансеров и заказчиков.'
})
</script>

<style scoped>
/* ===== Base Variables ===== */
.page-about {
  --coral: #ff6b4a;
  --coral-light: #ff8a6b;
  --coral-dark: #e55a3a;
  --green: #39d98a;
  --green-light: #57e5a0;
  --green-dark: #2db872;
  --purple: #a78bfa;
  --purple-light: #c4b5fd;
  --teal: #22d3ee;
  --amber: #fbbf24;
  --pink: #ec4899;
  --blue: #3b82f6;
  
  position: relative;
  overflow-x: hidden;
}

/* ===== Animated Background ===== */
.animated-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}

.gradient-mesh {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(255, 107, 74, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 60% 60% at 80% 20%, rgba(57, 217, 138, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse 50% 80% at 60% 80%, rgba(167, 139, 250, 0.08) 0%, transparent 50%);
  animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.05) rotate(1deg); }
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 15s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 107, 74, 0.25) 0%, transparent 70%);
  top: -20%;
  right: -15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(57, 217, 138, 0.2) 0%, transparent 70%);
  bottom: 20%;
  left: -20%;
  animation-delay: -5s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%);
  top: 40%;
  right: 10%;
  animation-delay: -10s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.noise-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
}

/* ===== Hero Section ===== */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 160px 0 100px;
  text-align: center;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(255, 107, 74, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--green);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.hero-title {
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 32px;
}

.title-line {
  display: block;
}

.gradient-line {
  background: linear-gradient(135deg, var(--coral) 0%, var(--coral-light) 50%, var(--green) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 50px;
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-pill:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 107, 74, 0.3);
  transform: translateY(-4px);
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--coral), var(--coral-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* ===== Section Styles ===== */
.section {
  padding: 120px 0;
  position: relative;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 107, 74, 0.1);
  border: 1px solid rgba(255, 107, 74, 0.2);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--coral);
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-badge.green {
  background: rgba(57, 217, 138, 0.1);
  border-color: rgba(57, 217, 138, 0.2);
  color: var(--green);
}

.section-badge.purple {
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.2);
  color: var(--purple);
}

.section-badge.coral {
  background: rgba(255, 107, 74, 0.1);
  border-color: rgba(255, 107, 74, 0.2);
  color: var(--coral);
}

.section-heading {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.centered-heading {
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.highlight-text {
  background: linear-gradient(135deg, var(--green), var(--teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight-coral {
  background: linear-gradient(135deg, var(--coral), var(--coral-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight-purple {
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header.centered {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtext {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ===== Mission Section ===== */
.mission-section {
  background: linear-gradient(180deg, transparent 0%, rgba(57, 217, 138, 0.03) 50%, transparent 100%);
}

.mission-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  margin-bottom: 80px;
}

.mission-paragraph {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

/* Visual Showcase */
.visual-showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.showcase-card {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.showcase-card:hover {
  transform: translateY(-8px);
  border-color: rgba(57, 217, 138, 0.3);
  background: rgba(57, 217, 138, 0.05);
}

.card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
}

.card-rings {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--green);
  animation: ringPulse 3s ease-in-out infinite;
}

.ring-1 {
  inset: 0;
  opacity: 0.8;
  animation-delay: 0s;
}

.ring-2 {
  inset: 15%;
  opacity: 0.5;
  animation-delay: 0.5s;
}

.ring-3 {
  inset: 30%;
  opacity: 0.3;
  animation-delay: 1s;
}

@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.card-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--green);
}

.card-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 100px;
  margin-bottom: 20px;
}

.bar {
  width: 20px;
  height: var(--height);
  background: linear-gradient(180deg, var(--green), var(--green-dark));
  border-radius: 4px;
  animation: barGrow 2s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: 0s; }
.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }
.bar:nth-child(4) { animation-delay: 0.6s; }
.bar:nth-child(5) { animation-delay: 0.8s; }

@keyframes barGrow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.8); }
}

.card-nodes {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.node {
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--green);
  border-radius: 50%;
  animation: nodePulse 2s ease-in-out infinite;
}

.node-1 { top: 20%; left: 20%; animation-delay: 0s; }
.node-2 { top: 20%; right: 20%; animation-delay: 0.3s; }
.node-3 { bottom: 20%; left: 20%; animation-delay: 0.6s; }
.node-4 { bottom: 20%; right: 20%; animation-delay: 0.9s; }

@keyframes nodePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

.node-lines {
  position: absolute;
  inset: 0;
  color: rgba(57, 217, 138, 0.3);
}

.card-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
}

/* ===== Problems Section ===== */
.problems-section {
  background: linear-gradient(180deg, transparent 0%, rgba(255, 107, 74, 0.03) 50%, transparent 100%);
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.problem-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 40px 32px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.problem-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.12);
}

.problem-card:hover .problem-glow {
  opacity: 1;
}

.problem-number {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.problem-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 74, 0.1);
  border: 1px solid rgba(255, 107, 74, 0.2);
  border-radius: 16px;
  color: var(--coral);
  margin-bottom: 24px;
}

.problem-icon-wrap.amber {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.2);
  color: var(--amber);
}

.problem-icon-wrap.blue {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: var(--blue);
}

.problem-title {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.problem-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.problem-glow {
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 107, 74, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.problem-glow.amber {
  background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
}

.problem-glow.blue {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
}

/* ===== Values Section ===== */
.values-section {
  background: linear-gradient(180deg, rgba(167, 139, 250, 0.03) 0%, transparent 100%);
}

.values-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 50% 50% at 20% 50%, rgba(167, 139, 250, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 50% 50% at 80% 50%, rgba(57, 217, 138, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value-card.glass {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 40px 32px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.4s ease;
}

.value-card.glass:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.15);
}

.value-icon-wrap {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--coral);
}

.value-icon-wrap.green { color: var(--green); }
.value-icon-wrap.purple { color: var(--purple); }

.icon-glow {
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle, rgba(255, 107, 74, 0.3) 0%, transparent 70%);
  filter: blur(15px);
}

.icon-glow.green {
  background: radial-gradient(circle, rgba(57, 217, 138, 0.3) 0%, transparent 70%);
}

.icon-glow.purple {
  background: radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%);
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--coral), var(--coral-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-card:nth-child(2) .value-title {
  background: linear-gradient(135deg, var(--green), var(--green-light));
  -webkit-background-clip: text;
}

.value-card:nth-child(3) .value-title {
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  -webkit-background-clip: text;
}

.value-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.value-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--coral), var(--coral-light));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.value-accent.green {
  background: linear-gradient(90deg, var(--green), var(--green-light));
}

.value-accent.purple {
  background: linear-gradient(90deg, var(--purple), var(--purple-light));
}

.value-card:hover .value-accent {
  transform: scaleX(1);
}

/* ===== Team Section ===== */
.team-section {
  padding: 140px 0;
}

.team-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.team-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--coral), var(--coral-dark));
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 107, 74, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 107, 74, 0.4);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

/* Team Visual */
.team-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}

.avatar-constellation {
  position: relative;
  width: 250px;
  height: 250px;
}

.avatar-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
  animation: avatarFloat 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes avatarFloat {
  0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))); }
  50% { transform: translate(calc(-50% + var(--x) + 8px), calc(-50% + var(--y) - 10px)); }
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  border: 3px solid var(--bg-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.15);
}

.avatar.coral { background: linear-gradient(135deg, var(--coral), var(--coral-light)); }
.avatar.green { background: linear-gradient(135deg, var(--green), var(--green-light)); }
.avatar.purple { background: linear-gradient(135deg, var(--purple), var(--purple-light)); }
.avatar.teal { background: linear-gradient(135deg, var(--teal), #5eead4); }
.avatar.amber { background: linear-gradient(135deg, var(--amber), #fcd34d); }
.avatar.pink { background: linear-gradient(135deg, var(--pink), #f472b6); }

.avatar.more {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.constellation-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(57, 217, 138, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .mission-layout,
  .team-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .visual-showcase,
  .problems-grid,
  .values-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .team-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 140px 0 80px;
    min-height: auto;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .hero-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-pill {
    width: 100%;
    max-width: 280px;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .avatar-constellation {
    transform: scale(0.85);
  }
}
</style>
