import { makeAutoObservable } from "mobx";

class MainStore {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    const result = await fetch('https://full-stats-start.herokuapp.com/api/v1/basketball/match/1')
    const data = await result.json();

     console.log(data);
  }

  async getList() {
    const result = await fetch('https://full-stats-start.herokuapp.com/api/v1/basketball/match/1')
    const data = await result.json();

    console.log(data);
  }
}

export type StoreType = {
  secondsPassed: number,
}

export const store = new MainStore();