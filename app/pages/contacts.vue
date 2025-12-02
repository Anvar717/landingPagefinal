<template>
  <div class="page-contacts">
    <section class="hero-mini">
      <div class="hero-bg">
        <div class="glow-orb glow-orb-teal orb-1"></div>
        <div class="glow-orb glow-orb-coral orb-2"></div>
        <div class="hero-grid"></div>
      </div>
      
      <div class="container">
        <span class="section-eyebrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm.05 1h11.9l-5.88 4.07a.5.5 0 01-.14 0L2.05 3zm-.05 1.1l5.4 3.73a1.5 1.5 0 001.3 0L14 4.1V12H2V4.1z"/>
          </svg>
          Контакты
        </span>
        <h1 class="page-title">
          Свяжитесь<br><span class="gradient-text-teal">с нами</span>
        </h1>
        <p class="page-subtitle">
          Мы всегда рады помочь и ответить на ваши вопросы
        </p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contacts-grid">
          <!-- Form Side -->
          <div class="contact-form-wrapper">
            <div class="form-header">
              <h2>Напишите нам</h2>
              <p>Заполните форму, и мы ответим в течение 24 часов</p>
            </div>
            
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Ваше имя</label>
                  <input type="text" id="name" v-model="form.name" placeholder="Иван Иванов" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" placeholder="ivan@example.com" required>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Тема</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Выберите тему</option>
                  <option value="support">Техническая поддержка</option>
                  <option value="partnership">Партнёрство</option>
                  <option value="feedback">Обратная связь</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Сообщение</label>
                <textarea id="message" v-model="form.message" rows="5" placeholder="Опишите ваш вопрос..." required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-large">
                Отправить сообщение
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 10h12M12 4l6 6-6 6"/>
                </svg>
              </button>
            </form>
          </div>
          
          <!-- Info Side -->
          <div class="contact-info">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <a href="mailto:support@freelancehub.ru">support@freelancehub.ru</a>
                  <a href="mailto:partners@freelancehub.ru">partners@freelancehub.ru</a>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Telegram</h3>
                  <a href="https://t.me/freelancehub_support" target="_blank">@freelancehub_support</a>
                  <p>Быстрые ответы 24/7</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Время работы</h3>
                  <p>Поддержка: 24/7</p>
                  <p>Офис: Пн-Пт, 10:00-19:00</p>
                </div>
              </div>
            </div>
            
            <div class="social-section">
              <h3>Мы в социальных сетях</h3>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Telegram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- FAQ Quick Links -->
            <div class="faq-links">
              <h3>Популярные вопросы</h3>
              <ul>
                <li><a href="#">Как начать работать?</a></li>
                <li><a href="#">Какая комиссия?</a></li>
                <li><a href="#">Как вывести деньги?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Контакты — FreelanceHub',
  description: 'Свяжитесь с командой FreelanceHub. Email, Telegram, форма обратной связи.'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  alert('Спасибо! Ваше сообщение отправлено. Мы ответим в течение 24 часов.')
  form.value = { name: '', email: '', subject: '', message: '' }
}
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
  bottom: -20%;
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

.contacts-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
}

/* Form */
.contact-form-wrapper {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: 48px;
}

.form-header {
  margin-bottom: 32px;
}

.form-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.form-header p {
  color: var(--text-secondary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 16px 20px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-secondary);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group select {
  cursor: pointer;
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

/* Info Side */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.info-card {
  display: flex;
  gap: 20px;
  padding: 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  transition: var(--transition-normal);
}

.info-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(255, 107, 74, 0.1);
  border-radius: var(--radius-lg);
  color: var(--accent-primary);
  flex-shrink: 0;
}

.info-icon.teal {
  background: rgba(34, 211, 238, 0.1);
  color: var(--accent-secondary);
}

.info-icon.purple {
  background: rgba(167, 139, 250, 0.1);
  color: var(--accent-tertiary);
}

.info-content h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.info-content a {
  display: block;
  color: var(--accent-secondary);
  margin-bottom: 4px;
  transition: var(--transition-fast);
}

.info-content a:hover {
  color: var(--text-primary);
}

.info-content p {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.social-section {
  margin-bottom: 40px;
}

.social-section h3,
.faq-links h3 {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.social-link:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
  transform: translateY(-2px);
}

.faq-links ul {
  list-style: none;
}

.faq-links li {
  margin-bottom: 12px;
}

.faq-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9375rem;
  transition: var(--transition-fast);
}

.faq-links a::before {
  content: '→';
  color: var(--accent-secondary);
}

.faq-links a:hover {
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-form-wrapper {
    padding: 32px;
  }
}
</style>
