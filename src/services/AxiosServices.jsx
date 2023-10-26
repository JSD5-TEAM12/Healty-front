import axios from 'axios';

const AxiosServices = async (method, url, body) => {
    try {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        //set url
        const response = await axios({
            method: method,
            url: url,
            data: body,
            headers:{
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
         }
        });

        return response.data;
    } catch (error) {
        const token = localStorage.getItem('token');
        throw new Error(error.message);
    }
};

export default AxiosServices;