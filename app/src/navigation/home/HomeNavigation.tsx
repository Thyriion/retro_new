import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/main/Home';
import Overview from '../../screens/main/Overview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveTintColor: '#E8E2EE',
      tabBarActiveTintColor: theme.colors.primary,
      tabBarStyle: {backgroundColor: '#3B2B4A'}
      }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Overview" component={Overview} options={{
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="eye" color={color} size={26}/>
            ),
        }}/>
    </Tab.Navigator>
  )
}

export default HomeNavigation