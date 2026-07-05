import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (user) =>{
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        comsole.log('error while authenticating', error.message);        
    }
}