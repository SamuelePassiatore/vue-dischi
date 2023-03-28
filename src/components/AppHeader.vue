<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <!-- <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

        </ul>

        <ul class="navbar-nav">

        </ul>

            <ul class="navbar-nav">

            </ul>
          </div>
        </div>
      </nav> -->

  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon color-white"></span>
        </button>

        <div class="collapse navbar-collapse flex-grow-0 p-2" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link text-white" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-white" :to="{ name: 'killersPage' }">Killers</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-white" :to="{ name: 'contact' }">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
}
</style>