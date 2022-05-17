import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {restaurants} from '../assets/data/restaurants';

const MenuScreen = ({route, navigation}) => {
  const {resId} = route.params;
  const menu = restaurants.find(item => item.id === resId).foods;

  const handleGoDetail = item => {
    navigation.navigate('DetailScreen', {item});
  };
  const RenderMenu = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleGoDetail(item)}
        style={styles.container}>
        <Image source={{uri: item.url}} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>€{item.price}</Text>
          <Text lineBreakMode="middle" numberOfLines={4} style={styles.desc}>
            {item.desc}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3f3fb'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 90}} />}
        data={menu}
        renderItem={({item}) => <RenderMenu item={item} />}
        key={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    backgroundColor: 'white',
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 22,
    color: 'black',
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  desc: {
    color: 'gray',
    flex: 1,
  },
});
