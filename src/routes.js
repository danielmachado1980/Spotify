import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/Main';
import Search from '~/pages/Search';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Search: { screen: Search },
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.secundary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
