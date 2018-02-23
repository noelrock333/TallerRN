import { Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from '../components/Home';
import MyProfile from '../components/MyProfile';
import Drawer from '../components/shared/Drawer';
import CreatePost from '../components/CreatePost';
import Comments from '../components/Comments';

const InternalStack = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    MyProfile: {
      screen: MyProfile
    },
    Comments: {
      screen: Comments
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
