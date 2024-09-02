<template>
  <div>
    <LanguageSwitcher />

    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.contents"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const lang = ref(useI18n().locale.value);

const { data: response } = await useFetch(
  `${config.public.apiBase}/rcms-api/1/newsdetail/${route.params.slug}?_lang=${lang.value}`,
  {
    credentials: "include",
  }
);
</script>