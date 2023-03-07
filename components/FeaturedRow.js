import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import RestaurentCard from './RestaurentCard';


function FeaturedRow({ id, title, description }) {
  return (
    <View style={styles.container}>

      <View style={styles.headingWrapper}>
        <View style={styles.heading}>
          <Text style={styles.featuredHeading}>{title}</Text>
          <Text style={styles.featuredDesc}>{description}</Text>
        </View>
        <View style={styles.arrowWrapper}>
          <ADIcon name="arrowright" size={25} color="#00ccbb" />
        </View>
      </View>
      
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      >
        {/* Restaurent Card */}
        <RestaurentCard 
        id={12}
        imgUrl='https://reactnative.dev/img/tiny_logo.png' 
        title='Biriyani'
        rating={4.3}
        genre="Moghlai"
        location="Ballygaunge"
        short_description="Testing description"
        dishes={[]}
        lat={20}
        long={30}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headingWrapper: {
    flexDirection: 'row',

  },
  heading: {
    flex: 1,
  },
  featuredHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  featuredDesc: {
    color: '#fff',
  }
});

export default FeaturedRow;