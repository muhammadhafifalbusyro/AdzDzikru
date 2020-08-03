import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DzikirPagi from '../screens/DzikirPagi';
import DzikirPetang from '../screens/DzikirPetang';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from '../SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="DzikirPagi"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'teal',
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize;

          if (route.name === 'DzikirPagi') {
            iconName = focused ? 'sun-o' : 'sun-o';
            iconSize = size;
          } else if (route.name === 'DzikirPetang') {
            iconName = focused ? 'moon-o' : 'moon-o';
            iconSize = size;
          }
          if (focused) {
            return (
              <View style={styles.wrapperActived}>
                <Icon name={iconName} size={iconSize} color={color} />
              </View>
            );
          } else {
            return (
              <View
                style={{...styles.wrapperActived, backgroundColor: 'white'}}>
                <Icon name={iconName} size={iconSize} color={color} />
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name="DzikirPagi" component={DzikirPagi} />
      <Tab.Screen name="DzikirPetang" component={DzikirPetang} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  wrapperActived: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
});
