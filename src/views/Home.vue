<template>
  <div id="home">
    <Portfolio />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import Portfolio from "../components/Portfolio.vue";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  components: { Portfolio }
};
</script>

<style scoped>
#home {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
}

@media (min-width: 1024px) {
  #home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 50px;
    padding: 0 2rem;
  }
}
</style>
