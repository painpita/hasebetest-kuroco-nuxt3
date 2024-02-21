<template>
  <ClientOnly>
    <div>
      <h1 class="title">{{ response.details.subject }}</h1>
      <div class="post" v-html="response.details.contents"></div>
    </div>
  </ClientOnly>
</template>
  
<script setup>
const route = useRoute();

const { data: response } = useFetch(`/rcms-api/1/news/preview`, {
  baseURL: config.public.apiBase,
  credentials: 'include',
  server: false,
  params: {
    preview_token: route.query.preview_token,
  },
});

</script>
