<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.axios.get("/user/login").then((res) => {
      this.res = res;
    });
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(() => {
        //to-do保存到vuex里
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(() => {});
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/buttom.scss";
</style>
