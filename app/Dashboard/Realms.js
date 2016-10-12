import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react'
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';

class Realms extends Component {

  constructor(props) {
    super(props);

    this.state = {
      realms: []
    };
  }

  componentDidMount() {
    axios
        .get('http://localhost:8080/api/realms')
        .then(response => {
          console.log('result: ', response);
          this.setState({
            realms: response.data
          });
        })
        .catch(error => {
          console.log('error: ', error);
        })
  }

  render() {
    return (
        <div>
          <AutoComplete
            floatingLabelText="Select Realm"
            filter={AutoComplete.caseInsensitiveFilter}
            maxSearchResults={10}
            openOnFocus={true}
            dataSource={this.state.realms}
            dataSourceConfig={{
              text: 'name',
              value: 'slug'
            }}
            />
        </div>
    )
  }
}

Realms.propTypes = {};

export default observer(Realms);