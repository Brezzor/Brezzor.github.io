import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url))
      }
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    base: '/'
  }
})
