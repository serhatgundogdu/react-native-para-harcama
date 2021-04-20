import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import {useState, useEffect} from 'react';
import products from './products.json' 
import Product from './components/Product';
import { StyleSheet, Text, View, SafeAreaView ,Image, TouchableOpacity,Button,Alert,TextInput, TouchableWithoutFeedback  } from 'react-native';


export default function App() {
  const [money,setMoney] = useState(5000);
  const [basket,setBasket] = useState([]);
  const [total, setTotal] = useState(0)
  const [showBasket, setshowBasket] = useState(false)


  const showSepet = () => {
    setshowBasket(!showBasket)
  }

  const sepetiOnayla = () => {
    setTotal(0)
    setBasket([])
    setMoney(5000)
    setshowBasket(false)
  }

  useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtdefault}>{money-total} $</Text>
        <Text onPress={showSepet} style={styles.sepet}>Sepet({basket.reduce( (acc, item) => {
          return acc + item.amount
        }, 0)})</Text>
      </View>
      { !showBasket ? (
      <View style={styles.body}>
          {products.map(product => 
              ( 
                <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
              )
          ) }
      </View>
      ) : (
        <View style={{flex: 1,
          backgroundColor: 'white',
          padding: 5,
          display: 'flex',
          padding: 20}}>
        {basket.map(product => (
             <View key={product.id} style={{flexDirection: 'row'}} >
              <Text >{products.find(item => item.id === product.id).title}</Text>
              <Text style={{marginLeft: 'auto'}}>Alınan Ürün Sayısı: {product.amount}</Text>
             </View>
            )
          )}
          {basket.length > 0 && (
            <TouchableOpacity activeOpacity={0.8} onPress={sepetiOnayla}>
              <View style={{marginTop: 25, flexDirection: 'row', padding: 15 , alignItems:'center', borderRadius: 8, justifyContent: 'center', width: '100%', backgroundColor: 'orange' }}>
                <Text style={{color: 'white', fontWeight: '600'}}>Sepeti Onayla</Text>
            
              </View>
            </TouchableOpacity>       
          )}        
        </View>
      )

      }

      
    </SafeAreaView>
  );
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
    right: 15,
    lineHeight: 50
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