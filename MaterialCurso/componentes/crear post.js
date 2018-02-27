import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  Content,
  Header,
  Container,
  Body,
  Text,
  Icon,
  Right,
  Left,
  Button,
  Item,
  Input
} from 'native-base';
import Api from '../../utils/api';

class CreatePost extends React.Component {
  state = {
    avatarSource: null,
    title: '',
    showSpinner: false
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text>Publicación</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <TouchableOpacity>
            <Image
              source={}
              style={styles.uploadAvatar}
            />
          </TouchableOpacity>
          <Item rounded style={styles.comment}>
            <Input
              placeholder="Agrega un comentario"
              onChangeText={}
            />
          </Item>
          <Spinner
            visible={this.state.showSpinner}
            textContent={'Publicando...'}
            textStyle={{ color: '#FFF' }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  uploadAvatar: {
    height: 200,
    resizeMode: 'repeat'
  },
  comment: {
    marginTop: 10,
    marginBottom: 5
  }
});

export default CreatePost;