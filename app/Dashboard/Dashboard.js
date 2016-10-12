import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {observer} from 'mobx-react';
import Realms from './Realms';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Store from './store';
const store = new Store();

@observer
class Dashboard extends Component {
  render() {
    const dashboard = store.dashboard;

    return (
        <MuiThemeProvider>
          <div className="column">
            <div className="ui large form">
              <Realms dashboard={dashboard} />
            </div>
          </div>
        </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
    <Dashboard />,
    document.getElementById('dashboard-app')
);