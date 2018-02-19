import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left, Button, Item, Input } from 'native-base';
import Api from '../../utils/api';
import ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageResizer from 'react-native-image-resizer';

var options = {
  title: 'Selecciona una foto',
  takePhotoButtonTitle: 'Tomar una foto',
  chooseFromLibraryButtonTitle: 'Desde galería',
  cancelButtonTitle: 'Cancelar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class CreatePost extends React.Component {
  state = {
    avatarSource: null,
    title: '',
    showSpinner: false
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
        // let source = response;
        ImageResizer.createResizedImage('data:image/jpeg;base64,' + response.data, 300, 300, 'JPEG', 50).then((source) => {
          // response.uri is the URI of the new image that can now be displayed, uploaded...
          // response.path is the path of the new image
          // response.name is the name of the new image with the extension
          // response.size is the size of the new image
          this.setState({
            avatarSource: {
              uri: source.uri,
              fileName: source.name
            }
          });
        }).catch((err) => {
          // Oops, something went wrong. Check that the filename is correct and
          // inspect err to get more details.
          console.log('Resize error', err);
        });
      }
    });
  };

  uploadFile = () => {
    this.setState({ showSpinner: true });
    Api.postImage({
       photo: this.state.avatarSource,
       title: this.state.title
    }).then(data => {
      this.setState({ showSpinner: false });
      console.log(data);
    });
  }

  render() {
    var { avatarSource } = this.state;
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
          <TouchableOpacity onPress={this.pickImage}>
            <Image
              source={avatarSource ?
                { uri: avatarSource.uri } : require('../../assets/placeholder-camera.png')
              }
              style={styles.uploadAvatar}
            />
          </TouchableOpacity>
          <Item rounded style={styles.comment}>
            <Input
              placeholder='Agrega un comentario'
              onChangeText={title => this.setState({ title })}
            />
          </Item>
          {avatarSource && 
            <Button block info onPress={this.uploadFile}>
              <Text>Publicar</Text>
            </Button>
          }
          <Spinner visible={this.state.showSpinner} textContent={"Publicando..."} textStyle={{color: '#FFF'}} />
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