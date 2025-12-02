<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          <div class="logo-mark">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="url(#logo-grad)"/>
              <path d="M11 13h14M11 18h10M11 23h12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36">
                  <stop stop-color="#ff6b4a"/>
                  <stop offset="1" stop-color="#ff8a6b"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">FreelanceHub</span>
        </NuxtLink>

        <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <li><NuxtLink to="/" @click="closeMobileMenu">Главная</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMobileMenu">О нас</NuxtLink></li>
          <li><NuxtLink to="/how-it-works" @click="closeMobileMenu">Процесс</NuxtLink></li>
          <li><NuxtLink to="/products" @click="closeMobileMenu">Функции</NuxtLink></li>
          <li><NuxtLink to="/testimonials" @click="closeMobileMenu">Отзывы</NuxtLink></li>
          <li><NuxtLink to="/contacts" @click="closeMobileMenu">Контакты</NuxtLink></li>
        </ul>

        <div class="nav-actions">
          <a href="#" class="nav-link-btn">Войти</a>
          <a href="#" class="btn btn-primary">
            Начать
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>

        <button class="mobile-toggle" @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen">
          <span :class="{ 'active': mobileMenuOpen }"></span>
          <span :class="{ 'active': mobileMenuOpen }"></span>
          <span :class="{ 'active': mobileMenuOpen }"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition-normal);
}

.header.scrolled {
  background: rgba(12, 12, 14, 0.8);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.logo-mark {
  position: relative;
}

.logo-mark::after {
  content: '';
  position: absolute;
  inset: -4px;
  background: var(--accent-gradient);
  border-radius: 14px;
  opacity: 0;
  filter: blur(12px);
  transition: var(--transition-normal);
}

.logo:hover .logo-mark::after {
  opacity: 0.4;
}

.logo-text {
  background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  padding: 10px 16px;
  color: var(--text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
  white-space: nowrap;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-gradient);
  border-radius: 1px;
  transition: var(--transition-fast);
  transform: translateX(-50%);
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 20px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link-btn {
  padding: 10px 18px;
  color: var(--text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: var(--transition-fast);
}

.nav-link-btn:hover {
  color: var(--text-primary);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  cursor: pointer;
  z-index: 1001;
  transition: var(--transition-fast);
}

.mobile-toggle:hover {
  border-color: var(--border-color-hover);
}

.mobile-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition-fast);
  transform-origin: center;
}

.mobile-toggle span.active:nth-child(1) {
  transform: rotate(45deg) translateY(5.5px);
}

.mobile-toggle span.active:nth-child(2) {
  opacity: 0;
}

.mobile-toggle span.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-5.5px);
}

@media (max-width: 1024px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    background: var(--bg-primary);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-normal);
    gap: 8px;
  }
  
  .nav-links.active {
    opacity: 1;
    visibility: visible;
  }
  
  .nav-links a {
    font-size: 1.75rem;
    font-weight: 600;
    padding: 16px 24px;
  }
  
  .nav-links a::after {
    display: none;
  }
  
  .nav-actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
}
</style>
