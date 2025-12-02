<template>
  <div class="page-testimonials">
    <section class="hero-mini">
      <div class="container">
        <span class="badge">Отзывы</span>
        <h1 class="page-title">Истории <span class="gradient-text">успеха</span></h1>
        <p class="page-subtitle">
          Узнайте, что говорят о нас фрилансеры и заказчики
        </p>
      </div>
    </section>
    
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">4.9</div>
            <div class="stat-label">Средний рейтинг</div>
            <div class="stat-stars">★★★★★</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">50K+</div>
            <div class="stat-label">Довольных пользователей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">98%</div>
            <div class="stat-label">Рекомендуют нас</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">120K+</div>
            <div class="stat-label">Завершённых проектов</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Отзывы <span class="gradient-text">фрилансеров</span></h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card-full" v-for="testimonial in freelancerTestimonials" :key="testimonial.name">
            <div class="testimonial-header">
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
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-stats">
              <div class="tstat">
                <span class="tstat-value">{{ testimonial.projects }}</span>
                <span class="tstat-label">проектов</span>
              </div>
              <div class="tstat">
                <span class="tstat-value">{{ testimonial.earned }}</span>
                <span class="tstat-label">заработано</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section clients-testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Отзывы <span class="gradient-text">заказчиков</span></h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card-full" v-for="testimonial in clientTestimonials" :key="testimonial.name">
            <div class="testimonial-header">
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
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-stats">
              <div class="tstat">
                <span class="tstat-value">{{ testimonial.projects }}</span>
                <span class="tstat-label">заказов</span>
              </div>
              <div class="tstat">
                <span class="tstat-value">{{ testimonial.spent }}</span>
                <span class="tstat-label">потрачено</span>
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
    role: 'Веб-разработчик • 3 года на платформе',
    text: 'FreelanceHub полностью изменил мой подход к фрилансу. Раньше я тратил часы на поиск клиентов, теперь заказы находят меня сами. За три года я вырос от начинающего до топ-специалиста с постоянным потоком проектов.',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    projects: '156',
    earned: '2.8 млн ₽'
  },
  {
    name: 'Мария Кузнецова',
    role: 'UX/UI дизайнер • 2 года на платформе',
    text: 'Безопасные сделки — это то, что меня привлекло изначально. Больше никаких проблем с оплатой. Плюс классное сообщество и возможность развиваться как профессионал.',
    avatarBg: 'linear-gradient(135deg, #ec4899, #f472b6)',
    projects: '89',
    earned: '1.5 млн ₽'
  },
  {
    name: 'Дмитрий Волков',
    role: 'Копирайтер • 1.5 года на платформе',
    text: 'Портфолио на FreelanceHub работает как визитка. Клиенты сами пишут после просмотра моих работ. Удобный чат, понятные условия, быстрые выплаты — всё, что нужно для комфортной работы.',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
    projects: '234',
    earned: '980 тыс ₽'
  }
]

const clientTestimonials = [
  {
    name: 'Елена Смирнова',
    role: 'CEO маркетингового агентства',
    text: 'Мы постоянно ищем талантливых дизайнеров и копирайтеров. FreelanceHub стал нашим основным источником кадров. Качество специалистов на высоте, а система рейтингов помогает не ошибиться с выбором.',
    avatarBg: 'linear-gradient(135deg, #10b981, #34d399)',
    projects: '45',
    spent: '1.2 млн ₽'
  },
  {
    name: 'Артём Николаев',
    role: 'Основатель стартапа',
    text: 'Когда мы запускали MVP, нам нужна была команда за неделю. На FreelanceHub нашли разработчика, дизайнера и копирайтера. Все справились отлично, теперь продолжаем сотрудничать.',
    avatarBg: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    projects: '28',
    spent: '850 тыс ₽'
  },
  {
    name: 'Ольга Иванова',
    role: 'Владелец интернет-магазина',
    text: 'Долго искала надёжного специалиста для ведения соцсетей. На FreelanceHub нашла за день. Особенно ценю прозрачность — вижу рейтинг, отзывы, примеры работ. Никаких сюрпризов.',
    avatarBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    projects: '12',
    spent: '420 тыс ₽'
  }
]
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
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.stat-label {
  color: var(--text-secondary);
}

.stat-stars {
  color: #fbbf24;
  font-size: 1.25rem;
  margin-top: 8px;
}

.clients-testimonials {
  background: var(--bg-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card-full {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-normal);
}

.testimonial-card-full:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.testimonial-header {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  font-size: 1.125rem;
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.author-rating .star {
  color: #fbbf24;
  font-size: 0.875rem;
}

.testimonial-text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-stats {
  display: flex;
  gap: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.tstat {
  display: flex;
  flex-direction: column;
}

.tstat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-secondary);
}

.tstat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
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

