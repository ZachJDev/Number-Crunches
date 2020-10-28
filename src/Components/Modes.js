const getRandom = function (array) {
  const num = Math.floor(Math.random() * array.length);
  return array[num];
};

class BASE_RULES {
  constructor() {
    this.max = 10;
    this.min = 1;
    this.startTime = 10;
    this.totalProblems = 50;
    this.practice = false;
    this.hasNumProbs = false;
    this.hasStartClock = false;
    this.allowedSigns = ["+", "-", "×", "/"];
  }
}

class GameMode {
  constructor(params) {
    Object.assign(this, params);
    this.hasTimer = !this.practice;
    this.bonus = 2;
    this.ticks = true;
    this.clockDirection = 1;
    this.hasSkip = true;
    this.challengeIncrease = 0;
    this.max = Number(this.max);
    this.min = Number(this.min);
  }
  compute(n1, n2, s) {
    if (s === "×") return n1 * n2;
    if (s === "+") return n1 + n2;
    if (s === "-") return n1 - n2;
    if (s === "/") return n1 / n2;
  }

  getRandomInt() {
    // if(this.max == this.min) return Number(this.min)
    // This returns 0 if min and max are the same...
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  getNewProblem() {
    let n1, n2;
    const sign = getRandom(this.signs);
    do {
      [n1, n2] = this.getNewNumbers();
    } while (sign === "/" && n2 === 0); // Avoid 0 in the denominator
    return [n1, n2, sign];
  }

  getNewNumbers() {
    return [this.getRandomInt(), this.getRandomInt()];
  }
  isFinished() {
    return false;
  }
  increaseChallenge() {
    this.max += this.challengeIncrease;
  }

  static newGame(options) {
    switch (options.mode) {
      case "Normal":
        return new Normal(options);
      case "Blitz":
        return new Blitz(options);
      case "Zen":
        return new Zen(options);
      case "Multiplication Tables":
        return new MultiplicationTables(options);
      default: return new Normal(options)
    }
  }
}

class Normal extends GameMode {
  constructor(params) {
    super(params);
    this.challengeIncrease = 5;
  }
  static getDefaultRules() {
    return Object.assign(new BASE_RULES(), {
      id: "Normal",
      hasPractice: true,
      description:
        "Every correct answer adds more time to the clock, but be careful! The problems get harder the longer you  last.",
      hasStartClock: true,
    });
  }
}

class MultiplicationTables extends GameMode {
  constructor(params) {
    super(params);
    this.initGame();
    this.clockDirection = 1;
    this.hasSkip = false;
  }
  initGame() {
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
    return nums;
  }
  isFinished() {
    if (this.problem === this.table.length) {
      this.initGame();
      return true;
    }
    return false;
  }

  static getDefaultRules() {
    return Object.assign(new BASE_RULES(), {
      id: "Multiplication Tables",
      ticks: true,
      hasPractice: true,
      description:
        "Like Normal mode, but let's you focus just on multiplication tables.",
      allowedSigns: ["×"],
      hasStartClock: true,
    });
  }
}

class Zen extends GameMode {
  constructor(params) {
    super(params);
    this.hasTimer = false;
  }
  static getDefaultRules() {
    return Object.assign(new BASE_RULES(), {
      id: "Zen",
      description: "Chill out with some music and endless math problems.",
    });
  }
}

class Blitz extends GameMode {
  constructor(params) {
    super(params);
    this.clockDirection = -1;
    this.startTime = 0;
    this.bonus = 0;
  }

  // I don't like this being a method. I need to figure a way to keep the game logic separate from the game rules
  isFinished(probNum) {
    // eslint-disable-next-line eqeqeq
    if (probNum == this.totalProblems) {
      // total problems is stored as a string.
      // Thank you past me.
      return true;
    }
    return false;
  }

  static getDefaultRules() {
    return Object.assign(new BASE_RULES(), {
      id: "Blitz",
      problemCount: true,
      description: "Solve a set number of problems as fast as you can!",
      hasNumProbs: true,
    });
  }
}

export default GameMode;
export { Normal, MultiplicationTables, Blitz, Zen };