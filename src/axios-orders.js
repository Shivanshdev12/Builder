import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger20.firebaseio.com/'
});

export default instance;