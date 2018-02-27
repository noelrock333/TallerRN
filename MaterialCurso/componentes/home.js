import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Content,
  Header,
  Container,
  Body,
  Text,
  Icon,
  Right,
  Left
} from 'native-base';
import Api from '../../utils/api';

class Home extends React.Component {
  state = {
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity>
              <Icon name="ios-menu" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon name="ios-send-outline" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

export default Home;
