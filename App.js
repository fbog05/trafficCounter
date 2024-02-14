import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from './components/MainScreen';
import OperatorScreen from './components/OperatorScreen';
import SaveScreen from './components/SaveScreen';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Főoldal" component={MainScreen} />
        <Tab.Screen name="Beállítások" component={OperatorScreen} />
        <Tab.Screen name="Mentés" component={SaveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
