<template>
  <div class="article">
    <article-content :article_id="article_id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleContent from "./components/Content.vue"; // @ is an alias to /src

@Component({
  components: {
    ArticleContent,
  },
})
export default class Article extends Vue {
    article_id = this.$route.query["id"]
}
</script>