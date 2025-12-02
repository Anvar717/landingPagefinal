<template>
  <section class="section products bg-gradient-radial">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Функциональные <span class="gradient-text">возможности</span></h2>
        <p class="section-subtitle">
          Всё необходимое для эффективной работы в одном месте.
        </p>
      </div>
      
      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.title">
          <div class="product-header">
            <div class="product-icon" v-html="product.icon"></div>
            <span class="product-badge" v-if="product.badge">{{ product.badge }}</span>
          </div>
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <ul class="product-features">
            <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    title: 'Личный кабинет',
    description: 'Управляйте профилем, заказами и финансами в одном месте.',
    badge: 'Популярное',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="16" cy="10" r="6"/>
      <path d="M6 28c0-6 4-10 10-10s10 4 10 10"/>
    </svg>`,
    features: ['Статистика заработка', 'История операций', 'Настройки приватности']
  },
  {
    title: 'Чат и коммуникация',
    description: 'Общайтесь с клиентами и исполнителями в реальном времени.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 8h20v14H12l-6 4V8z"/>
      <path d="M12 14h8M12 18h4"/>
    </svg>`,
    features: ['Обмен файлами', 'История сообщений', 'Уведомления']
  },
  {
    title: 'Система уведомлений',
    description: 'Будьте в курсе всех важных событий и не пропускайте заказы.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 4c-4 0-8 3-8 8v6l-2 2v2h20v-2l-2-2v-6c0-5-4-8-8-8z"/>
      <path d="M12 24c0 2 2 4 4 4s4-2 4-4"/>
    </svg>`,
    features: ['Push-уведомления', 'Email-рассылка', 'Telegram-бот']
  },
  {
    title: 'Портфолио',
    description: 'Демонстрируйте свои лучшие работы и привлекайте клиентов.',
    badge: 'Новое',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="6" width="24" height="20" rx="2"/>
      <path d="M4 12h24"/>
      <circle cx="16" cy="19" r="4"/>
    </svg>`,
    features: ['Галерея проектов', 'Кейсы и описания', 'Отзывы клиентов']
  },
  {
    title: 'История заказов',
    description: 'Полный архив всех ваших проектов с детальной информацией.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 8v8l5 3"/>
    </svg>`,
    features: ['Фильтры и поиск', 'Экспорт данных', 'Аналитика']
  },
  {
    title: 'Безопасные платежи',
    description: 'Защищённые транзакции с гарантией возврата средств.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="8" width="24" height="16" rx="2"/>
      <path d="M4 14h24"/>
      <path d="M8 20h4"/>
    </svg>`,
    features: ['Эскроу-счета', 'Мгновенные выплаты', 'Мульти-валюта']
  }
]
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-gradient);
  opacity: 0;
  transition: var(--transition-normal);
}

.product-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.product-card:hover::before {
  opacity: 1;
}

.product-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.product-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  color: var(--accent-secondary);
}

.product-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  background: var(--accent-gradient);
  color: white;
  border-radius: 100px;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.product-description {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.product-features {
  list-style: none;
}

.product-features li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.product-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-secondary);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

