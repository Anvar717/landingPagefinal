<template>
  <section class="section for-whom">
    <div class="for-whom-bg">
      <div class="glow-orb glow-orb-coral orb-1"></div>
      <div class="glow-orb glow-orb-teal orb-2"></div>
    </div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/>
            <path d="M8 4a.75.75 0 01.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5A.75.75 0 018 4z"/>
          </svg>
          Для кого
        </span>
        <h2 class="section-title">
          Создано для <span class="gradient-text">профессионалов</span>
        </h2>
        <p class="section-subtitle">
          Платформа объединяет тех, кто ищет помощь, и тех, кто готов её предоставить
        </p>
      </div>
      
      <!-- Bento Grid -->
      <div class="audience-grid">
        <!-- Freelancers Card -->
        <div class="audience-card freelancers">
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="6" stroke="currentColor" stroke-width="2"/>
                <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="card-badge">Для исполнителей</div>
            <h3 class="card-title">Фрилансерам</h3>
            <p class="card-description">
              Находите проекты, соответствующие вашим навыкам. Формируйте портфолио и развивайте карьеру.
            </p>
            
            <div class="skills-list">
              <span class="skill-tag">Разработка</span>
              <span class="skill-tag">Дизайн</span>
              <span class="skill-tag">Копирайтинг</span>
              <span class="skill-tag">SMM</span>
              <span class="skill-tag">Маркетинг</span>
            </div>
            
            <a href="#" class="card-btn">
              Стать фрилансером
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 10h12M12 4l6 6-6 6"/>
              </svg>
            </a>
          </div>
          <div class="card-visual freelancer-visual">
            <div class="visual-circle"></div>
            <div class="visual-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <!-- Clients Card -->
        <div class="audience-card clients">
          <div class="card-glow teal"></div>
          <div class="card-content">
            <div class="card-icon teal">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M10 6v4M22 6v4M6 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="card-badge teal">Для бизнеса</div>
            <h3 class="card-title">Заказчикам</h3>
            <p class="card-description">
              Размещайте задачи и находите проверенных специалистов. Безопасные сделки и гарантия качества.
            </p>
            
            <div class="skills-list">
              <span class="skill-tag teal">Стартапы</span>
              <span class="skill-tag teal">Бизнес</span>
              <span class="skill-tag teal">Агентства</span>
              <span class="skill-tag teal">Частные лица</span>
            </div>
            
            <a href="#" class="card-btn teal">
              Разместить заказ
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 10h12M12 4l6 6-6 6"/>
              </svg>
            </a>
          </div>
          <div class="card-visual client-visual">
            <div class="visual-grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-box">
          <div class="stat-number">15+</div>
          <div class="stat-text">Категорий услуг</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">24/7</div>
          <div class="stat-text">Поддержка</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">3 дня</div>
          <div class="stat-text">Средний срок</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">100%</div>
          <div class="stat-text">Безопасность</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.for-whom {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.for-whom-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb-1 {
  width: 500px;
  height: 500px;
  top: -20%;
  right: -10%;
  opacity: 0.5;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: -20%;
  left: -10%;
  opacity: 0.4;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.audience-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: 48px;
  overflow: hidden;
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.audience-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.card-glow {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 107, 74, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.card-glow.teal {
  background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
}

.card-content {
  position: relative;
  z-index: 2;
  flex: 1;
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
  margin-bottom: 24px;
}

.card-icon.teal {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

.card-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 107, 74, 0.1);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.card-badge.teal {
  background: rgba(34, 211, 238, 0.1);
  color: var(--accent-secondary);
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.card-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}

.skill-tag {
  padding: 8px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.skill-tag:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.skill-tag.teal:hover {
  border-color: var(--accent-secondary);
  color: var(--accent-secondary);
}

.card-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--accent-primary);
  color: white;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
}

.card-btn:hover {
  background: var(--accent-coral);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--glow-coral);
}

.card-btn.teal {
  background: var(--accent-secondary);
}

.card-btn.teal:hover {
  background: var(--accent-teal);
  box-shadow: 0 8px 24px var(--glow-teal);
}

/* Visual Elements */
.card-visual {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 200px;
  pointer-events: none;
  opacity: 0.5;
}

.visual-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px dashed var(--accent-primary);
  border-radius: 50%;
  right: -30px;
  bottom: -30px;
  animation: spin-slow 30s linear infinite;
}

.visual-lines {
  position: absolute;
  right: 40px;
  bottom: 40px;
}

.visual-lines span {
  display: block;
  width: 60px;
  height: 3px;
  background: var(--accent-gradient);
  border-radius: 2px;
  margin-bottom: 12px;
  opacity: 0.5;
}

.visual-lines span:nth-child(2) { width: 40px; }
.visual-lines span:nth-child(3) { width: 50px; }

.visual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.visual-grid span {
  width: 40px;
  height: 40px;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: var(--radius-sm);
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-box {
  text-align: center;
  padding: 32px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  transition: var(--transition-normal);
}

.stat-box:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.stat-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .audience-card {
    padding: 32px;
  }
  
  .card-visual {
    display: none;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>
