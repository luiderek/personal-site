<template>
  <div id="sandbox">
    <h2>such routing, very wow.</h2>
    <p>here i'll be slowly adding links to mini-projects to practice building things.</p>

    <br />

    <router-link to="/paper">paper</router-link>
    <p>experimenting with paper.js in a single file vue component. click anywhere.</p>

    <br />
    <br />
    <p>
      Back to
      <router-link to="/">home</router-link>?
    </p>

  </div>
</template>

<style>
#sandbox {
  text-align: center;
  padding-top: 5rem;
}
</style>
