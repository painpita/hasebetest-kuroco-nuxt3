<template>
  <div>
    <p>News list</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/news/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: response } = await useFetch('/rcms-api/48/news/list', {
  baseURL: config.public.apiBase,
  headers: {
    'x-rcms-api-access-token': config.public.staticToken
  }
});
</script>