import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CategoryCard from './CategoryCard';


function Categories() {
  return (
    <ScrollView horizontal>
      <Text style={styles.dummyText}>categories</Text>    
      <CategoryCard />  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  dummyText: {
    color: '#fff',
  },
});

export default Categories;