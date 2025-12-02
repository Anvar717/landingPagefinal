<template>
  <div class="page-products">
    <section class="hero-mini">
      <div class="container">
        <span class="badge">Функции</span>
        <h1 class="page-title">Все <span class="gradient-text">возможности</span> платформы</h1>
        <p class="page-subtitle">
          Полный набор инструментов для эффективной работы
        </p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="products-list">
          <div class="product-full" v-for="(product, index) in products" :key="product.title">
            <div class="product-full-content" :class="{ 'reverse': index % 2 === 1 }">
              <div class="product-info">
                <span class="product-badge" v-if="product.badge">{{ product.badge }}</span>
                <h2 class="product-title">{{ product.title }}</h2>
                <p class="product-description">{{ product.description }}</p>
                <ul class="product-features">
                  <li v-for="feature in product.features" :key="feature.title">
                    <strong>{{ feature.title }}:</strong> {{ feature.description }}
                  </li>
                </ul>
              </div>
              <div class="product-visual">
                <div class="visual-placeholder" :style="{ background: product.gradient }">
                  <span v-html="product.icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section features-grid-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Дополнительные <span class="gradient-text">функции</span></h2>
        </div>
        <div class="grid grid-4">
          <div class="mini-feature" v-for="feature in additionalFeatures" :key="feature.title">
            <div class="mini-feature-icon" v-html="feature.icon"></div>
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
  description: 'Все функции платформы FreelanceHub: личный кабинет, чат, портфолио, безопасные платежи и многое другое.'
})

const products = [
  {
    title: 'Личный кабинет',
    description: 'Ваш командный центр на платформе. Управляйте всеми аспектами работы в одном месте.',
    badge: 'Ключевая функция',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <circle cx="40" cy="28" r="12"/>
      <path d="M20 64c0-12 8-20 20-20s20 8 20 20"/>
      <rect x="50" y="45" width="20" height="15" rx="2"/>
    </svg>`,
    features: [
      { title: 'Дашборд', description: 'Обзор всех активных проектов и статистики' },
      { title: 'Финансы', description: 'История транзакций, баланс и вывод средств' },
      { title: 'Настройки', description: 'Персонализация уведомлений и приватности' }
    ]
  },
  {
    title: 'Система сообщений',
    description: 'Мощный инструмент коммуникации для эффективного взаимодействия между заказчиками и исполнителями.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <path d="M15 20h50v35H30l-15 10V20z"/>
      <path d="M25 35h30M25 45h20"/>
    </svg>`,
    features: [
      { title: 'Реальное время', description: 'Мгновенная доставка сообщений' },
      { title: 'Файлы', description: 'Обмен документами и изображениями' },
      { title: 'История', description: 'Полный архив переписки по проектам' }
    ]
  },
  {
    title: 'Портфолио',
    description: 'Продемонстрируйте свои навыки и привлеките больше клиентов качественным портфолио.',
    badge: 'Рекомендуем',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <rect x="10" y="15" width="60" height="50" rx="4"/>
      <path d="M10 30h60"/>
      <rect x="18" y="38" width="18" height="18" rx="2"/>
      <path d="M44 42h20M44 50h15M44 58h10"/>
    </svg>`,
    features: [
      { title: 'Галерея', description: 'Красивое отображение ваших работ' },
      { title: 'Кейсы', description: 'Подробное описание проектов' },
      { title: 'Категории', description: 'Группировка работ по типам' }
    ]
  },
  {
    title: 'Безопасные платежи',
    description: 'Система эскроу защищает обе стороны сделки и гарантирует честное сотрудничество.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="white" stroke-width="2">
      <path d="M40 10L15 22v15c0 18 10 28 25 33 15-5 25-15 25-33V22L40 10z"/>
      <path d="M28 40l8 8 16-16"/>
    </svg>`,
    features: [
      { title: 'Эскроу', description: 'Деньги замораживаются до завершения' },
      { title: 'Арбитраж', description: 'Решение споров профессионалами' },
      { title: 'Возврат', description: 'Гарантия возврата при проблемах' }
    ]
  }
]

const additionalFeatures = [
  {
    title: 'Уведомления',
    description: 'Push, email и Telegram',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2c-3 0-6 2-6 6v5l-2 2v1h16v-1l-2-2V8c0-4-3-6-6-6z"/>
      <path d="M9 18c0 2 1.5 3 3 3s3-1 3-3"/>
    </svg>`
  },
  {
    title: 'Поиск',
    description: 'Умные фильтры и сортировка',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="10" cy="10" r="7"/>
      <path d="M21 21l-5-5"/>
    </svg>`
  },
  {
    title: 'Рейтинг',
    description: 'Прозрачная система оценок',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2l3 6 6 1-4.5 4 1 6.5-5.5-3-5.5 3 1-6.5L3 9l6-1 3-6z"/>
    </svg>`
  },
  {
    title: 'Аналитика',
    description: 'Статистика и отчёты',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 20h16M4 20V10M8 20V14M12 20V8M16 20V12M20 20V6"/>
    </svg>`
  },
  {
    title: 'Избранное',
    description: 'Сохранение заказов и фрилансеров',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 21l-8-8c-2-2-2-5 0-7s5-2 7 0l1 1 1-1c2-2 5-2 7 0s2 5 0 7l-8 8z"/>
    </svg>`
  },
  {
    title: 'Шаблоны',
    description: 'Готовые шаблоны откликов',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 8h8M8 12h8M8 16h4"/>
    </svg>`
  },
  {
    title: 'Календарь',
    description: 'Планирование дедлайнов',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M3 10h18M8 2v4M16 2v4"/>
    </svg>`
  },
  {
    title: 'Экспорт',
    description: 'Выгрузка данных и отчётов',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3v12M5 10l7 7 7-7"/>
      <path d="M5 18h14"/>
    </svg>`
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

.products-list {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.product-full-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.product-full-content.reverse {
  direction: rtl;
}

.product-full-content.reverse > * {
  direction: ltr;
}

.product-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  background: var(--accent-gradient);
  color: white;
  border-radius: 100px;
  margin-bottom: 16px;
}

.product-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.product-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
}

.product-features {
  list-style: none;
}

.product-features li {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.product-features li strong {
  color: var(--text-primary);
}

.visual-placeholder {
  width: 100%;
  aspect-ratio: 1;
  max-width: 400px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.features-grid-section {
  background: var(--bg-secondary);
}

.mini-feature {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  transition: var(--transition-normal);
}

.mini-feature:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.mini-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  color: var(--accent-secondary);
  margin-bottom: 16px;
}

.mini-feature h3 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.mini-feature p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .product-full-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .product-full-content.reverse {
    direction: ltr;
  }
  
  .visual-placeholder {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .products-list {
    gap: 60px;
  }
  
  .product-title {
    font-size: 2rem;
  }
}
</style>

