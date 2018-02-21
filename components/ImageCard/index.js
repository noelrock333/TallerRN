import React, { Component } from 'react';
import { Image, View, StyleSheet, Alert } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Spinner
} from 'native-base';
import Api from '../../utils/api';

class ImageCard extends Component {
  state = {
    loading: true
  };

  deletePost = () => {
    const { title, id } = this.props.data;
    Alert.alert(
      'Deseas eliminar este post?',
      title,
      [
        {
          text: 'Eliminar', onPress: () => {
            Api.delete('/posts/' + id).then(data => {
              if (data.status == 200) {
                this.props.removePost(id);
              }
            });
          }
        },
        {
          text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { title, photo_url, user, comments, id } = this.props.data;
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: user.profile_url }} />
            <Body>
              <Text>{title}</Text>
              <Text note>{user.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: photo_url }}
            style={{ height: 200, width: null, flex: 1 }}
            onLoadStart={() => this.setState({ loading: true })}
            onLoadEnd={() => this.setState({ loading: false })}
          />
          {this.state.loading && 
            <View style={styles.loader}>
              <Spinner />
            </View>
          }
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={() => navigate('Comments', { comments, id })}>
              <Icon active name="chatbubbles" />
              <Text>{comments.length} Comentarios</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={this.deletePost}>
              <Icon name="ios-trash-outline" style={{ color: 'red' }} />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

export default ImageCard;
