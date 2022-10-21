<script setup>
import AboutMe from '@/components/AboutMe.vue'
import Sidebar from '@/components/Sidebar.vue'
import SocialIcons from '@/components/SocialIcons.vue';

</script>

<template>
  <header>
    <AboutMe />
  </header>

  <main>
    <Sidebar />
  </main>

  <SocialIcons />
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

.container {
  margin-inline: auto;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
