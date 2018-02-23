import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  login = () => {
    // const { username, password } = this.state;
    const useraccount = {
      auth: {
        email: 'noel@michelada.io',
        password: '12345678'
      }
    };

    this.setState({ showSpinner: true });
    this.props.screenProps
      .login(useraccount)
      .then(() => {
        this.setState({ showSpinner: false });
      })
      .catch(() => {
        this.setState({ showSpinner: false }, () => {
          setTimeout(() => {
            Alert.alert('Usuario o password invalido');
          }, 0);
        });
      });
  };

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          style={styles.titleBackground}
          source={require('../../assets/background.jpeg')}
        >
          <Text style={styles.title}>InstagramApp</Text>
        </ImageBackground>
        <View style={styles.loginForm}>
          <TextInput
            style={[styles.textInput, { marginBottom: 10 }]}
            placeholder="Username"
            onChangeText={text => this.setState({ username: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <View style={styles.loginButtonWrapper}>
            <Button title="Iniciar sesión" onPress={this.login} />
          </View>
          <View style={styles.forgotLabel}>
            <Text style={{ color: 'gray', marginRight: 5 }}>
              Olvidaste tu contraseña?
            </Text>
            <TouchableOpacity>
              <Text style={{ color: '#2F9BEF' }}>Obten ayuda aqui</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Spinner
          visible={this.state.showSpinner}
          textContent="Cargando..."
          textStyle={{ color: '#FFF' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1
  },
  titleBackground: {
    width: '100%',
    height: 180,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  loginForm: {
    padding: 10,
    paddingTop: 20
  },
  textInput: {
    backgroundColor: '#FAFAFA',
    padding: 14,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 7
  },
  loginButtonWrapper: {
    marginTop: 10,
    marginBottom: 15
  },
  forgotLabel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default Login;
