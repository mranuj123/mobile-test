import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import iceCoffeeImg from '@/assets/images/iced-coffee.png'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={iceCoffeeImg}
      style={styles.img}
      >
      <Text style={styles.text}>Coffe Shop</Text>

        </ImageBackground>
    </View>
  )
}

export default app

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    flexDirection:'column',
  },
  img:{
    height:'100%',
    width:'100%', 
    resizeMode:'cover',
    justifyContent:'center',
    flex:1

  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:"center",
    backgroundColor:'rgba(0,0,0,0.5)'
  }
  
})