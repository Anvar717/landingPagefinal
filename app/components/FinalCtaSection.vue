<template>
  <section class="section final-cta">
    <div class="container">
      <div class="cta-card">
        <!-- Background Effects -->
        <div class="cta-bg">
          <div class="cta-gradient"></div>
          <div class="cta-grid"></div>
          <div class="glow-orb glow-orb-coral cta-orb-1"></div>
          <div class="glow-orb glow-orb-teal cta-orb-2"></div>
        </div>
        
        <!-- Content -->
        <div class="cta-content">
          <span class="cta-eyebrow">
            <span class="eyebrow-dot"></span>
            Начните сейчас
          </span>
          
          <h2 class="cta-title">
            Готовы начать<br>
            <span class="gradient-text">работать с нами?</span>
          </h2>
          
          <p class="cta-description">
            Присоединяйтесь к сообществу из 50,000+ профессионалов. Безопасные сделки, честные отзывы и поддержка 24/7.
          </p>
          
          <div class="cta-actions">
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
          
          <!-- Trust Elements -->
          <div class="cta-trust">
            <div class="trust-avatars">
              <div class="avatar" style="background: linear-gradient(135deg, #ff6b4a, #ff8a6b)">А</div>
              <div class="avatar" style="background: linear-gradient(135deg, #22d3ee, #2dd4bf)">М</div>
              <div class="avatar" style="background: linear-gradient(135deg, #a78bfa, #c4b5fd)">Д</div>
              <div class="avatar" style="background: linear-gradient(135deg, #10b981, #34d399)">Е</div>
              <div class="avatar more">+1K</div>
            </div>
            <span class="trust-text">Присоединились сегодня</span>
          </div>
        </div>
        
        <!-- Side Visual -->
        <div class="cta-visual">
          <div class="visual-card card-1">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/>
              </svg>
            </div>
            <div class="card-content">
              <span class="card-value">4.9</span>
              <span class="card-label">Рейтинг</span>
            </div>
          </div>
          
          <div class="visual-card card-2">
            <div class="card-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l3 3 5-5"/>
              </svg>
            </div>
            <div class="card-content">
              <span class="card-value">98%</span>
              <span class="card-label">Успешно</span>
            </div>
          </div>
          
          <div class="visual-card card-3">
            <div class="card-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div class="card-content">
              <span class="card-value">2 дня</span>
              <span class="card-label">Средний срок</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  padding: 60px 0 140px;
}

.cta-card {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  background: var(--bg-card-solid);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: 80px;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-gradient {
  position: absolute;
  top: -50%;
  left: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(ellipse at center, rgba(255, 107, 74, 0.1) 0%, transparent 60%);
}

.cta-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 20% 50%, black 20%, transparent 70%);
}

.cta-orb-1 {
  width: 400px;
  height: 400px;
  top: -150px;
  right: -100px;
  opacity: 0.3;
}

.cta-orb-2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  left: 30%;
  opacity: 0.2;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: rgba(255, 107, 74, 0.08);
  border: 1px solid rgba(255, 107, 74, 0.2);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 32px;
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.cta-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

/* Trust Elements */
.cta-trust {
  display: flex;
  align-items: center;
  gap: 16px;
}

.trust-avatars {
  display: flex;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: white;
  border: 3px solid var(--bg-card-solid);
  margin-right: -12px;
}

.avatar.more {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.trust-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Visual Cards */
.cta-visual {
  position: relative;
  height: 350px;
}

.visual-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 28px;
  background: rgba(24, 24, 28, 0.9);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(20px);
  animation: float 8s ease-in-out infinite;
}

.card-1 {
  top: 20px;
  left: 20px;
}

.card-2 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  animation-delay: -2s;
}

.card-3 {
  bottom: 20px;
  left: 60px;
  animation-delay: -4s;
}

.visual-card .card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(251, 191, 36, 0.15);
  border-radius: var(--radius-md);
  color: #fbbf24;
}

.visual-card .card-icon.green {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.visual-card .card-icon.purple {
  background: rgba(167, 139, 250, 0.15);
  color: var(--accent-tertiary);
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 800;
}

.card-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .cta-card {
    grid-template-columns: 1fr;
    padding: 48px;
    text-align: center;
  }
  
  .cta-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-actions {
    justify-content: center;
  }
  
  .cta-trust {
    justify-content: center;
  }
  
  .cta-visual {
    display: none;
  }
}

@media (max-width: 640px) {
  .final-cta {
    padding: 40px 0 100px;
  }
  
  .cta-card {
    padding: 32px;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
