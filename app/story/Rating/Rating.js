import React, {PropTypes, Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {observer} from 'mobx-react';

class Rating extends Component {

  selectRating = (id) => {
    this.props.story.selectRating(id);
  };

  render() {
    const story = this.props.story;
    let selectedRatingId = null;

    if(story.selectedRating !== null) {
      selectedRatingId = story.selectedRating.id;
    }

    return (
        <div className="ui segment">
          <div className="ui message">How was your experience at your most recent healthcare encounter?</div>

          {story.ratings.map(rating =>
              <RaisedButton   key={`rating-button-${rating.id}`}
                              onTouchTap={this.selectRating.bind(this, rating.id)}
                              label={rating.label}
                              primary={rating.id == selectedRatingId}
              />
          )}

          <div className="ui horizontal divider">
            {story.selectedRating !== null ? <RaisedButton secondary={true} label="Next" onClick={story.finishRating}/> : null}
          </div>
        </div>
    )
  }
}

Rating.propTypes = {
  story: PropTypes.object.isRequired,
};

export default observer(Rating);