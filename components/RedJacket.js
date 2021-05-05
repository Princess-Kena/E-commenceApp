import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { Rating, AirbnbRating } from 'react-native-ratings';


class RedJacket extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
             <View style={styles.icons}>
            <TouchableOpacity><Ionicons name="ios-arrow-back-circle" size={35} color="grey" /></TouchableOpacity>
           <TouchableOpacity><View  style={styles.cart}><Ionicons name="ios-cart-outline" size={30} color= "blue"/>
           </View></TouchableOpacity>
                 </View> 
                 <TouchableOpacity>
                 <View style={styles.favorite}><MaterialIcons name="favorite-outline" size={30} color="blue" /></View>
                 </TouchableOpacity>
                <Image source={require('../assets/wjacket.jpg')} style={styles.image} />

                <View style={styles.textdetails}>
                    <Text style={styles.title}>Peach Woman Jacket</Text>
                    <Text>Review:
                        <Rating
                        type='star'
                        ratingCount={5}
                         imageSize={18}
                            
                       onFinishRating={this.ratingCompleted}
                        />
                    </Text>
                    <View style={styles.line}></View>
                    </View> 
                    <View>
                        <Text>
                        Our women's designer blazers, sportcoats,
                         leather jackets and topcoats exude timeless
                          style and effortless sophistication.
                        </Text>
                        </View> 
                        <View style={styles.desCont}>
                            <Text style={styles.description}>Material:9196 polyester, 996elastane</Text>
                        </View>
                        <View style={styles.containerSize}>
                            <View style={styles.size}><Text>XS</Text></View>
                            <View style={styles.size}><Text>S</Text></View>
                            <View style={styles.sizeOn}><Text>M</Text></View>
                            <View style={styles.size}><Text>L</Text></View>
                            <View style={styles.size}><Text>XL</Text></View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View  style={styles.priceCont}>
                            <Text style={styles.total}>Total amount</Text>
                            <Text style={styles.amount}>$110</Text>
                            </View>
                            <View  style={styles.cartContainer}>
                            <TouchableOpacity style={styles.button}><Text style={styles.adc}>Add to Cart</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
            </ScrollView>
        );
    }
}
const styles= StyleSheet.create({
 container:{
   margin:30,
   marginHorizontal:30
 },
 icons:{
     flexDirection:"row",
     marginVertical:10,
     display:'flex',
     justifyContent:'space-between',
     alignItems:'stretch'
 },
 favorite:
 {
     alignItems:'flex-end'
 },
 cart:{
    alignItems:'flex-end',
    justifyContent:'flex-end'
    
 },
 image:{
     height:300,
     width:250
 },
 textdetails:{
     marginVertical:20
 },
 title:{
     fontSize:25,
     fontWeight:'bold'
 },
 line:{
     height:5,
     width:50,
     backgroundColor:'blue',
     borderRadius:8,
     marginTop:5
 },
 description:{
     color:'blue',
     alignSelf:'flex-start',
     textAlign:'center'
     
 },
 desCont:{
     backgroundColor:'#e9ecf5',
     marginTop:10,
     height:40
 },
 containerSize:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginHorizontal:30,
     right:30


 },
 size:{
     height:35,
     width:35,
     backgroundColor:'#e9ecf5',
     alignItems:'center',
     justifyContent:'center',
     marginTop:20,
     borderRadius:8

 },
 sizeOn:{
    height:35,
    width:35,
    backgroundColor:'#5a63db',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:8

 },
 buttonContainer:{
     flexDirection:'row',
     backgroundColor:'#5a63db',
     marginTop:25,
     height:65,
     justifyContent:'space-between',
     borderRadius:10


 },
 priceCont:{
     justifyContent:'center',
     margin:25
 },
 button:{
     height:30,
     width:80,
     backgroundColor:'blue',
margin:20,
   borderRadius:6

 },
 adc:{
     justifyContent:'center',
     alignSelf:'center',
     color:'#fff',

 },
 total:{
     color:'white',

 },
 amount:{
     fontSize:25,
     fontWeight:'bold',
     color:'white'
 }
 
})

export default RedJacket;
