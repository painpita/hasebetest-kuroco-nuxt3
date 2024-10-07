// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    runtimeConfig: {
        gcpKey: 'AIzaSyD6lSNis03Z03sdBsAIKvoXlM1StaFoJts',
        // Public keys that are exposed to the client
        public: {
            apiBase: 'https://hasebetest2.g.kuroco.app'
        }
    },

    modules: [
        [
            "@nuxtjs/i18n",
            {
                strategy: "prefix_and_default",
                // Define the language options
                locales: [
                    { code: "ja", file: "ja.json" },
                    { code: "en", file: "en.json" },
                ],
                // Set the default language
                defaultLocale: "ja",
                vueI18nLoader: true,
                lazy: true,
                // Specify the directory for the JSON file
                langDir: "locales/",
            },
        ],
    ],

    plugins: [
        '@/plugins/vue3-google-maps.client'
    ],
})