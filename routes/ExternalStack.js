import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';

const ExternalStack = StackNavigator(
  {
    Login: {
      screen: Login,
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default ExternalStack;