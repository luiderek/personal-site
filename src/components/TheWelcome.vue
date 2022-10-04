<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
    <template #heading>Projects</template>
    <a href="https://concord.dereklui.dev/" target="_blank" rel="noopener">Concord</a> - Full stack chatroom using React, Node.js, Express, and React.<br>
    <a href="https://luiderek.github.io/vip-player/" target="_blank" rel="noopener">Study Music Playlist</a> - A rewrite of a player that I listened to in college.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Socials</template>
    <a href="https://www.linkedin.com/in/derek-lui/" target="_blank" rel="noopener">LinkedIn</a> <br>
    <a href="http://github.com/luiderek" target="_blank" rel="noopener">GitHub</a>
  </WelcomeItem>

</template>
