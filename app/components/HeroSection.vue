<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-grid"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge animate-fade-in-up">
          <span class="badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 5h5l-4 3.5 1.5 5L8 10.5 3.5 13.5 5 8.5 1 5h5L8 0z"/>
            </svg>
            Новая платформа для профессионалов
          </span>
        </div>
        
        <h1 class="hero-title animate-fade-in-up delay-1">
          Соединяем <span class="gradient-text">таланты</span><br>
          с возможностями
        </h1>
        
        <p class="hero-description animate-fade-in-up delay-2">
          FreelanceHub — современная платформа, где фрилансеры находят заказы,
          а бизнес получает качественные услуги. Безопасно, быстро, профессионально.
        </p>
        
        <div class="hero-actions animate-fade-in-up delay-3">
          <a href="#" class="btn btn-primary btn-large">
            Разместить заказ
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 10h12M12 4l6 6-6 6"/>
            </svg>
          </a>
          <a href="#" class="btn btn-secondary btn-large">
            Стать фрилансером
          </a>
        </div>
        
        <div class="hero-stats animate-fade-in-up delay-4">
          <div class="stat">
            <span class="stat-value">50K+</span>
            <span class="stat-label">Фрилансеров</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">120K+</span>
            <span class="stat-label">Завершённых проектов</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">98%</span>
            <span class="stat-label">Довольных клиентов</span>
          </div>
        </div>
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
  padding: 140px 0 100px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-gradient {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
}

.hero-orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(124, 58, 237, 0.3);
  top: 10%;
  right: 10%;
}

.hero-orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(6, 182, 212, 0.2);
  bottom: 20%;
  left: 5%;
  animation-delay: -4s;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero-badge {
  margin-bottom: 32px;
  opacity: 0;
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  opacity: 0;
}

.hero-description {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto 48px;
  line-height: 1.7;
  opacity: 0;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
  opacity: 0;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  opacity: 0;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 80px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>

