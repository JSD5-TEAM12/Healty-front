import axios from "axios";

export const read = async(id) => {
    return await axios.get('http://localhost:8050/activities/' , id )
}

export const list = async () => {
    return await axios.get('http://localhost:8050/activities')
}

export const create = async(data) => {
    await axios.post('http://localhost:8050/activities', data)
}

export const del = async(id) => {
    await axios.delete('http://localhost:8050/activities/'+ id )
}

export const updated = async(id,data) => {
    return await axios.put('http://localhost:8050/activities/'+ id,data)
}