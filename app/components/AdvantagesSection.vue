<template>
  <section class="section advantages">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Почему <span class="gradient-text">FreelanceHub?</span></h2>
        <p class="section-subtitle">
          Мы создали платформу, которая решает реальные проблемы фрилансеров и заказчиков.
        </p>
      </div>
      
      <div class="advantages-grid">
        <div class="advantage-card" v-for="advantage in advantages" :key="advantage.title">
          <div class="advantage-icon" :style="{ background: advantage.gradient }">
            <span v-html="advantage.icon"></span>
          </div>
          <h3 class="advantage-title">{{ advantage.title }}</h3>
          <p class="advantage-description">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Безопасные сделки',
    description: 'Деньги хранятся на эскроу-счёте до завершения работы. Вы защищены от мошенничества.',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <path d="M14 2L4 6v6c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V6L14 2z"/>
      <path d="M9 14l3 3 7-7"/>
    </svg>`
  },
  {
    title: 'Быстрый подбор',
    description: 'Умный алгоритм подбирает исполнителей по навыкам, рейтингу и опыту за считанные минуты.',
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <circle cx="12" cy="12" r="8"/>
      <path d="M26 26l-6-6"/>
      <path d="M12 8v8l4 2"/>
    </svg>`
  },
  {
    title: 'Система рейтингов',
    description: 'Прозрачные отзывы и рейтинги помогают выбрать лучших специалистов для вашего проекта.',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <path d="M14 2l3.5 7 7.5 1-5.5 5 1.5 7.5L14 19l-7 3.5 1.5-7.5L3 9.5l7.5-1L14 2z"/>
    </svg>`
  },
  {
    title: 'Удобный интерфейс',
    description: 'Интуитивно понятная платформа, в которой разберётся каждый. Никаких сложных настроек.',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <rect x="4" y="4" width="20" height="20" rx="3"/>
      <path d="M4 10h20M10 10v14"/>
    </svg>`
  },
  {
    title: 'Гарантии качества',
    description: 'Если работа не соответствует требованиям — мы вернём деньги или найдём другого исполнителя.',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <path d="M14 2l2.5 5 5.5.8-4 4 1 5.5-5-2.6-5 2.6 1-5.5-4-4 5.5-.8L14 2z"/>
      <path d="M8 20l-4 6h20l-4-6"/>
    </svg>`
  },
  {
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда на связи и готова помочь решить любой вопрос в кратчайшие сроки.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" stroke-width="2">
      <path d="M4 20v-8a10 10 0 1 1 20 0v8"/>
      <path d="M4 18v4a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2zM24 18v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z"/>
    </svg>`
  }
]
</script>

<style scoped>
.advantages {
  background: var(--bg-secondary);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.advantage-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-normal);
}

.advantage-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.advantage-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
}

.advantage-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.advantage-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}
</style>

