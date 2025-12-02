<template>
  <section class="section how-it-works">
    <div class="section-bg bg-mesh"></div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 7.5h-3v-3a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1z"/>
          </svg>
          Процесс
        </span>
        <h2 class="section-title">
          Как это <span class="gradient-text-teal">работает?</span>
        </h2>
        <p class="section-subtitle">
          Простой и понятный путь от идеи до результата
        </p>
      </div>
      
      <!-- Timeline -->
      <div class="timeline">
        <div class="timeline-line">
          <div class="timeline-progress"></div>
        </div>
        
        <div class="timeline-item" v-for="(step, index) in steps" :key="index">
          <div class="timeline-marker">
            <span class="marker-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="marker-dot"></div>
          </div>
          
          <div class="timeline-card">
            <div class="card-icon-wrapper">
              <div class="card-icon" v-html="step.icon"></div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ step.title }}</h3>
              <p class="card-description">{{ step.description }}</p>
            </div>
            <div class="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M15 6l6 6-6 6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="bottom-cta">
        <div class="cta-content">
          <h3>Готовы начать?</h3>
          <p>Присоединяйтесь к тысячам профессионалов</p>
        </div>
        <a href="#" class="btn btn-primary btn-large">
          Начать сейчас
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 10h12M12 4l6 6-6 6"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Создайте заказ',
    description: 'Опишите задачу, укажите бюджет и сроки. Добавьте все детали для точного понимания проекта.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="5" y="3" width="18" height="22" rx="2"/>
      <path d="M9 9h10M9 13h10M9 17h6"/>
    </svg>`
  },
  {
    title: 'Получите отклики',
    description: 'Проверенные фрилансеры откликнутся на ваш заказ с предложениями и портфолио работ.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="10" cy="9" r="4"/>
      <circle cx="20" cy="11" r="3"/>
      <path d="M3 22c0-4 3-6 7-6s7 2 7 6M16 20c0-3 2-4 5-4s5 1 5 4"/>
    </svg>`
  },
  {
    title: 'Выберите исполнителя',
    description: 'Изучите профили, сравните предложения и выберите лучшего специалиста для задачи.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 3l3 6 6.5 1-4.7 4.5 1.1 6.5-5.9-3.1-5.9 3.1 1.1-6.5L4.5 10l6.5-1L14 3z"/>
    </svg>`
  },
  {
    title: 'Получите результат',
    description: 'Отслеживайте прогресс в реальном времени и получите качественный результат в срок.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="14" cy="14" r="10"/>
      <path d="M9 14l3.5 3.5 6-6"/>
    </svg>`
  }
]
</script>

<style scoped>
.how-it-works {
  position: relative;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.timeline-line {
  position: absolute;
  top: 50px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: var(--border-color);
  z-index: 0;
}

.timeline-progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--accent-gradient-2);
  transform: scaleX(0);
  transform-origin: left;
  animation: progress-fill 2s ease-out 0.5s forwards;
}

@keyframes progress-fill {
  to { transform: scaleX(1); }
}

.timeline-item {
  position: relative;
  z-index: 1;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.marker-number {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: var(--bg-primary);
  border: 3px solid var(--accent-secondary);
  border-radius: 50%;
  position: relative;
}

.marker-dot::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: var(--accent-secondary);
  border-radius: 50%;
  opacity: 0;
  animation: dot-pulse 2s ease-out 0.5s forwards;
}

@keyframes dot-pulse {
  to { opacity: 1; }
}

.timeline-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
  text-align: center;
  transition: var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.timeline-card:hover {
  border-color: var(--accent-secondary);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(34, 211, 238, 0.1);
}

.card-icon-wrapper {
  margin-bottom: 24px;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: var(--radius-lg);
  color: var(--accent-secondary);
  transition: var(--transition-normal);
}

.timeline-card:hover .card-icon {
  background: rgba(34, 211, 238, 0.15);
  transform: scale(1.05);
}

.card-body {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.card-arrow {
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: var(--text-muted);
  opacity: 0;
  transform: translateX(-10px);
  transition: var(--transition-normal);
}

.timeline-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--accent-secondary);
}

/* Bottom CTA */
.bottom-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 48px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
}

.cta-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.cta-content p {
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .timeline {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }
  
  .timeline-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .timeline {
    grid-template-columns: 1fr;
  }
  
  .bottom-cta {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 32px;
  }
}
</style>
