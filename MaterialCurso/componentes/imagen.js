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
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={} />
            <Body>
              <Text>{}</Text>
              <Text note>{}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={}
            style={{ height: 200, width: null, flex: 1 }}
            onLoadStart={}
            onLoadEnd={}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>0 Comentarios</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
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
