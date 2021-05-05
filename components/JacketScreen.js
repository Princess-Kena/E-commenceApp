import React from 'react';
import {Text, ScrollView, FlatList, TouchableOpacity, TextInput, View, StyleSheet} from 'react-native';
import Jackets from '../components/Jackets'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import wjacket from '../assets/wjacket.jpg';
import j2 from '../assets/j2.jpg';
import j3 from '../assets/j3.jpg';
import j4 from '../assets/j4.jpg';


const JacketScreen = () => {
    const Jacket = [
        { ImgUrl: wjacket, name: 'Nice Jacket', price: '98' },
        { ImgUrl: j2, name: 'Polo Jacket', price: '80' },
        { ImgUrl: j3, name: 'Winter Jacket', price: '50' },
        { ImgUrl: j4, name: 'cotton Jacket', price: '158' }

    ]
    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity><View style={styles.arrow}><Ionicons name="ios-arrow-back-circle" size={40} color="grey" /></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.cart}><Ionicons name="ios-cart-outline" size={40} color="blue" />
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

            <FlatList
                data={Jacket}
                renderItem={({ item }) => {
                    return < Jackets name={item.name}
                        cost={item.price}
                        photo={item.ImgUrl}
                    />

                }
                }
                keyExtractor={(item) => item.price}
            />
        </ScrollView>
    );
}
const styles= StyleSheet.create({
    container:{
        
        marginTop:40
    },
    icons:{
        flexDirection:'row'
       
        
    },
    arrow:{
        
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

export default JacketScreen;
