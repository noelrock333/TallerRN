import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';
import SignIn from '../components/SignIn';

const ExternalStack = StackNavigator(
  {
    Login: {
      screen: Login
    },
    SignIn: {
      screen: SignIn
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default ExternalStack;
