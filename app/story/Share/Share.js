import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class Share extends Component {
  render() {
    const story = this.props.story;

    return (
        <div className="ui segment">
          <div className="ui message">Can we share your story?</div>

          <Checkbox labelStyle={{textAlign: 'left', paddingLeft: '2%'}} onCheck={story.toggleCanShare} checked={story.canShare}
                    label="It's okay to share my story or portions of my story anonymously on this website."/>

          <div className="ui horizontal divider">
            <RaisedButton secondary={true} label="Share My Story" onClick={story.submit}/>
          </div>
        </div>
    )
  }
}

Share.propTypes = {
  story: PropTypes.object.isRequired,
};

export default observer(Share);