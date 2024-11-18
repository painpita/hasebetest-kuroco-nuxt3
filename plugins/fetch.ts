export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    return {
      provide: {
        customFetch: (url: string, options = {}) => {
          return useFetch(url, {
            baseURL: config.public.apiBase as string,
            headers: {
              'x-rcms-api-access-token': config.public.staticToken as string
            },
            ...options
          })
        }
      }
    }
  })