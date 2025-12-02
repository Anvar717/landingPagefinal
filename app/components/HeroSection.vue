<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-grid"></div>
      <div class="glow-orb glow-orb-coral hero-orb-1"></div>
      <div class="glow-orb glow-orb-teal hero-orb-2"></div>
      <div class="glow-orb glow-orb-purple hero-orb-3"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <!-- Eyebrow Badge -->
        <div class="hero-badge animate-fade-in-up" style="opacity: 0;">
          <div class="badge-glow"></div>
          <span class="badge">
            <span class="badge-dot"></span>
            Новая платформа для профессионалов
          </span>
        </div>
        
        <!-- Main Headline -->
        <h1 class="hero-title animate-fade-in-up delay-1" style="opacity: 0;">
          Соединяем<br>
          <span class="gradient-text">таланты</span> с<br>
          возможностями
        </h1>
        
        <!-- Description -->
        <p class="hero-description animate-fade-in-up delay-2" style="opacity: 0;">
          FreelanceHub — платформа нового поколения, где фрилансеры находят проекты мечты, а бизнес получает экспертов мирового уровня.
        </p>
        
        <!-- CTA Buttons -->
        <div class="hero-actions animate-fade-in-up delay-3" style="opacity: 0;">
          <a href="#" class="btn btn-primary btn-large">
            Разместить заказ
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 10h12M12 4l6 6-6 6"/>
            </svg>
          </a>
          <a href="#" class="btn btn-secondary btn-large">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="10" cy="10" r="8"/>
              <path d="M8 10l2 2 4-4"/>
            </svg>
            Стать фрилансером
          </a>
        </div>
        
        <!-- Stats -->
        <div class="hero-stats animate-fade-in-up delay-4" style="opacity: 0;">
          <div class="stat-item">
            <span class="stat-value">50K<span class="stat-plus">+</span></span>
            <span class="stat-label">Фрилансеров</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">120K<span class="stat-plus">+</span></span>
            <span class="stat-label">Проектов</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">98<span class="stat-plus">%</span></span>
            <span class="stat-label">Довольных</span>
          </div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="hero-float-elements animate-fade-in delay-5" style="opacity: 0;">
        <div class="float-card float-card-1">
          <div class="float-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/>
            </svg>
          </div>
          <span>Топ рейтинг</span>
        </div>
        <div class="float-card float-card-2">
          <div class="float-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
              <path d="M8 12l3 3 5-5"/>
            </svg>
          </div>
          <span>Безопасно</span>
        </div>
        <div class="float-card float-card-3">
          <div class="float-icon purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span>Быстро</span>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator animate-fade-in delay-6" style="opacity: 0;">
      <div class="scroll-line">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 160px 0 120px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 180%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(255, 107, 74, 0.12) 0%, transparent 60%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%);
}

.hero-orb-1 {
  width: 600px;
  height: 600px;
  top: -10%;
  right: -5%;
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  bottom: 10%;
  left: -5%;
  animation-delay: -5s;
}

.hero-orb-3 {
  width: 300px;
  height: 300px;
  top: 40%;
  left: 30%;
  animation-delay: -10s;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}

.hero-badge {
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
}

.badge-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(255, 107, 74, 0.2) 0%, transparent 70%);
  filter: blur(20px);
  animation: pulse 3s ease-in-out infinite;
}

.badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 28px;
}

.hero-description {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 580px;
  margin: 0 auto 48px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 32px;
  padding: 24px 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(20px);
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.stat-plus {
  color: var(--accent-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

/* Floating Elements */
.hero-float-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(24, 24, 28, 0.8);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  backdrop-filter: blur(20px);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  animation: float 8s ease-in-out infinite;
}

.float-card-1 {
  top: 20%;
  right: 8%;
  animation-delay: 0s;
}

.float-card-2 {
  bottom: 30%;
  left: 5%;
  animation-delay: -2s;
}

.float-card-3 {
  top: 45%;
  right: 3%;
  animation-delay: -4s;
}

.float-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 107, 74, 0.15);
  border-radius: var(--radius-sm);
  color: var(--accent-primary);
}

.float-icon.green {
  background: rgba(45, 212, 191, 0.15);
  color: var(--accent-teal);
}

.float-icon.purple {
  background: rgba(167, 139, 250, 0.15);
  color: var(--accent-tertiary);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: var(--border-color);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.scroll-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: var(--accent-gradient);
  border-radius: 2px;
  animation: scroll-move 2s ease-in-out infinite;
}

@keyframes scroll-move {
  0%, 100% { top: 0; opacity: 1; }
  50% { top: 40px; opacity: 0.5; }
}

@media (max-width: 1024px) {
  .hero-float-elements {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 100px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
    padding: 24px 32px;
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>
