import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import SafeViewAndroid from "../util/shared/style/SafeViewAndroid";
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import ADIcon from 'react-native-vector-icons/AntDesign';

import Categories from "../components/Categories";
import FeaturedRow from '../components/FeaturedRow';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({      
      headerTitle: "Todo",
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.flexWrapper}>
          <Text style={styles.deliveryStatus}>Deliver Now!</Text>
          <View style={styles.locationDropdown}>
            <Text style={styles.locationStatus}>Current Location</Text>
            <MIcon name="keyboard-arrow-down" size={20} color="#00ccbb" />
          </View>          
        </View>
        <View style={styles.userWrapper}>
          <ADIcon name="user" size={25} color="#00ccbb" />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBoxWrapper}>
          <ADIcon name="search1" size={25} color="#00ccbb" />
          <TextInput style={styles.textInput} placeholder='Hello World!' keyboardType='default'/>
        </View>

        <View style={styles.userWrapper}>
          <ADIcon name="filter" size={25} color="#00ccbb" />
        </View>
      </View>


      {/* Body */}
      <ScrollView style={styles.bodyWrapper}>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow 
          id="5125"
          title="Offers near you!"
          description="Why not support your local restaurent tonight!"
        />

        <FeaturedRow 
          id="525"
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRow 
          id="125"
          title="Tasty Discounts"
          description="Your recent picks"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },


  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  flexWrapper: {
    flex: 1,
  },
  deliveryStatus: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 14,
  },
  locationDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationStatus: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 24,
    marginRight: 0,
  },
  userWrapper: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 20,
  },


  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchBoxWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },


  bodyWrapper: {
    flex: 1,
    backgroundColor: '#222',
  }
});

export default HomeScreen