import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Button,
  Header,
  Icon,
  Left,
  Thumbnail,
  Text,
  Body,
  Right
} from 'native-base';
import call from 'react-native-phone-call';
import Api from '../../utils/api';

class MyProfile extends Component {
  state = {
    showToast: false,
    user: {
      email: '',
      profile_url: '',
      name: ''
    }
  };

  componentDidMount() {
    Api.get('/users/me')
      .then(data => data.json())
      .then(data => {
        this.setState({
          user: data
        });
      });
  }

  callSupport = () => {
    call({
      number: '3323326306',
      prompt: true
    });
  };

  render() {
    const { name, profile_url, email } = this.state.user;
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Header style={styles.header} androidStatusBarColor="black">
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icon name="ios-menu" style={{ color: 'white' }} />
              </TouchableOpacity>
            </Left>
            <Body />
            <Right />
          </Header>
          <View style={styles.main}>
            <Text style={styles.title}>Perfil de usuario</Text>
            {!!profile_url && <Thumbnail source={{ uri: profile_url }} />}
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>
              En este apartado puede ir una breve descripción proporcionada por
              el usuario, puede listar cosas como sus hobbies y algunas
              curiosidades que le puedan parecer interesantes.
            </Text>
          </View>
          <View style={styles.detailsWrapper}>
            <View
              style={[styles.details, { paddingTop: 10, paddingBottom: 10 }]}
            >
              <View style={styles.detailsItem}>
                <Text>
                  La vida es algo mágico, vive cada momento como si fuera el
                  último.
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.contact}>
            Si deseas contactar a este usuario necesitas enviar una solicitud de amistad
          </Text>
          <View
            style={[
              styles.detailsWrapper,
              {
                backgroundColor: '#E0E9EF',
                paddingBottom: 40,
                paddingTop: 40,
                marginTop: 20
              }
            ]}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.issue}>
                Si tienes algún problema con tu perfil puedes llamar al{' '}
              </Text>
              <Text style={styles.phonenumber}>3120000000</Text>
            </View>
            <View
              style={[
                styles.detailsWrapper,
                { flexDirection: 'row', paddingBottom: 20, marginTop: 20 }
              ]}
            >
              <Button style={styles.calltoButton} onPress={this.callSupport}>
                <Text style={styles.callto}>Llamar 3120000000</Text>
              </Button>
            </View>
            <Text
              style={{ width: '100%', textAlign: 'center', color: '#0076FF' }}
            >
              {email}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0076FF',
    alignItems: 'center',
    paddingBottom: 80
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0076FF',
    borderBottomWidth: 0,
    elevation: 0
  },
  container: {
    width: '100%'
  },
  content: {
    backgroundColor: '#F2F5F7'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 30
  },
  detailsWrapper: {
    paddingLeft: 20,
    paddingRight: 20
  },
  details: {
    marginTop: -20,
    backgroundColor: 'white',
    borderRadius: 6
  },
  detailsItem: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  clipboardWrapper: {
    backgroundColor: '#F2F5F7',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  description: {
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
  contact: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#5B727C',
    fontSize: 13,
    lineHeight: 20
  },
  issue: {
    fontSize: 13,
    width: '100%',
    color: '#5B727C',
    textAlign: 'center'
  },
  phonenumber: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#5B727C',
    lineHeight: 23
  },
  callto: {
    color: '#4A90E2',
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
    fontWeight: '600'
  },
  calltoButton: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
});

export default MyProfile;
