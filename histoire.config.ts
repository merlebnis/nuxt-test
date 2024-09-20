import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'
import setupI18n from '@nuxtjs/i18n'

export default defineConfig({
  plugins: [
    HstVue(),
    HstNuxt(),
  ],
})

/*

import { createI18n } from 'vue-i18n'
import messages from './i18n.config'

export function setupVue3({ app }) {
  const i18n = createI18n({
    legacy: false,
    locale: 'de',
    messages,
  })

  app.use(i18n)
}
  */