import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import Api from '../../utils/api';

class CreatePost extends React.Component {
  uploadFile = () => {
    Api.postImage().then(data => {
      console.log(data);
    });
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
            <Text>Nueva publicación</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <TouchableOpacity onPress={this.uploadFile}>
            <Icon name="ios-share" />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default CreatePost;