import React from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';


const ResultsList = ({title, results, navigation}) => {

    if (!results.length) {
        return null
    }

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={ () => navigation.navigate('Results', {id: item.id})}>
                            <ResultDetail restaurant={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
    },
});

export default withNavigation(ResultsList);