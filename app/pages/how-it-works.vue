<template>
  <div class="page-how-it-works">
    <section class="hero-mini">
      <div class="hero-bg">
        <div class="glow-orb glow-orb-purple orb-1"></div>
        <div class="glow-orb glow-orb-teal orb-2"></div>
        <div class="hero-grid"></div>
      </div>
      
      <div class="container">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z"/>
          </svg>
          Инструкция
        </span>
        <h1 class="page-title">
          Как <span class="gradient-text-purple">работает</span><br>платформа
        </h1>
        <p class="page-subtitle">
          Подробное руководство для фрилансеров и заказчиков
        </p>
      </div>
    </section>
    
    <!-- For Freelancers -->
    <section class="section">
      <div class="container">
        <div class="role-header">
          <div class="role-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="8" r="5"/>
              <path d="M3 21v-2a7 7 0 017-7h4a7 7 0 017 7v2"/>
            </svg>
            Для фрилансеров
          </div>
          <h2 class="section-title">Начните <span class="gradient-text">зарабатывать</span></h2>
          <p class="section-subtitle">Пять простых шагов к первому заказу</p>
        </div>
        
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in freelancerSteps" :key="index">
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <ul class="step-tips">
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
          <div class="role-badge teal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="6" width="16" height="12" rx="2"/>
              <path d="M8 2v4M16 2v4M4 12h16"/>
            </svg>
            Для заказчиков
          </div>
          <h2 class="section-title">Найдите <span class="gradient-text-teal">специалиста</span></h2>
          <p class="section-subtitle">От задачи до результата за пять шагов</p>
        </div>
        
        <div class="steps-grid">
          <div class="step-card teal" v-for="(step, index) in clientSteps" :key="index">
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <ul class="step-tips">
                <li v-for="tip in step.tips" :key="tip">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features -->
    <section class="section features-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3zm7 5a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
            Особенности
          </span>
          <h2 class="section-title">Почему это <span class="gradient-text">работает</span></h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2L4 7v7c0 7 4 12 10 14 6-2 10-7 10-14V7L14 2z"/>
                <path d="M9 14l3 3 7-7"/>
              </svg>
            </div>
            <h3>Безопасные сделки</h3>
            <p>Эскроу защищает обе стороны от мошенничества</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon teal">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="14" cy="14" r="10"/>
                <path d="M14 8v6l4 2"/>
              </svg>
            </div>
            <h3>Быстрый поиск</h3>
            <p>Отклики приходят в первые часы после публикации</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon purple">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/>
              </svg>
            </div>
            <h3>Рейтинг и отзывы</h3>
            <p>Прозрачная система оценок помогает выбрать лучших</p>
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
    tips: ['Добавьте качественное фото', 'Опишите навыки подробно', 'Укажите опыт работы']
  },
  {
    title: 'Добавьте портфолио',
    description: 'Загрузите примеры своих лучших работ.',
    tips: ['5-10 лучших проектов', 'Описание к каждой работе', 'Разнообразие навыков']
  },
  {
    title: 'Найдите заказы',
    description: 'Просматривайте заказы и откликайтесь.',
    tips: ['Настройте фильтры', 'Откликайтесь быстро', 'Пишите персонально']
  },
  {
    title: 'Выполните работу',
    description: 'Работайте над проектом и держите связь.',
    tips: ['Соблюдайте дедлайны', 'Общайтесь с клиентом', 'Показывайте прогресс']
  },
  {
    title: 'Получите оплату',
    description: 'Деньги переводятся после принятия работы.',
    tips: ['Вывод за 1-3 дня', 'Минимум — 1000 ₽', 'Разные способы']
  }
]

const clientSteps = [
  {
    title: 'Создайте заказ',
    description: 'Опишите задачу с деталями.',
    tips: ['Чёткие требования', 'Реалистичные сроки', 'Адекватный бюджет']
  },
  {
    title: 'Получите отклики',
    description: 'Фрилансеры начнут откликаться.',
    tips: ['Первые — за часы', 'Изучите портфолио', 'Читайте отзывы']
  },
  {
    title: 'Выберите исполнителя',
    description: 'Сравните и выберите лучшего.',
    tips: ['Обратите на опыт', 'Проверьте рейтинг', 'Задайте вопросы']
  },
  {
    title: 'Внесите оплату',
    description: 'Деньги замораживаются до завершения.',
    tips: ['100% защита', 'Возврат при отмене', 'Безопасно']
  },
  {
    title: 'Примите результат',
    description: 'Проверьте работу и подтвердите.',
    tips: ['Можно доработки', 'Оставьте отзыв', 'Рекомендуйте']
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

.clients-section {
  background: var(--bg-secondary);
}

.role-header {
  text-align: center;
  margin-bottom: 60px;
}

.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 107, 74, 0.1);
  border: 1px solid rgba(255, 107, 74, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 24px;
}

.role-badge.teal {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  position: relative;
  transition: var(--transition-normal);
}

.step-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.step-card.teal:hover {
  border-color: var(--accent-secondary);
}

.step-number {
  font-size: 3rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.4;
  line-height: 1;
  margin-bottom: 16px;
}

.step-card.teal .step-number {
  background: var(--accent-gradient-2);
  -webkit-background-clip: text;
}

.step-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-content p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: 16px;
  line-height: 1.5;
}

.step-tips {
  list-style: none;
}

.step-tips li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 6px;
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.step-tips li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

.step-card.teal .step-tips li::before {
  color: var(--accent-secondary);
}

/* Features Section */
.features-section {
  background: var(--bg-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  text-align: center;
  transition: var(--transition-normal);
}

.feature-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 107, 74, 0.1);
  border-radius: var(--radius-lg);
  color: var(--accent-primary);
  margin-bottom: 24px;
}

.feature-icon.teal {
  background: rgba(34, 211, 238, 0.1);
  color: var(--accent-secondary);
}

.feature-icon.purple {
  background: rgba(167, 139, 250, 0.1);
  color: var(--accent-tertiary);
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1200px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
