import Story from '../models/Story';

export default class Store {
  dashboard = null;

  constructor() {
    if(this.dashboard === null) {
      this.dashboard = new Story();
    }
  }
};