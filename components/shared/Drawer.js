import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Drawer extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
          <Text>Mi Perfil</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Drawer;
