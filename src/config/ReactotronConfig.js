import Reactotron from 'reactotron-react-native';

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

/* .configure({
  host: '192.168.15.7', Nox Player
})
*/
