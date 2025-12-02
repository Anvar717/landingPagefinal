<template>
  <section class="section products">
    <div class="products-bg bg-mesh"></div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 1A1.5 1.5 0 005 2.5V3H1.5a.5.5 0 000 1h.04l.76 9.13A1.5 1.5 0 003.79 15h8.42a1.5 1.5 0 001.49-1.37l.76-9.13h.04a.5.5 0 000-1H11v-.5A1.5 1.5 0 009.5 1h-3zM6 2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V3H6v-.5z"/>
          </svg>
          Возможности
        </span>
        <h2 class="section-title">
          Функциональные <span class="gradient-text">возможности</span>
        </h2>
        <p class="section-subtitle">
          Всё необходимое для эффективной работы собрано в одном месте
        </p>
      </div>
      
      <!-- Bento Grid -->
      <div class="products-bento">
        <div class="bento-card card-large">
          <div class="card-badge">Популярное</div>
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="16" cy="10" r="6"/>
              <path d="M6 28c0-6 4-10 10-10s10 4 10 10"/>
            </svg>
          </div>
          <h3 class="card-title">Личный кабинет</h3>
          <p class="card-description">Управляйте профилем, заказами и финансами в едином пространстве</p>
          <ul class="card-features">
            <li>Статистика заработка</li>
            <li>История операций</li>
            <li>Настройки приватности</li>
          </ul>
          <div class="card-visual visual-profile">
            <div class="visual-avatar"></div>
            <div class="visual-bars">
              <span style="width: 100%"></span>
              <span style="width: 75%"></span>
              <span style="width: 60%"></span>
            </div>
          </div>
        </div>
        
        <div class="bento-card">
          <div class="card-icon teal">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 8h20v14H12l-6 4V8z"/>
              <path d="M12 14h8M12 18h4"/>
            </svg>
          </div>
          <h3 class="card-title">Чат</h3>
          <p class="card-description">Общение в реальном времени</p>
        </div>
        
        <div class="bento-card">
          <div class="card-icon purple">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4c-4 0-8 3-8 8v6l-2 2v2h20v-2l-2-2v-6c0-5-4-8-8-8z"/>
              <path d="M12 24c0 2 2 4 4 4s4-2 4-4"/>
            </svg>
          </div>
          <h3 class="card-title">Уведомления</h3>
          <p class="card-description">Push, Email и Telegram</p>
        </div>
        
        <div class="bento-card card-wide">
          <div class="card-badge new">Новое</div>
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="6" width="24" height="20" rx="2"/>
              <path d="M4 12h24"/>
              <circle cx="16" cy="19" r="4"/>
            </svg>
          </div>
          <h3 class="card-title">Портфолио</h3>
          <p class="card-description">Демонстрируйте работы и привлекайте клиентов</p>
          <ul class="card-features horizontal">
            <li>Галерея</li>
            <li>Кейсы</li>
            <li>Отзывы</li>
          </ul>
        </div>
        
        <div class="bento-card">
          <div class="card-icon green">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="16" cy="16" r="12"/>
              <path d="M16 8v8l5 3"/>
            </svg>
          </div>
          <h3 class="card-title">История</h3>
          <p class="card-description">Архив проектов</p>
        </div>
        
        <div class="bento-card">
          <div class="card-icon yellow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="8" width="24" height="16" rx="2"/>
              <path d="M4 14h24"/>
              <path d="M8 20h4"/>
            </svg>
          </div>
          <h3 class="card-title">Платежи</h3>
          <p class="card-description">Безопасные выплаты</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  position: relative;
  overflow: hidden;
}

.products-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.products-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
}

.bento-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: var(--transition-normal);
  overflow: hidden;
}

.bento-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.card-large {
  grid-column: span 2;
  grid-row: span 2;
}

.card-wide {
  grid-column: span 2;
}

.card-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 6px 14px;
  background: var(--accent-gradient);
  border-radius: 100px;
  font-size: 0.6875rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-badge.new {
  background: var(--accent-gradient-2);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 107, 74, 0.1);
  border: 1px solid rgba(255, 107, 74, 0.2);
  border-radius: var(--radius-lg);
  color: var(--accent-primary);
  margin-bottom: 20px;
  transition: var(--transition-normal);
}

.bento-card:hover .card-icon {
  transform: scale(1.05);
}

.card-icon.teal {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

.card-icon.purple {
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.2);
  color: var(--accent-tertiary);
}

.card-icon.green {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.card-icon.yellow {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-large .card-title {
  font-size: 1.5rem;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.card-features {
  list-style: none;
  margin-top: 24px;
}

.card-features li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.card-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-secondary);
  font-weight: 700;
}

.card-features.horizontal {
  display: flex;
  gap: 24px;
}

.card-features.horizontal li {
  margin-bottom: 0;
}

/* Visual Elements */
.card-visual {
  position: absolute;
  bottom: 32px;
  right: 32px;
  pointer-events: none;
}

.visual-profile {
  display: flex;
  align-items: flex-end;
  gap: 16px;
}

.visual-avatar {
  width: 80px;
  height: 80px;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0.3;
}

.visual-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 120px;
}

.visual-bars span {
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
}

@media (max-width: 1024px) {
  .products-bento {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .card-large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 640px) {
  .products-bento {
    grid-template-columns: 1fr;
  }
  
  .card-large,
  .card-wide {
    grid-column: span 1;
  }
  
  .card-visual {
    display: none;
  }
}
</style>

