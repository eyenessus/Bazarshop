import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/pages/Home/index';
import Sobre from './src/pages/Sobre/index'
import Pagamento from './src/pages/Pagamento';
import Categorias from './src/pages/Categorias';
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'information',
  },
  Categorias: {
    name: 'ios-people',
  },
  Pagamento: {
    name: 'wallet',
  },
};
const App = () => {
  
  return (
    <NavigationContainer>
    {/* Insere a navegação Tab dentro container */}
    <Tab.Navigator  screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categorias" component={Categorias} />
      <Tab.Screen name="Pagamento" component={Pagamento} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  </NavigationContainer>
  
  )
}

export default App