<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <div class="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)"/>
                <path d="M10 12h12M10 16h8M10 20h10" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stop-color="#7c3aed"/>
                    <stop offset="1" stop-color="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="logo-text">FreelanceHub</span>
          </NuxtLink>
          <p class="footer-description">
            Современная платформа для фрилансеров и заказчиков. Безопасные сделки, удобный интерфейс, гарантии качества.
          </p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="VK">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.366 1.26 2.18 1.817.616.422 1.084.33 1.084.33l2.178-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.999-1.33 1.398-2.141 1.273-2.489-.12-.331-.857-.244-.857-.244l-2.452.015s-.182-.025-.317.056c-.131.079-.216.262-.216.262s-.387 1.028-.903 1.902c-1.089 1.847-1.524 1.945-1.702 1.832-.413-.265-.31-1.065-.31-1.633 0-1.775.27-2.515-.524-2.707-.263-.063-.457-.106-1.129-.113-.863-.009-1.593.003-2.007.205-.275.134-.488.433-.358.45.159.021.521.098.712.358.247.336.238 1.089.238 1.089s.142 2.088-.331 2.348c-.325.18-.77-.186-1.725-1.857-.489-.856-.859-1.803-.859-1.803s-.071-.174-.198-.267c-.154-.113-.37-.148-.37-.148l-2.327.015s-.35.01-.478.162c-.115.135-.009.415-.009.415s1.815 4.244 3.869 6.382c1.883 1.96 4.02 1.832 4.02 1.832h.97z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
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
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} FreelanceHub. Все права защищены.</p>
        <p class="footer-location">Сделано с ❤️ в России</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.logo-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
  max-width: 300px;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.social-link:hover {
  background: var(--accent-primary);
  color: white;
}

.footer-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .footer-brand {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-brand {
    grid-column: 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>

