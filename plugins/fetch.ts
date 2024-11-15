export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.hooks.hook('fetch:created', (options) => {
      // baseURLの設定
      options.baseURL = options.baseURL || config.public.apiBaseUrl
      // ヘッダーの設定
      options.headers = {
        ...options.headers,
        'x-rcms-api-access-token': config.public.staticToken
      }
    })
  })