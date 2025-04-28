import {StyleSheet, View, Text,TouchableOpacity,Button} from 'react-native'
import {useState} from 'react'
export default function ProductCard(props) {
  const [count,setCount]=useState(0)
  const handleAdd = () =>
  {
    setCount(count+1)
  }
  const handleRemove = () =>
  {
    if(count>0)
    {
       setCount(count-1)
    }
  }
  return (
    <View style={styles.container}> 
      <View style={styles.infoBox}> 
        <Text style={styles.name}> {props.name} </Text>
        <Text style={styles.price}> {props.price} </Text>
        <TouchableOpacity onPress={handleAdd} style={[styles.button, {backgroundColor: 'green'}]}>
          <Text style={styles.buttonText}> Add to Cart </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemove} style={[styles.button, {marginTop: 10}, {backgroundColor: 'red'}]}>
          <Text style={styles.buttonText}> Remove from Cart </Text>
        </TouchableOpacity>
        <Text style={styles.numberOfItem}> Added {count} times </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    fontSize: 14,
    marginBottom: 15
  },
  infoBox: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    alignContent: 'flex-start'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  numberOfItem: {
    color: 'black',
    fontWeight: 'italic',
    marginTop: 10
  }
});