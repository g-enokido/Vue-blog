<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <b-card class="list_body">
          <b-card-Header>トップ画面</b-card-Header>
          <b-alert show class="text-center">
            <h5>ようこそ</h5>
          </b-alert>
          <b-card-text>
            <b-row>
              <b-col>
                <b-form-input
                  type="text"
                  placeholder="記事検索"
                  size="md"
                  v-model="search_name"
                ></b-form-input>
              </b-col>
              <b-col>
                <b-button block variant="outline-dark"
                  ><b-icon-search />絞り込み</b-button
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-button block variant="outline-info">
                  <b-icon-arrow-down-up />
                  更新順
                </b-button>
              </b-col></b-row
            >
            <b-list-group class="title_list">
              <b-list-group-item
                class="list-group-item"
                v-for="item in titles"
                v-bind:key="item.id"
              >
                <router-link :to="{ name: 'Article', query: { id: item.id } }">
                  <b-row>
                    <b-col cols="1">
                      <b-icon-star />
                    </b-col>
                    <b-col class="text-left">
                      {{ item.title }}
                    </b-col>
                  </b-row></router-link
                >
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Content extends Vue {
  search_name = "";
  data(): { titles: { id: number; title: string }[] } {
    return {
      titles: [{ id: 1, title: "テスト記事" }],
    };
  }
}
</script>


<style scoped>
.list_body {
  text-align: center;
  font-size: 20px;
  margin: 10px;
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