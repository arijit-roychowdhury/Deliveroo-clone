import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CategoryCard from './CategoryCard';


function Categories() {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={styles.container} >  
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 1'/>
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 2'/>
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 3'/>
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 4'/>
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 5'/>
      <CategoryCard imgUrl='https://reactnative.dev/img/tiny_logo.png' title='Testing 6'/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default Categories;