import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
       return await axios.post(`/api/add`,data);
    } catch(error){
        console.log('Error while calling add user api',error);
    }
}

export const getUsers = async() => {
    try {
       return await axios.get(`/api/all`);
    } catch(error) {
        console.log('Error while calling getUsers API',error);
    }
}

export const getUser = async(id) => {
    try {
        return await axios.get(`/api/${id}`);
    } catch(error) {
        console.log('Error while calling getUser Api',error);
    }
}

export const editUser = async(user, id) => {
    try {
        return await axios.post(`/api/${id}`,user);
    } catch(error) {
        console.log('Error while calling editUser Api',error);
    }
}

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`/api/${id}`);
    } catch(error) {
        console.log('Error while calling deleteuser api',error);
    }
}