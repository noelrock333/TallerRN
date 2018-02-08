import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ExternalStack from './routes/ExternalStack';
import InternalStack from './routes/InternalStack';

export default class App extends Component {
  state = {
    isLoged: false
  };

  componentDidMount() {
    AsyncStorage.getItem('isLoged', res => {
      let isLoged = res;
      this.setState({
        isLoged: isLoged == '1' ? true : false
      });
    });
  }

  login = () => {
    // AsyncStorage.
    this.setState({
      isLoged: true
    });
  }

  render() {
    if (this.state.isLoged) {
      return (
        <InternalStack />
      );
    } else {
      return (
        <ExternalStack screenProps={{ login: this.login}} />
      );
    }
  }
}

