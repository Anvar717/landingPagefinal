<template>
  <section class="section how-it-works bg-gradient-mesh">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Как это <span class="gradient-text">работает?</span></h2>
        <p class="section-subtitle">
          Простой и понятный процесс от размещения заказа до получения результата.
        </p>
      </div>
      
      <div class="steps">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="step-content">
            <div class="step-icon" v-html="step.icon"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
          <div class="step-connector" v-if="index < steps.length - 1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Заказчик размещает заказ',
    description: 'Опишите задачу, укажите бюджет и сроки. Добавьте все необходимые детали для точного понимания.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="6" y="4" width="20" height="24" rx="2"/>
      <path d="M10 10h12M10 14h12M10 18h8"/>
    </svg>`
  },
  {
    title: 'Фрилансеры откликаются',
    description: 'Получайте предложения от проверенных специалистов с портфолио и отзывами.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="10" r="4"/>
      <circle cx="22" cy="12" r="3"/>
      <path d="M4 24c0-4 4-6 8-6s8 2 8 6M18 22c0-3 2-4 5-4s5 1 5 4"/>
    </svg>`
  },
  {
    title: 'Выбор исполнителя',
    description: 'Изучите портфолио, сравните предложения и выберите лучшего специалиста для вашей задачи.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
    </svg>`
  },
  {
    title: 'Выполнение проекта',
    description: 'Общайтесь через удобный чат, отслеживайте прогресс и получайте результат вовремя.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 18l4 4 8-8"/>
      <circle cx="16" cy="16" r="12"/>
    </svg>`
  }
]
</script>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
}

.step {
  position: relative;
  text-align: center;
}

.step-number {
  font-size: 4rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 20px;
}

.step-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: var(--transition-normal);
  height: 100%;
}

.step:hover .step-content {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  margin-bottom: 20px;
  color: var(--accent-secondary);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.step-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -12px;
  width: 24px;
  height: 2px;
  background: var(--border-color);
  z-index: 1;
}

.step-connector::after {
  content: '';
  position: absolute;
  right: -4px;
  top: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--border-color);
  border-top: 2px solid var(--border-color);
  transform: rotate(45deg);
}

@media (max-width: 1024px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .step-connector {
    display: none;
  }
}

@media (max-width: 640px) {
  .steps {
    grid-template-columns: 1fr;
  }
  
  .step-number {
    font-size: 3rem;
  }
}
</style>

