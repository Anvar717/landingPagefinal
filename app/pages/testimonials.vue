<template>
  <div class="page-testimonials">
    <section class="hero-mini">
      <div class="hero-bg">
        <div class="glow-orb glow-orb-coral orb-1"></div>
        <div class="glow-orb glow-orb-teal orb-2"></div>
        <div class="hero-grid"></div>
      </div>
      
      <div class="container">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 6.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"/>
            <path d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"/>
          </svg>
          Отзывы
        </span>
        <h1 class="page-title">
          Истории<br><span class="gradient-text">успеха</span>
        </h1>
        <p class="page-subtitle">
          Узнайте, что говорят о нас фрилансеры и заказчики
        </p>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">4.9</div>
            <div class="stat-label">Средний рейтинг</div>
            <div class="stat-stars">★★★★★</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">50K<span class="plus">+</span></div>
            <div class="stat-label">Пользователей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">98<span class="plus">%</span></div>
            <div class="stat-label">Рекомендуют</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">120K<span class="plus">+</span></div>
            <div class="stat-label">Проектов</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Freelancer Testimonials -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/>
            </svg>
            Фрилансеры
          </span>
          <h2 class="section-title">Отзывы <span class="gradient-text">исполнителей</span></h2>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="testimonial in freelancerTestimonials" :key="testimonial.name">
            <div class="card-header">
              <div class="author-avatar" :style="{ background: testimonial.avatarBg }">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="author-info">
                <span class="author-name">{{ testimonial.name }}</span>
                <span class="author-role">{{ testimonial.role }}</span>
                <div class="author-rating">
                  <span v-for="n in 5" :key="n" class="star">★</span>
                </div>
              </div>
            </div>
            <p class="card-text">"{{ testimonial.text }}"</p>
            <div class="card-stats">
              <div class="card-stat">
                <span class="stat-val">{{ testimonial.projects }}</span>
                <span class="stat-lbl">проектов</span>
              </div>
              <div class="card-stat">
                <span class="stat-val">{{ testimonial.earned }}</span>
                <span class="stat-lbl">заработано</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Client Testimonials -->
    <section class="section clients-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow teal">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
            </svg>
            Заказчики
          </span>
          <h2 class="section-title">Отзывы <span class="gradient-text-teal">клиентов</span></h2>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card teal" v-for="testimonial in clientTestimonials" :key="testimonial.name">
            <div class="card-header">
              <div class="author-avatar" :style="{ background: testimonial.avatarBg }">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="author-info">
                <span class="author-name">{{ testimonial.name }}</span>
                <span class="author-role">{{ testimonial.role }}</span>
                <div class="author-rating">
                  <span v-for="n in 5" :key="n" class="star">★</span>
                </div>
              </div>
            </div>
            <p class="card-text">"{{ testimonial.text }}"</p>
            <div class="card-stats">
              <div class="card-stat">
                <span class="stat-val">{{ testimonial.projects }}</span>
                <span class="stat-lbl">заказов</span>
              </div>
              <div class="card-stat">
                <span class="stat-val">{{ testimonial.spent }}</span>
                <span class="stat-lbl">потрачено</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <FinalCtaSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Отзывы — FreelanceHub',
  description: 'Реальные отзывы фрилансеров и заказчиков о работе на платформе FreelanceHub.'
})

const freelancerTestimonials = [
  {
    name: 'Александр Петров',
    role: 'Веб-разработчик • 3 года',
    text: 'FreelanceHub полностью изменил мой подход к фрилансу. За три года я вырос от начинающего до топ-специалиста.',
    avatarBg: 'linear-gradient(135deg, #ff6b4a, #ff8a6b)',
    projects: '156',
    earned: '2.8 млн ₽'
  },
  {
    name: 'Мария Кузнецова',
    role: 'UX/UI дизайнер • 2 года',
    text: 'Безопасные сделки — главное преимущество. Больше никаких проблем с оплатой.',
    avatarBg: 'linear-gradient(135deg, #ec4899, #f472b6)',
    projects: '89',
    earned: '1.5 млн ₽'
  },
  {
    name: 'Дмитрий Волков',
    role: 'Копирайтер • 1.5 года',
    text: 'Портфолио работает как визитка. Клиенты сами пишут после просмотра работ.',
    avatarBg: 'linear-gradient(135deg, #22d3ee, #2dd4bf)',
    projects: '234',
    earned: '980 тыс ₽'
  }
]

const clientTestimonials = [
  {
    name: 'Елена Смирнова',
    role: 'CEO маркетингового агентства',
    text: 'FreelanceHub стал нашим основным источником кадров. Качество специалистов на высоте.',
    avatarBg: 'linear-gradient(135deg, #10b981, #34d399)',
    projects: '45',
    spent: '1.2 млн ₽'
  },
  {
    name: 'Артём Николаев',
    role: 'Основатель стартапа',
    text: 'Собрали команду для MVP за неделю. Все справились отлично.',
    avatarBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    projects: '28',
    spent: '850 тыс ₽'
  },
  {
    name: 'Ольга Иванова',
    role: 'Владелец интернет-магазина',
    text: 'Нашла специалиста для соцсетей за день. Прозрачность — главный плюс.',
    avatarBg: 'linear-gradient(135deg, #a78bfa, #c4b5fd)',
    projects: '12',
    spent: '420 тыс ₽'
  }
]
</script>

<style scoped>
.hero-mini {
  position: relative;
  padding: 200px 0 120px;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb-1 {
  width: 500px;
  height: 500px;
  top: -20%;
  left: -10%;
  opacity: 0.4;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  right: -10%;
  opacity: 0.3;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 70%);
}

.page-title {
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 800;
  margin: 32px 0;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.page-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Stats */
.stats-section {
  padding: 60px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  text-align: center;
  transition: var(--transition-normal);
}

.stat-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.stat-value {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.plus {
  font-size: 2rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.stat-stars {
  color: #fbbf24;
  font-size: 1.25rem;
  margin-top: 12px;
}

/* Testimonials */
.clients-section {
  background: var(--bg-secondary);
}

.section-eyebrow.teal {
  background: rgba(34, 211, 238, 0.08);
  border-color: rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: var(--transition-normal);
}

.testimonial-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.testimonial-card.teal:hover {
  border-color: var(--accent-secondary);
}

.card-header {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 700;
  font-size: 1.125rem;
}

.author-role {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.author-rating .star {
  color: #fbbf24;
  font-size: 0.875rem;
}

.card-text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}

.card-stats {
  display: flex;
  gap: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.card-stat {
  display: flex;
  flex-direction: column;
}

.stat-val {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--accent-primary);
}

.testimonial-card.teal .stat-val {
  color: var(--accent-secondary);
}

.stat-lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-value {
    font-size: 2.5rem;
  }
}
</style>
