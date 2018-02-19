import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class ImageCard extends Component {
  render() {
    //console.log(this.props.data);
    const { title, photo_url, user } = this.props.data;
    console.log(photo_url);
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: user.profile_url }} />
            <Body>
              <Text>{title}</Text>
              <Text note>@noelrock333</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: photo_url }} style={{ height: 200, width: null, flex: 1 }}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default ImageCard;
