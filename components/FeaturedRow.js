import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

function FeaturedRow({ id, title, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.featuredHeading}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  headingWrapper: {

  },
  featuredHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
});

export default FeaturedRow;