import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Api from '../../utils/api';

class SignIn extends React.Component {
  state = {
    showSpinner: false,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  signin = () => {
    this.setState({ showSpinner: true });
    const { name, email, password, password_confirmation } = this.state;
    Api.post('/users', {
      user: {
        name,
        email,
        password,
        password_confirmation
      }
    }).then(data => {
      this.setState({ showSpinner: false });
      if (data.status == 200) {
        this.props.navigation.navigate('Login');
      }
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
            style={styles.textInput}
            placeholder="Tu nombre"
            autoCorrect={false}
            onChangeText={text => this.setState({ name: text })}
          />
          <TextInput
            style={[styles.textInput, { marginBottom: 10 }]}
            placeholder="Correo eléctronico"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirma tu contraseña"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password_confirmation: text })}
          />
          <View style={styles.loginButtonWrapper}>
            <Button title="Registrarme" onPress={this.signin} />
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
    borderRadius: 7,
    marginBottom: 10
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

export default SignIn;
