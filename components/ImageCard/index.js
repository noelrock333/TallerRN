import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';

class ImageCard extends Component {
  state = {
    loading: true
  };

  render() {
    const { title, photo_url, user, comments } = this.props.data;
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
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{comments.length} Comentarios</Text>
            </Button>
          </Left>
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
})

export default ImageCard;
