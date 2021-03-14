import { makeAutoObservable } from "mobx";

class Store {
  secondsPassed = 0;
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  async getList() {
    const result = await fetch('https://full-stats-start.herokuapp.com/api/v1/basketball/match/1')
    const data = await result.json();

    console.log(data);
  }
}

export default new Store();
