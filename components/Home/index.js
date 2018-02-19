import React from 'react';
import { View, TouchableOpacity, RefreshControl } from 'react-native';
import { Content, Header, Container, Body, Text, Icon, Right, Left } from 'native-base';
import ImageCard from '../ImageCard';
import Api from '../../utils/api';

class Home extends React.Component {
  state = {
    posts: [],
    refreshing: false
  };

  componentDidMount() {
    this._onRefresh();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    Api.get('/posts')
      .then(data => data.json())
      .then(data => {
        if (Array.isArray(data)) {
          this.setState({
            posts: data
          });
        }
        this.setState({ refreshing: false });
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
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          {this.state.posts.map((item, index) => <ImageCard key={index} data={item} />)}
        </Content>
      </Container>
    );
  }
}

export default Home;
