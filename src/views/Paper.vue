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
      // clientDimensions: { w: 0, h: 0 },
      gridDimensions: { rows: 0, cols: 0 }
    }
  },

  methods: {
    initialCanvas() {
      paper.setup(document.getElementById('main-canvas'));
      this.gridDimensions.rows = Math.floor(document.documentElement.clientWidth / 20);
      this.gridDimensions.cols = Math.floor(document.documentElement.clientHeight / 20);
      for (let i = 1; i < this.gridDimensions.rows; i++) {
        for (let j = 1; j < this.gridDimensions.cols; j++) {
          let myPoint = new paper.Point(i * 20, j * 20);
          let myCircle = new paper.Path.Circle(myPoint, 5);
          myCircle.fillColor = 'green';
        }
      }
    },
    updateCanvas() {
      // var background = new paper.Shape.Rectangle({
      //   rectangle: paper.view.bounds,
      //   fillColor: { hue: 180, saturation: 1, brightness: .8 }
      // });

      // for (let i = 0; i < this.gridDimensions.rows; i++) {
      //   for (let j = 0; j < this.gridDimensions.cols; j++) {
      //     let myPoint = new paper.Point(i * 20, j * 20);
      //     let myCircle = new paper.Path.Circle(myPoint, 5);
      //     myCircle.fillColor = 'green';
      //   }
      // }

      for (let dot of this.dots) {
        console.log('interating through dots: ', dot)
        let myPoint = new paper.Point(dot.x, dot.y);
        let myCircle = new paper.Path.Circle(myPoint, 20);
        myCircle.fillColor = 'white';
      }
    },
    getDimensions() {
      // this.clientDimensions.w =
      // this.clientDimensions.h = document.documentElement.clientHeight
      this.gridDimensions.rows = Math.floor(document.documentElement.clientWidth * .95 / 20) - 1;
      this.gridDimensions.cols = Math.floor(document.documentElement.clientHeight / 20);
      console.log('gridDimensions', this.gridDimensions.rows, this.gridDimensions.cols);
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
