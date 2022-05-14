import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something went wrong! Try again.')
        }
    }

    useEffect(() => {
        searchApi('meat')
    }, []);

    return [searchApi, results, errorMessage];
}