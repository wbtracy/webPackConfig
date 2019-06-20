import { observable, action } from "mobx"

class CssModules {

  @observable count = 0;

  @action selfPlus = () => {
    setTimeout(() => {
      this.count++;
    }, 3000);
  }
}

export default new CssModules();