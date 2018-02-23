import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';

const ExternalStack = StackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default ExternalStack;
