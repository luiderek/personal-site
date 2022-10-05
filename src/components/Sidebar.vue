<script setup>
import SidebarItem from './SidebarItem.vue'
</script>


<template>

  <SidebarItem>
    <template #heading>Projects</template>
    <a href="https://concord.dereklui.dev/" target="_blank" rel="noopener">Concord</a> - Chatroom using
    React, Node.js, Express, and PostgreSQL.<br>
    <a href="https://luiderek.github.io/vip-player/" target="_blank" rel="noopener">Study Playlist</a> - A remake of a
    flash music playlist that I used in college.
  </SidebarItem>

</template>


<style scoped>
img {
  margin-inline: .2rem;
}
</style>
