import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Clipboard
} from 'react-native';
import { Container, Content, Button, Header, Icon, Toast } from 'native-base';
import call from 'react-native-phone-call';

class MyProfile extends Component {
  state = {
    showToast: false
  };

  callSupport = () => {
    call({
      number: '3323326306',
      prompt: true
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Header style={styles.header} androidStatusBarColor="black">
          </Header>
          <View
            style={{
              backgroundColor: '#0076FF',
              alignItems: 'center',
              paddingBottom: 80
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
                marginTop: 20,
                marginBottom: 30
              }}
            >
              Perfil de usuario
            </Text>
            <Text
              style={{
                paddingLeft: 35,
                paddingRight: 35,
                fontSize: 16,
                color: 'white',
                textAlign: 'center',
                fontWeight: '600'
              }}
            >
              En este apartado puede ir una breve descripción proporcionada
              por el usuario, puede listar cosas como sus hobbies y algunas
              curiosidades que le puedan parecer interesantes.
            </Text>
          </View>
          <View style={styles.detailsWrapper}>
            <View
              style={[styles.details, { paddingTop: 10, paddingBottom: 10 }]}
            >
              <View
                style={[
                  styles.detailsItem,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20
                  }
                ]}
              >
                <Text>La vida es algo mágico, vive cada momento como si fuera el último.</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              color: '#5B727C',
              fontSize: 13,
              lineHeight: 20
            }}
          >
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
              <Text
                style={{
                  fontSize: 13,
                  width: '100%',
                  color: '#5B727C',
                  textAlign: 'center'
                }}
              >
                Si tienes algún problema con tu perfil puedes llamar al{' '}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  color: '#5B727C',
                  lineHeight: 23
                }}
              >
                3120000000
              </Text>
            </View>
            <View
              style={[
                styles.detailsWrapper,
                { flexDirection: 'row', paddingBottom: 20, marginTop: 20 }
              ]}
            >
              <Button
                style={{
                  backgroundColor: 'white',
                  paddingLeft: 20,
                  paddingRight: 20,
                  flex: 1
                }}
                onPress={this.callSupport}
              >
                <Text
                  style={{
                    color: '#4A90E2',
                    textAlign: 'center',
                    fontSize: 18,
                    width: '100%',
                    fontWeight: '600'
                  }}
                >
                  Llamar 3120000000
                </Text>
              </Button>
            </View>
            <Text
              style={{ width: '100%', textAlign: 'center', color: '#0076FF' }}
            >
              noel@michelada.com
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
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
    paddingLeft: 14,
    paddingRight: 14
  },
  clipboardWrapper: {
    backgroundColor: '#F2F5F7',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  }
});

export default MyProfile;
