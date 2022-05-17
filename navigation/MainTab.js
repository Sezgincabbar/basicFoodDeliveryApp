import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrderScreen';
import BasketScreen from '../screens/BasketScreen';
import ContactScreen from '../screens/ContactScreen';
import OtherScreen from '../screens/OtherScreen';
const Tab = createBottomTabNavigator();
import FoodStack from './FoodStack';
import {useSelector} from 'react-redux';

const MainTab = () => {
  const foods = useSelector(state => state.foodReducer.selectedItems.items);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          flexDirection: 'row',
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 30,
        },
        tabBarActiveTintColor: '#feb100',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="FoodScreen"
        component={FoodStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size * 1.2} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
          },
          tabBarLabel: 'Order',
          tabBarIcon: ({color, size}) => (
            <Icon name="silverware-fork-knife" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
          },
          tabBarLabel: 'Basket',
          tabBarIcon: ({color, size}) => (
            <View>
              {foods.length > 0 ? (
                <Text
                  style={{
                    position: 'absolute',
                    backgroundColor: '#feb100',
                    borderRadius: 20,
                    left: 20,
                    bottom: 15,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                    fontSize: 16,
                    color: 'white',
                  }}>
                  {foods.length}
                </Text>
              ) : null}

              <Icon name="basket" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
          },
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => (
            <Icon name="message-processing-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OtherScreen"
        component={OtherScreen}
        options={{
          tabBarLabelStyle: {
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
          },
          tabBarLabel: 'Other',
          tabBarIcon: ({color, size}) => (
            <Icon name="text" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
