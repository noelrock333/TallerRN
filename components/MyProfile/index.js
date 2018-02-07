import React from 'react';
import { View, Text } from 'react-native';

class MyProfile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
          Mi Perfil
        </Text>
      </View>
    );
  }
}

export default MyProfile;
