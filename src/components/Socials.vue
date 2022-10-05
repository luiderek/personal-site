<template>
  <div class="icons">

    <!-- github -->
    <a href="http://github.com/luiderek" target="_blank" rel="noopener" aria-label="link to my github">
      <img src="../assets/github.svg" alt="">
    </a>

    <!-- linkedin -->
    <a href="https://www.linkedin.com/in/derek-lui/" target="_blank" rel="noopener" aria-label="link to my linkedin">
      <img src="../assets/linkedin.svg" alt="">
    </a>

    <!-- email -->
    <a href="mailto: luiderek@outlook.com" aria-label="link to my email">
      <img src="../assets/email.svg" alt="">
    </a>
  </div>
</template>


<style scoped>
.icons {
  margin-inline: auto;
  grid-area: 2 / 2;
}

img {
  margin-inline: .6rem;
}

@media (hover: hover) {
  a:hover {
    background-color: var(--vt-c-black);
  }
}
</style>
