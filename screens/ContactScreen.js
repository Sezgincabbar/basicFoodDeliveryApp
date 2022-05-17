import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {restaurants} from '../assets/data/restaurants';

const ContactScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {restaurants.map((item, index) => (
          <TouchableOpacity key={index} style={styles.restaurant_card}>
            <View style={styles.restaurant_upper_container}>
              <Image source={{uri: item.url}} style={styles.restaurant_image} />
              <View style={{marginLeft: 20}}>
                <Text style={styles.regular_text}>09:00am to 10pm</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: 10,
                  }}>
                  {item.name}
                </Text>
                <Text style={styles.regular_text}>{item.category}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Icon name="hand-coin-outline" size={15} color="gray" />
                <Text style={styles.regular_text}>{item.price}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Icon name="timer-sand" color={'gray'} size={15} />
                <Text style={styles.regular_text}>20-30 min</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Icon name="bike-fast" size={15} color="gray" />
                <Text style={styles.regular_text}>€0,00</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  restaurant_card: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  restaurant_upper_container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#edeef0',
  },
  restaurant_image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  regular_text: {
    color: 'gray',
    marginLeft: 3,
  },
});
