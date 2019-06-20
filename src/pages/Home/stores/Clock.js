import { action, observable } from "mobx";

class Clock {

  @observable hour = 0;
  @observable minute = 0;
  @observable second = 0;

  @action hourChange = () => {

    this.hour++

  }

}

export default new Clock();