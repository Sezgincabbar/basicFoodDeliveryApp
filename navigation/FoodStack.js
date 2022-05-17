import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import DetailScreen from '../screens/DetailScreen';
import {restaurants} from '../assets/data/restaurants';

const Stack = createNativeStackNavigator();
const Header = () => {
  const navigation = useNavigation();
  function goProfile() {
    navigation.navigate('OtherScreen');
  }
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="map-marker" size={25} color="black" />
          <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
            Selected Location
          </Text>
          <Icon name="chevron-down" size={25} color="black" />
        </View>
        <TouchableOpacity onPress={goProfile}>
          <Image
            source={require('../assets/pp.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.active_screen}>
          <Text style={{color: '#efb31a', fontWeight: '500'}}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactive_screen}>
          <Text style={{color: 'black', fontWeight: '500'}}>PickUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <Header />}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          title: restaurants
            .find(item => item.id === route.params.resId)
            .name.toString(),
          headerTitleStyle: {color: '#ebb21f'},
          headerTitleAlign: 'center',
        })}
        name="MenuScreen"
        component={MenuScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.item.name,
          headerTitleStyle: {color: '#ebb21f'},
          headerTitleAlign: 'center',
        })}
        name="DetailScreen"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FoodStack;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-around'},
  active_screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#efb31a',
    borderBottomWidth: 2,
  },
  inactive_screen: {flex: 1, padding: 10, alignItems: 'center'},
  image: {width: 50, height: 50, borderRadius: 25},
});
