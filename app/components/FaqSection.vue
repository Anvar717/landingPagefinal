<template>
  <section class="section faq">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Часто задаваемые <span class="gradient-text">вопросы</span></h2>
        <p class="section-subtitle">
          Ответы на популярные вопросы о работе с платформой.
        </p>
      </div>
      
      <div class="faq-list">
        <div 
          class="faq-item" 
          v-for="(faq, index) in faqs" 
          :key="index"
          :class="{ 'active': activeIndex === index }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Как начать работать на платформе?',
    answer: 'Зарегистрируйтесь, заполните профиль, добавьте портфолио и начните откликаться на заказы. Для заказчиков — создайте задачу и получите предложения от фрилансеров.'
  },
  {
    question: 'Какая комиссия платформы?',
    answer: 'Комиссия составляет 10% от суммы заказа для фрилансеров. Для заказчиков размещение заказов бесплатно. Мы не берём скрытых платежей.'
  },
  {
    question: 'Как работает система безопасных сделок?',
    answer: 'Деньги заказчика замораживаются на эскроу-счёте при старте проекта. После успешного выполнения работы средства переводятся исполнителю. Это защищает обе стороны.'
  },
  {
    question: 'Можно ли отменить заказ?',
    answer: 'Да, заказ можно отменить до начала работы без штрафов. После старта проекта отмена возможна по согласованию сторон или через арбитраж платформы.'
  },
  {
    question: 'Как быстро выводятся деньги?',
    answer: 'Вывод средств происходит в течение 1-3 рабочих дней на банковскую карту или электронный кошелёк. Минимальная сумма вывода — 1000 рублей.'
  },
  {
    question: 'Что делать, если возник спор?',
    answer: 'Обратитесь в службу поддержки — наши специалисты рассмотрят ситуацию и примут справедливое решение. Мы гарантируем защиту интересов обеих сторон.'
  }
]
</script>

<style scoped>
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  overflow: hidden;
  transition: var(--transition-normal);
}

.faq-item:hover {
  border-color: var(--border-color-hover);
}

.faq-item.active {
  border-color: var(--accent-primary);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background: var(--bg-card);
  border: none;
  font-family: inherit;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition: var(--transition-fast);
}

.faq-question:hover {
  background: var(--bg-card-hover);
}

.faq-icon {
  flex-shrink: 0;
  transition: var(--transition-normal);
  color: var(--text-muted);
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
  color: var(--accent-primary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.faq-answer p {
  padding: 0 24px 24px;
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>

