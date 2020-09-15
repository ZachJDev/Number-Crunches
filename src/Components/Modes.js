const getRandom = function (array) {
  const num = Math.floor(Math.random() * array.length);
  return array[num];
};

class GameMode {
  constructor(params) {
    Object.assign(this, params);
  }
  compute(n1, n2, s) {
    if (s === "*") return n1 * n2;
    if (s === "+") return n1 + n2;
    if (s === "-") return n1 - n2;
    if (s === "/") return n1 / n2;
  }

  getRandomInt() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  getNewProblem() {
      let n1, n2;
      const sign = getRandom(this.signs);
      do {
         [n1,n2] = this.getNewNumbers();
      } while (sign === "/" && n2 === 0); // Avoid 0 in the denominator
      return [n1,n2,sign]
  }

  getNewNumbers() {
    return [this.getRandomInt(), this.getRandomInt()];
  }
}

class Normal extends GameMode {
  constructor(params) {
    super(params);
    this.hasTimer = true;
  }
  static getDefaultRules() {
    return {id:'Normal', ticks: true, defaultTick: 3, timer: 'down', practice: true}
  }
}

class MultiplicationTables extends GameMode {
  constructor(params) {
    super(params);
    this.table = [];
    this.problem = 0;
    for (let i = this.min; i <= this.max; i++) {
      for (let j = this.min; j <= this.max; j++) {
        this.table.push([i, j]);
      }
    }
  }
  getNewNumbers() {
    let nums;
    if (this.inOrder) {
      nums = this.table[0];
    } else {
      nums = getRandom(this.table);
    }
    this.table = this.table.filter((tuples) => {
      return tuples !== nums;
    });
    return nums
  }

  static getDefaultRules() {
    return {id: 'Multiplication Tables', ticks: true, practice: true, timer: 'down', defaultTick: 3}
  }

}

class Zen extends GameMode {
 constructor(params) {
     super(params);
     this.hasTimer = false;
 }
 static getDefaultRules() {
   return {id: 'Zen', ticks: false, timer: 'none',}
 }
}

class Blitz extends GameMode {
  constructor(params) {
    super(params);
    this.hasTimer = true;
  }
  static getDefaultRules() {
    return {id:'Blitz', ticks: false, timer: 'up', defaultTotal: 100}
  }
}
// let n = new NormalGame({ max: 10, min: 1 });
// for (let i = 0; i < 100; i++) {
//   console.log(n.getNewNumbers());
// }

export {Normal, MultiplicationTables, Zen, Blitz}
