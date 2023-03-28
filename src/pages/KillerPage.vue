<script>
import axios from "axios";
import KillerCard from "../killers/KillerCard.vue";
const ApiBaseUri = "http://localhost:8000/api";

export default {
  name: "KillerList",
  data: () => ({
    killers: [],
  }),
  components: { KillerCard },
  methods: {
    fetchKillers() {
      axios.get(ApiBaseUri + "/killers").then((res) => {
        this.killers = res.data;
      });
    },
  },
  created() {
    this.fetchKillers();
  },

};
</script>

<template>
  <main>
    <div class="container py-4">
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
        <KillerCard v-for="killer in killers" :key="killer.id" :killer="killer"></KillerCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
  background-image: url(https://as2.ftcdn.net/v2/jpg/01/63/20/53/1000_F_163205363_5YgJBWSKY0dbO4ESsGuLpJDQOH3xlg3g.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

