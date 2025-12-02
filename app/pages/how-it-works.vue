<template>
  <div class="page-how-it-works">
    <section class="hero-mini">
      <div class="container">
        <span class="badge">Инструкция</span>
        <h1 class="page-title">Как <span class="gradient-text">работает</span> платформа</h1>
        <p class="page-subtitle">
          Подробное руководство для фрилансеров и заказчиков
        </p>
      </div>
    </section>
    
    <!-- For Freelancers -->
    <section class="section">
      <div class="container">
        <div class="role-header">
          <div class="role-icon freelancer-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="20" cy="14" r="8"/>
              <path d="M6 36c0-8 6-12 14-12s14 4 14 12"/>
            </svg>
          </div>
          <h2 class="section-title">Для <span class="gradient-text">фрилансеров</span></h2>
          <p class="section-subtitle">Начните зарабатывать на своих навыках уже сегодня</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" v-for="(step, index) in freelancerSteps" :key="index">
            <div class="timeline-number">{{ index + 1 }}</div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <ul v-if="step.tips">
                <li v-for="tip in step.tips" :key="tip">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- For Clients -->
    <section class="section clients-section">
      <div class="container">
        <div class="role-header">
          <div class="role-icon client-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="8" y="12" width="24" height="18" rx="2"/>
              <path d="M14 8v4M26 8v4M8 20h24"/>
            </svg>
          </div>
          <h2 class="section-title">Для <span class="gradient-text">заказчиков</span></h2>
          <p class="section-subtitle">Найдите идеального исполнителя за несколько шагов</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" v-for="(step, index) in clientSteps" :key="index">
            <div class="timeline-number">{{ index + 1 }}</div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <ul v-if="step.tips">
                <li v-for="tip in step.tips" :key="tip">{{ tip }}</li>
              </ul>
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
  title: 'Как это работает — FreelanceHub',
  description: 'Узнайте, как работать на платформе FreelanceHub: пошаговое руководство для фрилансеров и заказчиков.'
})

const freelancerSteps = [
  {
    title: 'Создайте профиль',
    description: 'Зарегистрируйтесь и заполните профессиональный профиль.',
    tips: ['Добавьте качественное фото', 'Опишите свои навыки подробно', 'Укажите опыт работы']
  },
  {
    title: 'Добавьте портфолио',
    description: 'Загрузите примеры своих лучших работ, чтобы привлечь клиентов.',
    tips: ['Выберите 5-10 лучших проектов', 'Добавьте описание к каждой работе', 'Покажите разнообразие навыков']
  },
  {
    title: 'Найдите заказы',
    description: 'Просматривайте доступные заказы и откликайтесь на подходящие.',
    tips: ['Настройте фильтры по категориям', 'Откликайтесь быстро на новые заказы', 'Пишите персонализированные отклики']
  },
  {
    title: 'Выполните работу',
    description: 'После выбора вас заказчиком приступайте к работе.',
    tips: ['Соблюдайте дедлайны', 'Поддерживайте связь с клиентом', 'Отправляйте промежуточные результаты']
  },
  {
    title: 'Получите оплату',
    description: 'После принятия работы деньги переводятся на ваш счёт.',
    tips: ['Вывод в течение 1-3 дней', 'Минимальная сумма — 1000 ₽', 'Поддержка разных способов вывода']
  }
]

const clientSteps = [
  {
    title: 'Создайте заказ',
    description: 'Опишите задачу, которую нужно выполнить.',
    tips: ['Чётко сформулируйте требования', 'Укажите реалистичные сроки', 'Определите бюджет']
  },
  {
    title: 'Получите отклики',
    description: 'Фрилансеры увидят ваш заказ и начнут откликаться.',
    tips: ['Обычно отклики приходят в первые часы', 'Изучайте портфолио исполнителей', 'Читайте отзывы о них']
  },
  {
    title: 'Выберите исполнителя',
    description: 'Сравните предложения и выберите лучшего кандидата.',
    tips: ['Обратите внимание на опыт', 'Проверьте рейтинг и отзывы', 'Задайте уточняющие вопросы']
  },
  {
    title: 'Внесите предоплату',
    description: 'Деньги будут заморожены на эскроу-счёте до завершения работы.',
    tips: ['100% защита от мошенничества', 'Деньги вернутся при отмене', 'Безопасные платежи']
  },
  {
    title: 'Примите результат',
    description: 'Проверьте выполненную работу и подтвердите завершение.',
    tips: ['Можно запросить доработки', 'Оставьте отзыв исполнителю', 'Рекомендуйте хороших фрилансеров']
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

.clients-section {
  background: var(--bg-secondary);
}

.role-header {
  text-align: center;
  margin-bottom: 60px;
}

.role-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-lg);
  margin-bottom: 24px;
}

.freelancer-icon {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
}

.client-icon {
  background: linear-gradient(135deg, #06b6d4, #22d3ee);
  color: white;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-number {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  position: relative;
  z-index: 1;
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  flex: 1;
  transition: var(--transition-normal);
}

.timeline-item:hover .timeline-content {
  border-color: var(--accent-primary);
  transform: translateX(8px);
}

.timeline-content h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.timeline-content p {
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.timeline-content ul {
  list-style: none;
}

.timeline-content li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 0.9375rem;
  color: var(--text-muted);
}

.timeline-content li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-secondary);
}

@media (max-width: 768px) {
  .timeline::before {
    display: none;
  }
  
  .timeline-item {
    flex-direction: column;
    gap: 16px;
  }
  
  .timeline-number {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
  
  .timeline-item:hover .timeline-content {
    transform: translateY(-4px);
  }
}
</style>

