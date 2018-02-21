import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class Drawer extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.menuItem}
          underlayColor="#ebebeb"
        >
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('MyProfile')}
          style={styles.menuItem}
          underlayColor="#ebebeb"
        >
          <Text>Mi Perfil</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.screenProps.logout()}
          style={styles.menuItem}
          underlayColor="#ebebeb"
        >
          <Text>Cerrar sesión</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    padding: 7,
  },
});

export default Drawer;
