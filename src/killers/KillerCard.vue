<script>

export default {
  name: "KillerCard",
  props: { killer: Object, isDetail: Boolean },
  data: () => ({

  }),
};
</script>

<template>
  <div class="col">
    <div class="card card-killer">
      <div v-if="killer.picture">
        <img :src="killer.picture" class="img-fluid img-killer" :alt="killer.first_name">
      </div>
      <div class="card-body align-items-center p-2 text-center">
        <h4 class="m-0 text-uppercase fs-5 mb-2"> {{ killer.first_name }} {{ killer.last_name }} </h4>
        <p class="m-0"><b class="fw-semibold">Age:</b> {{ killer.age }}</p>
        <p class="mb-1"><b class="fw-semibold">Kills:</b> {{ killer.kills }}</p>
        <p class="mb-2 fw-bold">{{ killer.wanted ? 'WANTED' : 'ARRESTED' }}</p>
        <div>
          <router-link v-if="!isDetail" class="btn btn-sm btn-danger"
            :to="{ name: 'killer-detail', params: { id: killer.id } }">See more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-killer {
  height: 150px;
  width: 100%;
  object-fit: cover;
}

.card-killer:hover {
  cursor: pointer;
}
</style>
