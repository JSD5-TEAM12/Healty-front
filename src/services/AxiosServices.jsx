import axios from 'axios';

const AxiosServices = async (method, url, body) => {
    try {
        const token = localStorage.getItem('token'); // Fetch the token from local storage
        const headers = {
            authorization: token,
            'Content-Type': 'application/json',
        };
        console.log('token :>> ', token);

        //set url
        const response = await axios({
            method: method,
            url: url,
            data: body,
            headers:{
            authorization: `Bearer ${token}`
         }
        });

        console.log('response in axios services :>> ', response.data);

        return response.data;
    } catch (error) {
        const token = localStorage.getItem('token');
        console.log('token error :>> ', token);
        throw new Error(error.message);
    }
};

export default AxiosServices;