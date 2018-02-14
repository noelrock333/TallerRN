import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import ImageCard from '../ImageCard';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Text>Home</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreatePost')} >
              <Icon name="ios-send-outline" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          {Array(10).fill(0).map((item, index) => <ImageCard key={index} />)}
        </Content>
      </Container>
    );
  }
}

export default Home;
