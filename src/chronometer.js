class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        if(typeof printTimeCallback === "function"){
          printTimeCallback();}
          this.currentTime++;
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    value = value.toString()
    if(value.length === 1){
      return `0${value}`
    }return value
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
