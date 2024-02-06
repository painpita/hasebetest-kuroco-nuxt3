<template>
    <div>
      <h1 class="title">{{ response.details.subject }}</h1>
      <div class="post" v-html="response.details.contents"></div>
    </div>
</template>
  
<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data: response } = await useFetch(`/rcms-api/1/newsdetail/${route.params.id}`,{
  baseURL:config.public.apiBase,
  credentials: 'include',
});
</script>
