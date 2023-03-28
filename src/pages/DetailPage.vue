<script>
import axios from "axios";
import KillerCard from "../killers/KillerCard.vue";
const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "DetailPage",
  data: () => ({
    killer: null,
  }),
  components: { KillerCard },
  methods: {
    getKiller() {
      axios.get(ApiBaseUri + "/killers/" + this.$route.params.id).then((res) => {
        this.killer = res.data;
      });
    },
  },
  created() {
    this.getKiller();
  },
  computed: {

    skullFull() {
      return this.skullFull = Math.floor(this.killer.kills / 10)
    },
    skullEmpty() {
      return this.skullEmpty = 5 - this.skullFull
    }
  }
};
</script>

<template>
  <div class="card-killer-container d-flex align-items-center justify-content-center">
    <div v-if="killer" :killer="killer" :isDetail="true"
      class="container d-flex justify-content-center align-items-center pt-5">
      <div class="card-killer d-flex">
        <div class="card-killer-img">
          <img :src="killer.picture" :alt="killer.first_name">
        </div>
        <div class="card-killer-info">
          <div class=" info-detail">
            <h5 class="me-2">Name: <span class="ms-2">{{ killer.first_name }}</span></h5>
          </div>
          <div class=" info-detail">
            <h5 class="me-2">Surname: <span class="ms-2">{{ killer.last_name }}</span></h5>
          </div>
          <div class=" info-detail">
            <h5 class="me-2">Age: <span class="ms-2">{{ killer.age }}</span></h5>

          </div>
          <div class=" info-detail">
            <h5 class="me-2">Wanted:<span class="ms-2">{{ killer.wanted ? 'WANTED' : 'ARRESTED' }}</span></h5>
          </div>
          <div class=" info-detail">
            <h5>Kills: <i v-for="i in skullFull" :key="i" class="ms-2 fa-solid fa-skull"></i>
              <i v-for="i in skullEmpty" :key="i" class="ms-2 fa-solid fa-skull text-white"></i>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// generals
.card-killer-container {
  background-image: url(https://as1.ftcdn.net/v2/jpg/03/41/86/46/1000_F_341864670_m3ehgvYGSCoPIzcbx6ZaAXqf5OZPxF4a.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 60px);
}

i {

  color: red;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
}

.bg-detail {
  background-image: url();
  background-repeat: no-repeat;
  background-size: cover;
}

.card-killer {
  height: 300px;
  width: 700px;


  .card-killer-img {
    flex-basis: 300px;

  }

  .card-killer-info {
    flex-basis: 400px;
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5902a044-5b9b-44fa-98a0-4ac2215da760/d48k96z-f1c783f8-3488-4387-932f-04195fee5f7b.png/v1/fill/w_900,h_528,strp/blood_death_murder_background_by_loyalpuppet_d48k96z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI4IiwicGF0aCI6IlwvZlwvNTkwMmEwNDQtNWI5Yi00NGZhLTk4YTAtNGFjMjIxNWRhNzYwXC9kNDhrOTZ6LWYxYzc4M2Y4LTM0ODgtNDM4Ny05MzJmLTA0MTk1ZmVlNWY3Yi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kXDmdhY9LnAI90kpPt16WKLxeneVBQFdJMfLFxqFqns");
    background-size: contain;
    color: white;
    padding: 23px;
    border-radius: 0 15px 15px 0;
  }
}

.card-body {
  background-repeat: no-repeat;
  border-radius: 0px 15px 15px 0px;

  .info-detail {


    h5 {
      color: red;
    }

  }
}
</style>
