import {observable, computed} from 'mobx';
import _ from 'lodash';

export default class Story {
  @observable selectedRating = null;
  @observable currentStage = 'rating';
  @observable canShare = false;
  @observable experienceDescription = "";
  @observable ratings = [
    { id: 0, label: 'Awful' },
    { id: 1, label: 'Bad' },
    { id: 2, label: 'Neutral' },
    { id: 3, label: 'Good' },
    { id: 4, label: 'Excellent' }
  ];

  @observable natures = [
    { id: 0, label: 'Website' },
    { id: 1, label: 'Telephone' },
    { id: 2, label: 'Out-Patient' },
    { id: 3, label: 'In-Patient (admitted overnight)' },
    { id: 4, label: 'Other' }
  ];

  @observable selectedNature = null;
  @observable otherNature = "";

  selectRating = (id) => {
    this.selectedRating = _.find(this.ratings, rating => rating.id === id);
  };

  setExperienceDescription = (val) => {
    this.experienceDescription = val;
  };

  finishRating = () => {
    if(this.currentStage === 'rating') {
      this.currentStage = 'description';
    }
  };

  finishExperienceDescription = () => {
    if(this.currentStage === 'description') {
      this.currentStage = 'nature';
    }
  };

  selectNature = (id) => {
    this.selectedNature = _.find(this.natures, nature => nature.id === id);
  };

  finishNature = () => {
    if(this.currentStage === 'nature') {
      this.currentStage = 'share';
    }
  };

  toggleCanShare = () => {
    this.canShare = !this.canShare;
  };

  composeData = () => {
    let data = {};



    return data;
  };

  saveStory = () => {

  };
}