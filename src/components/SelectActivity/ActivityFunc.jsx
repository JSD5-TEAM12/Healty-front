import axios from "axios";
import AxiosServices from "../../services/AxiosServices";

export const read = async (id) => {
    console.log('id n function:>> ', id);
    const response = await AxiosServices('GET',`http://localhost:8050/activities/${id}`,{})
    console.log('response n function :>> ', response);
    return response;
}


export const list = async (id) => {
    const response = await AxiosServices('GET',`http://localhost:8050/activity/${id}`,{})
    return response;
}

export const create = async (data) => {
    const response = await AxiosServices('POST','http://localhost:8050/activities',data)
    console.log('response :>> ', response);
};

export const del = async (id) => {
    const response = await AxiosServices('DELETE', 'http://localhost:8050/activities/' + id)
    console.log('response :>>', response)
}


export const updated = async ( id,data) => {
    if(data) {
    console.log('activity :',id,data);
    const dataUpdated = {desc: data.updateDesc, type: data.updateType, date: data.updateDate, 
        duration: data.updateDuration }
    console.log('Data Update :>>',dataUpdated);
    const response = await AxiosServices('PUT', `http://localhost:8050/updateActivity/${id}`, dataUpdated)
    console.log('response :>>', response)
    return response
    }
}