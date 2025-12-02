<template>
  <div class="page-products">
    <section class="hero-mini">
      <div class="hero-bg">
        <div class="glow-orb glow-orb-coral orb-1"></div>
        <div class="glow-orb glow-orb-purple orb-2"></div>
        <div class="hero-grid"></div>
      </div>
      
      <div class="container">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 1A1.5 1.5 0 005 2.5V3H1.5a.5.5 0 000 1h.04l.76 9.13A1.5 1.5 0 003.79 15h8.42a1.5 1.5 0 001.49-1.37l.76-9.13h.04a.5.5 0 000-1H11v-.5A1.5 1.5 0 009.5 1h-3z"/>
          </svg>
          Возможности
        </span>
        <h1 class="page-title">
          Все <span class="gradient-text">функции</span><br>платформы
        </h1>
        <p class="page-subtitle">
          Полный набор инструментов для эффективной работы
        </p>
      </div>
    </section>
    
    <!-- Main Products -->
    <section class="section">
      <div class="container">
        <div class="products-list">
          <div class="product-item" v-for="(product, index) in products" :key="product.title">
            <div class="product-content" :class="{ 'reverse': index % 2 === 1 }">
              <div class="product-info">
                <span class="product-badge" v-if="product.badge" :class="product.badgeType">{{ product.badge }}</span>
                <h2>{{ product.title }}</h2>
                <p class="product-description">{{ product.description }}</p>
                <ul class="product-features">
                  <li v-for="feature in product.features" :key="feature.title">
                    <span class="feature-title">{{ feature.title }}</span>
                    <span class="feature-desc">{{ feature.description }}</span>
                  </li>
                </ul>
              </div>
              <div class="product-visual">
                <div class="visual-box" :style="{ background: product.gradient }">
                  <span v-html="product.icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Additional Features -->
    <section class="section additional-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/>
            </svg>
            Ещё
          </span>
          <h2 class="section-title">Дополнительные <span class="gradient-text-teal">функции</span></h2>
        </div>
        
        <div class="mini-features-grid">
          <div class="mini-feature" v-for="feature in additionalFeatures" :key="feature.title">
            <div class="mini-icon" v-html="feature.icon"></div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <FinalCtaSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Возможности — FreelanceHub',
  description: 'Все функции платформы FreelanceHub: личный кабинет, чат, портфолио, безопасные платежи.'
})

const products = [
  {
    title: 'Личный кабинет',
    description: 'Ваш командный центр на платформе. Управляйте всеми аспектами работы в одном месте.',
    badge: 'Ключевая функция',
    badgeType: 'coral',
    gradient: 'linear-gradient(135deg, #ff6b4a 0%, #ff8a6b 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <circle cx="40" cy="28" r="12"/>
      <path d="M20 64c0-12 8-20 20-20s20 8 20 20"/>
      <rect x="50" y="45" width="20" height="15" rx="2"/>
    </svg>`,
    features: [
      { title: 'Дашборд', description: 'Обзор всех активных проектов' },
      { title: 'Финансы', description: 'История и вывод средств' },
      { title: 'Настройки', description: 'Приватность и уведомления' }
    ]
  },
  {
    title: 'Система сообщений',
    description: 'Мощный инструмент для эффективного взаимодействия.',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #2dd4bf 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <path d="M15 20h50v35H30l-15 10V20z"/>
      <path d="M25 35h30M25 45h20"/>
    </svg>`,
    features: [
      { title: 'Реальное время', description: 'Мгновенная доставка' },
      { title: 'Файлы', description: 'Обмен документами' },
      { title: 'История', description: 'Архив переписки' }
    ]
  },
  {
    title: 'Портфолио',
    description: 'Продемонстрируйте свои навыки и привлеките больше клиентов.',
    badge: 'Рекомендуем',
    badgeType: 'teal',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <rect x="10" y="15" width="60" height="50" rx="4"/>
      <path d="M10 30h60"/>
      <rect x="18" y="38" width="18" height="18" rx="2"/>
      <path d="M44 42h20M44 50h15M44 58h10"/>
    </svg>`,
    features: [
      { title: 'Галерея', description: 'Красивое отображение' },
      { title: 'Кейсы', description: 'Подробные описания' },
      { title: 'Категории', description: 'Группировка работ' }
    ]
  },
  {
    title: 'Безопасные платежи',
    description: 'Система эскроу защищает обе стороны и гарантирует честность.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <path d="M40 10L15 22v15c0 18 10 28 25 33 15-5 25-15 25-33V22L40 10z"/>
      <path d="M28 40l8 8 16-16"/>
    </svg>`,
    features: [
      { title: 'Эскроу', description: 'Заморозка до завершения' },
      { title: 'Арбитраж', description: 'Решение споров' },
      { title: 'Возврат', description: 'Гарантия при проблемах' }
    ]
  }
]

const additionalFeatures = [
  { title: 'Уведомления', description: 'Push, email, Telegram', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-3 0-6 2-6 6v5l-2 2v1h16v-1l-2-2V8c0-4-3-6-6-6z"/><path d="M9 18c0 2 1.5 3 3 3s3-1 3-3"/></svg>` },
  { title: 'Поиск', description: 'Умные фильтры', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="7"/><path d="M21 21l-5-5"/></svg>` },
  { title: 'Рейтинг', description: 'Система оценок', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4 1 6.5-5.5-3-5.5 3 1-6.5L3 9l6-1 3-6z"/></svg>` },
  { title: 'Аналитика', description: 'Статистика и отчёты', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16M4 20V10M8 20V14M12 20V8M16 20V12M20 20V6"/></svg>` },
  { title: 'Избранное', description: 'Сохранение заказов', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21l-8-8c-2-2-2-5 0-7s5-2 7 0l1 1 1-1c2-2 5-2 7 0s2 5 0 7l-8 8z"/></svg>` },
  { title: 'Шаблоны', description: 'Готовые отклики', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>` },
  { title: 'Календарь', description: 'Планирование', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>` },
  { title: 'Экспорт', description: 'Выгрузка данных', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M5 10l7 7 7-7"/><path d="M5 18h14"/></svg>` }
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
  right: -10%;
  opacity: 0.4;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  left: -10%;
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

/* Products List */
.products-list {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.product-content.reverse {
  direction: rtl;
}

.product-content.reverse > * {
  direction: ltr;
}

.product-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
}

.product-badge.coral {
  background: rgba(255, 107, 74, 0.1);
  border: 1px solid rgba(255, 107, 74, 0.2);
  color: var(--accent-primary);
}

.product-badge.teal {
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

.product-info h2 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.product-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.product-features {
  list-style: none;
}

.product-features li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.feature-title {
  font-weight: 700;
  color: var(--text-primary);
}

.feature-desc {
  font-size: 0.9375rem;
  color: var(--text-muted);
}

.visual-box {
  width: 100%;
  aspect-ratio: 1;
  max-width: 400px;
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

/* Additional Section */
.additional-section {
  background: var(--bg-secondary);
}

.mini-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.mini-feature {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px;
  text-align: center;
  transition: var(--transition-normal);
}

.mini-feature:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.mini-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  color: var(--accent-secondary);
  margin-bottom: 16px;
}

.mini-feature h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.mini-feature p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .product-content.reverse {
    direction: ltr;
  }
  
  .visual-box {
    max-width: 300px;
  }
  
  .mini-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .products-list {
    gap: 80px;
  }
  
  .product-info h2 {
    font-size: 2rem;
  }
  
  .mini-features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
