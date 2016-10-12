import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';

class Description extends Component {

  onChange = (e) => {
    const val = e.target.value;
    const story = this.props.story;
    story.setExperienceDescription(val);
  };

  render() {
    const story = this.props.story;
    const rating = story.selectedRating;

    return (
        <div className="ui segment">
          <div className="field">
            <h5 className="ui message">Tell us about your healthcare encounter and why it
              was {rating.label} </h5>
            <textarea onChange={this.onChange} value={story.experienceDescription}/>
          </div>

          <div className="ui horizontal divider">
            {story.experienceDescription.length !== 0 ? <RaisedButton secondary={true} label="Next"
                                                                      onClick={story.finishExperienceDescription}/> : null}
          </div>
        </div>
    )
  }
}

Description.propTypes = {
  story: PropTypes.object.isRequired,
};

export default observer(Description);