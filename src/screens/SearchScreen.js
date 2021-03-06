import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
 

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        
        <View style={styles.background}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit= {() => searchApi(term)}
            />
            <ScrollView >
                <ResultsList title='Cost Effective' results={filterResultsByPrice('$')} />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
                <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
                <ResultsList title='Rich As F*ck' results={filterResultsByPrice('$$$$')} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:'white',
        flex:1,
    }
});

export default SearchScreen;