import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


const Jackets = ({ photo, name, cost }) => {
    return (
        <View style={styles.container}>
               <View style={styles.imageContainer}>
                 <Image source= {photo} style={styles.image} />
                 <View  style={styles.detailText}>
                     <TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                    <Rating
                        type='star'
                        ratingCount={5}
                         imageSize={14}    
                        />
                        <Text style={styles.price}>${cost}</Text>
                 </View>
                 </View>
                 </View>
    );
}
const styles = StyleSheet.create({
    container:{
        right:20,
        margin:20
        
    },
    imageContainer:{
        flexDirection:'row',
    
    },
    image:{
        height:210,
        width:180,
       
       
        
    },
    detailText:{
        marginTop:50,
        
        
    },
    name:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:10,
        left:7
    },
    price:{
        fontSize:25,
        fontWeight:'bold',
        marginTop: 20,
       left:10
    }

})

export default Jackets;
