import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity style={styles.categoryCard}>
      <Image
        style={styles.categoryImg}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.categoryTitle}>{title}</Text>      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    marginRight: 20,
  },
  categoryImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    textAlign: 'center',
    backgroundColor: '#770000',
    width: '100%',
    color: '#fff',
  },
});

export default CategoryCard;