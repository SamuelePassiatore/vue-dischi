<script>
// import HomePage from "./pages/HomePage.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>
<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>