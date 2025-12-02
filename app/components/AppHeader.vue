<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
              <path d="M10 12h12M10 16h8M10 20h10" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop stop-color="#7c3aed"/>
                  <stop offset="1" stop-color="#06b6d4"/>
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
          <a href="#" class="btn btn-ghost">Войти</a>
          <a href="#" class="btn btn-primary">Начать</a>
        </div>

        <button class="mobile-toggle" @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.25rem;
  font-weight: 700;
}

.logo-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
}

.nav-links a {
  padding: 10px 14px;
  color: var(--text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
  background: var(--bg-tertiary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition-fast);
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
  }
  
  .nav-links.active {
    opacity: 1;
    visibility: visible;
  }
  
  .nav-links a {
    font-size: 1.5rem;
    padding: 16px 24px;
  }
  
  .nav-actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
    z-index: 1001;
  }
}
</style>

