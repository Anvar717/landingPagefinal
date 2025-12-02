<template>
  <div class="page-about">
    <section class="hero-mini">
      <div class="container">
        <span class="badge">О нас</span>
        <h1 class="page-title">Мы создаём <span class="gradient-text">будущее</span> фриланса</h1>
        <p class="page-subtitle">
          FreelanceHub — это не просто площадка для заказов. Это экосистема, 
          которая объединяет таланты с возможностями.
        </p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2 class="section-title">Наша миссия</h2>
            <p>
              Мы верим, что каждый талант заслуживает признания, а каждый бизнес — 
              доступа к лучшим специалистам. Наша миссия — устранить барьеры между 
              профессионалами и компаниями, создав пространство, где качественная 
              работа находит достойное вознаграждение.
            </p>
            <p>
              FreelanceHub делает фриланс простым, безопасным и выгодным для всех 
              участников процесса.
            </p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="40" cy="40" r="30"/>
                <path d="M40 20v40M20 40h40"/>
                <circle cx="40" cy="40" r="15"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section problem-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Проблема <span class="gradient-text">рынка</span></h2>
          <p class="section-subtitle">
            Мы видим проблемы, которые мешают эффективной работе на рынке фриланса.
          </p>
        </div>
        <div class="grid grid-3">
          <div class="problem-card">
            <div class="problem-icon">⚠️</div>
            <h3>Небезопасные сделки</h3>
            <p>Заказчики боятся платить вперёд, фрилансеры — работать без предоплаты.</p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">🔍</div>
            <h3>Сложный поиск</h3>
            <p>Трудно найти проверенного специалиста или надёжного заказчика.</p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">💬</div>
            <h3>Плохая коммуникация</h3>
            <p>Отсутствие удобных инструментов для общения и управления проектами.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наши <span class="gradient-text">ценности</span></h2>
        </div>
        <div class="grid grid-3">
          <div class="value-card">
            <h3>Прозрачность</h3>
            <p>Честные правила, понятные комиссии, открытая система рейтингов.</p>
          </div>
          <div class="value-card">
            <h3>Безопасность</h3>
            <p>Защита сделок, верификация пользователей, поддержка в спорах.</p>
          </div>
          <div class="value-card">
            <h3>Качество</h3>
            <p>Только проверенные специалисты и реальные отзывы клиентов.</p>
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
.hero-mini {
  padding: 180px 0 100px;
  text-align: center;
  background: radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.15), transparent 70%);
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 24px 0;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.125rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-secondary);
}

.problem-section {
  background: var(--bg-secondary);
}

.problem-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
  transition: var(--transition-normal);
}

.problem-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-color-hover);
}

.problem-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.problem-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.problem-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.value-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-normal);
}

.value-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
}

.value-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-image {
    order: -1;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
  }
}
</style>

