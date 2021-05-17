<template>
  <div class="home">
    <top-content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopContent from "./components/Content.vue"; // @ is an alias to /src

@Component({
  components: {
    TopContent,
  },
})
export default class Top extends Vue {}
</script>