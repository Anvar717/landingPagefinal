<template>
  <section class="section final-cta">
    <div class="container">
      <div class="cta-card">
        <div class="cta-bg">
          <div class="cta-orb cta-orb-1"></div>
          <div class="cta-orb cta-orb-2"></div>
        </div>
        <div class="cta-content">
          <h2 class="cta-title">Готовы начать?</h2>
          <p class="cta-description">
            Присоединяйтесь к тысячам профессионалов, которые уже используют FreelanceHub для работы и поиска специалистов.
          </p>
          <div class="cta-actions">
            <a href="#" class="btn btn-primary btn-large">
              Разместить заказ
            </a>
            <a href="#" class="btn btn-secondary btn-large">
              Стать фрилансером
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  padding: 80px 0 120px;
}

.cta-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 80px;
  text-align: center;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.cta-orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(124, 58, 237, 0.2);
  top: -200px;
  left: -100px;
}

.cta-orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(6, 182, 212, 0.15);
  bottom: -150px;
  right: -50px;
}

.cta-content {
  position: relative;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta-card {
    padding: 48px 24px;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>

