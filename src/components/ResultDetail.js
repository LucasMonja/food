import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


const ResultDetail = ({ restaurant }) => {

    return (
        <View style={style.viewContainer}>
            <Image
                style={style.imageStye} 
                source={{ uri: restaurant.image_url }}
            />
            <Text style={style.nameStyle} >{restaurant.name}</Text>
            <Text style={style.reviewsStyle} >{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );

};

const style = StyleSheet.create({

    viewContainer: {
        margin:10,
        alignContent:'center',
        justifyContent:'center',
    },

    imageStye: {
        height:150,
        width:250,
        borderRadius:5,
    },

    nameStyle: {
        fontWeight:'bold',
        marginLeft:3,
    },

    reviewsStyle: {
        fontSize:12,
        marginLeft:3,
    },



});

export default ResultDetail