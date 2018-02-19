import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import ImageCard from '../ImageCard';
import Api from '../../utils/api';

class Home extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Api.get('/posts')
      .then(data => data.json())
      .then(data => {
        if (Array.isArray(data)) {
          this.setState({
            posts: data
          });
        }
      });
  }
  
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
          {this.state.posts.map((item, index) => <ImageCard key={index} data={item} />)}
        </Content>
      </Container>
    );
  }
}

export default Home;
