<template>
  <div class="greetings">
    <h1 class="green">Hi, I'm Derek.</h1>
    <h3>
      I'm a web developer located in southern California. I'm currently looking for entry level positions, and I've
      mostly been working with JavaScript and React.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings>* {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
