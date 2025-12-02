<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer -->
      <div class="footer-main">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <div class="logo-mark">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill="url(#footer-logo-grad)"/>
                <path d="M11 13h14M11 18h10M11 23h12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="36" y2="36">
                    <stop stop-color="#ff6b4a"/>
                    <stop offset="1" stop-color="#ff8a6b"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="logo-text">FreelanceHub</span>
          </NuxtLink>
          <p class="footer-description">
            Современная платформа для фрилансеров и заказчиков. Безопасные сделки, удобный интерфейс, гарантии качества.
          </p>
          
          <!-- Social Links -->
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links-grid">
          <div class="footer-links">
            <h4 class="footer-title">Платформа</h4>
            <ul>
              <li><NuxtLink to="/about">О платформе</NuxtLink></li>
              <li><NuxtLink to="/how-it-works">Как работает</NuxtLink></li>
              <li><NuxtLink to="/products">Возможности</NuxtLink></li>
              <li><NuxtLink to="/testimonials">Отзывы</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4 class="footer-title">Поддержка</h4>
            <ul>
              <li><a href="#">Справочный центр</a></li>
              <li><a href="#">Связаться с нами</a></li>
              <li><a href="#">Сообщить о проблеме</a></li>
              <li><a href="#">Статус сервисов</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4 class="footer-title">Правовая информация</h4>
            <ul>
              <li><a href="#">Пользовательское соглашение</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Правила платформы</a></li>
              <li><a href="#">Cookie-политика</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Newsletter -->
      <div class="footer-newsletter">
        <div class="newsletter-content">
          <h4 class="newsletter-title">Будьте в курсе новостей</h4>
          <p class="newsletter-text">Подпишитесь на рассылку и получайте полезные материалы</p>
        </div>
        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="Ваш email" class="newsletter-input">
          <button type="submit" class="btn btn-primary">
            Подписаться
          </button>
        </form>
      </div>
      
      <!-- Bottom -->
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} FreelanceHub. Все права защищены.</p>
        <div class="footer-lang">
          <button class="lang-btn active">Русский</button>
          <button class="lang-btn">English</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 80px 0 0;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 80px;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border-color);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.logo-text {
  background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 280px;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.social-link:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
  transform: translateY(-2px);
}

/* Links Grid */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-title {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 14px;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent-primary);
}

/* Newsletter */
.footer-newsletter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid var(--border-color);
}

.newsletter-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.newsletter-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.newsletter-form {
  display: flex;
  gap: 12px;
}

.newsletter-input {
  width: 280px;
  padding: 14px 20px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 0.9375rem;
  color: var(--text-primary);
  transition: var(--transition-fast);
}

.newsletter-input::placeholder {
  color: var(--text-muted);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--accent-primary);
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.footer-lang {
  display: flex;
  gap: 8px;
}

.lang-btn {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition-fast);
}

.lang-btn:hover {
  color: var(--text-secondary);
}

.lang-btn.active {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .footer-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .footer-newsletter {
    flex-direction: column;
    text-align: center;
  }
  
  .newsletter-form {
    width: 100%;
    max-width: 400px;
  }
  
  .newsletter-input {
    flex: 1;
  }
}

@media (max-width: 640px) {
  .footer-links-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input {
    width: 100%;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
