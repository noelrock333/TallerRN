import React from 'react';
import { View } from 'react-native';
import { Content, Header, Container, Body, Text } from 'native-base';
import ImageCard from '../ImageCard';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Home</Text>
          </Body>
        </Header>
        <Content>
          {Array(10).fill(0).map((item, index) => <ImageCard key={index} />)}
        </Content>
      </Container>
    );
  }
}

export default Home;
