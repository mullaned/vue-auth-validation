import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://axios-demo-c85f3.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;