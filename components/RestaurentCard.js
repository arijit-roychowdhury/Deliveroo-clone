import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ADIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';



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
        <View style={styles.cardMeta}>
          <View style={styles.cardMetaWrapper}>
            <ADIcon name="star" size={20} color="#00ccbb" />
            <Text style={styles.cardRating}>{rating}</Text>
          </View>
          <View style={styles.cardMetaWrapper}>
            <MIcon name="fastfood" size={20} color="#00ccbb" />
            <Text style={styles.cardGenre}>{genre}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  restaurentCard: {
    marginRight: 20,
    backgroundColor: '#333',
    borderRadius: 20,
  },
  restaurentCardImg: {
    width: 220,
    height: 130,
  },

  cardContentWrapper: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  cardMeta: {
    flexDirection: 'row',
  },
  cardMetaWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 15,
  },
  cardRating: {
    marginLeft: 8,
    color: '#ccc',
    fontSize: 16,
  },
  cardGenre: {
    marginLeft: 8,
    color: '#ccc',
    fontSize: 16,
  },
});

export default RestaurentCard;


