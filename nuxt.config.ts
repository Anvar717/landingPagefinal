// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'FreelanceHub — Платформа для фрилансеров и заказчиков',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FreelanceHub — современная платформа для поиска фрилансеров и размещения заказов. Безопасные сделки, удобный интерфейс, гарантии выполнения работ.' },
        { property: 'og:title', content: 'FreelanceHub — Платформа для фрилансеров' },
        { property: 'og:description', content: 'Найдите лучших специалистов или получите заказы на выполнение задач' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#0c0c0e' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // SEO is handled by useSeoMeta() in pages
})
