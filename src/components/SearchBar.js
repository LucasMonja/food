import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';


const SearchBar = ( { term, onTermChange, onTermSubmit } ) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.searchBar}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection:'row',
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        margin:10,
    },
    searchBar: {
        flex:1,
        fontSize:18,
    },
    iconStyle: {
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;