import Story from '../models/Story';

export default class Store {
  story = null;

  constructor() {
    if(this.story === null) {
      this.story = new Story();
    }
  }
};