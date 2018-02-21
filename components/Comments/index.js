import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
  Input
} from 'native-base';

class Comments extends React.Component {
  render() {
    const { comments, id } = this.props.navigation.state.params;
    const comentarios = comments.map(item => (
      <View>
        <Text>{item}</Text>
      </View>
    ));

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
          {comentarios}
          <Item rounded>
            <Input
              placeholder="Escribe un comentario"
              onChangeText={title => this.setState({ title })}
            />
            <TouchableOpacity onPress={() => console.log('algo')}>
              <Icon active name="ios-send" />
            </TouchableOpacity>
          </Item>
        </Content>
      </Container>
    );
  }
}

export default Comments;
