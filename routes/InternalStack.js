import { Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from '../components/Home';
import MyProfile from '../components/MyProfile';
import Drawer from '../components/shared/Drawer';
import CreatePost from '../components/CreatePost';

const InternalStack = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    MyProfile: {
      screen: MyProfile
    },
    CreatePost: {
      screen: CreatePost
    }
  },
  {
    contentComponent: Drawer
  },
);

export default InternalStack;
