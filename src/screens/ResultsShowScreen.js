import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import useResultId from '../hooks/useResultId';

const ResultShowScreen = ({navigation}) => {

    const id = navigation.getParam('id');
    const [result, errorMessage] = useResultId(id);

    if (!result) {
        return null;
    }

    return (
    <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return (
                    <Image 
                        style={{height:200, width:300}}
                        source={{ uri: item }}
                    />
                )
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultShowScreen;