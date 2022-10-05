<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
import Socials from './components/Socials.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hi, I'm Derek." />
    </div>
  </header>

  <main>
    <Sidebar />
  </main>

  <Socials />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-width: 600px;
  margin-inline: auto;
}

main {
  max-width: 500px;
  margin-inline: auto;
  display: flex;
  place-items: center;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
