<script>
export default {
  name: "HomePage",

};
</script>

<template>
  <main class="main-bg">
    <div class="h-100 d-flex flex-column justify-content-between py-5">
      <div class="col-12">
        <h1 class="text-center text-danger">KILLERS WEBSITE</h1>
      </div>
      <router-link :to="{ name: 'killersPage' }"
        class="col-12 text-decoration-none d-flex flex-column justify-content-center align-items-center m-0">
        <p class="text-center text-danger">CLICK HERE TO</p>
        <p class="text-center text-danger">JOIN OUR KILLERS LIST</p>
        <i class="fa-solid fa-arrow-left text-danger"></i>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
  font-family: 'Creepster';
  background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/807120/efffe0125a3257057d60b22e29798dbb3d34dc2d.jpg);
  background-size: cover;

  p {
    font-size: 50px;
  }

  i {
    font-size: 40px;
  }

  h1 {
    font-size: 130px;
  }
}
</style>