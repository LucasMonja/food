import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default (id) => {

    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')

    const getResult = async id => {

        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data);
        } catch (e) {
            setErrorMessage('Something went wrong! Try again.')
        }
    }

    useEffect(() => {
        getResult(id)
    }, []);

    return [result, errorMessage];
}