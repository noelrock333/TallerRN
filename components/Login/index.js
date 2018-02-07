import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import Home from '../Home';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    showLogin: true
  };

  login = () => {
    const { username, password } = this.state;
    this.setState({ showLogin: false });
  };

  render() {
    if (this.state.showLogin) {
      return (
        <View style={{ paddingTop: 30, backgroundColor: '#E9EAED', flex: 1 }}>
          <Text style={{ marginBottom: 10 }}>Login screen</Text>
          <TextInput
            style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}
            placeholder="Username"
            onChangeText={text => { this.setState({ username: text })}}
          />
          <TextInput
            style={{ backgroundColor: 'white', padding: 10 }}
            placeholder="Password"
            onChangeText={text => { this.setState({ password: text })}}
          />
          <Button title="Login" onPress={this.login} />
        </View>
      );
    } else {
      return (<Home />);
    }
  }
}

export default Login;
