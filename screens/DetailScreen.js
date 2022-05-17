import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
const {width, height} = Dimensions.get('window');
const DetailScreen = ({route}) => {
  const [ketchup, setKetchup] = useState(false);
  const [mayo, setMayo] = useState(false);

  const {item} = route.params;
  const dispatch = useDispatch();
  const handleAddBasket = food => {
    dispatch({type: 'ADD_TO_BASKET', payload: {...food, ketchup, mayo}});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.inner_container}>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.price}>€{item.price}</Text>

        <View style={styles.checkbox}>
          <CheckBox
            tintColors={'black'}
            disabled={false}
            value={ketchup}
            onValueChange={setKetchup}
          />

          <Text style={{color: 'black'}}>Ketchup</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            tintColors={'black'}
            disabled={false}
            value={mayo}
            onValueChange={setMayo}
          />
          <Text style={{color: 'black'}}>Mayo</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddBasket(item, ketchup, mayo)}>
        <Text style={{color: 'white'}}>Add Basket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  inner_container: {marginHorizontal: 10},
  image: {
    width,
    height: height * 0.3,
  },
  desc: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
  },
  price: {
    marginVertical: 10,
    fontSize: 20,
    color: '#ebb21f',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ebb21f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  checkbox: {flexDirection: 'row', alignItems: 'center'},
});
