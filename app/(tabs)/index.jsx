import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'

import iceCoffeeImg from '@/assets/images/iced-coffee.png'
import React from 'react'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={iceCoffeeImg}
      style={styles.img}
      >
      <Text style={styles.title}>Coffe Shop</Text>

      <Link style={{marginHorizontal:'auto'}} href="/contact" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>
      </Link>

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
  title:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:"center",
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120
  },
  link:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:"center",
    textDecorationLine:'underline',
    padding:4,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  button:{
    height:60,
    borderRadius:20,
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:"center",
    padding:4,
    backgroundColor:'rgba(0,0,0,0.5)'
  },

})