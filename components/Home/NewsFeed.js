import React from 'react';
import { FlatList } from 'react-native';
import ImageCard from '../ImageCard';

class NewsFeed extends React.PureComponent {
  state = {
    posts: this.props.posts
  };

  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => (
          <ImageCard
            data={item}
            removePost={this.props.removePost}
            navigation={this.props.navigation}
          />
        )}
        data={this.props.posts}
        extraData={this.state}
      />
    );
  }
}

export default NewsFeed;
