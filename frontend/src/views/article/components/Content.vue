<template>
  <div class="container">
    <b-row
      ><b-col
        ><b-card class="article"
          ><b-card-header>ラトラーター！</b-card-header>{{ article_id }}</b-card
        ></b-col
      ></b-row
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Top extends Vue {
  @Prop() article_id!: number;
}
</script>
<style scoped>
.article {
  text-align: center;
  font-size: 20px;
  margin: 100px;
}
.list_body button {
  margin-bottom: 10px;
}
.title_list {
  color: black;
  font-size: 20px;
  height: 100%;
  max-height: 270px;
  overflow-y: scroll;
  text-align: center;
  margin-bottom: 10px;
}
</style>