import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class Nature extends Component {

  onChange = (e, val) => {
    this.props.story.selectNature(val);
  };

  render() {
    const story = this.props.story;
    const selectedNature = story.selectedNature;
    let selectedNatureId = null;

    if (selectedNature !== null && selectedNature.hasOwnProperty('id')) {
      selectedNatureId = selectedNature.id;
    }

    return (
        <div className="ui segment">
          <div className="ui message">What was the nature of your healthcare encounter?</div>
          <RadioButtonGroup name="nature" onChange={this.onChange} selected={selectedNatureId}>
            {story.natures.map(nature =>
                <RadioButton labelStyle={{paddingLeft: '2%', textAlign: 'left'}}
                             key={`nature-selection-${nature.id}`} value={nature.id} label={nature.label}/>
            )}
          </RadioButtonGroup>

          <div className="ui horizontal divider">
            {story.selectedNature !== null ?
                <RaisedButton secondary={true} label="Next" onClick={story.finishNature}/> : null }
          </div>

        </div>
    )
  }
}

Nature.propTypes = {
  story: PropTypes.object.isRequired,
};

export default observer(Nature);