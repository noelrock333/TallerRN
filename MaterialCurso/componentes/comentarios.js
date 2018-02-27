import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Text,
  Icon,
  Item,
  Input,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import Api from '../../utils/api';

class Comments extends React.Component {
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
            <Text>Comentarios</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>{}</List>
          <Item rounded style={styles.inputComment}>
            <Input
              placeholder="Escribe un comentario"
              onChangeText={}
              value={}
            />
            <TouchableOpacity onPress={}>
              <Icon active name="ios-send" />
            </TouchableOpacity>
          </Item>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputComment: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Comments;
