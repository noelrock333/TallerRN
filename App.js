import React, { Component } from 'react';
import { View } from 'react-native';
import SInfo from 'react-native-sensitive-info';

import ExternalStack from './routes/ExternalStack';
import InternalStack from './routes/InternalStack';

import Api from './utils/api';

const options = {
  sharedPreferencesName: 'tallerRN',
  keychainService: 'tallerRN'
};

export default class App extends Component {
  state = {
    isLoged: undefined
  };

  componentDidMount() {
    const jwt = SInfo.getItem('jwt', options).then(value => {
      // console.log(value);
      this.setState({
        isLoged: value ? true : false
      });
    });
  }

  login = useraccount => {
    return Api.post('/user_token', useraccount)
      .then(data => data.json())
      .then(data => {
        if (data && data.jwt) {
          SInfo.setItem('jwt', data.jwt, options).then(() => {
            this.setState({
              isLoged: true
            });
          });
        } else {
          this.setState({
            isLoged: false
          });
        }
      });
  };

  logout = () => {
    SInfo.deleteItem('jwt', options);
    this.setState({
      isLoged: false
    });
  };

  render() {
    if (this.state.isLoged) {
      return <InternalStack screenProps={{ logout: this.logout }} />;
    } else if (this.state.isLoged == undefined) {
      return <View />;
    } else {
      return <ExternalStack screenProps={{ login: this.login }} />;
    }
  }
}
