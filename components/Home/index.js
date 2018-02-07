import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'purple' }}>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
            Home
          </Text>
      </View>
    );
  }
}

export default Home;
