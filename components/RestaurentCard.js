import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';


function RestaurentCard({ 
  id,
  imgUrl,
  title, 
  rating,
  genre,
  address,
  short_description,
  dishes,
  lat,
  long
}) {
  return (
    <TouchableOpacity style={styles.restaurentCard}>
      <Image
        style={styles.restaurentCardImg}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.cardContentWrapper}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardRatingWrapper}>
          <ADIcon name="star" size={20} color="#00ccbb" />
          <Text style={styles.cardRating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  restaurentCard: {
    marginRight: 20,
    backgroundColor: '#666',
    borderRadius: 20,
  },
  restaurentCardImg: {
    width: 200,
    height: 130,
  },

  cardContentWrapper: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  cardRatingWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardRating: {
    marginLeft: 8,
    color: '#ccc',
    fontSize: 16,
  },
});

export default RestaurentCard;


