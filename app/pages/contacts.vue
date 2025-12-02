<template>
  <div class="page-contacts">
    <section class="hero-mini">
      <div class="container">
        <span class="badge">Связь</span>
        <h1 class="page-title">Свяжитесь <span class="gradient-text">с нами</span></h1>
        <p class="page-subtitle">
          Мы всегда рады помочь и ответить на ваши вопросы
        </p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contacts-grid">
          <div class="contact-form-wrapper">
            <h2>Напишите нам</h2>
            <p class="form-description">Заполните форму, и мы ответим в течение 24 часов</p>
            
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Ваше имя</label>
                <input type="text" id="name" v-model="form.name" placeholder="Иван Иванов" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="ivan@example.com" required>
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
          
          <div class="contact-info">
            <h2>Контактная информация</h2>
            
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
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M16.64 8.8c-.15 1.58-.8 5.42-1.13 7.19"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Telegram</h3>
                  <a href="https://t.me/freelancehub_support" target="_blank">@freelancehub_support</a>
                  <p>Быстрые ответы 24/7</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
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
                <a href="#" class="social-link" aria-label="VK">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.366 1.26 2.18 1.817.616.422 1.084.33 1.084.33l2.178-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.999-1.33 1.398-2.141 1.273-2.489-.12-.331-.857-.244-.857-.244l-2.452.015s-.182-.025-.317.056c-.131.079-.216.262-.216.262s-.387 1.028-.903 1.902c-1.089 1.847-1.524 1.945-1.702 1.832-.413-.265-.31-1.065-.31-1.633 0-1.775.27-2.515-.524-2.707-.263-.063-.457-.106-1.129-.113-.863-.009-1.593.003-2.007.205-.275.134-.488.433-.358.45.159.021.521.098.712.358.247.336.238 1.089.238 1.089s.142 2.088-.331 2.348c-.325.18-.77-.186-1.725-1.857-.489-.856-.859-1.803-.859-1.803s-.071-.174-.198-.267c-.154-.113-.37-.148-.37-.148l-2.327.015s-.35.01-.478.162c-.115.135-.009.415-.009.415s1.815 4.244 3.869 6.382c1.883 1.96 4.02 1.832 4.02 1.832h.97z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
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
  // Here would be the form submission logic
  alert('Спасибо! Ваше сообщение отправлено. Мы ответим в течение 24 часов.')
  form.value = { name: '', email: '', subject: '', message: '' }
}
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

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-form-wrapper h2,
.contact-info h2 {
  font-size: 1.75rem;
  margin-bottom: 8px;
}

.form-description {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 500;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 16px;
  background: var(--bg-card);
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
  border-color: var(--accent-primary);
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
  min-height: 120px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

.info-card {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
}

.info-card:hover {
  border-color: var(--accent-primary);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--accent-gradient);
  border-radius: var(--radius-md);
  color: white;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.info-content a {
  display: block;
  color: var(--accent-secondary);
  margin-bottom: 2px;
}

.info-content a:hover {
  color: var(--text-primary);
}

.info-content p {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.social-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
}

.social-section h3 {
  font-size: 1rem;
  color: var(--text-secondary);
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
  width: 48px;
  height: 48px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.social-link:hover {
  background: var(--accent-primary);
  color: white;
}

@media (max-width: 1024px) {
  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}
</style>

