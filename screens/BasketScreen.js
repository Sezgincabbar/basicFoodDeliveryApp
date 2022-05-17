import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const BasketScreen = () => {
  const foods = useSelector(state => state.foodReducer.selectedItems.items);
  console.log(foods);
  const dispatch = useDispatch();

  const handleRemoveBasket = id => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id}});
  };

  if (foods.length === 0) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            borderWidth: 5,
            borderStyle: 'dashed',
            borderColor: '#feb100',
            padding: 60,
            marginTop: 80,
            margin: 15,
          }}>
          <Image
            source={require('../assets/shoppingcart.png')}
            style={{
              width: 100,
              height: 100,
              tintColor: '#feb100',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text style={{fontSize: 40, color: '#feb100', textAlign: 'center'}}>
            Your Basket Is Empty
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const totalPrice = foods.reduce((sum, {price}) => sum + price, 0);

  console.log(totalPrice);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={({item}) => (
          <View style={styles.food_container}>
            <Image source={{uri: item.url}} style={styles.food_image} />
            <View style={{flex: 1}}>
              <Text style={styles.food_name}>{item.name}</Text>
              <Text style={styles.food_desc}>{item.desc}</Text>
              <Text style={{color: 'red', fontSize: 18}}>
                €{item.price} {item.ketchup && 'Ketchup '}
                {item.mayo && 'Mayo'}
              </Text>
              <TouchableOpacity
                style={styles.food_button}
                onPress={() => handleRemoveBasket(item.id)}>
                <Icon name="close-thick" color={'white'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.footer_container}>
        <Text style={styles.footer_price}>Total Price: €{totalPrice}</Text>
        <TouchableOpacity style={styles.footer_button}>
          <Text style={[styles.footer_price, {color: '#feb100'}]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3fb',
  },
  food_container: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
  },
  food_image: {
    width: 150,
    margin: 3,
    height: 100,
    backgroundColor: 'white',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  food_name: {
    color: 'black',
    fontSize: 18,
    marginRight: 2,
  },
  food_desc: {
    color: 'black',
    fontSize: 14,
  },
  food_button: {
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#feb100',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  footer_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#feb100',
    margin: 10,
    marginBottom: 95,
  },
  footer_price: {color: 'white', fontSize: 16, fontWeight: '500'},
  footer_button: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    elevation: 5,
  },
});
