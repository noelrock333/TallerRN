import { Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from '../components/Home';
import MyProfile from '../components/MyProfile';
import Drawer from '../components/shared/Drawer';

const InternalStack = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    MyProfile: {
      screen: MyProfile
    },
  },
  {
    contentComponent: Drawer
  },
);

export default InternalStack;
