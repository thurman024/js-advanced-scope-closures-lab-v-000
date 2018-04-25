
function produceDrivingRange(range) {
  return function (start, end) {
    let trip = Math.abs(parseInt(end) - parseInt(start))
    let difference = range - trip
    if (difference >= 0) {
      return `within range by ${difference}`
    } else {
      return `${-difference} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (fare) {
    return percent * fare
  }
}

function createDriver() {
  let driverId = 0
  return class  {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
