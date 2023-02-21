import 'react-native-gesture-handler';
import StackNavigatior from './src/navigation/StackNavigator';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatior />
    </NavigationContainer>
  );
}
