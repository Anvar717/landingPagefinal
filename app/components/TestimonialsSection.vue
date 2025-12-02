<template>
  <section class="section testimonials">
    <div class="testimonials-bg">
      <div class="glow-orb glow-orb-coral orb-1"></div>
      <div class="glow-orb glow-orb-teal orb-2"></div>
    </div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.75 7.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"/>
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          </svg>
          Отзывы
        </span>
        <h2 class="section-title">
          Что говорят <span class="gradient-text">пользователи</span>
        </h2>
        <p class="section-subtitle">
          Реальные истории успеха от нашего сообщества профессионалов
        </p>
      </div>
      
      <!-- Featured Testimonial -->
      <div class="featured-testimonial">
        <div class="featured-content">
          <div class="quote-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" opacity="0.3">
              <path d="M14 24c-3.3 0-6-2.7-6-6s2.7-6 6-6c.3-5.6 4.5-10 10-10v6c-2.2 0-4 1.8-4 4h4v12H14zm20 0c-3.3 0-6-2.7-6-6s2.7-6 6-6c.3-5.6 4.5-10 10-10v6c-2.2 0-4 1.8-4 4h4v12h-10z"/>
            </svg>
          </div>
          <blockquote class="featured-quote">
            "FreelanceHub изменил мой подход к работе. За полгода я нашёл постоянных клиентов и увеличил доход в три раза. Платформа действительно работает!"
          </blockquote>
          <div class="featured-author">
            <div class="author-avatar">
              <span>А</span>
            </div>
            <div class="author-info">
              <span class="author-name">Александр Петров</span>
              <span class="author-role">Веб-разработчик • 120+ проектов</span>
            </div>
          </div>
        </div>
        <div class="featured-stats">
          <div class="stat-item">
            <span class="stat-value">3x</span>
            <span class="stat-label">Рост дохода</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">6</span>
            <span class="stat-label">Месяцев</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">5.0</span>
            <span class="stat-label">Рейтинг</span>
          </div>
        </div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div 
          class="testimonial-card" 
          v-for="testimonial in testimonials" 
          :key="testimonial.name"
        >
          <div class="card-rating">
            <span v-for="n in 5" :key="n" class="star">★</span>
          </div>
          <p class="card-text">"{{ testimonial.text }}"</p>
          <div class="card-author">
            <div class="author-avatar" :style="{ background: testimonial.avatarBg }">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="author-info">
              <span class="author-name">{{ testimonial.name }}</span>
              <span class="author-role">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Badges -->
      <div class="trust-badges">
        <div class="trust-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>Проверенные отзывы</span>
        </div>
        <div class="trust-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Обновляются ежедневно</span>
        </div>
        <div class="trust-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
          <span>50,000+ пользователей</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Мария Иванова',
    role: 'Владелец магазина',
    text: 'Быстро нашли дизайнера для редизайна сайта. Безопасная сделка и отличный результат!',
    avatarBg: 'linear-gradient(135deg, #ec4899, #f472b6)'
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'UX/UI дизайнер',
    text: 'Удобный интерфейс, честные заказчики и своевременные выплаты.',
    avatarBg: 'linear-gradient(135deg, #22d3ee, #2dd4bf)'
  },
  {
    name: 'Елена Козлова',
    role: 'Маркетолог',
    text: 'Отличная поддержка и прозрачная система рейтингов. Ни одного конфликта!',
    avatarBg: 'linear-gradient(135deg, #10b981, #34d399)'
  },
  {
    name: 'Артём Николаев',
    role: 'CEO стартапа',
    text: 'Собрали команду разработчиков для MVP за неделю. Качество на высоте.',
    avatarBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)'
  },
  {
    name: 'Ольга Смирнова',
    role: 'Копирайтер',
    text: 'Портфолио на платформе помогает привлекать клиентов. Заказы идут регулярно.',
    avatarBg: 'linear-gradient(135deg, #a78bfa, #c4b5fd)'
  }
]
</script>

<style scoped>
.testimonials {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.testimonials-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb-1 {
  width: 400px;
  height: 400px;
  top: -10%;
  left: -5%;
  opacity: 0.4;
}

.orb-2 {
  width: 300px;
  height: 300px;
  bottom: -10%;
  right: -5%;
  opacity: 0.3;
}

/* Featured Testimonial */
.featured-testimonial {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
  padding: 60px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  margin-bottom: 40px;
}

.quote-icon {
  margin-bottom: 24px;
  color: var(--accent-primary);
}

.featured-quote {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.01em;
  margin-bottom: 32px;
}

.featured-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-name {
  font-weight: 700;
  font-size: 1.125rem;
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.featured-stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 60px;
  border-left: 1px solid var(--border-color);
}

.featured-stats .stat-item {
  text-align: center;
}

.featured-stats .stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.featured-stats .stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px;
  transition: var(--transition-normal);
}

.testimonial-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.card-rating {
  margin-bottom: 16px;
}

.star {
  color: #fbbf24;
  font-size: 1rem;
  margin-right: 2px;
}

.card-text {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-author .author-avatar {
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

.card-author .author-name {
  font-size: 0.9375rem;
}

.card-author .author-role {
  font-size: 0.8125rem;
}

/* Trust Badges */
.trust-badges {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.trust-item svg {
  color: var(--accent-secondary);
}

@media (max-width: 1200px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .featured-testimonial {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;
  }
  
  .featured-stats {
    flex-direction: row;
    justify-content: center;
    padding-left: 0;
    padding-top: 40px;
    border-left: none;
    border-top: 1px solid var(--border-color);
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-quote {
    font-size: 1.25rem;
  }
  
  .trust-badges {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
