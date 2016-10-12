import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom'
import Description from './Description/Description';
import Rating from './Rating/Rating';
import Nature from './Nature/Nature';
import Share from './Share/Share';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {observer} from 'mobx-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Store from './store';
const store = new Store();

@observer
class Story extends Component {
  render() {

    const story = store.story;

    return (
        <MuiThemeProvider>
        <div className="column">
        <div className="ui large form">
    {story.currentStage === 'rating' ? <Rating story={story}/> : null}
    {story.currentStage === 'description' ? <Description story={story}/> : null}
    {story.currentStage === 'nature' ? <Nature story={story} /> : null}
    {story.currentStage === 'share' ? <Share story={story} /> : null}
  </div>
    </div>
    </MuiThemeProvider>
  )
  }
}

ReactDOM.render(
<Story />,
    document.getElementById('story-app')
);