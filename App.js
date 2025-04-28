import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <ProductCard 
          name='Áo thun'
          price='199,000 VNĐ'
        />
        <ProductCard 
          name='Quần jean'
          price='199,700 VNĐ'
        />
        <ProductCard 
          name='Mũ'
          price='20,000 VNĐ'
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
