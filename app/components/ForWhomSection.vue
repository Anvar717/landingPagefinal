<template>
  <section class="section for-whom">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Для кого <span class="gradient-text">платформа?</span></h2>
        <p class="section-subtitle">
          FreelanceHub создан для двух сторон одного процесса — для тех, кто ищет помощь, и для тех, кто её предоставляет.
        </p>
      </div>
      
      <div class="grid grid-2">
        <div class="audience-card">
          <div class="audience-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#freelancer-bg)"/>
              <path d="M24 14v20M14 24h20" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="24" cy="24" r="8" stroke="white" stroke-width="2"/>
              <defs>
                <linearGradient id="freelancer-bg" x1="0" y1="0" x2="48" y2="48">
                  <stop stop-color="#7c3aed"/>
                  <stop offset="1" stop-color="#a78bfa"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 class="audience-title">Фрилансерам</h3>
          <p class="audience-description">
            Находите заказы, соответствующие вашим навыкам. Формируйте портфолио, получайте честные отзывы и развивайте карьеру.
          </p>
          <ul class="audience-list">
            <li>Веб-разработчики</li>
            <li>Дизайнеры</li>
            <li>Копирайтеры</li>
            <li>SMM-специалисты</li>
            <li>Маркетологи</li>
          </ul>
          <a href="#" class="btn btn-primary">Стать фрилансером</a>
        </div>
        
        <div class="audience-card">
          <div class="audience-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#client-bg)"/>
              <rect x="14" y="18" width="20" height="16" rx="2" stroke="white" stroke-width="2"/>
              <path d="M18 14v4M30 14v4M14 26h20" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="client-bg" x1="0" y1="0" x2="48" y2="48">
                  <stop stop-color="#06b6d4"/>
                  <stop offset="1" stop-color="#22d3ee"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 class="audience-title">Заказчикам</h3>
          <p class="audience-description">
            Размещайте задачи и находите проверенных специалистов. Безопасные сделки и гарантия качества.
          </p>
          <ul class="audience-list">
            <li>Малый и средний бизнес</li>
            <li>Предприниматели</li>
            <li>Стартапы</li>
            <li>Частные лица</li>
            <li>Агентства</li>
          </ul>
          <a href="#" class="btn btn-primary">Разместить заказ</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.for-whom {
  background: var(--bg-secondary);
}

.audience-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 48px;
  transition: var(--transition-normal);
}

.audience-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.audience-icon {
  margin-bottom: 24px;
}

.audience-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.audience-description {
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.7;
}

.audience-list {
  list-style: none;
  margin-bottom: 32px;
}

.audience-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.audience-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: var(--accent-gradient);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .audience-card {
    padding: 32px;
  }
}
</style>

