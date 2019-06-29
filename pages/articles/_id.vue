<template>
  <div id="index">
    <article-page/>
  </div>
</template>

<!--TODO fill me-->
<script>

  import ArticlePage from '../../components/ArticlePage/ArticlePage';

  export default {
    components: {
      ArticlePage,
    },
    validate({ params }) {
      // Doit être un nombre
      return /^\d+$/.test(params.id);
    },
  };
</script>

<style scoped>

</style>
