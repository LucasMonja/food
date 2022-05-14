import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PbycJ2hGXu-8TzvV0izgGVJ2fMrkxQ57iGhmT5BRQw-rfHoeMHblSCeO5vIgg9Bbe9IAirDj0jfqv3DdNpBi9W1GcMOhqxMzgiVpMKZRHKRLOn4m6opRE0lSKBJ9YnYx'
    }
});

