import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import Api from '../../utils/api';
import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class CreatePost extends React.Component {
  state = {
    avatarSource: null
  };

  pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = response;
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source
        });
      }
    });
  };

  uploadFile = () => {
     Api.postImage({ photo: this.state.avatarSource, title: 'Nuevo meme' }).then(data => {
      console.log(data);
    });
  }

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
          <TouchableOpacity onPress={this.pickImage}>
            <Text>Obtener Imagen</Text>
          </TouchableOpacity>
          <Image source={this.avatarSource || null} style={styles.uploadAvatar} />
          <TouchableOpacity onPress={this.uploadFile}>
            <Text>Subir archivo</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  uploadAvatar: {
    height: 200
  }
});

export default CreatePost;