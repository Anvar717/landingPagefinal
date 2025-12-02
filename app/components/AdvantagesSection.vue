<template>
  <section class="section advantages">
    <div class="advantages-bg">
      <div class="glow-orb glow-orb-purple orb-1"></div>
    </div>
    
    <div class="container">
      <div class="advantages-layout">
        <!-- Left Content -->
        <div class="advantages-intro">
          <span class="section-eyebrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 .5a7.5 7.5 0 00-5.3 12.8.75.75 0 001.06-1.06A6 6 0 1114 8a.75.75 0 001.5 0A7.5 7.5 0 008 .5z"/>
              <path d="M8 5a.75.75 0 01.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5A.75.75 0 018 5z"/>
            </svg>
            Преимущества
          </span>
          <h2 class="section-title">
            Почему<br><span class="gradient-text-purple">FreelanceHub?</span>
          </h2>
          <p class="section-subtitle">
            Мы создали платформу, которая решает реальные проблемы и делает работу приятной для всех участников.
          </p>
          
          <div class="intro-stats">
            <div class="intro-stat">
              <span class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/>
                </svg>
              </span>
              <span class="stat-value">4.9</span>
              <span class="stat-label">Средний рейтинг</span>
            </div>
          </div>
        </div>
        
        <!-- Right Grid -->
        <div class="advantages-grid">
          <div 
            class="advantage-card" 
            v-for="(advantage, index) in advantages" 
            :key="advantage.title"
            :class="advantage.size"
          >
            <div class="card-icon" :style="{ background: advantage.iconBg }">
              <span v-html="advantage.icon"></span>
            </div>
            <h3 class="card-title">{{ advantage.title }}</h3>
            <p class="card-description">{{ advantage.description }}</p>
            
            <div class="card-hover-effect"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Безопасные сделки',
    description: 'Деньги на эскроу-счёте до завершения работы. Полная защита от мошенничества.',
    iconBg: 'linear-gradient(135deg, #ff6b4a, #ff8a6b)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6L12 2z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>`,
    size: 'span-2'
  },
  {
    title: 'Быстрый подбор',
    description: 'AI алгоритм подбирает исполнителей за минуты.',
    iconBg: 'linear-gradient(135deg, #22d3ee, #2dd4bf)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4-4"/>
      <path d="M11 8v6l3 2"/>
    </svg>`,
    size: ''
  },
  {
    title: 'Рейтинги',
    description: 'Прозрачная система отзывов.',
    iconBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/>
    </svg>`,
    size: ''
  },
  {
    title: 'Удобный интерфейс',
    description: 'Интуитивно понятная платформа без сложных настроек.',
    iconBg: 'linear-gradient(135deg, #a78bfa, #c4b5fd)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M4 9h16M9 9v11"/>
    </svg>`,
    size: ''
  },
  {
    title: 'Гарантии качества',
    description: 'Возврат денег или замена исполнителя, если работа не соответствует требованиям.',
    iconBg: 'linear-gradient(135deg, #ec4899, #f472b6)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M12 2l2 4.5 5 .7-3.6 3.5.9 5-4.3-2.3L7.7 15.7l.9-5L5 7.2l5-.7L12 2z"/>
      <path d="M8 18l-3 4h14l-3-4"/>
    </svg>`,
    size: 'span-2'
  },
  {
    title: 'Поддержка 24/7',
    description: 'Команда всегда на связи и готова помочь.',
    iconBg: 'linear-gradient(135deg, #10b981, #34d399)',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M4 18v-6a8 8 0 1116 0v6"/>
      <path d="M4 16v3a1 1 0 001 1h2v-6H5a1 1 0 00-1 1zM20 16v3a1 1 0 01-1 1h-2v-6h2a1 1 0 011 1z"/>
    </svg>`,
    size: ''
  }
]
</script>

<style scoped>
.advantages {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.advantages-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
}

.advantages-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: start;
}

.advantages-intro {
  position: sticky;
  top: 140px;
}

.advantages-intro .section-title {
  margin-bottom: 20px;
}

.advantages-intro .section-subtitle {
  margin-bottom: 40px;
}

.intro-stats {
  display: flex;
  gap: 24px;
}

.intro-stat {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(251, 191, 36, 0.15);
  border-radius: var(--radius-md);
  color: #fbbf24;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Grid */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.advantage-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 32px;
  overflow: hidden;
  transition: var(--transition-normal);
}

.advantage-card.span-2 {
  grid-column: span 2;
}

.advantage-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.advantage-card:hover .card-hover-effect {
  opacity: 1;
}

.card-hover-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%);
  opacity: 0;
  transition: var(--transition-normal);
  pointer-events: none;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .advantages-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .advantages-intro {
    position: static;
    text-align: center;
  }
  
  .advantages-intro .section-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .intro-stats {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .advantage-card.span-2 {
    grid-column: span 1;
  }
}
</style>
