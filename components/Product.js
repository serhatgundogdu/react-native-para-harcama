import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView ,Image, TouchableOpacity,Button,Alert,TextInput, TouchableWithoutFeedback  } from 'react-native';


function Product({product, total, money, basket, setBasket}) {
    const addtoSepet = () => {
		if(total + product.price > money){
			
			return alert('Yetersiz bakiye!!')
		}
		const checkBasket = basket.find(item => item.id === product.id)
		// ürün daha önce eklenmiş
		if (checkBasket) {
			checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
		} else {
			setBasket([...basket, {
				id: product.id,
				amount: 1,
			}])
		}
	}

    return ( 

        <TouchableOpacity onPress={addtoSepet} style={styles.item}>
            <Image style={{width:'100%',height:'100%'}} source={{uri: product.image}}></Image>
            <Text style={styles.itemprice}>{product.price}</Text> 
        </TouchableOpacity>

    )


}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'orange'
	},
	header: {
	  height: 50,
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center',
	  justifyContent: 'center',
	  position: 'relative'
	},
	txtdefault: {
	  color: 'white',
	  fontWeight: 'bold',
	  fontSize: 25
	},
	sepet:{
	  color: 'white',
	  fontWeight: 'bold',
	  fontSize: 15,
	  position: 'absolute',
	  right: 15
	},
	body: {
	  flex: 1,
	  backgroundColor: 'white',
	  padding: 5,
	  display: 'flex',
	  flexDirection: 'row',
	  flexWrap: 'wrap'
	},
	item: {
	  width: '30%',
	  height: 100,
	  borderRadius: 13,
	  backgroundColor: 'white',
	  shadowColor: "#000",
	  shadowOffset: {
		width: 0,
		height: 2,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 3.84,
  
	  elevation: 5,
	  marginRight: 10,
	  marginBottom: 10,
	  position: 'relative'
	},
	itemprice: {
	  position: 'absolute',
	  top: '50%',
	  left: '50%'
	},
  
	
  });

export default Product