import axios from "axios";
import AxiosServices from "../../services/AxiosServices";

export const read = async (id) => {
    // return await axios.get('http://localhost:8050/activities/', id)
    console.log('id n function:>> ', id);
    const response = await AxiosServices('GET',`http://localhost:8050/activities/${id}`,{})
    console.log('response n function :>> ', response);
    return response;
}

// export const list = async () => {
//     return await axios.get('http://localhost:8050/activities')
// }

export const list = async (id) => {
    const response = await AxiosServices('GET',`http://localhost:8050/activity/${id}`,{})
    // console.log('response :>> ', response);
    return response;
}

export const create = async (data) => {
    // const token = localStorage.getItem('token')
    // console.log('auth :>> ', token);
    // return  response = await axios({
    //     method: 'POST',
    //     url: 'http://localhost:8050/activities',
    //     data: data,
    //     headers: {
    //         authorization:token
    //     },
    // });  
    console.log('data :>> ', data);

    const response = await AxiosServices('POST','http://localhost:8050/activities',data)
    console.log('response :>> ', response);
};

// export const del = async (id) => {
//     await axios.delete('http://localhost:8050/activities/' + id)
// }

export const del = async (id) => {
    const response = await AxiosServices('DELETE', 'http://localhost:8050/activities/' + id)
    console.log('response :>>', response)
}

// export const updated = async (id, data) => {
//     return await axios.put('http://localhost:8050/activities/' + id, data)
// }

export const updated = async ( id,data) => {
    const response = await AxiosServices('PUT', `http://localhost:8050/updateActivity${id}`, data)
    console.log('response :>>', response)
    return response
}