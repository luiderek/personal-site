<template>
  <canvas resize id="main-canvas">{{ dots }}</canvas>
  <p>
    Back to
    <router-link to="/sandbox">sandbox</router-link>?
  </p>
</template>

<script>
import paper from 'paper'
export default {
  data() {
    return {
      dots: [],
      clientDimensions: { w: 0, h: 0 }
    }
  },

  methods: {
    initialCanvas() {
    },
    updateCanvas() {
      paper.setup(document.getElementById('main-canvas'));

      for (let dot of this.dots) {
        console.log('interating through dots: ', dot)
        let myPoint = new paper.Point(dot.x, dot.y);
        let myCircle = new paper.Path.Circle(myPoint, 20);
        myCircle.fillColor = 'white';
      }
    },
    getDimensions() {
      this.clientDimensions.w = document.documentElement.clientWidth
      this.clientDimensions.h = document.documentElement.clientHeight
    },
    handleClick(event) {
      console.log(event)
      this.dots.push({ x: event.x, y: event.y });
    }

  },

  mounted() {
    window.addEventListener('resize', this.getDimensions);
    let canvas = document.getElementById('main-canvas')
    canvas.addEventListener('click', this.handleClick);
    this.initialCanvas();
  },

  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

  updated() {
    this.updateCanvas();
  }
}
</script>

<style>
canvas[resize] {
  width: 100%;
  height: 95vh;
  overflow: hidden;
}

p {
  margin-left: 1.5rem;
}
</style>
