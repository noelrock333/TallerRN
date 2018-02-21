import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
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
import Api from '../../utils/api';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    const { comments, id } = this.props.navigation.state.params;
    this.state = {
      comments: comments,
      id: id
    };
  }

  postComment = () => {
    const comment = {
      content: this.state.comment
    };

    Api.post(`/posts/${this.state.id}/comments`, { comment }).then(data => {
      if (data.status == 200) {
        this.setState({
          comments: [...this.state.comments, comment],
          comment: ''
        });
      }
    });
  };

  render() {
    const comentarios = this.state.comments.map((item, index) => (
      <View key={index} style={styles.comment}>
        <Text>{item.content}</Text>
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
              onChangeText={comment => this.setState({ comment })}
              value={this.state.comment}
            />
            <TouchableOpacity onPress={this.postComment}>
              <Icon active name="ios-send" />
            </TouchableOpacity>
          </Item>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  }
});

export default Comments;
