import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function RestaurentCard({ title, imgUrl }) {
  return (
    <TouchableOpacity style={styles.restaurentCard}>
      <Image
        style={styles.restaurentCardImg}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.restaurentCardTitle}>{title}</Text>      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  restaurentCard: {
    marginRight: 20,
  },
  restaurentCardImg: {
    width: 200,
    height: 120,
    borderRadius: 20,
  },
  restaurentCardTitle: {
    color: '#fff',
  },
});

export default RestaurentCard;


