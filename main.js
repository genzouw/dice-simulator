var app = new Vue({
  el: "#app",
  data: {
    numberOfFaces: 6,
    totalNumberOfTrials: 100,
    dice: [],
    isRunning: false,
    speed: 1,
  },
  methods: {
    execute: function () {
      this.dice = Array(parseInt(this.numberOfFaces)).fill(0);

      this.isRunning = true;

      let timer = setInterval(() => {
        if (this.cumulativeNumberOfTrials() >= this.totalNumberOfTrials) {
          clearInterval(timer);
          this.isRunning = false;
          return;
        }

        this.dice[parseInt(Math.random() * this.dice.length)]++;

        app.$forceUpdate();
      }, this.speed);
    },
    cumulativeNumberOfTrials: function () {
      return this.dice.reduce((s, i) => {
        return s + i;
      }, 0);
    },
  },
});
