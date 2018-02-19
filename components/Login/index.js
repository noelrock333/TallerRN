import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  login = () => {
    const { username, password } = this.state;
    const useraccount = {
      "auth": {
          "email": "noel@michelada.io",
          "password": "12345678"
      }
    };

    this.setState({ showSpinner: true });
    this.props.screenProps.login(useraccount).then(() => {
      this.setState({ showSpinner: false });
    })
    .catch(() => {
      this.setState({ showSpinner: false }, () => {
        setTimeout(() => {
          Alert.alert('Invalid username or password');
        }, 0);
      });
    });
  };

  render() {
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

        <Spinner visible={this.state.showSpinner} textContent={"Cargando..."} textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}

export default Login;
