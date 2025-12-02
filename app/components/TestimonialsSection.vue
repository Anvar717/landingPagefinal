<template>
  <section class="section testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Что говорят <span class="gradient-text">пользователи</span></h2>
        <p class="section-subtitle">
          Реальные истории успеха от фрилансеров и заказчиков нашей платформы.
        </p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.name">
          <div class="testimonial-rating">
            <span v-for="n in 5" :key="n" class="star">★</span>
          </div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <div class="testimonial-author">
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
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Александр Петров',
    role: 'Веб-разработчик',
    text: 'За полгода на FreelanceHub я нашёл постоянных клиентов и увеличил доход в 3 раза. Платформа действительно работает!',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)'
  },
  {
    name: 'Мария Иванова',
    role: 'Владелец интернет-магазина',
    text: 'Быстро нашли дизайнера для редизайна сайта. Безопасная сделка и отличный результат. Рекомендую всем!',
    avatarBg: 'linear-gradient(135deg, #ec4899, #f472b6)'
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'UX/UI дизайнер',
    text: 'Удобный интерфейс, честные заказчики и своевременные выплаты. Это лучшая фриланс-площадка, с которой я работал.',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #22d3ee)'
  },
  {
    name: 'Елена Козлова',
    role: 'Маркетолог',
    text: 'Отличная поддержка и прозрачная система рейтингов. За год работы — ни одного конфликта с заказчиками.',
    avatarBg: 'linear-gradient(135deg, #10b981, #34d399)'
  },
  {
    name: 'Артём Николаев',
    role: 'CEO стартапа',
    text: 'Собрали команду разработчиков для MVP за неделю. Качество специалистов на высоте, цены адекватные.',
    avatarBg: 'linear-gradient(135deg, #f59e0b, #fbbf24)'
  },
  {
    name: 'Ольга Смирнова',
    role: 'Копирайтер',
    text: 'Портфолио на платформе помогает привлекать клиентов. Заказы приходят регулярно, работать — одно удовольствие.',
    avatarBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'
  }
]
</script>

<style scoped>
.testimonials {
  background: var(--bg-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-normal);
}

.testimonial-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.testimonial-rating {
  margin-bottom: 16px;
}

.star {
  color: #fbbf24;
  font-size: 1.125rem;
  margin-right: 2px;
}

.testimonial-text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: white;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>

