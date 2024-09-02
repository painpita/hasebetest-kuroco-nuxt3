<template>
  <div>
    <LanguageSwitcher />

    <h1 class="title">{{ $t('news.title') }}</h1>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="localePath(`/news_i18n/${n.topics_id}`)">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const response = ref(null);
const lang = ref(useI18n().locale.value);
response.value = await fetchNews();

async function fetchNews() {
  const res = await useFetch(`/rcms-api/1/news?_lang=${lang.value}`, {
    baseURL: config.public.apiBase,
    credentials: "include",
  }).then((res) => res.data.value);
  return res;
}
</script>