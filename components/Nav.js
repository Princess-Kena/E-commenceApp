import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { Rating, AirbnbRating } from 'react-native-ratings';


const Nav = () => {
    return (
    <View style={styles.container}>
         <View style={styles.icons}>
            <TouchableOpacity><View  style={styles.arrow}><Ionicons name="ios-arrow-back-circle" size={40} color="grey" /></View></TouchableOpacity>
           <TouchableOpacity><View style={styles.cart}><Ionicons name="ios-cart-outline" size={40} color= "blue"/>
           </View></TouchableOpacity>
                 </View> 
                 <View>
               <Text style={styles.title}>Women Jacket</Text>
                 </View>
                 <View style={styles.search}>
                     <TextInput style={styles.searchText} placeholder='Search Jackets'></TextInput>
                     <Text style={styles.filter}>Filter</Text>
                 </View>
              
    </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    },
    icons:{
        flexDirection:'row'
       
        
    },
    arrow:{
        right:10,
        borderRadius:100 / 2,
        backgroundColor:'#e4e6eb',

        
    },
    cart:{
        left:220,
        borderRadius:100 / 2,
        backgroundColor:'#e4e6eb',

    },
    title:{
        marginBottom:20,
        marginTop:20,
        fontSize:25,
        fontWeight:'bold'
    },
    search:{
        height:55,
        width:300,
        backgroundColor:'#f5f6fa',
        borderRadius:15,
        marginBottom:30,
        flexDirection:'row',
        
    },
    filter:{
        alignSelf:'stretch',
       left:150,
       marginTop:21
    },
    

})

export default Nav;
