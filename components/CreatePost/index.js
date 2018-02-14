import React from 'react';
import { View, TouchableOpacity, ScrollView, Button, Image, CameraRoll } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import Api from '../../utils/api';

class CreatePost extends React.Component {
  state = {
    photos: []
  };

  uploadFile = () => {
    Api.postImage().then(data => {
      console.log(data);
    });
  };

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
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
          {/* <TouchableOpacity onPress={this.uploadFile}>
            <Icon name="ios-share" />
          </TouchableOpacity> */}
          <Button title="Load Images" onPress={this._handleButtonPress} />
          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default CreatePost;