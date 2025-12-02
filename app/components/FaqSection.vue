<template>
  <section class="section faq">
    <div class="container">
      <div class="faq-layout">
        <!-- Left Side -->
        <div class="faq-intro">
          <span class="section-eyebrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/>
              <path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
            FAQ
          </span>
          <h2 class="section-title">
            Часто задаваемые<br><span class="gradient-text-teal">вопросы</span>
          </h2>
          <p class="section-subtitle">
            Ответы на популярные вопросы о работе с платформой. Не нашли ответ? Напишите нам.
          </p>
          
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <div class="contact-info">
              <span class="contact-label">Есть вопрос?</span>
              <span class="contact-email">support@freelancehub.ru</span>
            </div>
          </div>
        </div>
        
        <!-- Right Side - FAQ List -->
        <div class="faq-list">
          <div 
            class="faq-item" 
            v-for="(faq, index) in faqs" 
            :key="index"
            :class="{ 'active': activeIndex === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span class="question-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="question-text">{{ faq.question }}</span>
              <div class="question-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 7.5l5 5 5-5"/>
                </svg>
              </div>
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeIndex = ref(0)

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
.faq {
  background: var(--bg-primary);
}

.faq-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
}

.faq-intro {
  position: sticky;
  top: 140px;
}

.faq-intro .section-title {
  margin-bottom: 20px;
}

.faq-intro .section-subtitle {
  margin-bottom: 40px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  transition: var(--transition-normal);
}

.contact-card:hover {
  border-color: var(--accent-secondary);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgba(34, 211, 238, 0.1);
  border-radius: var(--radius-md);
  color: var(--accent-secondary);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.contact-email {
  font-weight: 600;
  color: var(--accent-secondary);
}

/* FAQ List */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition-normal);
}

.faq-item:hover {
  border-color: var(--border-color-hover);
}

.faq-item.active {
  border-color: var(--accent-secondary);
  background: rgba(34, 211, 238, 0.03);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: transparent;
  border: none;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: var(--transition-fast);
}

.question-number {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.faq-item.active .question-number {
  color: var(--accent-secondary);
}

.question-text {
  flex: 1;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
}

.question-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  transition: var(--transition-normal);
  flex-shrink: 0;
}

.faq-item.active .question-icon {
  background: rgba(34, 211, 238, 0.1);
  color: var(--accent-secondary);
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.faq-answer p {
  padding: 0 24px 24px 56px;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.9375rem;
}

@media (max-width: 1024px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .faq-intro {
    position: static;
    text-align: center;
  }
  
  .faq-intro .section-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-card {
    justify-content: center;
  }
}
</style>
