import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {categories} from '../assets/data/categories';
import {data} from '../assets/dummydata';
import {Carousel, Pagination} from 'react-native-snap-carousel';
import {restaurants} from '../assets/data/restaurants';
import Star from 'react-native-star-view';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [activeSlide1, setActiveSlide1] = useState(3);
  const [activeSlide2, setActiveSlide2] = useState(1);
  const [activeSlide3, setActiveSlide3] = useState(1);

  const renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          width: 90,
          height: 90,
          marginHorizontal: 5,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 0,
          },
          shadowOpacity: 0.6,
          shadowRadius: 1,
          elevation: 7,
        }}>
        <Image
          source={{uri: item.url}}
          style={{flex: 1, width: 50, height: 50, resizeMode: 'contain'}}
        />
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#f6bd2e',
            height: 20,
            width: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{color: 'black', fontSize: 12}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMeals = ({item, index}) => {
    return (
      <TouchableOpacity style={{marginHorizontal: 5, borderRadius: 20}}>
        <Image
          source={{uri: item.url}}
          style={{
            height: 120,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: 'black', fontWeight: '900'}}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#ebb21f'}}>{item.point}</Text>
            <Icon name="star-outline" color={'#ebb21f'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleGoMenu = resId => {
    navigation.navigate('MenuScreen', {resId});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
        <View style={styles.upper_container}>
          <TouchableOpacity style={styles.filter_container}>
            <Icon name="tune" color="black" size={25} />
            <Text style={{color: 'black'}}>Filter</Text>
          </TouchableOpacity>
          <View style={styles.textInput_container}>
            <TextInput
              placeholder="Search restaurant"
              placeholderTextColor="gray"
              style={styles.textInput}
            />
            <Icon name="magnify" color="gray" size={25} />
          </View>
        </View>
        <Text style={styles.headers}>Food Categories</Text>
        <View>
          <Carousel
            data={categories}
            renderItem={renderCategory}
            sliderWidth={width}
            itemWidth={90}
            firstItem={3}
            inactiveSlideOpacity={1}
            enableSnap={false}
            onSnapToItem={index => setActiveSlide1(index)}
          />
          <Pagination
            dotsLength={categories.length}
            activeDotIndex={activeSlide1}
            containerStyle={styles.pagination_style}
            dotStyle={styles.dot_style}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
        </View>
        <Text style={styles.headers}>Featured</Text>
        <View>
          <Carousel
            data={data}
            renderItem={renderMeals}
            firstItem={1}
            sliderWidth={width}
            itemWidth={150}
            inactiveSlideOpacity={1}
            onSnapToItem={index => setActiveSlide2(index)}
          />
          <Pagination
            dotsLength={categories.length}
            activeDotIndex={activeSlide2}
            containerStyle={styles.pagination_style}
            dotStyle={styles.dot_style}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
        </View>
        <Text style={styles.headers}>Newly added restaurants</Text>
        <View>
          <Carousel
            data={data}
            renderItem={renderMeals}
            sliderWidth={width}
            firstItem={1}
            itemWidth={150}
            inactiveSlideOpacity={1}
            onSnapToItem={index => setActiveSlide3(index)}
          />
          <Pagination
            dotsLength={categories.length}
            activeDotIndex={activeSlide3}
            containerStyle={styles.pagination_style}
            dotStyle={styles.dot_style}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
        </View>
        <Text style={styles.headers}>Restaurant in the region</Text>
        <View style={{paddingHorizontal: 15, marginBottom: 90}}>
          {restaurants.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleGoMenu(item.id)}
              key={index}
              style={styles.restaurant_card}>
              <View style={styles.restaurant_upper_container}>
                <Image
                  source={{uri: item.url}}
                  style={styles.restaurant_image}
                />
                <View style={{marginLeft: 20, flex: 1}}>
                  <Text style={styles.regular_text}>09:00am to 10pm</Text>
                  <Text style={styles.restaurant_text}>{item.name}</Text>
                  <Text style={styles.regular_text}>{item.category}</Text>
                </View>
                <Star score={item.star} style={styles.star_style} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.restaurant_bottom_container}>
                  <Icon name="hand-coin-outline" size={15} color="gray" />
                  <Text style={styles.regular_text}>{item.price}</Text>
                </View>

                <View style={styles.restaurant_bottom_container}>
                  <Icon name="timer-sand" color={'gray'} size={15} />
                  <Text style={styles.regular_text}>20-30 min</Text>
                </View>
                <View style={styles.restaurant_bottom_container}>
                  <Icon name="bike-fast" size={15} color="gray" />
                  <Text style={styles.regular_text}>€0,00</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f3f3fb'},
  flex: {flex: 1},
  dot_style: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  pagination_style: {
    padding: 0,
    margin: -12,
    alignSelf: 'center',
    width: 55,
    height: 0,
  },
  headers: {
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '700',
    color: 'black',
  },
  textInput: {
    color: 'black',
    flex: 1,
    padding: 5,
    fontWeight: '700',
    marginLeft: 5,
    fontSize: 16,
  },
  upper_container: {
    flexDirection: 'row',
    margin: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  textInput_container: {
    backgroundColor: '#ececee',
    flex: 1,
    borderRadius: 20,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  filter_container: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3bf29',
    borderRadius: 20,
  },
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
  restaurant_text: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  restaurant_bottom_container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  star_style: {
    width: 90,
    height: 20,
  },
});
