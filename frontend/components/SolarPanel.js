import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const SolarPanel = ({ item }) => {
    const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("InfoPS",{item:item})} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/panneau.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{item.marque}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.wattage}>Capacity: {item.capacity}kW</Text>
        <Text style={styles.price}>Etat: {item.etat}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft:30 // added margin to the right
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    
  },
  detailsContainer: {
    flex: 2,
    marginLeft: 16,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  model: {
    fontSize: 18,
    marginBottom: 8,
  },
  wattage: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default SolarPanel;
