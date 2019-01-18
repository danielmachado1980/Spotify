import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
